import { useState, useEffect } from 'react';

export const usePathname = () => {
  const [pathname, setPathname] = useState(
    window.location.hash.substring(1) || 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setPathname(window.location.hash.substring(1) || 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return pathname;
};