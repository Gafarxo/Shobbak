import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    faq: 'الأسئلة الشائعة',
    signin: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    signout: 'تسجيل الخروج',
    
    // Homepage
    welcomeTitle: 'مرحباً بك في شباك',
    welcomeSubtitle: 'نافذتك الرقمية لتسهيل استخراج الوثائق الحكومية',
    welcomeDescription: 'احصل على وثائقك الرسمية بسهولة وأمان من خلال منصة شباك الرقمية',
    startNow: 'ابدأ الآن',
    browseServices: 'تصفح الخدمات',
    learnMore: 'تعرف على المزيد',
    
    // Services
    availableServices: 'الخدمات المتاحة',
    servicesDescription: 'اختر الوزارة أو الجهة الحكومية للحصول على الخدمة المطلوبة',
    publicServices: 'مجمع خدمات الجمهور',
    publicServicesDesc: 'خدمات الوثائق الرسمية والهوية الوطنية',
    healthMinistry: 'وزارة الصحة',
    healthMinistryDesc: 'الخدمات الصحية والشهادات الطبية',
    educationMinistry: 'وزارة التعليم',
    educationMinistryDesc: 'الشهادات الأكاديمية والخدمات التعليمية',
    chooseService: 'اختر هذه الخدمة',
    comingSoon: 'قريباً',
    notAvailable: 'غير متاح حالياً',
    
    // Features
    whyChoose: 'لماذا تختار شباك؟',
    featuresDescription: 'نوفر لك تجربة متميزة في الحصول على الخدمات الحكومية',
    secureReliable: 'آمن وموثوق',
    secureDesc: 'حماية عالية لبياناتك الشخصية',
    fastEfficient: 'سريع وفعال',
    fastDesc: 'معالجة سريعة للطلبات',
    customerService: 'خدمة العملاء',
    customerServiceDesc: 'دعم فني متاح على مدار الساعة',
    easyToUse: 'سهل الاستخدام',
    easyToUseDesc: 'واجهة بسيطة وسهلة التنقل',
    
    // Footer
    quickLinks: 'روابط سريعة',
    contactUs: 'تواصل معنا',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    address: 'العنوان',
    copyright: 'جميع الحقوق محفوظة',
    
    // Common
    loading: 'جاري التحميل...',
    submit: 'إرسال',
    cancel: 'إلغاء',
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    confirm: 'تأكيد',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    search: 'بحث',
    filter: 'تصفية',
    sort: 'ترتيب',
    
    // About Us
    aboutUsTitle: 'من نحن',
    aboutUsSubtitle: 'نافذتك الرقمية للخدمات الحكومية - نسهل عليك الوصول لجميع الخدمات الحكومية من مكان واحد',
    ourMission: 'رسالتنا',
    ourVision: 'رؤيتنا',
    ourValues: 'قيمنا الأساسية',
    
    // Contact Us
    contactUsTitle: 'اتصل بنا',
    contactUsSubtitle: 'نحن هنا لمساعدتك - تواصل معنا في أي وقت وسنكون سعداء للرد على استفساراتك',
    sendMessage: 'أرسل لنا رسالة',
    fullName: 'الاسم الكامل',
    phoneNumber: 'رقم الهاتف',
    inquiryType: 'نوع الاستفسار',
    message: 'الرسالة',
    sendMessageBtn: 'إرسال الرسالة',
    
    // FAQ
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'ابحث عن إجابات لأكثر الأسئلة شيوعاً حول منصة شباك وخدماتها',
    searchFaq: 'ابحث في الأسئلة الشائعة...',
    browseByCategory: 'تصفح حسب الفئة',
    allQuestions: 'جميع الأسئلة',
    searchResults: 'نتائج البحث',
    noResults: 'لم نجد أي نتائج',
    clearSearch: 'مسح البحث',
    stillNeedHelp: 'لم تجد ما تبحث عنه؟',
    stillNeedHelpDesc: 'إذا لم تجد إجابة لسؤالك في الأسئلة الشائعة، فريق الدعم لدينا جاهز لمساعدتك'
  },
  
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    contact: 'Contact Us',
    faq: 'FAQ',
    signin: 'Sign In',
    signup: 'Sign Up',
    signout: 'Sign Out',
    
    // Homepage
    welcomeTitle: 'Welcome to Shibbak',
    welcomeSubtitle: 'Your Digital Gateway to Government Documents',
    welcomeDescription: 'Get your official documents easily and securely through the Shibbak digital platform',
    startNow: 'Start Now',
    browseServices: 'Browse Services',
    learnMore: 'Learn More',
    
    // Services
    availableServices: 'Available Services',
    servicesDescription: 'Choose the ministry or government entity to access the required service',
    publicServices: 'Public Services Complex',
    publicServicesDesc: 'Official documents and national identity services',
    healthMinistry: 'Ministry of Health',
    healthMinistryDesc: 'Health services and medical certificates',
    educationMinistry: 'Ministry of Education',
    educationMinistryDesc: 'Academic certificates and educational services',
    chooseService: 'Choose This Service',
    comingSoon: 'Coming Soon',
    notAvailable: 'Not Available Currently',
    
    // Features
    whyChoose: 'Why Choose Shibbak?',
    featuresDescription: 'We provide you with an exceptional experience in accessing government services',
    secureReliable: 'Secure & Reliable',
    secureDesc: 'High-level protection for your personal data',
    fastEfficient: 'Fast & Efficient',
    fastDesc: 'Quick processing of requests',
    customerService: 'Customer Service',
    customerServiceDesc: '24/7 technical support available',
    easyToUse: 'Easy to Use',
    easyToUseDesc: 'Simple and easy-to-navigate interface',
    
    // Footer
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    copyright: 'All Rights Reserved',
    
    // Common
    loading: 'Loading...',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    
    // About Us
    aboutUsTitle: 'About Us',
    aboutUsSubtitle: 'Your Digital Gateway to Government Services - We make it easy for you to access all government services from one place',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    ourValues: 'Our Core Values',
    
    // Contact Us
    contactUsTitle: 'Contact Us',
    contactUsSubtitle: 'We are here to help you - contact us anytime and we will be happy to answer your inquiries',
    sendMessage: 'Send Us a Message',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    inquiryType: 'Inquiry Type',
    message: 'Message',
    sendMessageBtn: 'Send Message',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to the most common questions about the Shibbak platform and its services',
    searchFaq: 'Search in FAQ...',
    browseByCategory: 'Browse by Category',
    allQuestions: 'All Questions',
    searchResults: 'Search Results',
    noResults: 'No results found',
    clearSearch: 'Clear Search',
    stillNeedHelp: 'Didn\'t find what you\'re looking for?',
    stillNeedHelpDesc: 'If you didn\'t find an answer to your question in the FAQ, our support team is ready to help you'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('shibbak-language');
    if (storedLanguage && (storedLanguage === 'ar' || storedLanguage === 'en')) {
      setLanguage(storedLanguage);
      applyLanguageSettings(storedLanguage);
    }
  }, []);

  const applyLanguageSettings = (lang) => {
    const html = document.documentElement;
    
    if (lang === 'en') {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    } else {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    }
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('shibbak-language', newLanguage);
    applyLanguageSettings(newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    isRTL: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

