import { useEffect, useState } from 'react';

/**
 * Hook para obter o basePath dinamicamente
 * Necessário para funcionar corretamente no GitHub Pages com export estático
 */
export function useBasePath(): string {
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Detecta o basePath a partir da URL atual
      const path = window.location.pathname;
      if (path.startsWith('/site_adv')) {
        setBasePath('/site_adv');
      } else {
        setBasePath('');
      }
    }
  }, []);
  
  return basePath;
}

