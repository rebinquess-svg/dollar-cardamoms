import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface GradeCardProps {
  size: string;
  title: string;
  text: string;
  image: string;
}

const GradeCard: React.FC<GradeCardProps> = ({ size, title, text, image }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={`${title} - ${size} cardamom pods`} loading="lazy" className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="inline-block bg-brand-gold text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">{size}</span>
      <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const Grades: React.FC = () => {
  const { t } = useLanguage();

  const gradesData = [
    { size: t('grades.grade1_size'), title: t('grades.grade1_title'), text: t('grades.grade1_text'), image: '/6mm cardamom.jpeg' },
    { size: t('grades.grade2_size'), title: t('grades.grade2_title'), text: t('grades.grade2_text'), image: '/7mm cardamom.jpg' },
    { size: t('grades.grade3_size'), title: t('grades.grade3_title'), text: t('grades.grade3_text'), image: '/8mm cardamom.jpg' },
    { size: t('grades.grade4_size'), title: t('grades.grade4_title'), text: t('grades.grade4_text'), image: '/8mm+ cardamom.jpg' },
  ];

  return (
    <section id="grades" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{t('grades.title')}</h2>
          <p className="max-w-3xl mx-auto text-gray-600">{t('grades.intro')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gradesData.map((grade, index) => (
            <GradeCard key={index} {...grade} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grades;