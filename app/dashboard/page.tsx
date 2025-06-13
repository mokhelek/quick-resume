'use client';
import { useState, useRef, useEffect } from 'react';
import { ResumeData } from '@/app/types/resume';
import ResumePreview from '../components/ResumePreview';
import ResumeForm from '../forms/ResumeForm';
import { ResumeTemplate } from '../components/ResumeTemplate';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ArrowDownTrayIcon, DocumentCheckIcon, SparklesIcon, ShieldCheckIcon, WrenchIcon, ChevronDownIcon, UserIcon, CogIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

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
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const PDFDownloadWrapper = () => {
    return (
      <PDFDownloadLink
        document={<ResumeTemplate data={resumeData} template={templateId} />}
        fileName={`${resumeData.personal.name}_${resumeData.personal.surname}_Resume.pdf`}
        className="flex items-center px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:from-indigo-600 hover:to-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        {({ loading }) => (
          <>
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            {loading ? 'Preparing PDF...' : 'Export as PDF'}
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
              <div className="flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-medium">
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
                    <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-3 text-gray-400" />
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

      {/* Middle Panel - Tools */}
      <div className="w-[6%] max-w-[70px] flex flex-col items-center py-6 bg-gray-50 border-r border-gray-200">
        <div className="sticky top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 items-center">

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
        <div className="sticky px-3 top-0 bg-gray-50 py-4 mb-6 flex justify-between items-center border-b border-gray-200 z-10">
          <PDFDownloadWrapper />
          <div className="flex space-x-2 px-3">
            <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium">
              Template {templateId}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg mx-3 mb-6">
          <ResumePreview
            data={resumeData}
            templateId={templateId}
          />
        </div>
      </div>
    </div>
  );
}