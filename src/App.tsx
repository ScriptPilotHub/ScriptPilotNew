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

  const renderPage = () => {
    const baseRoute = currentRoute.split('/')[0];

    switch (baseRoute) {
      case 'home':
      case '':
        return <Home />;
      case 'services':
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