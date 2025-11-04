import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  dir: 'ltr' | 'rtl';
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const GULF_LOCALES = ['ar-AE', 'ar-SA', 'ar-QA', 'ar-OM', 'ar-KW', 'ar-BH', 'ar-IQ'];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const browserLang = navigator.language;
    return GULF_LOCALES.includes(browserLang) || browserLang.startsWith('ar') ? 'ar' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
  };
  
  // FIX: Explicitly type `dir` to match the `LanguageContextType` interface.
  // This resolves the type error where `dir` was inferred as a generic `string`.
  const dir: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';

  const contextValue = {
    language,
    toggleLanguage,
    dir,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className={language === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
