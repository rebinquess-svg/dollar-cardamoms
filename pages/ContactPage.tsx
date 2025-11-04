import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin } from 'lucide-react';
import InputField from '../components/ui/InputField';
import { encode } from '@/utils/utils';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({...prev, [id]: value}));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submit form data using Netlify Forms
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...formData })
      })
        .then(() => alert("Thank You for contacting us! We will get back to you soon."))
        .catch(error => alert(error));

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-brand-gray py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('contactPage.title')}</h1>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">{t('contactPage.intro')}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-xl">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark">{t('footer.contactInfo')}</h2>
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <MapPin size={24} className="text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">{t('footer.address_label')}</h3>
                <p className="text-gray-600">{t('footer.address')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <Mail size={24} className="text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">{t('footer.email_label')}</h3>
                <a href={`mailto:${t('footer.email_value')}`} className="text-gray-600 hover:text-brand-green">{t('footer.email_value')}</a>
              </div>
            </div>
             <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <Phone size={24} className="text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">{t('footer.phone_label')}</h3>
                <a href={`tel:${t('footer.phone_value')}`} className="text-gray-600 hover:text-brand-green">{t('footer.phone_value')}</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} name="contact-form" className="space-y-4">
            <InputField label={t('contactPage.form_name')} id="name" type="text" value={formData.name} onChange={handleChange} required />
            <InputField label={t('contactPage.form_email')} id="email" type="email" value={formData.email} onChange={handleChange} required />
            <InputField label={t('contactPage.form_phone')} id="phone" type="tel" value={formData.phone} onChange={handleChange} />
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contactPage.form_message')}</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green" required></textarea>
            </div>
            <input type="hidden" name="form-name" value="contact-form" />
            <button type="submit" className="w-full bg-brand-green text-white font-semibold py-3 rounded-md text-lg hover:bg-brand-green-light transition-colors duration-300">
                {t('contactPage.form_submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
