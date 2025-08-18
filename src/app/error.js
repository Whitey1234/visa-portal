'use client'
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  RefreshCw, 
  ArrowLeft, 
  AlertTriangle,
  Search,
  MessageCircle,
  Clock,
  Shield,
  Zap,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  HelpCircle
} from 'lucide-react';

const ErrorPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Check system theme preference
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemDark);

    // Generate floating background elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }));
    setFloatingElements(elements);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    // Simulate retry attempt
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRetrying(false);
  };

  const suggestions = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: 'Refresh the Page',
      description: 'Sometimes a simple refresh can fix the issue',
      action: 'Refresh Now'
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: 'Go to Homepage',
      description: 'Start over from our main page',
      action: 'Go Home'
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: 'Search Our Site',
      description: 'Find what you\'re looking for',
      action: 'Search'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Contact Support',
      description: 'Get help from our team',
      action: 'Contact Us'
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-slate-900'
    }`}>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full opacity-10 ${
              isDark ? 'bg-white' : 'bg-gradient-to-r from-blue-400 to-purple-400'
            }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animation: `float ${element.duration}s ease-in-out infinite ${element.delay}s alternate`,
            }}
          />
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
            isDark 
              ? 'bg-slate-800 border border-slate-700 hover:bg-slate-700' 
              : 'bg-white border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
        </button>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Error Icon with Animation */}
          <div className="relative mb-8">
            <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-800/50' 
                : 'bg-gradient-to-r from-red-100 to-orange-100 border border-red-200'
            }`}>
              <AlertTriangle className={`w-16 h-16 ${
                isDark ? 'text-red-400' : 'text-red-500'
              }`} style={{
                animation: 'pulse 2s ease-in-out infinite'
              }} />
            </div>
            
            {/* Connection indicator */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
              isDark 
                ? 'bg-slate-800/50 border border-slate-700' 
                : 'bg-white/80 border border-slate-200'
            }`}>
              <WifiOff className="w-4 h-4 text-red-500" />
              <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                Connection Error
              </span>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              4<span className="text-red-500">0</span>4
            </h1>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-slate-100' : 'text-slate-800'
            }`}>
              Oops! Page Not Found
            </h2>
            
            <p className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              The page you're looking for seems to have taken a vacation. Don't worry, 
              it happens to the best of us! Let's get you back on track.
            </p>

            {/* Status indicators */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Page Status: Not Found
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Server: Online
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={handleRetry}
                disabled={isRetrying}
                className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
                  isRetrying ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isRetrying ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-5 h-5" />
                    Try Again
                  </>
                )}
              </button>
              
              <button className={`px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3`}>
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>
          </div>

          {/* Suggestions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer group ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 backdrop-blur-sm' 
                    : 'bg-white/80 border-slate-200 hover:bg-white backdrop-blur-sm hover:shadow-lg'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 transition-colors duration-300 ${
                  isDark 
                    ? 'bg-blue-900/30 text-blue-400 group-hover:bg-blue-800/50' 
                    : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                }`}>
                  {suggestion.icon}
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}>
                  {suggestion.title}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {suggestion.description}
                </p>
                
                <button className={`text-sm font-semibold flex items-center gap-2 transition-colors duration-300 ${
                  isDark 
                    ? 'text-blue-400 group-hover:text-blue-300' 
                    : 'text-blue-600 group-hover:text-blue-700'
                }`}>
                  {suggestion.action}
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className={`p-8 rounded-2xl border ${
            isDark 
              ? 'bg-slate-800/30 border-slate-700 backdrop-blur-sm' 
              : 'bg-white/60 border-slate-200 backdrop-blur-sm'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className={`w-6 h-6 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}>
                Still Need Help?
              </h3>
            </div>
            
            <p className={`mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Our support team is here to help you find what you're looking for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                isDark 
                  ? 'bg-green-900/30 text-green-400 border border-green-800 hover:bg-green-800/50' 
                  : 'bg-green-100 text-green-700 border border-green-200 hover:bg-green-200'
              }`}>
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </button>
              
              <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                isDark 
                  ? 'bg-purple-900/30 text-purple-400 border border-purple-800 hover:bg-purple-800/50' 
                  : 'bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200'
              }`}>
                <Clock className="w-4 h-4" />
                Submit Ticket
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-300 dark:border-slate-700">
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Error Code: 404 | Server Time: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;