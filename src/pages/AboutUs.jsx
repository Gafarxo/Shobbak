import React from 'react';
import { CheckCircle, Users, Shield, Clock, Award, Building, Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "الأمان",
      description: "حماية عالية لبياناتك الشخصية ومعلوماتك الحساسة"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "الشفافية", 
      description: "عمليات واضحة ومتابعة مستمرة لحالة طلباتك"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "الكفاءة",
      description: "معالجة سريعة وفعالة لجميع الخدمات الحكومية"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "سهولة الاستخدام",
      description: "واجهة بسيطة ومفهومة لجميع فئات المجتمع"
    }
  ];

  const statistics = [
    {
      number: "+50,000",
      label: "مستخدم نشط",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      number: "+100,000",
      label: "طلب مكتمل",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    },
    {
      number: "15 دقيقة",
      label: "متوسط وقت المعالجة",
      icon: <Clock className="w-6 h-6 text-orange-600" />
    },
    {
      number: "99.9%",
      label: "معدل الأمان",
      icon: <Shield className="w-6 h-6 text-purple-600" />
    }
  ];

  const partnerships = [
    {
      name: "وزارة الداخلية",
      description: "خدمات الهوية والجوازات"
    },
    {
      name: "وزارة الصحة",
      description: "الخدمات الصحية والطبية"
    },
    {
      name: "وزارة التعليم",
      description: "الشهادات والخدمات التعليمية"
    },
    {
      name: "وزارة العدل",
      description: "الخدمات القضائية والقانونية"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              نافذتك الرقمية للخدمات الحكومية - نسهل عليك الوصول لجميع الخدمات الحكومية من مكان واحد
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-blue-600 ml-3" />
              <h2 className="text-2xl font-bold text-gray-900">رسالتنا</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              منصة شباك هي المبادرة الرقمية الرائدة لتبسيط الخدمات الحكومية وتسهيل الوصول إليها للمواطنين والمقيمين. 
              نهدف إلى توفير تجربة رقمية متميزة تتسم بالسهولة والأمان والشفافية في جميع التعاملات الحكومية.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-blue-600 ml-3" />
              <h2 className="text-2xl font-bold text-gray-900">رؤيتنا</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              نسعى لتكون شباك النافذة الموحدة لجميع الخدمات الحكومية الرقمية في المملكة، 
              ونطمح لتحقيق التحول الرقمي الشامل الذي يساهم في تحسين جودة الحياة وزيادة رضا المستفيدين.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا الأساسية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-blue-900 rounded-lg text-white p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">إنجازاتنا بالأرقام</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">شراكاتنا الحكومية</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-r-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">مميزات منصة شباك</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">توفير الوقت</h3>
              <p className="text-gray-600">
                لا حاجة للذهاب إلى المكاتب الحكومية، أنجز معاملاتك من المنزل
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">الأمان التام</h3>
              <p className="text-gray-600">
                تشفير عالي المستوى لحماية بياناتك الشخصية والحساسة
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">متابعة مستمرة</h3>
              <p className="text-gray-600">
                تابع حالة طلباتك لحظة بلحظة مع إشعارات فورية
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">تواصل معنا</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">الهاتف</h3>
              <p className="text-gray-600">920-123-456</p>
            </div>

            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600">info@shobbak.gov.sd</p>
            </div>

            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">العنوان</h3>
              <p className="text-gray-600">الخرطوم، السودان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

