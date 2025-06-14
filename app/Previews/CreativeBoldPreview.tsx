import { ResumeData } from '@/app/types/resume';

interface CreativeBoldPreviewProps {
  data: ResumeData;
}

export default function CreativeBoldPreview({ data }: CreativeBoldPreviewProps) {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      {/* Header - With Contact Info and Image */}
      <div className="bg-[#213e60] text-white p-6 flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold uppercase tracking-wide mb-1">
            {data.personal.name}  {data.personal.surname}
          </h1>
          <h2 className="text-xs font-regular text-white uppercase tracking-wider mb-4">
            {data.personal.jobTitle}
          </h2>
          
          {/* Contact Info in Header */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 ">
            <p style={{fontSize:'11px', margin:'0'}} >{data.personal.phone}</p>
            <p style={{fontSize:'11px', margin:'0'}} >{data.personal.email}</p>
            {data.personal.website && <p style={{fontSize:'11px', margin:'0'}} >{data.personal.website}</p>}
            {data.personal.linkedin && <p style={{fontSize:'11px', margin:'0'}}>{data.personal.linkedin}</p>}
          </div>
        </div>
        
        {/* Profile Image */}
        {data.personal.photo && (
          <div className="w-22 h-22 rounded-full overflow-hidden ">
            <img 
              src={data.personal.photo} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Two Column Layout */}
      <div className="flex p-6">
        {/* Left Column - 40% width */}
        <div className="w-2/5 pr-6">
          {/* Key Achievements */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              KEY ACHIEVEMENTS
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-2 h-2 bg-[#213e60] rounded-full mt-1 mr-2"></div>
                <p className="text-xs text-gray-700 flex-1">
                  Generated $30M in new sales revenue by identifying and securing strategic partnerships
                </p>
              </div>
              <div className="flex">
                <div className="w-2 h-2 bg-[#213e60] rounded-full mt-1 mr-2"></div>
                <p className="text-xs text-gray-700 flex-1">
                  Increased client portfolio by 40% through targeted outreach and networking efforts
                </p>
              </div>
              <div className="flex">
                <div className="w-2 h-2 bg-[#213e60] rounded-full mt-1 mr-2"></div>
                <p className="text-xs text-gray-700 flex-1">
                  Led cross-functional teams to develop marketing strategies resulting in 15% revenue growth
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              EDUCATION
            </h3>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-sm font-bold text-gray-900">{edu.institution}</h4>
                <p className="text-xs text-[#213e60]">{edu.degree}</p>
                <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              SKILLS
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[#213e60] mr-2"></span>
                  <span className="text-xs">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {data.qualifications.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                CERTIFICATIONS
              </h3>
              {data.qualifications.map((qual, index) => (
                <div key={index} className="mb-2">
                  <h4 className="text-xs font-bold text-gray-900">{qual.name}</h4>
                  <p className="text-xs text-gray-500">{qual.issuer} • {qual.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - 60% width */}
        <div className="w-3/5">
          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              PROFILE
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">{data.personal.summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              EXPERIENCE
            </h3>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-bold text-gray-900">{exp.position}</h4>
                  <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
                </div>
                <p className="text-sm font-semibold text-[#213e60] mb-2">{exp.company}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}