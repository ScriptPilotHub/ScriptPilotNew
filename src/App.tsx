import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { Services } from './components/pages/Services';
import { About } from './components/pages/About';
import { FAQ } from './components/pages/FAQ';
import { Contact } from './components/pages/Contact';
import { PaymentPortal } from './components/pages/PaymentPortal';
import { usePathname } from './hooks/usePathname';

function App() {
  const currentRoute = usePathname();

  // Add dark mode support
  React.useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const renderPage = () => {
    const baseRoute = currentRoute.split('/')[0];

    switch (baseRoute) {
      case 'home':
      case '':
        return <Home />;
      case 'services':
      case 'web-design':
        return <Services />;
      case 'about':
        return <About />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'payment-portal':
        return <PaymentPortal />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Add React import
import React from 'react';

export default App;