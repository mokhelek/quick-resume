"use client";
import { useState, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { SparklesIcon, ArrowDownTrayIcon, EyeIcon, WrenchIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { ResumeTemplate } from '../components/ResumeTemplate';
import ResumePreview from '../components/ResumePreview';
import { ResumeData, ExperienceItem, EducationItem } from '../types/resume';  


export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'education' | 'skills'>('personal');
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [showTemplateSelector, setShowTemplateSelector] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<ResumeData>({
    personal: {
      photo: null,
      name: '',
      surname: '',
      jobTitle: 'Software Engineer',
      phone: '',
      email: '',
      linkedin: '',
      website: '',
      summary: 'Experienced software engineer with expertise in modern web technologies.'
    },
    experience: [{
      id: 1,
      company: 'Tech Corp',
      position: 'Senior Developer',
      startDate: '2020',
      endDate: 'Present',
      description: 'Lead development team building innovative solutions.'
    }],
    education: [{
      id: 1,
      institution: 'University of Tech',
      degree: 'B.Sc Computer Science',
      field: 'Software Engineering',
      startDate: '2016',
      endDate: '2020'
    }],
    skills: ['JavaScript', 'React', 'TypeScript', 'Node.js']
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (section: keyof ResumeData, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleExperienceChange = (index: number, field: keyof ExperienceItem, value: string) => {
    setResumeData(prev => {
      const updatedExperience = [...prev.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value
      };
      return {
        ...prev,
        experience: updatedExperience
      };
    });
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

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          handleInputChange('personal', 'photo', event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const analyzeResume = () => {
    alert('Analyzing your resume with AI...');
  };

  const checkATS = () => {
    alert('Checking ATS compatibility...');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Panel - Form */}
      <div className="w-1/2 p-8 overflow-y-auto bg-white border-r border-gray-200">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Resume Builder</h1>
          <div className="flex space-x-3">
            <button 
              onClick={() => setShowTemplateSelector(true)}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700"
            >
              <EyeIcon className="h-5 w-5 mr-2" />
              Templates
            </button>
            <PDFDownloadLink 
              document={<ResumeTemplate data={resumeData} template={selectedTemplate} />} 
              fileName="resume.pdf"
              className="flex items-center px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors shadow-md"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download PDF
            </PDFDownloadLink>
          </div>
        </div>

        {/* Template Selector Modal */}
        {showTemplateSelector && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((template) => (
                  <div 
                    key={template} 
                    className={`border-2 rounded-lg cursor-pointer transition-all ${
                      selectedTemplate === template ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200 hover:border-gray-300'
                    }`}
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
                    <div className="p-2 text-center font-medium">
                      Template {template}
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowTemplateSelector(false)}
                className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b mb-6">
          {(['personal', 'experience', 'education', 'skills'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === tab 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Form Sections */}
        <div className="space-y-8">
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div 
                  className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden border-2 border-gray-200 cursor-pointer relative"
                  onClick={triggerFileInput}
                >
                  {resumeData.personal.photo ? (
                    <img src={resumeData.personal.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-sm">Add Photo</span>
                    </div>
                  )}
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  className="hidden"
                  accept="image/*"
                />
                <div>
                  <button
                    onClick={triggerFileInput}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                  >
                    {resumeData.personal.photo ? 'Change Photo' : 'Upload Photo'}
                  </button>
                  <p className="text-xs text-gray-500 mt-1">Recommended: Square image, 300x300px</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={resumeData.personal.name}
                    onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
                  <input
                    type="text"
                    value={resumeData.personal.surname}
                    onChange={(e) => handleInputChange('personal', 'surname', e.target.value)}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  value={resumeData.personal.jobTitle}
                  onChange={(e) => handleInputChange('personal', 'jobTitle', e.target.value)}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    value={resumeData.personal.phone}
                    onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={resumeData.personal.email}
                    onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                  <input
                    type="text"
                    value={resumeData.personal.linkedin}
                    onChange={(e) => handleInputChange('personal', 'linkedin', e.target.value)}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="url"
                    value={resumeData.personal.website}
                    onChange={(e) => handleInputChange('personal', 'website', e.target.value)}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                <textarea
                  value={resumeData.personal.summary}
                  onChange={(e) => handleInputChange('personal', 'summary', e.target.value)}
                  rows={4}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>
            </div>
          )}

          {/* Similar structure for other tabs */}
        </div>

        {/* AI Tools Section - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-1/2 bg-white border-t border-gray-200 p-4 shadow-lg">
          <h3 className="text-lg font-medium mb-3 text-gray-800">AI Tools</h3>
          <div className="grid grid-cols-4 gap-3">
            <button 
              onClick={analyzeResume}
              className="flex flex-col items-center p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-indigo-100 rounded-full mb-2 group-hover:bg-indigo-200 transition-colors">
                <SparklesIcon className="h-5 w-5 text-indigo-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">AI Analysis</span>
            </button>
            
            <button 
              onClick={checkATS}
              className="flex flex-col items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-green-100 rounded-full mb-2 group-hover:bg-green-200 transition-colors">
                <DocumentCheckIcon className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">ATS Check</span>
            </button>
            
            <button 
              onClick={() => {}}
              className="flex flex-col items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-blue-100 rounded-full mb-2 group-hover:bg-blue-200 transition-colors">
                <WrenchIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">Optimize</span>
            </button>
            
            <button 
              onClick={() => {}}
              className="flex flex-col items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
            >
              <div className="p-2 bg-purple-100 rounded-full mb-2 group-hover:bg-purple-200 transition-colors">
                <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">Privacy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div className="w-1/2 p-8 overflow-y-auto bg-gray-50">
        <div className="sticky top-0 bg-gray-50 py-4 mb-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Resume Preview</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium">
              Template {selectedTemplate}
            </span>
            <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition-colors">
              Save Draft
            </button>
          </div>
        </div>
        
        {/* Live Preview */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <ResumePreview data={resumeData} template={selectedTemplate} />
        </div>
      </div>
    </div>
  );
}