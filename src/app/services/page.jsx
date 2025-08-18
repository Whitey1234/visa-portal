'use client'
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  MapPin, 
  Briefcase, 
  Heart, 
  Plane,
  ChevronDown,
  Star,
  ArrowRight,
  CheckCircle,
  X,
  GraduationCap,
  Globe,
  Shield,
  TrendingUp,
  Users
} from 'lucide-react';

const VisaServicesSection = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProcessingTime, setSelectedProcessingTime] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Enhanced color scheme variants
  const colorVariants = {
    transit: {
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      accent: 'bg-blue-500',
      lightAccent: 'bg-blue-100'
    },
    family: {
      bg: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      border: 'border-indigo-200',
      text: 'text-indigo-900',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      icon: <Heart className="w-6 h-6 text-indigo-600" />,
      accent: 'bg-indigo-500',
      lightAccent: 'bg-indigo-100'
    },
    employment: {
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      gradient: 'from-emerald-500 via-teal-500 to-green-500',
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
      accent: 'bg-emerald-500',
      lightAccent: 'bg-emerald-100'
    },
    tourism: {
      bg: 'bg-gradient-to-br from-cyan-50 to-sky-50',
      border: 'border-cyan-200',
      text: 'text-cyan-900',
      gradient: 'from-cyan-500 via-sky-500 to-blue-500',
      icon: <Plane className="w-6 h-6 text-cyan-600" />,
      accent: 'bg-cyan-500',
      lightAccent: 'bg-cyan-100'
    },
    business: {
      bg: 'bg-gradient-to-br from-violet-50 to-purple-50',
      border: 'border-violet-200',
      text: 'text-violet-900',
      gradient: 'from-violet-500 via-purple-500 to-indigo-500',
      icon: <Briefcase className="w-6 h-6 text-violet-600" />,
      accent: 'bg-violet-500',
      lightAccent: 'bg-violet-100'
    },
    education: {
      bg: 'bg-gradient-to-br from-teal-50 to-cyan-50',
      border: 'border-teal-200',
      text: 'text-teal-900',
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
      accent: 'bg-teal-500',
      lightAccent: 'bg-teal-100'
    }
  };

  const mockVisaServices = [
    {
      id: 1,
      name: 'Transit Visa',
      category: 'transit',
      description: 'Seamless transit visa processing for layovers and connecting flights through major international airports with expedited service.',
      processingTime: '1-3 business days',
      price: '$99',
      originalPrice: '$149',
      countries: ['UAE', 'Singapore', 'Qatar', 'Germany', 'Netherlands'],
      requirements: ['Valid Passport', 'Confirmed Tickets', 'Destination Visa', 'Travel Insurance'],
      successRate: '99%',
      priority: 'urgent',
      popular: true,
      clientsServed: '15K+',
      ...colorVariants.transit
    },
    {
      id: 2,
      name: 'Family Visa',
      category: 'family',
      description: 'Comprehensive family reunion visa services with personalized guidance to help you reunite with loved ones abroad.',
      processingTime: '10-15 business days',
      price: '$399',
      originalPrice: '$499',
      countries: ['USA', 'UK', 'Canada', 'Australia', 'New Zealand'],
      requirements: ['Relationship Proof', 'Sponsor Documents', 'Financial Evidence', 'Medical Reports'],
      successRate: '96%',
      priority: 'standard',
      popular: false,
      clientsServed: '8K+',
      ...colorVariants.family
    },
    {
      id: 3,
      name: 'Work Visa',
      category: 'employment',
      description: 'Professional work authorization services for employment opportunities abroad with end-to-end support and documentation.',
      processingTime: '15-25 business days',
      price: '$699',
      originalPrice: '$899',
      countries: ['USA', 'Canada', 'Australia', 'UK', 'Germany'],
      requirements: ['Job Offer', 'Certificates', 'Experience Letters', 'Medical Exam'],
      successRate: '97%',
      priority: 'extended',
      popular: true,
      clientsServed: '12K+',
      ...colorVariants.employment
    },
    {
      id: 4,
      name: 'Tourist Visa',
      category: 'tourism',
      description: 'Perfect for leisure travel, sightseeing, and visiting friends with fast-track processing and travel consultation.',
      processingTime: '5-8 business days',
      price: '$199',
      originalPrice: '$249',
      countries: ['USA', 'UK', 'Australia', 'Japan', 'South Korea'],
      requirements: ['Valid Passport', 'Travel Itinerary', 'Hotel Bookings', 'Bank Statements'],
      successRate: '98%',
      priority: 'standard',
      popular: true,
      clientsServed: '25K+',
      ...colorVariants.tourism
    },
    {
      id: 5,
      name: 'Business Visa',
      category: 'business',
      description: 'Streamlined business visa processing for corporate meetings, conferences, and business development opportunities.',
      processingTime: '3-6 business days',
      price: '$299',
      originalPrice: '$399',
      countries: ['USA', 'UK', 'Singapore', 'UAE', 'Switzerland'],
      requirements: ['Business Invitation', 'Company Docs', 'Financials', 'Meeting Details'],
      successRate: '99%',
      priority: 'urgent',
      popular: false,
      clientsServed: '10K+',
      ...colorVariants.business
    },
    {
      id: 6,
      name: 'Student Visa',
      category: 'education',
      description: 'Educational visa services for students pursuing academic programs abroad with scholarship guidance and support.',
      processingTime: '12-20 business days',
      price: '$499',
      originalPrice: '$649',
      countries: ['USA', 'UK', 'Canada', 'Australia', 'Ireland'],
      requirements: ['University Acceptance', 'Bank Statements', 'Transcripts', 'Health Insurance'],
      successRate: '95%',
      priority: 'extended',
      popular: true,
      clientsServed: '18K+',
      ...colorVariants.education
    }
  ];

  // Load services
  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1200));
        setServices(mockVisaServices);
        setFilteredServices(mockVisaServices);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  // Filter services
  useEffect(() => {
    let filtered = services;
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.countries.some(country => country.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedProcessingTime !== 'all') {
      filtered = filtered.filter(service => service.priority === selectedProcessingTime);
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedProcessingTime, services]);

  const categories = [
    { value: 'all', label: 'All Services', count: services.length },
    { value: 'transit', label: 'Transit Visa', count: services.filter(s => s.category === 'transit').length },
    { value: 'family', label: 'Family Visa', count: services.filter(s => s.category === 'family').length },
    { value: 'employment', label: 'Work Visa', count: services.filter(s => s.category === 'employment').length },
    { value: 'tourism', label: 'Tourist Visa', count: services.filter(s => s.category === 'tourism').length },
    { value: 'business', label: 'Business Visa', count: services.filter(s => s.category === 'business').length },
    { value: 'education', label: 'Student Visa', count: services.filter(s => s.category === 'education').length }
  ];

  const processingTimeOptions = [
    { value: 'all', label: 'Any Processing Time' },
    { value: 'urgent', label: 'Urgent (1-6 days)' },
    { value: 'standard', label: 'Standard (7-15 days)' },
    { value: 'extended', label: 'Extended (15+ days)' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Loading Header */}
        <div className="py-16 px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>
        </div>
        
        {/* Loading Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                <div className="h-20 bg-gray-200 rounded-xl mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl  bg-gradient-to-r from-indigo-900 via-blue-500 to-blue-500 bg-clip-text text-transparent font-bold  mb-6 leading-tight">
            Your Gateway to 
            <span className= " bg-gradient-to-r from-orange-500 via-blue-500 to-blue-500 bg-clip-text text-transparent pl-3" >Global Opportunities</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Professional visa services with guaranteed success rates and lightning-fast processing times
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: <Globe className="w-6 h-6" />, value: '180+', label: 'Countries' },
              { icon: <Users className="w-6 h-6" />, value: '50K+', label: 'Happy Clients' },
              { icon: <Shield className="w-6 h-6" />, value: '98%', label: 'Success Rate' },
              { icon: <TrendingUp className="w-6 h-6" />, value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-12 border border-white/50">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search visa services, countries, or requirements..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg bg-white/50 backdrop-blur-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              <Filter className="w-5 h-5" />
              <span>Advanced Filters</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-8 pt-8 border-t border-gray-200 animate-in slide-in-from-top duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Visa Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label} {category.count > 0 && `(${category.count})`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Processing Time</label>
                  <select
                    value={selectedProcessingTime}
                    onChange={(e) => setSelectedProcessingTime(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
                  >
                    {processingTimeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            {filteredServices.length} Premium Visa Services
          </h2>
          {(searchTerm || selectedCategory !== 'all' || selectedProcessingTime !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedProcessingTime('all');
              }}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Clear all filters
            </button>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${service.border} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${hoveredCard === service.id ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className={`${service.bg} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${service.text}`}>{service.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{service.successRate} Success</span>
                        <span className="text-gray-500">•</span>
                        <Users className="w-4 h-4" />
                        <span>{service.clientsServed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="flex items-center gap-2 text-sm text-gray-700 mb-6">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="font-semibold">Processing: {service.processingTime}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3">Available Countries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.countries.slice(0, 4).map((country, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 ${service.lightAccent} ${service.text} text-xs font-medium rounded-full border ${service.border}`}
                      >
                        {country}
                      </span>
                    ))}
                    {service.countries.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{service.countries.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-700 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {service.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">starting from</div>
                  </div>
                  <button className={`group flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105`}>
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Search className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No visa services found</h3>
            <p className="text-gray-500 mb-8 text-lg">
              Try adjusting your search or filter criteria to find the perfect visa service
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedProcessingTime('all');
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default VisaServicesSection;