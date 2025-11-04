
import React, { ReactNode } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Sprout, Hand, Package, Ship } from 'lucide-react';

interface JourneyStepProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ icon, title, text }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-brand-green-light text-white p-4 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-brand-dark">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const Journey: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: <Sprout size={32} />, title: t('journey.step1_title'), text: t('journey.step1_text') },
    { icon: <Hand size={32} />, title: t('journey.step2_title'), text: t('journey.step2_text') },
    { icon: <Package size={32} />, title: t('journey.step3_title'), text: t('journey.step3_text') },
    { icon: <Ship size={32} />, title: t('journey.step4_title'), text: t('journey.step4_text') },
  ];

  return (
    <section id="journey" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{t('journey.title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <JourneyStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
