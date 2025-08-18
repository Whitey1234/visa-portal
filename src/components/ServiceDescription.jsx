'use client'
import React, { use, useEffect } from 'react';
import { 
  Globe, 
  Clock, 
  Shield, 
  FileCheck, 
  ArrowRight, 
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const PremiumServiceDescription = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Comprehensive visa services for 200+ destinations with direct embassy partnerships and local expertise",
      stat: "200+ Countries",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Processing",
      description: "Priority processing with guaranteed 24-48 hour turnaround for urgent travel requirements",
      stat: "24-48 Hours",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Success Guarantee",
      description: "Industry-leading 99.2% approval rate with comprehensive rejection protection coverage",
      stat: "99.2% Success",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Expert Verification",
      description: "Triple-layer document verification by certified visa specialists and legal experts",
      stat: "3-Layer Check",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const achievements = [
    { icon: <Users className="w-5 h-5" />, label: "50,000+ Clients Served", value: "50K+" },
    { icon: <Award className="w-5 h-5" />, label: "ISO 27001 Certified", value: "Certified" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "15+ Years Experience", value: "15Y+" },
    { icon: <Star className="w-5 h-5" />, label: "4.9/5 Customer Rating", value: "4.9★" }
  ];

  const processSteps = [
    "Document Collection & Review",
    "Embassy Submission & Tracking",
    "Real-time Status Updates",
    "Visa Collection & Delivery"
  ];

  return (
    <div className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-blue-100 border border-indigo-200 rounded-full text-indigo-700 font-semibold mb-6 shadow-sm hover:shadow-blue-600 s">
            <Star className="w-4 h-4 fill-current" />
            <span >PREMIUM VISA SOLUTIONS</span>
            <Star className="w-4 h-4 fill-current" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span  className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent">
              Professional Visa
            </span>
            <br />
            <span data-aos="fade-up"  className="bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl  mx-auto leading-relaxed mb-8 ">
            Experience seamless visa processing with our premium services, backed by embassy-grade 
            documentation standards and real-time application tracking technology.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 shadow-sm shadow-blue-500 ">
                <div className="flex items-center justify-center mb-2 text-indigo-600">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{achievement.value}</div>
                <div className="text-sm text-slate-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200/50 hover:border-indigo-200 hover:-translate-y-2"
            >
              {/* Feature Icon */}
              <div className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Stat Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${feature.color} shadow-md`}>
                  {feature.stat}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-indigo-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="  bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Our Streamlined Process</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Four simple steps to your visa approval with complete transparency and expert guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from--400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <CheckCircle className="w-5 h-5 text-emerald-400 ml-auto" />
                    </div>
                    <h4 className="text-white font-semibold text-lg leading-tight">{step}</h4>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-orange-600 via-blue-500 to-red-400 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-[22px] p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-60"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Ready to Begin Your 
                    <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-red-400 bg-clip-text text-transparent"> Journey?</span>
                  </h3>
                  <p className="text-xl text-slate-600 mb-6 max-w-lg">
                    Get a complimentary consultation with our certified visa experts and receive a personalized processing timeline.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">No Hidden Fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">24/7 Support</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Link href={'/application'}
                  type='primery' className="bg-gradient-to-r from-orange-600 
                  to-blue-600 hover:from-orange-700 hover:to-pink-500-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap">
                    <span>Start Your Application</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href={'/services'} className="border-2 border-slate-300 hover:border-indigo-300 text-slate-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-colors duration-300 whitespace-nowrap">
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumServiceDescription;