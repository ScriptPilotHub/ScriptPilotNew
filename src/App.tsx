import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { Services } from './components/pages/Services';
import { Process } from './components/pages/Process';
import { Pricing } from './components/pages/Pricing';
import { Contact } from './components/pages/Contact';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0A0A0A' }}>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;