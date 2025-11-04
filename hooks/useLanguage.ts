
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { content } from '../data/content';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  const t = (key: string) => {
    const keys = key.split('.');
    let result = content;
    for (const k of keys) {
      if (result[k]) {
        result = result[k];
      } else {
        return key; // Return key if not found
      }
    }
    return result[context.language] || key;
  };

  return { ...context, t };
};
