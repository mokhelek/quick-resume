'use client';
import { useState, useRef, useEffect } from 'react';
import { ResumeData } from '@/app/types/resume';
import ResumePreview from '../components/ResumePreview';
import ResumeForm from '../forms/ResumeForm';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { 
  ArrowDownTrayIcon, 
  DocumentCheckIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  WrenchIcon, 
  ChevronDownIcon, 
  UserIcon, 
  CogIcon, 
  ArrowLeftEndOnRectangleIcon,
  Squares2X2Icon,
  XMarkIcon,
  EyeIcon,
  MagnifyingGlassPlusIcon,
  ArrowsPointingOutIcon
} from '@heroicons/react/24/outline';
import Template from '../templates/Template';
import { motion } from 'framer-motion';

const templates = [
  { 
    id: 1, 
    name: "Creative", 
    image: "/img/resume-templates/resume1.png",
    colors: { primary: '#ec4899', secondary: '#f9a8d4' }
  },
  { 
    id: 2, 
    name: "Minimalist", 
    image: "/img/resume-templates/timeline.png",
    colors: { primary: '#6366f1', secondary: '#a5b4fc' }
  },
  { 
    id: 3, 
    name: "Tech", 
    image: "/img/resume-templates/single.png",
    colors: { primary: '#10b981', secondary: '#6ee7b7' }
  },
  { 
    id: 4, 
    name: "Executive", 
    image: "/img/resume-templates/creative.png",
    colors: { primary: '#8b5cf6', secondary: '#c4b5fd' }
  },
  { 
    id: 5, 
    name: "Modern", 
    image: "/img/resume-templates/contemporary.png",
    colors: { primary: '#3b82f6', secondary: '#93c5fd' }
  },
  { 
    id: 6, 
    name: "ATS Optimized", 
    image: "/img/resume-templates/modern2.png",
    colors: { primary: '#ef4444', secondary: '#fca5a5' }
  },
];


const initialResumeData: ResumeData = {
  personal: {
    photo: null,
    name: 'Katleho',
    surname: 'Mokhele',
    jobTitle: 'Software Engineer',
    phone: '+27 680 846 1508',
    email: 'katleho@example.com',
    linkedin: 'Cape Town',
    website: 'https://my-portfolio.com',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque sapien non luctus tincidunt. Vivamus vel ligula convallis, tincidunt nisl ut, gravida nulla. Cras quis venenatis purus. Sed auctor, sapien eget sagittis pretium, urna nulla fermentum nisl, nec tincidunt justo ante sed diam. Curabitur viverra diam vitae dictum accumsan. Etiam in venenatis nisi. Etiam nunc metus, viverra eget tincidunt non, elementum at dolor. Pellentesque vel rhoncus augue.'
  },
  experience: [{
    id: 1,
    company: 'Tech Corp',
    position: 'Senior Developer',
    startDate: '2020',
    endDate: 'Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque sapien non luctus tincidunt. Vivamus vel ligula convallis, tincidunt nisl ut, gravida nulla. Cras quis venenatis purus. Sed auctor, sapien eget sagittis pretium, urna nulla fermentum nisl, nec tincidunt justo ante sed diam.'
  },
  {
    id: 2,
    company: 'Digital Solutions',
    position: 'Frontend Developer',
    startDate: '2018',
    endDate: '2020',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement UI components.'
  },
  {
    id: 3,
    company: 'StartUp Inc',
    position: 'Junior Developer',
    startDate: '2016',
    endDate: '2018',
    description: 'Assisted in full-stack development projects. Participated in code reviews and agile development processes.'
  }],
  education: [{
    id: 1,
    institution: 'University of Technology',
    degree: 'B.Sc Computer Science',
    field: 'Software Engineering',
    startDate: '2016',
    endDate: '2020'
  }, {
    id: 2,
    institution: 'Code Academy',
    degree: 'Advanced Web Development',
    field: 'Frontend Technologies',
    startDate: '2015',
    endDate: '2016'
  }],
  qualifications: [{
    id: 1,
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2021'
  }, {
    id: 2,
    name: 'React Professional',
    issuer: 'Meta',
    date: '2020'
  }, {
    id: 3,
    name: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    date: '2019'
  }],
  skills: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL', 'Redux', 'Jest']
};

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [templateId, setTemplateId] = useState<number>(1);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [zoomedTemplate, setZoomedTemplate] = useState<number | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && isTemplateModalOpen) {
        setIsTemplateModalOpen(false);
        setZoomedTemplate(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTemplateModalOpen]);

  const handleTemplateChange = (id: number) => {
    setIsTransitioning(true);
    setIsTemplateModalOpen(false);
    setZoomedTemplate(null);
    
    setTimeout(() => {
      setTemplateId(id);
      setIsTransitioning(false);
    }, 300);
  };

  const selectedTemplate = templates.find(t => t.id === templateId) || templates[0];

  const PDFDownloadWrapper = () => {
    return (
      <PDFDownloadLink
        document={<Template data={resumeData} templateId={templateId} />}
        fileName={`${resumeData.personal.name}_${resumeData.personal.surname}_Resume.pdf`}
        className="flex items-center px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:from-indigo-600 hover:to-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 group"
      >
        {({ loading }) => (
          <>
            <div className="flex items-center">
              <ArrowDownTrayIcon className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
              <span className="hidden sm:inline text-sm">Download</span>
            </div>
            {loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-6 left-0 right-0 text-center text-xs text-indigo-500"
              >
                Preparing PDF...
              </motion.div>
            )}
          </>
        )}
      </PDFDownloadLink>
    );
  };

  // Get user initials
  const userInitials = `${resumeData.personal.name.charAt(0)}${resumeData.personal.surname.charAt(0)}`;

  return (
    <div className="flex h-screen bg-gray-50 w-full relative">
      {/* Left Panel - Form */}
      <div className="w-[47%] overflow-y-auto bg-white border-r border-gray-200">
        {/* Sticky Header */}
        <div className="sticky px-4 py-3 top-0 flex justify-between items-center mb-1 z-40 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="h-7 w-7 text-indigo-400" />
            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 font-['Space_Grotesk']">
              ResuAI
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 focus:outline-none group"
              aria-label="User menu"
              aria-expanded={isProfileOpen}
            >
              <div className="flex items-center text-sm justify-center h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-thin">
                {userInitials}
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                {resumeData.personal.name}
              </span>
              <ChevronDownIcon className={`h-4 w-4 text-gray-500 transition-transform ${isProfileOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{resumeData.personal.name} {resumeData.personal.surname}</p>
                    <p className="text-xs text-gray-500 truncate">{resumeData.personal.email}</p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <UserIcon className="h-4 w-4 mr-3 text-gray-400" />
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <CogIcon className="h-4 w-4 mr-3 text-gray-400" />
                    Settings
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-t border-gray-100"
                  >
                    <ArrowLeftEndOnRectangleIcon className="h-4 w-4 mr-3 text-gray-400" />
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <ResumeForm
          data={resumeData}
          onChange={setResumeData}
        />
      </div>

      {/* Middle Panel - Tools - Centered */}
      <div className="w-[6%] max-w-[70px] flex flex-col items-center justify-center py-6 bg-gray-50 border-r border-gray-200">
        <div className="sticky top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 items-center">
          {/* Template Picker */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveTooltip('templates')}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <button
              onClick={() => setIsTemplateModalOpen(true)}
              className="p-3 bg-white my-1.5 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
            >
              <Squares2X2Icon className="h-5 w-5 text-indigo-600 group-hover:text-indigo-700" />
            </button>
            <div className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded whitespace-nowrap opacity-0 ${activeTooltip === 'templates' ? 'opacity-100' : ''} transition-opacity pointer-events-none`}>
              Templates
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
            </div>
          </div>

          {/* AI Analysis */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveTooltip('ai')}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <button
              className="p-3 bg-white my-1.5 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
            >
              <SparklesIcon className="h-5 w-5 text-indigo-600 group-hover:text-indigo-700" />
            </button>
            <div className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded whitespace-nowrap opacity-0 ${activeTooltip === 'ai' ? 'opacity-100' : ''} transition-opacity pointer-events-none`}>
              AI Analysis
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
            </div>
          </div>

          {/* ATS Check */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveTooltip('ats')}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <button
              className="p-3 bg-white my-1.5 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-green-200 hover:bg-green-50"
            >
              <DocumentCheckIcon className="h-5 w-5 text-green-600 group-hover:text-green-700" />
            </button>
            <div className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-green-600 text-white text-sm rounded whitespace-nowrap opacity-0 ${activeTooltip === 'ats' ? 'opacity-100' : ''} transition-opacity pointer-events-none`}>
              ATS Check
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-green-600 rotate-45"></div>
            </div>
          </div>

          {/* Optimize */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveTooltip('optimize')}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <button
              onClick={() => { }}
              className="p-3 bg-white my-1.5 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-blue-200 hover:bg-blue-50"
            >
              <WrenchIcon className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
            </button>
            <div className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-blue-600 text-white text-sm rounded whitespace-nowrap opacity-0 ${activeTooltip === 'optimize' ? 'opacity-100' : ''} transition-opacity pointer-events-none`}>
              Optimize
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rotate-45"></div>
            </div>
          </div>

          {/* Privacy */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveTooltip('privacy')}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <button
              onClick={() => { }}
              className="p-3 bg-white my-1.5 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-purple-200 hover:bg-purple-50"
            >
              <ShieldCheckIcon className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
            </button>
            <div className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-purple-600 text-white text-sm rounded whitespace-nowrap opacity-0 ${activeTooltip === 'privacy' ? 'opacity-100' : ''} transition-opacity pointer-events-none`}>
              Privacy
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-600 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div className="w-[47%] pl-3 pr-0 overflow-y-auto bg-gray-50">
        <div className="sticky px-4 top-0 bg-gray-50 py-3 mb-6 flex justify-between items-center border-b border-gray-200 z-10 backdrop-blur-sm ">
          <div className="flex items-center space-x-2">
            <EyeIcon className="h-5 w-5 text-indigo-500" />
            <h2 className="text-sm font-medium text-indigo-800">Live Preview</h2>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsTemplateModalOpen(true)}
              className="flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 group border border-gray-200"
              style={{ 
                backgroundColor: selectedTemplate.colors.secondary + '20', 
                color: selectedTemplate.colors.primary,
                borderColor: selectedTemplate.colors.secondary
              }}
            >
              <span className="mr-2">{selectedTemplate.name}</span>
              <ChevronDownIcon className="h-4 w-4 text-current opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <div className="relative group">
              <PDFDownloadWrapper />
            </div>
          </div>
        </div>

        <div className="bg-white py-6 px-5 shadow-lg rounded-lg mx-3 mb-6">
          {isTransitioning ? (
            <div className="flex items-center justify-center h-96">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-8 w-8 bg-indigo-200 rounded-full mb-2"></div>
                <div className="h-4 w-32 bg-indigo-100 rounded"></div>
              </div>
            </div>
          ) : (
            <motion.div
              key={templateId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ResumePreview
                data={resumeData}
                templateId={templateId}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Enhanced Template Selection Modal */}
      {isTemplateModalOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">Choose a Template</h3>
              <button 
                onClick={() => {
                  setIsTemplateModalOpen(false);
                  setZoomedTemplate(null);
                }}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative border rounded-lg overflow-hidden cursor-pointer transition-all ${template.id === templateId ? 'ring-2 ring-indigo-500' : 'hover:border-indigo-300'}`}
                >
                  <div 
                    className="h-64 bg-gray-50 flex items-center justify-center p-2 relative group"
                    onClick={() => handleTemplateChange(template.id)}
                  >
                    <img 
                      src={template.image} 
                      alt={template.name} 
                      className={`object-contain h-full transition-all duration-200 ${zoomedTemplate === template.id ? 'scale-125' : ''}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/img/resume-templates/placeholder.png';
                      }}
                    />
                    <button
                      className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-indigo-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomedTemplate(zoomedTemplate === template.id ? null : template.id);
                      }}
                    >
                      {zoomedTemplate === template.id ? (
                        <ArrowsPointingOutIcon className="h-4 w-4 text-indigo-600" />
                      ) : (
                        <MagnifyingGlassPlusIcon className="h-4 w-4 text-indigo-600" />
                      )}
                    </button>
                  </div>
                  <div className="p-4 flex justify-between items-center bg-white">
                    <span className="font-medium text-gray-900">{template.name}</span>
                    {template.id === templateId && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Selected
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-gray-200 px-6 py-2 bg-gray-50 flex justify-end">
              <button
                onClick={() => {
                  setIsTemplateModalOpen(false);
                  setZoomedTemplate(null);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}