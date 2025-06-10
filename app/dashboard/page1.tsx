"use client";
import { useState, useRef, useEffect } from 'react';
import { SparklesIcon, ArrowDownTrayIcon, EyeIcon, WrenchIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { ResumeTemplate } from '../components/ResumeTemplate';
import ResumePreview from '../components/ResumePreview';
import { ResumeData, ExperienceItem, EducationItem } from '../types/resume';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { PDFDownloadLink } from '@react-pdf/renderer';


function PDFDownloadWrapper({ data, template }: { data: ResumeData; template: number }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return (
    <button className="flex items-center px-4 py-2.5 bg-indigo-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
      <ArrowDownTrayIcon className="h-5 w-5 mr-2 animate-pulse" />
      <span className="text-sm font-medium">Preparing PDF...</span>
    </button>
  );

  return (
    <PDFDownloadLink
      document={<ResumeTemplate data={data} template={template} />}
      fileName={`${data.personal.name}_${data.personal.surname}_Resume.pdf`}
      className="flex items-center px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:from-indigo-600 hover:to-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
    >
      <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
      <span>Export as PDF</span>
    </PDFDownloadLink>
  );
}


export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'education' | 'qualifications' | 'skills'>('personal');
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);
  const [showTemplateSelector, setShowTemplateSelector] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<ResumeData>({
    personal: {
      photo: null,
      name: 'Katleho',
      surname: 'Mokhele',
      jobTitle: 'Software Engineer',
      phone: '+27 680 846 1508',
      email: 'myemail@getyouremail.com',
      linkedin: 'Cape Town',
      website: 'https://my-portfolio.com',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque sapien non luctus tincidunt. Vivamus vel ligula convallis, tincidunt nisl ut, gravida nulla. Cras quis venenatis purus. Sed auctor, sapien eget sagittis pretium, urna nulla fermentum nisl, nec tincidunt justo ante sed diam. Curabitur viverra diam vitae dictum accumsan. Etiam in venenatis nisi. Etiam nunc metus, viverra eget tincidunt non, elementum at dolor. Pellentesque vel rhoncus augue. .'
    },
    experience: [{
      id: 1,
      company: 'Tech Corp',
      position: 'Senior Developer',
      startDate: '2020',
      endDate: 'Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque sapien non luctus tincidunt. Vivamus vel ligula convallis, tincidunt nisl ut, gravida nulla. Cras quis venenatis purus. Sed auctor, sapien eget sagittis pretium, urna nulla fermentum nisl, nec tincidunt justo ante sed diam. Curabitur viverra diam vitae dictum accumsan. Etiam in venenatis nisi. Etiam nunc metus, viverra eget tincidunt non, elementum at dolor. Pellentesque vel rhoncus augue. '
    },
    {
      id: 2,
      company: 'Tech Corp',
      position: 'Senior Developer',
      startDate: '2020',
      endDate: 'Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque sapien non luctus tincidunt. Vivamus vel ligula convallis, tincidunt nisl ut, gravida nulla. Cras quis venenatis purus. Sed auctor, sapien eget sagittis pretium, urna nulla fermentum nisl, nec tincidunt justo ante sed diam. Curabitur viverra diam vitae dictum accumsan. Etiam in venenatis nisi. Etiam nunc metus, viverra eget tincidunt non, elementum at dolor. Pellentesque vel rhoncus augue. '
    },
    {
      id: 3,
      company: 'Tech Corp',
      position: 'Senior Developer',
      startDate: '2020',
      endDate: 'Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque sapien non luctus tincidunt. Vivamus vel ligula convallis, tincidunt nisl ut, gravida nulla. Cras quis venenatis purus. Sed auctor, sapien eget sagittis pretium, urna nulla fermentum nisl, nec tincidunt justo ante sed diam. Curabitur viverra diam vitae dictum accumsan. Etiam in venenatis nisi. Etiam nunc metus, viverra eget tincidunt non, elementum at dolor. Pellentesque vel rhoncus augue. '
    }],
    education: [{
      id: 1,
      institution: 'University of Tech',
      degree: 'B.Sc Computer Science',
      field: 'Software Engineering',
      startDate: '2016',
      endDate: '2020'
    }, {
      id: 2,
      institution: 'University of Tech',
      degree: 'B.Sc Computer Science',
      field: 'Software Engineering',
      startDate: '2016',
      endDate: '2020'
    },
    {
      id: 3,
      institution: 'University of Tech',
      degree: 'B.Sc Computer Science',
      field: 'Software Engineering',
      startDate: '2016',
      endDate: '2020'
    }],
    qualifications: [{
      id: 1,
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2021'
    }, {
      id: 2,
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2021'
    }, {
      id: 3,
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2021'
    }],
    skills: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'JavaScript', 'React', 'TypeScript', 'Node.js']
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helper functions
  const handleArrayChange = <T extends {}>(
    array: T[],
    index: number,
    field: keyof T,
    value: any
  ): T[] => {
    return array.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
  };

  const handleAddItem = <T extends {}>(array: T[], newItem: T): T[] => {
    return [...array, newItem];
  };

  const handleRemoveItem = <T extends {}>(array: T[], index: number): T[] => {
    return array.filter((_, i) => i !== index);
  };

  const handleInputChange = (section: keyof ResumeData, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSkillChange = (index: number, value: string) => {
    setResumeData(prev => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = value;
      return {
        ...prev,
        skills: updatedSkills
      };
    });
  };

  const handleAddSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const handleRemoveSkill = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      skills: handleRemoveItem(prev.skills, index)
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
    fileInputRef.current?.click();
  };

  const analyzeResume = () => {
    alert('Analyzing your resume with AI...');
  };

  const checkATS = () => {
    alert('Checking ATS compatibility...');
  };

  return (
    <div className="flex h-screen bg-gray-50 w-full" >
      {/* Left Panel - Form */}
      <div className="w-[47%] p-6 overflow-y-auto bg-white border-r border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="h-7 w-7 text-indigo-400" />
            <span className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 font-['Space_Grotesk']">
              ResuAI
            </span>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowTemplateSelector(true)}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700"
            >
              <EyeIcon className="h-5 w-5 mr-2" />
              Templates
            </button>
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
                    className={`border-2 rounded-lg cursor-pointer transition-all ${selectedTemplate === template ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200 hover:border-gray-300'}`}
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
          {(['personal', 'experience', 'education', 'skills', 'qualifications'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${activeTab === tab
                ? 'text-indigo-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Form Sections */}
        <div className="space-y-6 pb-16">

          {activeTab === 'personal' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div
                  className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden border-2 border-gray-200 cursor-pointer relative group"
                  onClick={triggerFileInput}
                >
                  {resumeData.personal.photo ? (
                    <img src={resumeData.personal.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:text-gray-500 transition-colors">
                      <span className="text-sm">Add Photo</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-medium">Change</span>
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  className="hidden"
                  accept="image/*"
                />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Recommended: Square image, 300x300px</p>
                  <button
                    onClick={triggerFileInput}
                    className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                  >
                    {resumeData.personal.photo ? 'Change Photo' : 'Upload Photo'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={resumeData.personal.name}
                    onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
                  <input
                    type="text"
                    value={resumeData.personal.surname}
                    onChange={(e) => handleInputChange('personal', 'surname', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  value={resumeData.personal.jobTitle}
                  onChange={(e) => handleInputChange('personal', 'jobTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    value={resumeData.personal.phone}
                    onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={resumeData.personal.email}
                    onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="url"
                    value={resumeData.personal.website}
                    onChange={(e) => handleInputChange('personal', 'website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                <textarea
                  value={resumeData.personal.summary}
                  onChange={(e) => handleInputChange('personal', 'summary', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-4">
              {resumeData.experience.map((exp, index) => (
                <div key={exp.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-800">Experience #{index + 1}</h3>
                    <button
                      onClick={() => setResumeData(prev => ({
                        ...prev,
                        experience: handleRemoveItem(prev.experience, index)
                      }))}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          experience: handleArrayChange(prev.experience, index, 'company', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          experience: handleArrayChange(prev.experience, index, 'position', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          experience: handleArrayChange(prev.experience, index, 'startDate', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          experience: handleArrayChange(prev.experience, index, 'endDate', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        experience: handleArrayChange(prev.experience, index, 'description', e.target.value)
                      }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => setResumeData(prev => ({
                  ...prev,
                  experience: handleAddItem(prev.experience, {
                    id: Date.now(),
                    company: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                  })
                }))}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Experience
              </button>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={edu.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-800">Education #{index + 1}</h3>
                    <button
                      onClick={() => setResumeData(prev => ({
                        ...prev,
                        education: handleRemoveItem(prev.education, index)
                      }))}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          education: handleArrayChange(prev.education, index, 'institution', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          education: handleArrayChange(prev.education, index, 'degree', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          education: handleArrayChange(prev.education, index, 'field', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                          type="text"
                          value={edu.startDate}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            education: handleArrayChange(prev.education, index, 'startDate', e.target.value)
                          }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input
                          type="text"
                          value={edu.endDate}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            education: handleArrayChange(prev.education, index, 'endDate', e.target.value)
                          }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setResumeData(prev => ({
                  ...prev,
                  education: handleAddItem(prev.education, {
                    id: Date.now(),
                    institution: '',
                    degree: '',
                    field: '',
                    startDate: '',
                    endDate: ''
                  })
                }))}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Education
              </button>
            </div>
          )}

          {activeTab === 'qualifications' && (
            <div className="space-y-4">
              {resumeData.qualifications.map((qual, index) => (
                <div key={qual.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-800">Qualification #{index + 1}</h3>
                    <button
                      onClick={() => setResumeData(prev => ({
                        ...prev,
                        qualifications: handleRemoveItem(prev.qualifications, index)
                      }))}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={qual.name}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          qualifications: handleArrayChange(prev.qualifications, index, 'name', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issuer</label>
                      <input
                        type="text"
                        value={qual.issuer}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          qualifications: handleArrayChange(prev.qualifications, index, 'issuer', e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date Obtained</label>
                    <input
                      type="text"
                      value={qual.date}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        qualifications: handleArrayChange(prev.qualifications, index, 'date', e.target.value)
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => setResumeData(prev => ({
                  ...prev,
                  qualifications: handleAddItem(prev.qualifications, {
                    id: Date.now(),
                    name: '',
                    issuer: '',
                    date: ''
                  })
                }))}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Qualification
              </button>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-3">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddSkill}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Skill
              </button>
            </div>
          )}

        </div>
      </div>



      <div className="w-[6%] max-w-[60px] flex flex-col items-center py-6 bg-gray-50 border-l border-r border-gray-200">
        <div className="sticky top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 items-center">
          <div className="relative group">
            <button
              onClick={analyzeResume}
              className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <SparklesIcon className="h-5 w-5 text-indigo-600 group-hover:text-indigo-700" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-indigo-600 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              AI Analysis
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={checkATS}
              className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <DocumentCheckIcon className="h-5 w-5 text-green-600 group-hover:text-green-700" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              ATS Check
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-600 rotate-45"></div>
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={() => { }}
              className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <WrenchIcon className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Optimize
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rotate-45"></div>
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={() => { }}
              className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <ShieldCheckIcon className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-purple-600 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Privacy
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-600 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>



      {/* Right Panel - Preview */}
      <div className="w-[47%] pl-3 pr-0 overflow-y-auto bg-gray-50 custom-scroll">
        <div className="sticky px-3 top-0 bg-gray-50 py-4 mb-6 flex justify-between items-center border-b border-gray-200 z-10">
          <PDFDownloadWrapper data={resumeData} template={selectedTemplate} />
          <div className="flex space-x-2 px-3">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium">
              Template {selectedTemplate}
            </span>
            <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition-colors">
              Save Draft
            </button>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <ResumePreview data={resumeData} template={selectedTemplate} />
        </div>
      </div>
    </div>

  );
}