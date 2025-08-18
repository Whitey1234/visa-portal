'use client'

import React, { useState, useEffect } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideContent = [
    {
      title: "Your Gateway to Global Travel",
      subtitle: "Fast, reliable, and secure visa processing services for all your travel needs. Get your visa approved in record time with our expert assistance.",
      background: "linear-gradient(rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
    },
    {
      title: "Business Visa Solutions",
      subtitle: "Streamline your business travel with our comprehensive visa services. Professional support for corporate travelers and business delegations worldwide.",
      background: "linear-gradient(rgba(52, 152, 219, 0.7), rgba(155, 89, 182, 0.7)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2135&q=80')"
    },
    {
      title: "Tourist & Family Visas",
      subtitle: "Make your dream vacation a reality. We handle all types of tourist visas, family reunification, and leisure travel documentation with care.",
      background: "linear-gradient(rgba(46, 204, 113, 0.7), rgba(52, 152, 219, 0.7)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
    },
    {
      title: "Student & Work Visas",
      subtitle: "Start your international journey with confidence. Expert guidance for student visas, work permits, and long-term residence applications.",
      background: "linear-gradient(rgba(230, 126, 34, 0.7), rgba(231, 76, 60, 0.7)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
    }
  ];

  const serviceCards = [
    { icon: "🌍", name: "180+ Countries" },
    { icon: "⚡", name: "24-48 Hour Processing" },
    { icon: "🛡️", name: "100% Secure" },
    { icon: "💬", name: "24/7 Support" }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const changeSlide = (direction) => {
    let newIndex = currentSlide + direction;
    if (newIndex >= slideContent.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = slideContent.length - 1;
    }
    setCurrentSlide(newIndex);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      } else if (e.key === 'ArrowRight') {
        changeSlide(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Touch/swipe support for mobile
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].screenX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeSlide(1); // Swipe left - next slide
      } else {
        changeSlide(-1); // Swipe right - previous slide
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slideContent.map((slide, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: slide.background }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Particles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5">
              {[10, 80, 60, 20, 90].map((left, i) => (
                <div 
                  key={i}
                  className="absolute bg-white bg-opacity-10 rounded-full animate-float"
                  style={{
                    left: `${left}%`,
                    top: `${[20, 30, 70, 80, 10][i]}%`,
                    width: `${[8, 6, 4, 5, 7][i]}px`,
                    height: `${[8, 6, 4, 5, 7][i]}px`,
                    animationDelay: `${[0, 2, 4, 1, 3][i]}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 max-w-4xl px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg animate-fadeInUp">
          {slideContent[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-95 text-shadow-sm animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {slideContent[currentSlide].subtitle}
        </p>
        
        <div className="flex gap-5 justify-center flex-wrap animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Button 
            type="primary" 
            size="large" 
            className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] hover:from-[#ff5252] hover:to-[#ff9800] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 h-14 text-lg font-semibold border-none"
          >
            Apply for Visa
          </Button>
          <Button 
            size="large" 
            className="bg-white bg-opacity-20 text-white border-white border-opacity-50 backdrop-blur-md hover:bg-opacity-30 hover:border-opacity-80 transition-all duration-300 rounded-full px-8 h-14 text-lg font-semibold"
          >
            Track Application
          </Button>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-8 z-10 flex-wrap justify-center">
        {serviceCards.map((service, index) => (
          <div 
            key={index}
            className="bg-white bg-opacity-15 backdrop-blur-md p-5 rounded-xl text-center text-white border border-white border-opacity-20 transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-25 min-w-[150px]"
          >
            <div className="text-3xl mb-2">{service.icon}</div>
            <div className="text-sm font-semibold">{service.name}</div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <Button 
        icon={<ArrowLeftOutlined />} 
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white bg-opacity-20 text-white border-none text-2xl p-4 cursor-pointer backdrop-blur-md hover:bg-opacity-30 transition-all duration-300 rounded-full z-30"
        onClick={() => changeSlide(-1)}
      />
      <Button 
        icon={<ArrowRightOutlined />} 
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white bg-opacity-20 text-white border-none text-2xl p-4 cursor-pointer backdrop-blur-md hover:bg-opacity-30 transition-all duration-300 rounded-full z-30"
        onClick={() => changeSlide(1)}
      />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {slideContent.map((_, index) => (
          <div 
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 border-2 ${index === currentSlide ? 'bg-white scale-110 border-white border-opacity-80' : 'bg-white bg-opacity-50 border-transparent'}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;