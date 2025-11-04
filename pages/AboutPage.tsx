import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('aboutPage.title')}</h1>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <img 
                  src="/aboutus.jpg" 
                  alt="Harvesting fresh cardamom pods" 
                  loading="lazy"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
            </div>
            <div className="md:w-1/2 text-lg text-gray-700 space-y-6">
                <p>{t('aboutPage.p1')}</p>
                <p>{t('aboutPage.p2')}</p>
                <p>{t('aboutPage.p3')}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
