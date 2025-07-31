import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Layout = ({ children, user, onSignOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'الرئيسية', href: '/', current: location.pathname === '/' },
    { name: 'الخدمات', href: '/services', current: location.pathname === '/services' },
    { name: 'من نحن', href: '/about', current: location.pathname === '/about' },
    { name: 'اتصل بنا', href: '/contact', current: location.pathname === '/contact' },
    { name: 'الأسئلة الشائعة', href: '/faq', current: location.pathname === '/faq' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 space-x-reverse">
                <img 
                  src="/government-icon.png" 
                  alt="شباك" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-blue-900">شباك</span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* User menu */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <LanguageToggle />
              {user ? (
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-sm text-gray-700">{user.name}</span>
                  </div>
                  <button
                    onClick={onSignOut}
                    className="flex items-center space-x-1 space-x-reverse px-3 py-2 text-sm text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>تسجيل الخروج</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Link
                    to="/signin"
                    className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    تسجيل الدخول
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    إنشاء حساب
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    item.current
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile user menu */}
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="px-3 py-2">
                  <LanguageToggle />
                </div>
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center px-3 py-2">
                      <User className="h-5 w-5 text-gray-600 ml-2" />
                      <span className="text-base text-gray-700">{user.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        onSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-base text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="h-4 w-4 ml-2" />
                      تسجيل الخروج
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/signin"
                      className="block px-3 py-2 text-base text-gray-700 hover:text-blue-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      تسجيل الدخول
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-3 py-2 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      إنشاء حساب
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <img 
                  src="/government-icon.png" 
                  alt="شباك" 
                  className="h-8 w-8 filter brightness-0 invert"
                />
                <span className="text-xl font-bold">شباك</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                نافذتك الرقمية لتسهيل استخراج الوثائق الحكومية
              </p>
              <p className="text-gray-400 text-xs mt-2">
                منصة "شباك" تهدف إلى تبسيط الإجراءات الحكومية ومكافحة الفساد.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                روابط سريعة
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                    الخدمات
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                    اتصل بنا
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                    الأسئلة الشائعة
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                تواصل معنا
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>البريد الإلكتروني: info@shobbak.gov.sd</li>
                <li>الهاتف: 123-456-7890</li>
                <li>العنوان: الخرطوم، السودان</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-xs text-gray-400">
              © {new Date().getFullYear()} شباك (Shibbak). جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

