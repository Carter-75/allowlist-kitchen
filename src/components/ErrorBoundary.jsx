import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Page error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
          <AlertTriangle className="text-red-700" size={36} />
          <h1 className="mt-4 font-serif text-3xl font-bold">Something went wrong</h1>
          <p className="mt-2 max-w-md text-stone-600">This page failed to load. The meals themselves are fine; head back home and pick another one.</p>
          <Link to="/" className="mt-6 rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900" onClick={() => this.setState({ hasError: false })}>
            Back to the meals
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
