import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToGrades = () => {
    document.getElementById('grades')?.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
        poster="/poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 text-center px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wider drop-shadow-md mb-8">
          {t('hero.subtitle')}
        </p>
        <button
          onClick={scrollToGrades}
          className="bg-brand-gold text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;