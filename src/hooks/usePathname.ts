import { useState, useEffect } from 'react';

export const usePathname = () => {
  const [pathname, setPathname] = useState('');

  const navigateTo = (path: string) => {
    const newPath = path === 'home' ? '' : path;
    setPathname(newPath);
    window.history.pushState({}, '', newPath === '' ? '/' : `/${newPath}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Get current path from URL
    const currentPath = window.location.pathname === '/' ? '' : window.location.pathname.substring(1);
    setPathname(currentPath);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname === '/' ? '' : window.location.pathname.substring(1);
      setPathname(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { pathname, navigateTo };
};