import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

const PartnershipCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="partnership-cta" className="py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://source.unsplash.com/1920x1080/?gulf,market,spices')" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black/60 py-16 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('partnershipCta.title')}</h2>
        <p className="max-w-2xl mx-auto text-gray-200 mb-8">{t('partnershipCta.text')}</p>
        <Link 
          to="/partnership"
          className="bg-brand-gold text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          {t('partnershipCta.cta')}
        </Link>
      </div>
    </section>
  );
};

export default PartnershipCTA;