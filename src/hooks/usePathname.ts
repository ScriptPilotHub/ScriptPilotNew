import { useState, useEffect } from 'react';

export const usePathname = () => {
  const [pathname, setPathname] = useState('home');

  const navigateTo = (path: string) => {
    setPathname(path);
    // Update URL without hashtag
    window.history.pushState({}, '', path === 'home' ? '/' : `/${path}`);
  };

  useEffect(() => {
    // Get current path from URL
    const currentPath = window.location.pathname.substring(1) || 'home';
    setPathname(currentPath);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || 'home';
      setPathname(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { pathname, navigateTo };
};