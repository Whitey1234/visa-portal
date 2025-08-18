'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Zap, 
  Shield, 
  HeadphonesIcon,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';



const VisaHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Your Gateway to",
      highlight: "Global Travel",
      subtitle: "Fast, reliable, and secure visa processing services for all your travel needs. Get your visa approved in record time with our expert assistance.",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "All Services",
      buttonText: "Start Your Journey",
      stats: "180+ Countries Covered"
    },
    {
      id: 2,
      title: "Professional",
      highlight: "Business Visas",
      subtitle: "Streamline your business travel with comprehensive visa services. Professional support for corporate travelers and business delegations worldwide.",
      bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2135&q=80",
      category: "Business Travel",
      buttonText: "Business Solutions",
      stats: "98% Success Rate"
    },
    {
      id: 3,
      title: "Dream",
      highlight: "Tourist Visas",
      subtitle: "Make your vacation dreams come true. We handle all types of tourist visas, family reunification, and leisure travel documentation with care.",
      bgImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "Tourism & Family",
      buttonText: "Plan Your Trip",
      stats: "50K+ Happy Travelers"
    },
    {
      id: 4,
      title: "Future Starts with",
      highlight: "Study Visas",
      subtitle: "Begin your international education journey with confidence. Expert guidance for student visas, work permits, and long-term residence applications.",
      bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "Education & Career",
      buttonText: "Start Your Future",
      stats: "Top Universities Partner"
    }
  ];

  const serviceHighlights = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "180+ Countries",
      description: "Worldwide Coverage",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "24-48 Hours",
      description: "Express Processing",
      bgColor: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "100% Secure",
      description: "Protected Platform",
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10" />,
      title: "24/7 Support",
      description: "Expert Assistance",
      bgColor: "from-purple-500 to-pink-500"
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance functionality
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoplay(!isAutoplay);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAutoplay]);

  // Touch/Swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('touchstart', handleTouchStart);
      sliderElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('touchstart', handleTouchStart);
        sliderElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 rounded-2xl mb-8">
      {/* Custom Slider Container */}
      <div ref={sliderRef} className="visa-hero-slider relative w-full h-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.bgImage}
              alt={`${slide.category} Visa Services`}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-purple-900/50" />
            
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/5 rounded-full animate-float"
                  style={{
                    width: `${60 + Math.random() * 80}px`,
                    height: `${60 + Math.random() * 80}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${4 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>

            {/* Category Badge */}
            <div className="absolute top-8 left-8 z-20">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {slide.category}
              </span>
            </div>

            {/* Stats Badge */}
            <div className="absolute top-8 right-8 z-20">
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Award className="w-4 h-4" />
                {slide.stats}
              </span>
            </div>
            
            {/* Main Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
              <div className="text-center text-white max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                  <span className="block animate-slide-up">
                    {slide.title}
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-orange-500 to-blue-500 bg-clip-text text-transparent animate-slide-up animation-delay-300">
                    {slide.highlight}
                  </span>
                </h1>
                
                <p className="text-xl md:text-xl lg:text-2xl mb-12 animate-slide-up animation-delay-600 leading-relaxed max-w-4xl mx-auto font-light opacity-95">
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animation-delay-900">
                  <button className="group bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-6 px-12 rounded-full shadow-2xl transform hover:-translate-y-3 transition-all duration-300 hover:shadow-orange-500/30 text-lg flex items-center justify-center gap-3 min-w-[280px] border-2 border-transparent hover:border-white/20">
                    {slide.buttonText}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-white/60 hover:border-white backdrop-blur-lg bg-white/10 hover:bg-white/20 font-bold py-6 px-12 rounded-full transform hover:-translate-y-3 transition-all duration-300 text-lg min-w-[280px] flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5" />
                    Track Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="slider-button-prev absolute left-6 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white/20 backdrop-blur-lg border-2 border-white/30 hover:border-white/60 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 hidden md:flex"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="slider-button-next absolute right-6 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white/20 backdrop-blur-lg border-2 border-white/30 hover:border-white/60 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 hidden md:flex"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Custom Pagination */}
        <div className="slider-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3 m">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`pagination-bullet transition-all duration-300  ${
                index === currentSlide
                  ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full hover:scale-125'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-black/30 z-30">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-300 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Autoplay Toggle */}
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className="absolute top-8 right-1/2 translate-x-1/2 md:right-32 md:translate-x-0 z-30 w-12 h-12 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          {isAutoplay ? (
            <div className="w-3 h-3 bg-white rounded-sm" />
          ) : (
            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1" />
          )}
        </button>
      </div>

      {/* Service Highlights Overlay */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-6">
        <div className="transform translate-y-[-10rem]">
       
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4 text-white/80">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span className="text-sm font-semibold">50,000+ Satisfied Customers</span>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.6;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 1.2s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-300 { 
          animation-delay: 0.3s; 
          opacity: 0;
        }
        .animation-delay-600 { 
          animation-delay: 0.6s; 
          opacity: 0;
        }
        .animation-delay-900 { 
          animation-delay: 0.9s; 
          opacity: 0;
        }

        @media (max-width: 768px) {
          .slider-button-prev,
          .slider-button-next {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VisaHeroSlider;