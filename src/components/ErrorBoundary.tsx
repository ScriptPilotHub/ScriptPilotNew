import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Code } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="text-center max-w-md px-6">
            <Code size={64} style={{ color: '#EF4444', margin: '0 auto 24px' }} />
            <h1 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Something went wrong
            </h1>
            <p className="mb-6" style={{ color: '#808080' }}>
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 font-semibold"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
