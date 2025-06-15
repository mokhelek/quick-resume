import { ResumeData } from '@/app/types/resume';
import { Briefcase, GraduationCap, Award, Code, Globe, Phone, Mail, Linkedin } from 'lucide-react';

interface ContemporaryPreviewProps {
    data: ResumeData;
}

export default function ContemporaryPreview({ data }: ContemporaryPreviewProps) {
    return (
        <div className="w-full bg-white text-gray-800 font-sans p-0">
            {/* Header with Image */}
            <div className="flex items-start mb-8">
                {/* Profile Image */}
                <div className="relative mr-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
                        {data.personal.photo && (
                            <img src={data.personal.photo} alt="Profile" className="w-full h-full object-cover" />
                        )}
                    </div>
                    {/* Decorative Dots */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#ff6b6b] rounded-full"></div>
                    <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-[#4ecdc4] rounded-full"></div>
                </div>

                {/* Name and Title */}
                <div className="flex-1 pt-2">
                    <h1 className="text-2xl font-semibold text-[#2a4365]">
                        {data.personal.name} <span className="text-[#4ecdc4]">{data.personal.surname}</span>
                    </h1>
                    <p className="text-md text-[#ff6b6b]">{data.personal.jobTitle}</p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="flex gap-6">
                {/* Left Column (Contact, Skills, Education) */}
                <div className="w-2/5">
                    {/* Contact Section */}
                    <div className="mb-6 p-4 bg-[#f8fafc] rounded-lg">
                        <h2 className="flex items-center text-sm font-bold text-[#2a4365] mb-3">
                            <span className="w-4 h-0.5 bg-[#ff6b6b] mr-2"></span>
                            CONTACT
                        </h2>
                        <div style={{fontSize:'10px'}}  className="space-y-3">
                            <div className="flex items-start">
                                <Phone className="w-3.5 h-3.5 mt-0.5 mr-2 text-[#4ecdc4] flex-shrink-0" />
                                <span>{data.personal.phone}</span>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-3.5 h-3.5 mt-0.5 mr-2 text-[#4ecdc4] flex-shrink-0" />
                                <span>{data.personal.email}</span>
                            </div>
                            {data.personal.website && (
                                <div className="flex items-start">
                                    <Globe className="w-3.5 h-3.5 mt-0.5 mr-2 text-[#4ecdc4] flex-shrink-0" />
                                    <span className="break-all">{data.personal.website}</span>
                                </div>
                            )}
                            {data.personal.linkedin && (
                                <div className="flex items-start">
                                    <Linkedin className="w-3.5 h-3.5 mt-0.5 mr-2 text-[#4ecdc4] flex-shrink-0" />
                                    <span>{data.personal.linkedin}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-6">
                        <h2 className="flex items-center text-sm font-bold text-[#2a4365] mb-3">
                            <Code className="w-4 h-4 mr-2 text-[#ff6b6b]" />
                            SKILLS
                        </h2>
                        <div style={{fontSize:'10px'}}  className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {data.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${skill.length > 20 ? 'col-span-2' : ''}`}
                                >
                                    <span className="w-2 h-2 bg-[#4ecdc4] rounded-full mr-2 flex-shrink-0"></span>
                                    <span className="truncate">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="mb-6">
                        <h2 className="flex items-center text-sm font-bold text-[#2a4365] mb-3">
                            <GraduationCap className="w-4 h-4 mr-2 text-[#ff6b6b]" />
                            EDUCATION
                        </h2>
                        {data.education.map((edu, index) => (
                            <div key={index} className="mb-4 pl-6 relative">
                                <div className="absolute left-0 top-1 w-2.5 h-2.5 bg-[#4ecdc4] rounded-full"></div>
                                <h3 className="text-xs font-semibold text-[#2a4365]">{edu.institution}</h3>
                                <p className="text-xs text-[#ff6b6b]">{edu.degree}</p>
                                <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
                            </div>
                        ))}
                    </div>


                    {/* Certifications Section */}
                    {data.qualifications.length > 0 && (
                        <div>
                            <h2 className="flex items-center text-sm font-bold text-[#2a4365] mb-3">
                                <Award className="w-4 h-4 mr-2 text-[#ff6b6b]" />
                                CERTIFICATIONS
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {data.qualifications.map((qual, index) => (
                                    <div key={index} className="p-3 bg-[#f0f7ff] rounded-lg">
                                        <h3 style={{fontSize:'10px'}} className="font-medium text-[#2a4365]">{qual.name}</h3>
                                        <p style={{fontSize:'10px'}} className="text-[#ff6b6b]">{qual.issuer}</p>
                                        <p style={{fontSize:'10px'}} className="text-gray-500">{qual.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column (Summary, Experience, Certifications) */}
                <div className="w-3/5">
                    {/* Summary Section */}
                    <div className="mb-6 p-4 bg-[#f8fafc] rounded-lg">
                        <h2 className="text-sm font-bold text-[#2a4365] mb-2">PROFESSIONAL PROFILE</h2>
                        <p style={{fontSize:'10px'}} className="text-gray-700 leading-relaxed">{data.personal.summary}</p>
                    </div>

                    {/* Experience Section */}
                    <div className="mb-6">
                        <h2 className="flex items-center text-sm font-bold text-[#2a4365] mb-3">
                            <Briefcase className="w-4 h-4 mr-2 text-[#ff6b6b]" />
                            EXPERIENCE
                        </h2>
                        {data.experience.map((exp, index) => (
                            <div key={index} className="mb-4 pl-6 relative">
                                <div className="absolute left-0 top-1 w-2.5 h-2.5 bg-[#4ecdc4] rounded-full"></div>
                                <h3 className="text-xs font-semibold text-[#2a4365]">{exp.position}</h3>
                                <p className="text-xs text-[#ff6b6b]">{exp.company}</p>
                                <p className="text-xs text-gray-500 mb-1">{exp.startDate} - {exp.endDate}</p>
                                <p style={{fontSize:'10px'}} className=" text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}