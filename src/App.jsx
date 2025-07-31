import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PublicServices from './pages/PublicServices';
import ApplicationForm from './pages/ApplicationForm';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored user session on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("shobbak_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('shobbak_user');
      }
    }
    setIsLoading(false);
  }, []);

  const handleSignIn = (userData) => {
    setUser(userData);
    localStorage.setItem("shobbak_user", JSON.stringify(userData));
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem('shobbak_user');
  };

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout user={user} onSignOut={handleSignOut}>
        <Routes>
          <Route path="/" element={<Homepage user={user} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route 
            path="/signin" 
            element={user ? <Navigate to="/services" /> : <SignIn onSignIn={handleSignIn} />} 
          />
          <Route 
            path="/signup" 
            element={user ? <Navigate to="/services" /> : <SignUp onSignIn={handleSignIn} />} 
          />
          {/* Services route - redirect to public services if authenticated, otherwise to signin */}
          <Route 
            path="/services" 
            element={user ? <Navigate to="/services/public" /> : <Navigate to="/signin" />} 
          />
          <Route 
            path="/services/public" 
            element={user ? <PublicServices user={user} /> : <Navigate to="/signin" />} 
          />
          <Route 
            path="/application" 
            element={user ? <ApplicationForm user={user} /> : <Navigate to="/signin" />} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

