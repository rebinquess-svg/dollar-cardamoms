import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Leaf, ShieldCheck, ListChecks, PackageCheck, Star } from 'lucide-react';

const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const points = [
    { icon: <Leaf className="text-brand-gold" />, text: t('whyus.point1') },
    { icon: <ShieldCheck className="text-brand-gold" />, text: t('whyus.point2') },
    { icon: <ListChecks className="text-brand-gold" />, text: t('whyus.point3') },
    { icon: <PackageCheck className="text-brand-gold" />, text: t('whyus.point4') },
    { icon: <Star className="text-brand-gold" />, text: t('whyus.point5') },
  ];

  return (
    <section id="why-us" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/whychooseus.jpg"
              alt="Cardamom Plantation in Kerala"
              loading="lazy"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">{t('whyus.title')}</h2>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 me-4">{point.icon}</div>
                  <p className="text-gray-700 text-lg">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;