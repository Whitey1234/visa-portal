'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Phone, Mail, Globe, ChevronDown } from 'lucide-react';
 import logo from "../../../public/logo.json"
import Lottie from 'lottie-react';
import { Button } from 'antd';
import Link from 'next/link';



import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '/services', 
      label: 'Services',
      dropdown: [
        { href: '', label: 'Tourist Visa' },
        { href: '/services/business', label: 'Business Visa' },
        { href: '/services/student', label: 'Student Visa' },
        { href: '/services/work', label: 'Work Visa' },
        { href: '/services/family', label: 'Family Visa' },
        { href: '/services/transit', label: 'Transit Visa' }
      ]
    },
    { href: '/services', label: 'Services' },
    { href: '/aboutus', label: 'About Us' },
    
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>support@visaportal.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>🕒 Mon-Fri: 9AM-6PM EST</span>
            <span className="text-yellow-300">⭐ 98.5% Success Rate</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-gray-900 shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 border-2 border-blue-500  hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]  rounded-xl flex items-center justify-center">
                  <Lottie style={{width : "250px",height : "200px" }} animationData={logo} loop={true} />;
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  VisaPortal
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Trusted Visa Services
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  {link.dropdown ? (
                    <div className="relative">
                      {/* <button
                        onClick={() => handleDropdownToggle(index)}
                        className="flex items-center space-x-1 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      </button> */}
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
                          {link.dropdown.map((dropItem, dropIndex) => (
                             <Link
    key={dropIndex}
    href={dropItem.href}
    className="block px-4 py-3 text-gray-700 dark:text-gray-300 
               hover:text-blue-600 dark:hover:text-blue-400 
               hover:bg-gray-50 dark:hover:bg-gray-700 
               transition-colors duration-300"
  >
    {dropItem.label}
  </Link>
                            
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                   
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Emergency Contact */}
              <div className="flex items-center space-x-2 px-3 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>

              {/* Dark Mode Toggle */}
              
             
              {/* Dark Mode Toggle */}
              <ThemeToggle />

              {/* <Link href={'/application'}> */}
               <Button
              type='primary'
                href="/application"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Button>
              {/* </Link> */}
             
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Mobile Contact Info */}
                <div className="px-3 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-3">
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-sm mt-1">
                    <Mail className="w-4 h-4" />
                    <span>support@visaportal.com</span>
                  </div>
                </div>

                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.dropdown ? (
                      <div>
                        {/* <button
                          onClick={() => handleDropdownToggle(index)}
                          className="w-full flex items-center justify-between px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                        >
                          <span className="font-medium">{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} />
                        </button> */}
                        {activeDropdown === index && (
                          <div className="ml-4 mt-2 space-y-1">
                            {link.dropdown.map((dropItem, dropIndex) => (
                              <a
                                key={dropIndex}
                                href={dropItem.href}
                                className="block px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropItem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4">
                  <a
                    href="/application"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Apply Now
                  </a>
                </div>

                {/* Mobile Emergency */}
                <div className="px-3 py-3 bg-red-50 dark:bg-red-900/20 rounded-lg mt-3">
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">24/7 Emergency Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;