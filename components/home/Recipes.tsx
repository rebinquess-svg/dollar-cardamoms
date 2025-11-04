import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { recipes } from '../../data/content';

const Recipes: React.FC = () => {
  const { language, t } = useLanguage();
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{t('recipesCta.title')}</h2>
          <p className="max-w-3xl mx-auto text-gray-600">{t('recipesCta.text')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map(recipe => (
            <Link key={recipe.id} to="/recipes-blog" className="group block bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={recipe.image} alt={recipe.title[language]} loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors duration-300">{recipe.title[language]}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/recipes-blog"
            className="bg-brand-green text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-brand-green-light transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {t('recipesCta.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Recipes;