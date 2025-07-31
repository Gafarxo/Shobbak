import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FileText, Upload, CheckCircle, AlertCircle, Clock, RefreshCw, Download, X, Shield } from 'lucide-react';

const ApplicationForm = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get service and document type from navigation state
  const { serviceType, documentType } = location.state || {};

  // Application state
  const [applicationStatus, setApplicationStatus] = useState('idle');
  const [applicationId, setApplicationId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState('');
  const [denialReason, setDenialReason] = useState('');
  
  // Form data
  const [formData, setFormData] = useState({
    applicantName: user?.name || '',
    nationalId: user?.nationalId || '',
    documentType: documentType || '',
    supportingDoc: null
  });

  // Redirect if not authenticated
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
              يجب تسجيل الدخول لتقديم طلب وثيقة حكومية
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
              to="/services/public"
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              العودة لاختيار الخدمة
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Redirect if no service/document type selected
  if (!serviceType || !documentType) {
    navigate('/services/public');
    return null;
  }

  // Auto-close modal timer
  useEffect(() => {
    if (showModal && !['ai_invalid', 'denied', 'ready_for_download'].includes(applicationStatus)) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showModal, applicationStatus]);

  // Generate application ID
  const generateApplicationId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = 'SHB-';
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // Reset application
  const resetApplication = () => {
    setApplicationStatus('idle');
    setApplicationId('');
    setShowModal(false);
    setNotification('');
    setDenialReason('');
    setFormData({
      applicantName: user?.name || '',
      nationalId: user?.nationalId || '',
      documentType: documentType || '',
      supportingDoc: null
    });
  };

  // Submit application
  const submitApplication = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.applicantName || !formData.nationalId || !formData.documentType) {
      alert('الرجاء ملء جميع الحقول المطلوبة وتحميل المستند الداعم.');
      return;
    }

    const newApplicationId = generateApplicationId();
    setApplicationId(newApplicationId);
    setApplicationStatus('submitted');
    setNotification(`تم استلام طلبك! رقم الطلب: ${newApplicationId}. في انتظار التحقق الأولي بواسطة الذكاء الاصطناعي.`);
    setShowModal(true);

    // Auto-start AI validation after 2 seconds
    setTimeout(() => {
      const isSuccess = Math.random() < 0.7; // 70% chance of success
      if (isSuccess) {
        setApplicationStatus("officer_review");
        setNotification(`تم التحقق الأولي بواسطة الذكاء الاصطناعي بنجاح. طلبك ${newApplicationId} الآن قيد مراجعة الضابط المختص.`);
      } else {
        setApplicationStatus("ai_invalid");
        setNotification(`تنبيه! طلبك يتطلب تعديلاً بناءً على التحقق الأولي للذكاء الاصطناعي. (رقم الطلب: ${newApplicationId})`);
      }
      setShowModal(true);
    }, 1000); // Reduced delay to 1 second
  };

  // Simulation functions
  const simulateAISuccess = () => {
    setTimeout(() => {
      setApplicationStatus('officer_review');
      setNotification(`تم التحقق الأولي بواسطة الذكاء الاصطناعي بنجاح. طلبك ${applicationId} الآن قيد مراجعة الضابط المختص.`);
      setShowModal(true);
    }, 2000);
  };

  const simulateAIFailure = () => {
    setTimeout(() => {
      setApplicationStatus('ai_invalid');
      setNotification(`تنبيه! طلبك يتطلب تعديلاً بناءً على التحقق الأولي للذكاء الاصطناعي. (رقم الطلب: ${applicationId})`);
      setShowModal(true);
    }, 2000);
  };

  const simulateOfficerComplete = () => {
    setTimeout(() => {
      setNotification(`الضابط المختص أكمل مراجعة طلبك ${applicationId}.`);
      setShowModal(true);
    }, 2000);
  };

  const simulateOfficerNeedsInfo = () => {
    setTimeout(() => {
      setApplicationStatus('officer_needs_info');
      setNotification(`طلبك ${applicationId} يتطلب تحققاً داخلياً إضافياً أو معلومات منك. يرجى الانتظار أو مراجعة التفاصيل.`);
      setShowModal(true);
    }, 2000);
  };

  const simulateInternalVerification = () => {
    setApplicationStatus('internal_verification');
    setNotification(`جاري التحقق الداخلي الإضافي لطلبك...`);
    setShowModal(true);
    
    setTimeout(() => {
      setApplicationStatus('officer_review');
      setNotification(`تم الانتهاء من التحقق الداخلي لطلبك ${applicationId}. سيعاود الضابط المختص مراجعته.`);
      setShowModal(true);
    }, 3000);
  };

  const simulateApproval = () => {
    setTimeout(() => {
      setApplicationStatus('approved');
      setNotification(`تهانينا! طلبك ${applicationId} تمت الموافقة عليه. جاري تجهيز وثيقتك الرقمية.`);
      setShowModal(true);
      
      setTimeout(() => {
        setApplicationStatus('ready_for_download');
        setNotification(`وثيقتك جاهزة! (رقم الطلب: ${applicationId})`);
        setShowModal(true);
      }, 3000);
    }, 2000);
  };

  const simulateDenial = () => {
    const reason = prompt('الرجاء إدخال سبب الرفض (مثال: مستندات غير مكتملة، بيانات غير مطابقة):');
    if (reason) {
      setDenialReason(reason);
      setTimeout(() => {
        setApplicationStatus('denied');
        setNotification(`نأسف، تم رفض طلبك. (رقم الطلب: ${applicationId}) السبب: ${reason}`);
        setShowModal(true);
      }, 2000);
    } else {
      alert('تم إلغاء عملية الرفض.');
    }
  };

  // Get status message
  const getStatusMessage = () => {
    switch (applicationStatus) {
      case 'idle':
        return 'ابدأ بملء النموذج لتقديم طلبك.';
      case 'submitted':
        return `تم استلام طلبك! رقم الطلب: ${applicationId}. في انتظار التحقق الأولي بواسطة الذكاء الاصطناعي.`;
      case 'ai_validating':
        return `الذكاء الاصطناعي يقوم بالتحقق الأولي من طلبك... (رقم الطلب: ${applicationId})`;
      case 'ai_invalid':
        return `تنبيه! طلبك يتطلب تعديلاً بناءً على التحقق الأولي للذكاء الاصطناعي. (رقم الطلب: ${applicationId})`;
      case 'officer_review':
        return `طلبك قيد مراجعة الضابط المختص. (رقم الطلب: ${applicationId})`;
      case 'officer_needs_info':
        return `طلبك يتطلب تحققاً داخلياً إضافياً. (رقم الطلب: ${applicationId})`;
      case 'internal_verification':
        return `جاري التحقق الداخلي الإضافي لطلبك... (رقم الطلب: ${applicationId})`;
      case 'approved':
        return `تهانينا! طلبك ${applicationId} تمت الموافقة عليه. جاري تجهيز وثيقتك الرقمية.`;
      case 'denied':
        return `نأسف، تم رفض طلبك. (رقم الطلب: ${applicationId}) السبب: ${denialReason}`;
      case 'ready_for_download':
        return `وثيقتك جاهزة! (رقم الطلب: ${applicationId})`;
      default:
        return '';
    }
  };

  // Get status icon
  const getStatusIcon = () => {
    switch (applicationStatus) {
      case 'idle':
        return <FileText className="h-6 w-6 text-blue-600" />;
      case 'submitted':
      case 'ai_validating':
      case 'officer_review':
      case 'internal_verification':
      case 'approved':
        return <Clock className="h-6 w-6 text-yellow-600" />;
      case 'ai_invalid':
      case 'denied':
        return <AlertCircle className="h-6 w-6 text-red-600" />;
      case 'ready_for_download':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      default:
        return null;
    }
  };

  // Get status color
  const getStatusColor = () => {
    switch (applicationStatus) {
      case 'idle':
        return 'border-blue-200 bg-blue-50';
      case 'submitted':
      case 'ai_validating':
      case 'officer_review':
      case 'internal_verification':
      case 'approved':
        return 'border-yellow-200 bg-yellow-50';
      case 'ai_invalid':
      case 'denied':
        return 'border-red-200 bg-red-50';
      case 'ready_for_download':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  // Get document type display name
  const getDocumentDisplayName = () => {
    const documentMap = {
      'passport': 'جواز سفر',
      'birth-certificate': 'شهادة ميلاد',
      'national-id': 'بطاقة هوية وطنية',
      'academic-transcript': 'كشف درجات أكاديمي',
      'driving-license': 'رخصة قيادة',
      'business-license': 'رخصة عمل تجاري'
    };
    return documentMap[documentType] || documentType;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/government-icon.png" 
              alt="Government Icon" 
              className="h-12 w-12 ml-3"
            />
            <h1 className="text-4xl font-bold text-blue-900">شباك</h1>
          </div>
          <p className="text-lg text-gray-600">نافذتك الرقمية لتسهيل استخراج الوثائق الحكومية</p>
          
          {/* Service info */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-900 font-medium">
              {serviceType === 'new' ? 'إصدار جديد' : 'تجديد'} - {getDocumentDisplayName()}
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {/* Application Form */}
          {(applicationStatus === 'idle' || applicationStatus === 'ai_invalid') && (
            <div>
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-blue-600 ml-2" />
                <h2 className="text-2xl font-bold text-gray-900">تقديم طلب وثيقة حكومية</h2>
              </div>
              
              <form onSubmit={submitApplication} className="space-y-6">
                {/* Applicant Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم مقدم الطلب (بالكامل)
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    value={formData.applicantName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                {/* National ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الرقم الوطني / رقم الهوية
                  </label>
                  <input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل رقمك الوطني أو رقم الهوية"
                    required
                  />
                </div>

                {/* Document Type (read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع الوثيقة المطلوبة
                  </label>
                  <input
                    type="text"
                    value={getDocumentDisplayName()}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                    readOnly
                  />
                </div>

                {/* Supporting Documents */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    المستندات الداعمة (صورة/PDF)
                  </label>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <input
                      type="file"
                      name="supportingDoc"
                      onChange={handleInputChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Upload className="h-5 w-5 text-gray-400" />
                  </div>
                  {formData.supportingDoc && (
                    <p className="mt-2 text-sm text-green-600">
                      تم اختيار الملف: {formData.supportingDoc.name}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex space-x-4 space-x-reverse">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <span>إرسال الطلب</span>
                    <FileText className="h-5 w-5" />
                  </button>
                  <Link
                    to="/services/public"
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    تغيير الخدمة
                  </Link>
                </div>
              </form>
            </div>
          )}

          {/* Application Status */}
          {applicationStatus !== 'idle' && (
            <div>
              <div className="flex items-center mb-6">
                {getStatusIcon()}
                <h2 className="text-2xl font-bold text-gray-900 mr-2">حالة طلبك</h2>
              </div>
              
              <div className={`p-6 rounded-lg border-2 ${getStatusColor()}`}>
                <p className="text-lg leading-relaxed">{getStatusMessage()}</p>
                
                {/* Action buttons for specific statuses */}
                {applicationStatus === 'ai_invalid' && (
                  <div className="mt-4 space-y-2">
                    <button
                      onClick={resetApplication}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                    >
                      تعديل وإعادة تقديم الطلب
                    </button>
                  </div>
                )}
                
                {applicationStatus === 'denied' && (
                  <div className="mt-4">
                    <button
                      onClick={resetApplication}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                    >
                      تقديم طلب جديد
                    </button>
                  </div>
                )}
                
                {applicationStatus === 'ready_for_download' && (
                  <div className="mt-4 space-y-2">
                    <a
                      href="https://placehold.co/300x200/008000/FFFFFF?text=وثيقتك+جاهزة"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors space-x-2 space-x-reverse"
                    >
                      <Download className="h-4 w-4" />
                      <span>تنزيل الوثيقة</span>
                    </a>
                    <button
                      onClick={resetApplication}
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors mt-2"
                    >
                      تقديم طلب جديد
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Admin Simulation Panel */}
        {applicationId && !['idle', 'ai_invalid', 'denied', 'ready_for_download'].includes(applicationStatus) && (
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">محاكاة تقدم الطلب (للمسؤول)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationStatus === 'submitted' && (
                <>
                  <button
                    onClick={simulateAISuccess}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    الذكاء الاصطناعي: التحقق بنجاح
                  </button>
                  <button
                    onClick={simulateAIFailure}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    الذكاء الاصطناعي: يتطلب تعديل
                  </button>
                </>
              )}
              
              {(applicationStatus === 'officer_review' || applicationStatus === 'internal_verification') && (
                <>
                  <button
                    onClick={simulateOfficerComplete}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    الضابط: مراجعة كاملة (لا يتطلب تحقق إضافي)
                  </button>
                  <button
                    onClick={simulateOfficerNeedsInfo}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    الضابط: يتطلب تحقق داخلي إضافي
                  </button>
                </>
              )}
              
              {applicationStatus === 'officer_needs_info' && (
                <button
                  onClick={simulateInternalVerification}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  بدء التحقق الداخلي الإضافي
                </button>
              )}
              
              {applicationStatus === 'officer_review' && (
                <>
                  <button
                    onClick={simulateApproval}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    الضابط: موافقة
                  </button>
                  <button
                    onClick={simulateDenial}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    الضابط: رفض
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">إشعار</h3>
              {['ai_invalid', 'denied', 'ready_for_download'].includes(applicationStatus) && (
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{notification}</p>
            <div className="flex justify-end space-x-2 space-x-reverse">
              {applicationStatus === 'ai_invalid' ? (
                <button
                  onClick={() => {
                    setShowModal(false);
                    resetApplication();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  إغلاق وتعديل الطلب
                </button>
              ) : ['denied', 'ready_for_download'].includes(applicationStatus) ? (
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  إغلاق
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  حسناً
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;

