import { ResumeData } from '@/app/types/resume';

interface ResumePreviewProps {
  data: ResumeData;
  templateId: number;
}

export default function ResumePreview({ data, templateId }: ResumePreviewProps) {
  if (templateId === 1) {
    return (
      <div className="flex h-full min-h-[800px] text-[13px] leading-tight">
        {/* Left Column */}
        <div style={{ backgroundColor: '#213e60' }} className="w-1/3 text-white p-5 flex flex-col items-center text-[12px]">
          {data.personal.photo && (
            <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-white mb-6">
              <img src={data.personal.photo} alt="Profile" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="mb-6 w-full">
            <h2 className="text-[12px] font-semibold border-b border-gray-400/80 pb-1 mb-3">CONTACT</h2>
            <p className="mb-1">{data.personal.phone}</p>
            <p className="mb-1">{data.personal.email}</p>
            {data.personal.website && <p className="mb-1">{data.personal.website}</p>}
            {data.personal.linkedin && <p>{data.personal.linkedin}</p>}
          </div>

          <div className="mb-6 w-full">
            <h2 className="text-[12px] font-semibold border-b border-gray-400/80 pb-1 mb-3">EDUCATION</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold">{edu.institution}</p>
                <p>{edu.degree}</p>
                <p>{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 w-full">
            <h2 className="text-[12px] font-semibold border-b border-gray-400/80 pb-1 mb-3">SKILLS</h2>
            <ul className="list-disc list-inside space-y-1">
              {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 p-6">
          <div className="mb-6">
            <h1 style={{ textTransform: 'uppercase', color: '#1e416a' }} className="text-[23px] font-bold leading-snug">
              <span>{data.personal.name}</span> <span className='font-normal'>{data.personal.surname}</span>
            </h1>
            <p className="text-[13px] text-gray-600">{data.personal.jobTitle}</p>
          </div>

          <div className="mb-5">
            <h2 className="text-[14px] font-semibold text-gray-800 border-b border-gray-300 pb-1 mb-1">Summary</h2>
            <p style={{ fontSize: '11px', fontWeight: '300' }} className="text-gray-700">{data.personal.summary}</p>
          </div>

          <div className="mb-5">
            <h2 className="text-[14px] font-semibold text-gray-800 border-b border-gray-300 pb-1 mb-1">Work Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-800">{exp.company}</h3>
                  <p style={{ fontSize: '11px', fontWeight: '300' }} className="text-gray-500">{exp.startDate} - {exp.endDate}</p>
                </div>
                <p style={{ color: "#1e416a" }} className="font-medium">{exp.position}</p>
                <p style={{ fontSize: '11px', fontWeight: '300' }} className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>

          {data.qualifications.length > 0 && (
            <div>
              <h2 className="text-[14px] font-semibold text-gray-800 border-b border-gray-300 pb-1 mb-1">Qualifications</h2>
              {data.qualifications.map((qual, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <h3 style={{ fontSize: '13px' }} className="font-semibold text-gray-800">{qual.name}</h3>
                    <p style={{ fontSize: '11px', fontWeight: '300' }} className="text-gray-500">{qual.date}</p>
                  </div>
                  <p className="text-gray-700">{qual.issuer}</p>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>
    );
  }

  if (templateId === 2) {
    return (
      <div className="w-full max-w-3xl mx-auto p-8 bg-white text-gray-800">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">{data.personal.name} {data.personal.surname}</h1>
          <p className="text-lg text-gray-600 mb-4">{data.personal.jobTitle}</p>
          
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <p>{data.personal.phone}</p>
            <p>{data.personal.email}</p>
            {data.personal.website && <p>{data.personal.website}</p>}
            {data.personal.linkedin && <p>{data.personal.linkedin}</p>}
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">SUMMARY</h2>
          <p className="text-gray-700">{data.personal.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">EXPERIENCE</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-gray-500">{exp.startDate} - {exp.endDate}</p>
              </div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-gray-500">{edu.startDate} - {edu.endDate}</p>
              </div>
              <p className="text-gray-600">{edu.degree}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Qualifications */}
        {data.qualifications.length > 0 && (
          <div>
            <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">CERTIFICATIONS</h2>
            {data.qualifications.map((qual, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{qual.name}</h3>
                  <p className="text-gray-500">{qual.date}</p>
                </div>
                <p className="text-gray-600">{qual.issuer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full text-gray-400">
      Template {templateId} preview not implemented yet
    </div>
  );
}