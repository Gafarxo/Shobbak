import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Clock, Users, CheckCircle } from 'lucide-react';

const Homepage = ({ user }) => {
  const services = [
    {
      id: 'public-services',
      title: 'مجمع خدمات الجمهور',
      description: 'خدمات الوثائق الرسمية والهوية الوطنية',
      icon: '/ministry-icon.png',
      href: '/services/public',
      available: true
    },
    {
      id: 'health',
      title: 'وزارة الصحة',
      description: 'الخدمات الصحية والشهادات الطبية',
      icon: '/health-icon.png',
      href: '/services/health',
      available: false
    },
    {
      id: 'education',
      title: 'وزارة التعليم',
      description: 'الشهادات الأكاديمية والخدمات التعليمية',
      icon: '/education-icon.jpg',
      href: '/services/education',
      available: false
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'آمن وموثوق',
      description: 'حماية عالية لبياناتك الشخصية'
    },
    {
      icon: Clock,
      title: 'سريع وفعال',
      description: 'معالجة سريعة للطلبات'
    },
    {
      icon: Users,
      title: 'خدمة العملاء',
      description: 'دعم فني متاح على مدار الساعة'
    },
    {
      icon: CheckCircle,
      title: 'سهل الاستخدام',
      description: 'واجهة بسيطة وسهلة التنقل'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              مرحباً بك في <span className="text-blue-200">شباك</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              نافذتك الرقمية لتسهيل استخراج الوثائق الحكومية
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              احصل على وثائقك الرسمية بسهولة وأمان من خلال منصة شباك الرقمية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {user ? (
                <Link
                  to="/services"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 space-x-reverse"
                >
                  <span>تصفح الخدمات</span>
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 space-x-reverse"
                  >
                    <span>ابدأ الآن</span>
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                  >
                    تعرف على المزيد
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الخدمات المتاحة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اختر الوزارة أو الجهة الحكومية للحصول على الخدمة المطلوبة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-xl shadow-lg border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl ${
                  service.available 
                    ? 'hover:scale-105 cursor-pointer' 
                    : 'opacity-60 cursor-not-allowed'
                }`}
              >
                {!service.available && (
                  <div className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                    قريباً
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-12 h-12 object-contain filter brightness-0 saturate-100 invert-27 sepia-51 saturate-2878 hue-rotate-214 brightness-97 contrast-87"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.available ? (
                    <Link
                      to={service.href}
                      className="inline-flex items-center space-x-2 space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <span>اختر هذه الخدمة</span>
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center space-x-2 space-x-reverse bg-gray-400 text-white px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                      <span>غير متاح حالياً</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار شباك؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نوفر لك تجربة متميزة في الحصول على الخدمات الحكومية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز للبدء؟
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            انضم إلى آلاف المواطنين الذين يستخدمون شباك للحصول على خدماتهم الحكومية
          </p>
          
          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                إنشاء حساب جديد
              </Link>
              <Link
                to="/signin"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                تسجيل الدخول
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Homepage;

