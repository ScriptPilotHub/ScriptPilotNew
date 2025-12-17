import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Landing } from './components/pages/Landing';
import { Login } from './components/pages/Login';
import { Dashboard } from './components/pages/Dashboard';
import { ScriptBuilder } from './components/pages/ScriptBuilder';
import { ScriptLibrary } from './components/pages/ScriptLibrary';
import { Usage } from './components/pages/Usage';
import { Upgrade } from './components/pages/Upgrade';

function AppContent() {
  const { user, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
            style={{ borderColor: '#FFFFFF' }}
          />
          <p style={{ color: '#808080' }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (showLogin) {
      return <Login />;
    }
    return <Landing onGetStarted={() => setShowLogin(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'builder':
        return <ScriptBuilder onNavigate={setCurrentPage} />;
      case 'library':
        return <ScriptLibrary onNavigate={setCurrentPage} />;
      case 'usage':
        return <Usage onNavigate={setCurrentPage} />;
      case 'upgrade':
        return <Upgrade onNavigate={setCurrentPage} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return <>{renderPage()}</>;
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;