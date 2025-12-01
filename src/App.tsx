import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { Services } from './components/pages/Services';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { ClientPortal } from './components/pages/ClientPortal';
import { usePathname } from './hooks/usePathname';

function App() {
  const { pathname: currentRoute } = usePathname();

  const renderPage = () => {
    switch (currentRoute) {
      case '':
        return <Home />;
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'payment-portal':
        return <ClientPortal />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;