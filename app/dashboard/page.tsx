"use client";
import { useState, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { SparklesIcon, ArrowDownTrayIcon, EyeIcon, WrenchIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import ResumeTemplate from '../components/ResumeTemplate';

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState('personal');
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const [resumeData, setResumeData] = useState({
    personal: {
      photo: null,
      name: '',
      surname: '',
      jobTitle: '',
      phone: '',
      email: '',
      linkedin: '',
      website: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleAddExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handleInputChange('personal', 'photo', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeResume = () => {
    // AI analysis implementation would go here
    alert('Analyzing your resume with AI...');
  };

  const checkATS = () => {
    // ATS check implementation would go here
    alert('Checking ATS compatibility...');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Panel - Form */}
      <div className="w-1/2 p-8 overflow-y-auto bg-white">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Resume Builder</h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => setShowTemplateSelector(!showTemplateSelector)}
              className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
            >
              <EyeIcon className="h-5 w-5 mr-2" />
              Templates
            </button>
            <PDFDownloadLink 
              document={<ResumeTemplate data={resumeData} template={selectedTemplate} />} 
              fileName="resume.pdf"
              className="flex items-center px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download PDF
            </PDFDownloadLink>
          </div>
        </div>

        {/* Template Selector Modal */}
        {showTemplateSelector && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-4xl">
              <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((template) => (
                  <div 
                    key={template} 
                    className={`border-2 rounded-lg cursor-pointer ${selectedTemplate === template ? 'border-indigo-500' : 'border-gray-200'}`}
                    onClick={() => {
                      setSelectedTemplate(template);
                      setShowTemplateSelector(false);
                    }}
                  >
                    <img 
                      src={`/templates/template-${template}.jpg`} 
                      alt={`Template ${template}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowTemplateSelector(false)}
                className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b mb-6">
          {['personal', 'experience', 'education', 'skills'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Form Sections */}
        <div className="space-y-6">
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  {resumeData.personal.photo ? (
                    <img src={resumeData.personal.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span>Photo</span>
                    </div>
                  )}
                </div>
                <div>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    className="hidden"
                    accept="image/*"
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                  >
                    {resumeData.personal.photo ? 'Change Photo' : 'Add Photo'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={resumeData.personal.name}
                    onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
                  <input
                    type="text"
                    value={resumeData.personal.surname}
                    onChange={(e) => handleInputChange('personal', 'surname', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  value={resumeData.personal.jobTitle}
                  onChange={(e) => handleInputChange('personal', 'jobTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    value={resumeData.personal.phone}
                    onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={resumeData.personal.email}
                    onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn (optional)</label>
                  <input
                    type="text"
                    value={resumeData.personal.linkedin}
                    onChange={(e) => handleInputChange('personal', 'linkedin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website (optional)</label>
                  <input
                    type="url"
                    value={resumeData.personal.website}
                    onChange={(e) => handleInputChange('personal', 'website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                <textarea
                  value={resumeData.personal.summary}
                  onChange={(e) => handleInputChange('personal', 'summary', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={exp.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={handleAddExperience}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                + Add Experience
              </button>
            </div>
          )}

          {/* Similar structure for education and skills tabs */}
        </div>

        {/* AI Tools Section */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-4">AI Tools</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={analyzeResume}
              className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SparklesIcon className="h-5 w-5 mr-2 text-indigo-500" />
              <span>AI Resume Analysis</span>
            </button>
            <button 
              onClick={checkATS}
              className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <DocumentCheckIcon className="h-5 w-5 mr-2 text-green-500" />
              <span>ATS Check</span>
            </button>
            <button 
              onClick={() => {}}
              className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <WrenchIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Optimize Content</span>
            </button>
            <button 
              onClick={() => {}}
              className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ShieldCheckIcon className="h-5 w-5 mr-2 text-purple-500" />
              <span>Privacy Check</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div className="w-1/2 p-8 overflow-y-auto bg-gray-50">
        <div className="sticky top-0 bg-gray-50 py-4 mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Resume Preview</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded-md text-sm">Template {selectedTemplate}</button>
            <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm">Save Draft</button>
          </div>
        </div>
        
        {/* This is where the live preview would render */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          {/* In a real implementation, you would render the preview here */}
          {/* For now, we'll show a placeholder */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-full min-h-[800px] flex items-center justify-center text-gray-400">
            Live Resume Preview (Template {selectedTemplate})
          </div>
        </div>
      </div>
    </div>
  );
}