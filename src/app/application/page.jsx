'use client'
import React, { useState } from 'react';
import { Save, CheckCircle2, Circle, User, FileText, CreditCard } from 'lucide-react';

const VisaApplicationPage = () => {
  const [applicationData, setApplicationData] = useState({
    name: '',
    passportNo: '',
    visaType: '',
    email: '',
    phone: '',
    nationality: ''
  });

  const [applicationProgress, setApplicationProgress] = useState({
    personalDetails: false,
    documentUpload: false,
    biometrics: false,
    paymentProcessed: false,
    backgroundCheck: false,
    interviewScheduled: false,
    applicationReview: false,
    visaApproval: false
  });

  const [savedData, setSavedData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const visaTypes = [
    'Tourist Visa',
    'Business Visa',
    'Student Visa',
    'Work Visa',
    'Transit Visa',
    'Medical Visa'
  ];

  const progressSteps = [
    { key: 'personalDetails', label: 'Personal Details Submitted', icon: User },
    { key: 'documentUpload', label: 'Documents Uploaded', icon: FileText },
    { key: 'biometrics', label: 'Biometric Data Collected', icon: CheckCircle2 },
    { key: 'paymentProcessed', label: 'Payment Processed', icon: CreditCard },
    { key: 'backgroundCheck', label: 'Background Verification', icon: CheckCircle2 },
    { key: 'interviewScheduled', label: 'Interview Scheduled', icon: CheckCircle2 },
    { key: 'applicationReview', label: 'Application Under Review', icon: CheckCircle2 },
    { key: 'visaApproval', label: 'Visa Decision', icon: CheckCircle2 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProgressChange = (stepKey) => {
    setApplicationProgress(prev => ({
      ...prev,
      [stepKey]: !prev[stepKey]
    }));
  };

  const handleSaveApplication = () => {
    if (!applicationData.name || !applicationData.passportNo || !applicationData.visaType) {
      alert('Please fill in all required fields (Name, Passport No., Visa Type)');
      return;
    }

    const newApplication = {
      id: Date.now(),
      ...applicationData,
      progress: applicationProgress,
      submittedAt: new Date().toISOString(),
      status: getApplicationStatus()
    };

    setSavedData(prev => [...prev, newApplication]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getApplicationStatus = () => {
    const completedSteps = Object.values(applicationProgress).filter(Boolean).length;
    const totalSteps = Object.keys(applicationProgress).length;
    
    if (completedSteps === 0) return 'Not Started';
    if (completedSteps === totalSteps) return 'Completed';
    if (completedSteps >= totalSteps * 0.7) return 'Under Review';
    if (completedSteps >= totalSteps * 0.4) return 'In Progress';
    return 'Started';
  };

  const getProgressPercentage = () => {
    const completedSteps = Object.values(applicationProgress).filter(Boolean).length;
    return Math.round((completedSteps / Object.keys(applicationProgress).length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-300  text-white  p-6">
            <h1 className="text-3xl font-bold mb-2 ">Visa Application Management</h1>
            <p className="text-blue-100">Complete your visa application and track progress</p>
          </div>

          <div className="p-6 space-y-8">
            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="text-green-800 font-medium">Application saved successfully!</span>
              </div>
            )}

            {/* Application Form */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 text-blue-600" size={20} />
                Applicant Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passport Number *
                  </label>
                  <input
                    type="text"
                    name="passportNo"
                    value={applicationData.passportNo}
                    onChange={handleInputChange}
                    placeholder="Enter passport number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Visa Type *
                  </label>
                  <select
                    name="visaType"
                    value={applicationData.visaType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select visa type</option>
                    {visaTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={applicationData.nationality}
                    onChange={handleInputChange}
                    placeholder="Enter nationality"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <CheckCircle2 className="mr-2 text-blue-600" size={20} />
                  Application Progress
                </h2>
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {getProgressPercentage()}% Complete
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {progressSteps.map((step) => {
                  const Icon = step.icon;
                  const isCompleted = applicationProgress[step.key];
                  
                  return (
                    <label 
                      key={step.key} 
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                        isCompleted 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => handleProgressChange(step.key)}
                        className="sr-only"
                      />
                      {isCompleted ? (
                        <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                      ) : (
                        <Circle className="text-gray-400 flex-shrink-0" size={20} />
                      )}
                      <span className={`text-sm ${isCompleted ? 'text-blue-800 font-medium' : 'text-gray-600'}`}>
                        {step.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSaveApplication}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
              >
                <Save size={18} />
                <span>Save Application</span>
              </button>
            </div>

            {/* Saved Applications */}
            {savedData.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Saved Applications</h2>
                <div className="space-y-3">
                  {savedData.map((app) => (
                    <div key={app.id} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-gray-800">{app.name}</h3>
                          <p className="text-sm text-gray-600">
                            {app.visaType} - Passport: {app.passportNo}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          app.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          app.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                          app.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>
                          Progress: {Object.values(app.progress).filter(Boolean).length}/8 steps
                        </span>
                        <span>
                          Saved: {new Date(app.submittedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaApplicationPage;