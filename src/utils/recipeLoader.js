// Utility to load recipe data dynamically.
// All recipe data lives in the aggregated JSON files referenced from
// public/data/recipes/recipe-categories.json. There are no per-recipe files.

const CATEGORY_DATA_PATH = '/data/recipes/recipe-categories.json';
let categoriesCache = null;
const jsonCache = new Map();

const fetchJSONWithCache = async (path) => {
  if (!path) {
    return null;
  }

  if (!jsonCache.has(path)) {
    const promise = (async () => {
      const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/';
      const candidates = [];
      // original path
      candidates.push(path);
      // base + path (for apps deployed under a subpath)
      if (path.startsWith('/')) {
        candidates.push(base.replace(/\/$/, '') + path);
      } else {
        candidates.push(base.replace(/\/$/, '') + '/' + path);
        candidates.push('/' + path);
      }

      let lastError;
      for (const url of candidates) {
        try {
          const response = await fetch(url, { cache: 'no-store' });
          if (!response.ok) {
            lastError = new Error(`Request failed with status ${response.status}`);
            continue;
          }
          return await response.json();
        } catch (err) {
          lastError = err;
        }
      }
      throw lastError || new Error(`Failed to load ${path}`);
    })().catch((error) => {
      console.error(`Failed to load data from ${path}:`, error);
      jsonCache.delete(path);
      throw error;
    });

    jsonCache.set(path, promise);
  }

  return jsonCache.get(path);
};

const fetchCategories = async () => {
  if (categoriesCache) {
    return categoriesCache;
  }

  try {
    const data = await fetchJSONWithCache(CATEGORY_DATA_PATH);
    categoriesCache = Array.isArray(data) ? data : [];
  } catch (error) {
    categoriesCache = [];
  }

  return categoriesCache;
};

const findCategoryById = async (categoryId) => {
  const categories = await fetchCategories();
  return categories.find((category) => category.id === categoryId) || null;
};

const replaceCountInDescription = (description, total) => {
  if (!description || typeof total !== 'number' || Number.isNaN(total)) {
    return description;
  }

  return /\d+/.test(description)
    ? description.replace(/\d+/, total.toString())
    : description;
};

export const loadRecipeCategories = async () => {
  try {
    const categories = await fetchCategories();

    if (!Array.isArray(categories) || categories.length === 0) {
      return [];
    }

    const enrichedCategories = await Promise.all(
      categories.map(async (category) => {
        if (category.comingSoon || !category?.data?.itemsPath) {
          return category;
        }

        try {
          const items = await fetchJSONWithCache(category.data.itemsPath);
          if (Array.isArray(items)) {
            return {
              ...category,
              totalRecipes: items.length,
              description: replaceCountInDescription(category.description, items.length)
            };
          }
        } catch (error) {
          // Error already logged inside fetchJSONWithCache
        }

        return category;
      })
    );

    return enrichedCategories;
  } catch (error) {
    console.error('Failed to load recipe categories:', error);
    return [];
  }
};

export const loadRecipesByCategory = async (categoryId) => {
  const category = await findCategoryById(categoryId);
  if (!category || !category.data) {
    return { base: null, recipes: [] };
  }

  try {
    const [baseData, items] = await Promise.all([
      category.data.basePath ? fetchJSONWithCache(category.data.basePath) : Promise.resolve(null),
      category.data.itemsPath ? fetchJSONWithCache(category.data.itemsPath) : Promise.resolve([])
    ]);

    return {
      base: baseData,
      recipes: Array.isArray(items) ? items : []
    };
  } catch (error) {
    // errors are already logged inside fetchJSONWithCache
    return { base: null, recipes: [] };
  }
};

export const loadSingleRecipe = async (categoryId, recipeId) => {
  const numericId = Number(recipeId);
  const { base, recipes } = await loadRecipesByCategory(categoryId);
  const recipe = (recipes || []).find(r => Number(r.id) === numericId) || null;
  return { base, recipe };
};

// Real totals computed from the recipe data itself (used for the home page
// stats so the numbers shown always match the collection).
export const getRecipeStats = async () => {
  const categories = await loadRecipeCategories();
  const activeCategories = categories.filter(c => !c.comingSoon);

  let totalRecipes = 0;
  let proteinSum = 0;
  let proteinCount = 0;

  await Promise.all(
    activeCategories.map(async (category) => {
      const { recipes } = await loadRecipesByCategory(category.id);
      totalRecipes += recipes.length;
      recipes.forEach((recipe) => {
        const protein = recipe?.nutrition?.perServingProtein;
        if (typeof protein === 'number' && !Number.isNaN(protein)) {
          proteinSum += protein;
          proteinCount += 1;
        }
      });
    })
  );

  return {
    totalRecipes,
    categoryCount: activeCategories.length,
    avgProtein: proteinCount > 0 ? Math.round((proteinSum / proteinCount) * 10) / 10 : null
  };
};

export const searchAllRecipes = async (query) => {
  if (!query || typeof query !== 'string' || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const categories = await loadRecipeCategories();
  const activeCategories = categories.filter(c => !c.comingSoon);

  const allResults = await Promise.all(
    activeCategories.map(async (category) => {
      try {
        const { recipes } = await loadRecipesByCategory(category.id);
        return (recipes || []).map(recipe => ({
          ...recipe,
          categoryId: category.id,
          categoryTitle: category.title
        }));
      } catch (err) {
        return [];
      }
    })
  );

  const flatRecipes = allResults.flat();

  return flatRecipes.filter(recipe => {
    const nameMatch = recipe.name?.toLowerCase().includes(searchTerm);
    const ingredientMatch = recipe.ingredients?.some(ing => ing.toLowerCase().includes(searchTerm));
    const instructionMatch = recipe.instructions?.some(inst => inst.toLowerCase().includes(searchTerm));

    return nameMatch || ingredientMatch || instructionMatch;
  });
};
