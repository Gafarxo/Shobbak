import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, RefreshCw, ArrowLeft, Clock, Shield, Users } from 'lucide-react';

const PublicServices = ({ user }) => {
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [selectedDocumentType, setSelectedDocumentType] = useState('');
  const navigate = useNavigate();

  const serviceTypes = [
    {
      id: 'new',
      title: 'إصدار جديد',
      description: 'إصدار وثيقة جديدة لأول مرة',
      icon: FileText,
      color: 'blue'
    },
    {
      id: 'renewal',
      title: 'تجديد',
      description: 'تجديد وثيقة موجودة منتهية الصلاحية',
      icon: RefreshCw,
      color: 'green'
    }
  ];

  const documentTypes = [
    { id: 'passport', name: 'جواز سفر', processingTime: '7-10 أيام عمل' },
    { id: 'birth-certificate', name: 'شهادة ميلاد', processingTime: '3-5 أيام عمل' },
    { id: 'national-id', name: 'بطاقة هوية وطنية', processingTime: '5-7 أيام عمل' },
    { id: 'academic-transcript', name: 'كشف درجات أكاديمي', processingTime: '10-14 يوم عمل' },
    { id: 'driving-license', name: 'رخصة قيادة', processingTime: '7-10 أيام عمل' },
    { id: 'business-license', name: 'رخصة عمل تجاري', processingTime: '14-21 يوم عمل' }
  ];

  const handleServiceTypeSelect = (serviceType) => {
    setSelectedServiceType(serviceType);
    setSelectedDocumentType(''); // Reset document selection
  };

  const handleDocumentTypeSelect = (documentType) => {
    setSelectedDocumentType(documentType);
  };

  const handleProceed = () => {
    if (selectedServiceType && selectedDocumentType) {
      // Navigate to application form with selected options
      navigate('/application', {
        state: {
          serviceType: selectedServiceType,
          documentType: selectedDocumentType
        }
      });
    }
  };

  // Redirect to sign-in if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <Shield className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              تسجيل الدخول مطلوب
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              يجب تسجيل الدخول للوصول إلى الخدمات الحكومية
            </p>
          </div>
          <div className="space-y-4">
            <Link
              to="/signin"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/signup"
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              إنشاء حساب جديد
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مجمع خدمات الجمهور
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر نوع الخدمة ونوع الوثيقة المطلوبة للمتابعة
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 space-x-reverse">
            <div className={`flex items-center ${selectedServiceType ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                selectedServiceType ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="mr-2 text-sm font-medium">نوع الخدمة</span>
            </div>
            <div className={`w-8 h-0.5 ${selectedServiceType ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${selectedDocumentType ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                selectedDocumentType ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="mr-2 text-sm font-medium">نوع الوثيقة</span>
            </div>
            <div className={`w-8 h-0.5 ${selectedDocumentType ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className="flex items-center text-gray-400">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-gray-200 text-gray-600">
                3
              </div>
              <span className="mr-2 text-sm font-medium">تقديم الطلب</span>
            </div>
          </div>
        </div>

        {/* Service Type Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            اختر نوع الخدمة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceTypes.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceTypeSelect(service.id)}
                className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg ${
                  selectedServiceType === service.id
                    ? `border-${service.color}-500 bg-${service.color}-50 shadow-md`
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedServiceType === service.id
                      ? `bg-${service.color}-500 text-white`
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                {selectedServiceType === service.id && (
                  <div className="absolute top-4 left-4">
                    <div className={`w-6 h-6 rounded-full bg-${service.color}-500 flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Document Type Selection */}
        {selectedServiceType && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              اختر نوع الوثيقة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentTypes.map((document) => (
                <div
                  key={document.id}
                  onClick={() => handleDocumentTypeSelect(document.id)}
                  className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-300 hover:shadow-md ${
                    selectedDocumentType === document.id
                      ? 'border-blue-500 bg-blue-50 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {document.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-1 space-x-reverse text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{document.processingTime}</span>
                    </div>
                  </div>
                  {selectedDocumentType === document.id && (
                    <div className="absolute top-2 left-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/services"
            className="flex items-center space-x-2 space-x-reverse px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span>العودة للخدمات</span>
          </Link>
          
          {selectedServiceType && selectedDocumentType && (
            <button
              onClick={handleProceed}
              className="flex items-center space-x-2 space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <span>متابعة تقديم الطلب</span>
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Info section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
            معلومات مهمة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-900 mb-1">آمن وموثوق</h4>
              <p className="text-sm text-blue-700">جميع بياناتك محمية ومشفرة</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-900 mb-1">معالجة سريعة</h4>
              <p className="text-sm text-blue-700">نعالج طلبك في أسرع وقت ممكن</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-900 mb-1">دعم فني</h4>
              <p className="text-sm text-blue-700">فريق الدعم متاح لمساعدتك</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicServices;

