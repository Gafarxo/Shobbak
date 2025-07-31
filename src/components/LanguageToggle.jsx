import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ar');

  useEffect(() => {
    // Check for stored language preference
    const storedLanguage = localStorage.getItem('shibbak-language');
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage);
      applyLanguage(storedLanguage);
    }
  }, []);

  const applyLanguage = (language) => {
    const html = document.documentElement;
    
    if (language === 'en') {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      document.body.style.fontFamily = "'Inter', 'Roboto', sans-serif";
    } else {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      document.body.style.fontFamily = "'Noto Sans Arabic', 'Cairo', sans-serif";
    }
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    setCurrentLanguage(newLanguage);
    localStorage.setItem('shibbak-language', newLanguage);
    applyLanguage(newLanguage);
    
    // Reload the page to apply language changes
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
      title={currentLanguage === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Globe className="w-4 h-4 text-gray-600" />
      <span className="text-gray-700">
        {currentLanguage === 'ar' ? 'العربية' : 'English'}
      </span>
      <span className="text-gray-400">|</span>
      <span className="text-gray-500 text-xs">
        {currentLanguage === 'ar' ? 'EN' : 'عر'}
      </span>
    </button>
  );
};

export default LanguageToggle;

