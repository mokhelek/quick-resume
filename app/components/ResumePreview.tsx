"use client";
import { ResumeData } from '../types/resume';  // Update this import

interface ResumePreviewProps {
  data: ResumeData;
  template: number;
}


interface ResumePreviewProps {
  data: ResumeData;
  template: number;
}

export default function ResumePreview({ data, template }: ResumePreviewProps) {
  // Template 1 Preview
  if (template === 1) {
    return (
      <div className="p-6 h-full min-h-[800px]">
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {data.personal.name} {data.personal.surname}
              </h1>
              <p className="text-lg text-indigo-600">{data.personal.jobTitle}</p>
            </div>
            {data.personal.photo && (
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                <img src={data.personal.photo} alt="Profile" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Summary</h2>
              <p className="text-gray-600">{data.personal.summary}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Experience</h2>
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                    <p className="text-gray-500 text-sm">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-500 text-sm">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Contact</h2>
              <p className="text-gray-600 text-sm mb-1">{data.personal.phone}</p>
              <p className="text-gray-600 text-sm mb-1">{data.personal.email}</p>
              {data.personal.linkedin && (
                <p className="text-gray-600 text-sm mb-1">{data.personal.linkedin}</p>
              )}
              {data.personal.website && (
                <p className="text-gray-600 text-sm mb-1">{data.personal.website}</p>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Add more template previews as needed
  return (
    <div className="flex items-center justify-center h-full text-gray-400">
      Template {template} preview not implemented yet
    </div>
  );
}