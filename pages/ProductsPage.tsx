import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
    
  const gradesData = [
    { size: t('grades.grade1_size'), title: t('grades.grade1_title'), text: t('grades.grade1_text'), image: '/6mm cardamom.jpeg' },
    { size: t('grades.grade2_size'), title: t('grades.grade2_title'), text: t('grades.grade2_text'), image: '/7mm cardamom.jpg' },
    { size: t('grades.grade3_size'), title: t('grades.grade3_title'), text: t('grades.grade3_text'), image: '/8mm cardamom.jpg' },
    { size: t('grades.grade4_size'), title: t('grades.grade4_title'), text: t('grades.grade4_text'), image: '/8mm+ cardamom.jpg' },
  ];

  return (
    <div className="bg-brand-gray py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('productsPage.title')}</h1>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">{t('productsPage.intro')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {gradesData.map((grade, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row items-center">
                    <img 
                      src={grade.image} 
                      alt={`${grade.title} - ${grade.size} cardamom`} 
                      loading="lazy"
                      className="w-full sm:w-1/3 h-48 sm:h-full object-cover"
                    />
                    <div className="p-6 flex-grow">
                        <span className="inline-block bg-brand-gold text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">{grade.size}</span>
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">{grade.title}</h3>
                        <p className="text-gray-600">{grade.text}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
