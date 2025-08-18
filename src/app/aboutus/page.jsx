'use client'
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Shield, 
  Award, 
  Users, 
  TrendingUp, 
  Heart, 
  CheckCircle, 
  Star,
  MapPin,
  Clock,
  Target,
  Zap,
  ArrowRight,
  Play,
  Quote,
  Calendar,
  Building,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <Globe className="w-8 h-8" />, value: '180+', label: 'Countries Served', color: 'from-blue-500 to-cyan-500' },
    { icon: <Users className="w-8 h-8" />, value: '50,000+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
    { icon: <Award className="w-8 h-8" />, value: '98%', label: 'Success Rate', color: 'from-emerald-500 to-teal-500' },
    { icon: <Shield className="w-8 h-8" />, value: '15+', label: 'Years Experience', color: 'from-orange-500 to-red-500' }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Security',
      description: 'Your documents and personal information are handled with the highest level of security and confidentiality.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Speed & Efficiency',
      description: 'Fast-track processing with cutting-edge technology to get your visa approved in record time.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personal Care',
      description: 'Dedicated support team providing personalized guidance throughout your entire visa journey.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Success Focus',
      description: 'Proven track record with industry-leading success rates across all visa categories.',
      gradient: 'from-emerald-500 to-green-500'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://i.ibb.co.com/j93Tmx2t/pexels-polina-tankilevitch-6929164.jpg',
      bio: 'Former immigration lawyer with 15+ years of experience in international visa processing.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Operations expert who has streamlined visa processes for Fortune 500 companies.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Priya Sharma',
      role: 'Legal Affairs Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Immigration law specialist with expertise in complex visa cases and regulations.',
      gradient: 'from-violet-500 to-pink-500'
    },
    {
      name: 'James Thompson',
      role: 'Client Relations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Customer experience expert dedicated to ensuring seamless client journeys.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Emma Johnson',
      role: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      content: 'Absolutely exceptional service! They handled my complex work visa application with such professionalism. Got approved in just 12 days!',
      rating: 5,
      country: 'UK to USA'
    },
    {
      name: 'Carlos Martinez',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      content: 'The family visa process was stress-free thanks to their expert guidance. Highly recommend to anyone looking for reliable visa services.',
      rating: 5,
      country: 'Spain to Canada'
    },
    {
      name: 'Aisha Patel',
      role: 'Graduate Student',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      content: 'They made my student visa application so simple. The team was incredibly supportive throughout the entire process.',
      rating: 5,
      country: 'India to Australia'
    }
  ];

  const timeline = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to simplify visa processes' },
    { year: '2012', title: 'Global Expansion', description: 'Extended services to 50+ countries' },
    { year: '2016', title: 'Digital Innovation', description: 'Launched online application platform' },
    { year: '2020', title: '25K Milestone', description: 'Served over 25,000 satisfied clients' },
    { year: '2024', title: 'AI Integration', description: 'Implemented AI-powered document verification' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl font-bold  mb-6 leading-tight">
              Your Trusted 
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent"> Visa Partner</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been transforming dreams into reality by making visa applications simple, 
              fast, and stress-free for thousands of travelers worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href={'/application'} className="px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Journey
              </Link>
              <Link href={'/aboutus'} className="flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Our Story
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and driven by the desire to connect people with opportunities worldwide
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 m-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-400 to-blue-600 text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/50">
            {activeTab === 'mission' && (
              <div className="text-center">
                <Target className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  To democratize global mobility by providing accessible, reliable, and efficient visa services 
                  that bridge cultures and create opportunities for personal and professional growth worldwide.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center">
                <Globe className="w-16 h-16 mx-auto mb-6 text-purple-600" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  To become the world's most trusted visa services company, where every application is processed 
                  with care, every client feels supported, and every dream of international travel becomes reality.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${value.gradient} text-white shadow-lg flex-shrink-0`}>
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global success - here's how we've grown to serve clients worldwide
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border border-gray-200 ${index % 2 === 0 ? 'mr-auto ml-8' : 'ml-auto mr-8'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-bold text-blue-600">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to making your visa journey smooth and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who trusted us with their visa applications
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-white/50">
              <Quote className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
              <div className="text-center">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-blue-600 font-semibold">{testimonials[currentTestimonial].role}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].country}</p>
                  </div>
                </div>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-800 via-blue-400 to-indigo-800 rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied clients who trusted us with their visa applications
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-2" />
                <span className="font-semibold">+1 (555) 123-4567</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-2" />
                <span className="font-semibold">hello@visaservices.com</span>
              </div>
              <div className="flex flex-col items-center">
                <Building className="w-8 h-8 mb-2" />
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;