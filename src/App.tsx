import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { Services } from './components/pages/Services';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { usePathname } from './hooks/usePathname';

function App() {
  const currentRoute = usePathname();

  const renderPage = () => {
    switch (currentRoute) {
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
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