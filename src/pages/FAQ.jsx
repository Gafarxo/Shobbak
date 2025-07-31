import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, User, FileText, CreditCard, Settings, Shield, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState({});

  const categories = [
    { id: 'all', name: 'جميع الأسئلة', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'account', name: 'الحساب والتسجيل', icon: <User className="w-5 h-5" /> },
    { id: 'services', name: 'الخدمات المتاحة', icon: <FileText className="w-5 h-5" /> },
    { id: 'documents', name: 'طلب الوثائق', icon: <FileText className="w-5 h-5" /> },
    { id: 'payment', name: 'الدفع والرسوم', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'technical', name: 'المشاكل التقنية', icon: <Settings className="w-5 h-5" /> },
    { id: 'security', name: 'الأمان والخصوصية', icon: <Shield className="w-5 h-5" /> }
  ];

  const faqData = [
    // Account & Registration
    {
      id: 1,
      category: 'account',
      question: 'كيف أنشئ حساب جديد في منصة شباك؟',
      answer: 'لإنشاء حساب جديد، اضغط على "إنشاء حساب" في الصفحة الرئيسية، ثم املأ البيانات المطلوبة مثل الاسم الكامل والبريد الإلكتروني والرقم الوطني. ستحتاج إلى تأكيد بريدك الإلكتروني لتفعيل الحساب.'
    },
    {
      id: 2,
      category: 'account',
      question: 'نسيت كلمة المرور، ماذا أفعل؟',
      answer: 'اضغط على "نسيت كلمة المرور" في صفحة تسجيل الدخول، ثم أدخل بريدك الإلكتروني. ستصلك رسالة تحتوي على رابط لإعادة تعيين كلمة المرور.'
    },
    {
      id: 3,
      category: 'account',
      question: 'كيف أحدث بياناتي الشخصية؟',
      answer: 'بعد تسجيل الدخول، اذهب إلى "الملف الشخصي" من القائمة الرئيسية، ثم اضغط على "تحديث البيانات" وقم بتعديل المعلومات المطلوبة.'
    },

    // Available Services
    {
      id: 4,
      category: 'services',
      question: 'ما هي الخدمات المتاحة حالياً في منصة شباك؟',
      answer: 'حالياً تتوفر خدمات مجمع خدمات الجمهور التي تشمل إصدار وتجديد جوازات السفر، شهادات الميلاد، بطاقات الهوية الوطنية، كشوف الدرجات الأكاديمية، رخص القيادة، ورخص العمل التجاري. نعمل على إضافة المزيد من الخدمات قريباً.'
    },
    {
      id: 5,
      category: 'services',
      question: 'هل جميع الخدمات متاحة للمواطنين والمقيمين؟',
      answer: 'معظم الخدمات متاحة للمواطنين والمقيمين، لكن بعض الخدمات قد تكون مخصصة للمواطنين فقط. ستجد هذه المعلومة واضحة عند اختيار الخدمة المطلوبة.'
    },
    {
      id: 6,
      category: 'services',
      question: 'متى ستتوفر خدمات وزارة الصحة ووزارة التعليم؟',
      answer: 'نعمل حالياً على تطوير خدمات وزارة الصحة ووزارة التعليم وستكون متاحة قريباً. سنعلن عن توفرها عبر الموقع والإشعارات.'
    },

    // Document Requests
    {
      id: 7,
      category: 'documents',
      question: 'كم يستغرق إصدار جواز السفر؟',
      answer: 'يستغرق إصدار جواز السفر الجديد من 7-10 أيام عمل من تاريخ تقديم الطلب واستكمال جميع المتطلبات والمستندات المطلوبة.'
    },
    {
      id: 8,
      category: 'documents',
      question: 'ما هي المستندات المطلوبة لإصدار بطاقة هوية وطنية؟',
      answer: 'تحتاج إلى: صورة شخصية حديثة، شهادة الميلاد الأصلية، إثبات السكن، وفي حالة التجديد تحتاج إلى البطاقة القديمة.'
    },
    {
      id: 9,
      category: 'documents',
      question: 'هل يمكنني تجديد الوثائق إلكترونياً؟',
      answer: 'نعم، يمكنك تجديد معظم الوثائق إلكترونياً من خلال منصة شباك. اختر "تجديد" عند تحديد نوع الخدمة واتبع الخطوات المطلوبة.'
    },
    {
      id: 10,
      category: 'documents',
      question: 'كيف أتابع حالة طلبي؟',
      answer: 'يمكنك متابعة حالة طلبك من خلال "متابعة الطلبات" في حسابك الشخصي، أو باستخدام رقم الطلب المرسل إليك عبر البريد الإلكتروني أو الرسائل النصية.'
    },

    // Payment & Fees
    {
      id: 11,
      category: 'payment',
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع بالبطاقات الائتمانية (فيزا، ماستركارد)، مدى، والتحويل البنكي. جميع المعاملات مؤمنة ومشفرة.'
    },
    {
      id: 12,
      category: 'payment',
      question: 'كم تبلغ رسوم إصدار جواز السفر؟',
      answer: 'رسوم إصدار جواز السفر الجديد 300 ريال، والتجديد 200 ريال. قد تختلف الرسوم حسب نوع الخدمة والمدة المطلوبة.'
    },
    {
      id: 13,
      category: 'payment',
      question: 'هل يمكنني استرداد الرسوم في حالة إلغاء الطلب؟',
      answer: 'يمكن استرداد الرسوم خلال 24 ساعة من تقديم الطلب وقبل بدء المعالجة. بعد ذلك لا يمكن الاسترداد إلا في حالات استثنائية.'
    },

    // Technical Issues
    {
      id: 14,
      category: 'technical',
      question: 'الموقع لا يعمل بشكل صحيح، ماذا أفعل؟',
      answer: 'جرب تحديث الصفحة أو مسح ذاكرة التخزين المؤقت للمتصفح. إذا استمرت المشكلة، تواصل مع الدعم التقني على support@shibbak.gov.sa'
    },
    {
      id: 15,
      category: 'technical',
      question: 'لا أستطيع رفع الملفات المطلوبة',
      answer: 'تأكد من أن حجم الملف لا يتجاوز 5 ميجابايت وأن صيغة الملف مدعومة (PDF, JPG, PNG). جرب استخدام متصفح مختلف إذا استمرت المشكلة.'
    },
    {
      id: 16,
      category: 'technical',
      question: 'هل يدعم الموقع جميع المتصفحات؟',
      answer: 'نعم، الموقع يدعم جميع المتصفحات الحديثة مثل Chrome, Firefox, Safari, وEdge. ننصح بتحديث المتصفح لأحدث إصدار للحصول على أفضل تجربة.'
    },

    // Security & Privacy
    {
      id: 17,
      category: 'security',
      question: 'كيف تحمون بياناتي الشخصية؟',
      answer: 'نستخدم أحدث تقنيات التشفير وبروتوكولات الأمان لحماية بياناتك. جميع المعلومات محفوظة في خوادم آمنة ولا نشاركها مع أطراف ثالثة.'
    },
    {
      id: 18,
      category: 'security',
      question: 'هل يمكن لأشخاص آخرين الوصول لحسابي؟',
      answer: 'لا، حسابك محمي بكلمة مرور وتشفير قوي. ننصح بعدم مشاركة بيانات الدخول مع أي شخص واستخدام كلمة مرور قوية.'
    },
    {
      id: 19,
      category: 'security',
      question: 'ماذا أفعل إذا اشتبهت في اختراق حسابي؟',
      answer: 'غير كلمة المرور فوراً وتواصل مع فريق الأمان على security@shibbak.gov.sa. سنقوم بمراجعة حسابك واتخاذ الإجراءات اللازمة.'
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الأسئلة الشائعة</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              ابحث عن إجابات لأكثر الأسئلة شيوعاً حول منصة شباك وخدماتها
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث في الأسئلة الشائعة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">تصفح حسب الفئة</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center text-center ${
                  activeCategory === category.id
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="mb-2">{category.icon}</div>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Results */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchTerm ? `نتائج البحث (${filteredFAQs.length})` : 'جميع الأسئلة'}
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                مسح البحث
              </button>
            )}
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لم نجد أي نتائج</h3>
              <p className="text-gray-500">جرب البحث بكلمات مختلفة أو تصفح الفئات المختلفة</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md border border-gray-200">
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900 flex-1">{faq.question}</span>
                    {expandedItems[faq.id] ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 mr-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 mr-4" />
                    )}
                  </button>
                  
                  {expandedItems[faq.id] && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">لم تجد ما تبحث عنه؟</h3>
          <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
            إذا لم تجد إجابة لسؤالك في الأسئلة الشائعة، فريق الدعم لدينا جاهز لمساعدتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              تواصل معنا
            </a>
            <a
              href="mailto:support@shobbak.gov.sd"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              إرسال بريد إلكتروني
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

