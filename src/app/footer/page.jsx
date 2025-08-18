
'use client';

import Lottie from 'lottie-react';
import logo from '../../../public/logo.json';

import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Clock
} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="w-12 h-12 border-2 border-blue-500  hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]  rounded-xl flex items-center justify-center">
                  <Lottie style={{width : "250px",height : "200px" }} animationData={logo} loop={true} />;
                </div>
              <span className="text-xl font-bold">VisaPortal</span>
            </div>
            <p className="text-gray-600">
              Professional visa services for global travelers. Fast, reliable, and secure visa processing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors hover:shadow-lg hover:shadow-blue-400/20 p-2 rounded-full">
                <Facebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors hover:shadow-lg hover:shadow-blue-400/20 p-2 rounded-full">
                <Twitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors hover:shadow-lg hover:shadow-blue-400/20 p-2 rounded-full">
                <Instagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors hover:shadow-lg hover:shadow-blue-400/20 p-2 rounded-full">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Visa Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Application Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Visa Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visa Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Tourist Visa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Business Visa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Work Visa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Student Visa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors hover:shadow-blue-400/20">
                  Transit Visa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">123 Visa Street, Suite 100<br />Global City, GC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <a href="mailto:info@visaportal.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  info@visaportal.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <a href="tel:+11234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-blue-600" />
                <span className="text-gray-600">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VisaPortal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors hover:shadow-blue-400/20">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors hover:shadow-blue-400/20">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors hover:shadow-blue-400/20">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;