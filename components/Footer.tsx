import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage(); // ensure we get current language if available

  // 👇 Localized copyright text with Mi8y link (HTML string)
  const localizedCopyright = {
    en: `© ${new Date().getFullYear()} Dollar Cardamoms. All Rights Reserved. Built with ❤️ by <a href="https://mi8y.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-brand-green-light font-semibold">Mi8y Technologies</a>.`,
    ar: `© ${new Date().getFullYear()} دولار كاردامومز. جميع الحقوق محفوظة. تم التصميم بحب بواسطة <a href="https://mi8y.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-brand-green-light font-semibold">Mi8y Technologies</a>.`
  };

  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="space-y-4 flex-1">
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.contactInfo')}</h3>
            <p className="flex items-start">
              <MapPin size={20} className="flex-shrink-0 mt-1 me-3 text-brand-green-light" />
              <span>{t('footer.address')}</span>
            </p>
            <p className="flex items-center">
              <Mail size={18} className="me-3 text-brand-green-light" />
              <a href={`mailto:${t('footer.email_value')}`} className="hover:text-white transition-colors">{t('footer.email_value')}</a>
            </p>
            <p className="flex items-center">
              <Phone size={18} className="me-3 text-brand-green-light" />
              <a href={`tel:${t('footer.phone_value')}`} className="hover:text-white transition-colors">{t('footer.phone_value')}</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-semibold text-white mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/recipes-blog" className="hover:text-white transition-colors">{t('nav.recipes')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
            </ul>
          </div>
        </div>
        
        {/* ✅ Copyright with rendered HTML */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            dangerouslySetInnerHTML={{ __html: localizedCopyright[lang as 'en' | 'ar'] || localizedCopyright.en }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
