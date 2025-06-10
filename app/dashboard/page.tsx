'use client';
import { useState } from 'react';
import { ResumeData } from '@/app/types/resume';
import ResumePreview from '../components/ResumePreview';
import ResumeForm from '../forms/ResumeForm';
import { ResumeTemplate } from '../components/ResumeTemplate';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const initialResumeData: ResumeData = {
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
  };

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [templateId, setTemplateId] = useState<number>(1);

  const PDFDownloadWrapper = () => {
    return (
      <PDFDownloadLink
        document={<ResumeTemplate data={resumeData} template={templateId} />}
        fileName={`${resumeData.personal.name}_${resumeData.personal.surname}_Resume.pdf`}
        className="flex items-center px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:from-indigo-600 hover:to-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
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

  return (
    <div className="flex h-screen bg-gray-50 w-full">
      {/* Left Panel - Form */}
      <div className="w-[47%] p-6 overflow-y-auto bg-white border-r border-gray-200">
        <ResumeForm 
          data={resumeData} 
          onChange={setResumeData} 
        />
      </div>

      {/* Middle Panel - Tools */}
      <div className="w-[6%] max-w-[60px] flex flex-col items-center py-6 bg-gray-50 border-l border-r border-gray-200">
        {/* Your tools panel remains the same */}
      </div>

      {/* Right Panel - Preview */}
      <div className="w-[47%] pl-3 pr-0 overflow-y-auto bg-gray-50">
        <div className="sticky px-3 top-0 bg-gray-50 py-4 mb-6 flex justify-between items-center border-b border-gray-200 z-10">
          <PDFDownloadWrapper />
          <div className="flex space-x-2 px-3">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium">
              Template {templateId}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <ResumePreview 
            data={resumeData} 
            templateId={templateId} 
          />
        </div>
      </div>
    </div>
  );
}