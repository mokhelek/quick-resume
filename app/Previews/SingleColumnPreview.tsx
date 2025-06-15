import { ResumeData } from '@/app/types/resume';
import {Globe, Phone, Mail, Linkedin } from 'lucide-react';

interface SingleColumnPreviewProps {
  data: ResumeData;
}

export default function SingleColumnPreview({ data }: SingleColumnPreviewProps) {
  return (
    <div className="w-full max-w-2xl mx-auto p-0 bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-center text-3xl font-semibold text-gray-900 mb-0">
          {(data.personal.name).toUpperCase()} <span className="text-[#213e60]">{(data.personal.surname).toLocaleUpperCase()}</span>
        </h1>
        <p className="text-center text-md font-regular text-[#2b7fde] mb-5">{data.personal.jobTitle}</p>
        
        {/* Contact Info */}
        <div style={{fontSize:'11px'}} className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-gray-600">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-[#213e60]" />
            <span>{data.personal.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-[#213e60]" />
            <span>{data.personal.email}</span>
          </div>
          {data.personal.website && (
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-[#213e60]" />
              <span>{data.personal.website}</span>
            </div>
          )}
          {data.personal.linkedin && (
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2 text-[#213e60]" />
              <span>{data.personal.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-5">
        <h2 className="text-md font-bold text-[#213e60] border-b border-[#213e60] pb-1 mb-3">
          SUMMARY
        </h2>
        <p style={{fontSize:'11px'}} className="text-gray-700">{data.personal.summary}</p>
      </div>

      {/* Experience Section */}
      <div className="mb-5">
        <h2 className="text-md font-bold text-[#213e60] border-b border-[#213e60] pb-1 mb-3">
          EXPERIENCE
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-start mb-0">
              <h3 className="text-md font-semibold text-gray-900">{exp.position}</h3>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <p className="text-sm font-medium text-[#2b7fde] mb-2">{exp.company}</p>
            <p style={{fontSize:'11px'}} className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mb-5">
        <h2 className="text-md font-bold text-[#213e60] border-b border-[#213e60] pb-1 mb-3">
          EDUCATION
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="text-base font-semibold text-gray-900">{edu.institution}</h3>
              <p className="text-sm text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
            <p className="text-sm text-[#2b7fde]">{edu.degree}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mb-5">
        <h2 className="text-md font-bold text-[#213e60] border-b border-[#213e60] pb-1 mb-3">
          SKILLS
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      {data.qualifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-md font-bold text-[#213e60] border-b border-[#213e60] pb-1 mb-3">
            CERTIFICATIONS
          </h2>
          <div className="grid gap-3">
            {data.qualifications.map((qual, index) => (
              <div key={index}>
                <h3 className="text-base font-semibold text-gray-900">{qual.name}</h3>
                <p className="text-sm text-[#213e60]">{qual.issuer}</p>
                <p className="text-sm text-gray-500">{qual.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}