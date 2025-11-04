import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { recipes } from '../data/content';

const RecipesBlogPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('recipesBlogPage.title')}</h1>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">{t('recipesBlogPage.intro')}</p>
        </div>

        <div className="space-y-16">
          {recipes.map(recipe => (
            <div key={recipe.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-brand-gray p-8 rounded-lg shadow-sm">
              <img 
                src={recipe.image} 
                alt={recipe.title[language]} 
                loading="lazy"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-brand-dark">{recipe.title[language]}</h2>
                <p className="text-gray-700">{recipe.description[language]}</p>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">{t('recipesBlogPage.ingredientsTitle')}</h3>
                  <ul className="list-disc ps-6 space-y-1 text-gray-600">
                    {recipe.ingredients[language].map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">{t('recipesBlogPage.preparationTitle')}</h3>
                   <ol className="list-decimal ps-6 space-y-1 text-gray-600">
                    {recipe.preparation[language].map((item, index) => <li key={index}>{item}</li>)}
                  </ol>
                </div>
                {recipe.servingTip && (
                  <p className="text-sm italic text-gray-500 border-s-4 border-brand-gold ps-4 py-2">{recipe.servingTip[language]}</p>
                )}
                 {recipe.note && (
                  <p className="text-sm italic text-gray-500 border-s-4 border-brand-gold ps-4 py-2">{recipe.note[language]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesBlogPage;