import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle } from 'lucide-react';
import InputField from '../components/ui/InputField';
import { encode } from '@/utils/utils';

const PartnershipPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Submit form data using Netlify Forms
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "partnership-form", ...formData })
      })
        .then(() => alert("Thank You for contacting us! We will get back to you soon."))
        .catch(error => alert(error));
        
    setFormData({ company: '', contactPerson: '', email: '', phone: '', country: '', message: '' });
  };

  const partnershipPoints = [
      t('partnershipPage.point1'),
      t('partnershipPage.point2'),
      t('partnershipPage.point3'),
      t('partnershipPage.point4'),
      t('partnershipPage.point5'),
  ];

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('partnershipPage.title')}</h1>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">{t('partnershipPage.intro')}</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Why Partner With Us */}
            <div className="bg-brand-gray p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-brand-dark mb-6">{t('partnershipPage.whyPartnerTitle')}</h2>
                <ul className="space-y-4">
                    {partnershipPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="text-brand-green flex-shrink-0 mt-1 me-3" size={20} />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">{t('partnershipPage.formIntro')}</h2>
                <form onSubmit={handleSubmit} name="partnership-form" className="space-y-4">
                    <InputField label={t('partnershipPage.form_company')} id="company" type="text" value={formData.company} onChange={handleChange} required />
                    <InputField label={t('partnershipPage.form_contact_person')} id="contactPerson" type="text" value={formData.contactPerson} onChange={handleChange} required />
                    <InputField label={t('partnershipPage.form_email')} id="email" type="email" value={formData.email} onChange={handleChange} required />
                    <InputField label={t('partnershipPage.form_phone')} id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                    <InputField label={t('partnershipPage.form_country')} id="country" type="text" value={formData.country} onChange={handleChange} required />
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('partnershipPage.form_message')}</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"></textarea>
                    </div>
                    <input type="hidden" name="form-name" value="partnership-form" />
                    <button type="submit" className="w-full bg-brand-gold text-white font-semibold py-3 rounded-md text-lg hover:bg-opacity-90 transition-colors duration-300">
                        {t('partnershipPage.form_submit')}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
