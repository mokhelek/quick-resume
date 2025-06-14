import { ResumeData } from '@/app/types/resume';

interface TimelinePreviewProps {
    data: ResumeData;
}

export default function TimelinePreview({ data }: TimelinePreviewProps) {
    return (
        <div className="w-full p-1 bg-white text-gray-800 font-sans">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold mb-1 text-gray-600">
                    {data.personal.name} {data.personal.surname}
                </h1>
                <p className="text-sm text-orange-600 mb-4">{data.personal.jobTitle}</p>

                <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-gray-600">
                    <p>{data.personal.phone}</p>
                    <p>{data.personal.email}</p>
                    {data.personal.website && <p>{data.personal.website}</p>}
                    {data.personal.linkedin && <p>{data.personal.linkedin}</p>}
                </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Summary</h2>
                <p style={{ fontSize: '11px' }} className="text-gray-700 leading-relaxed">{data.personal.summary}</p>
            </div>

            {/* Experience - Timeline */}
            <div className="mb-8 relative">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Experience</h2>

                {/* Vertical Timeline Line */}
                <div className="absolute left-[102px] top-8 bottom-0 w-px bg-gray-300"></div>

                {data.experience.map((exp, index) => (
                    <div key={index} className="relative pl-21 mb-6">
                        {/* Timeline Bullet */}
                        <div className="absolute left-[94px] top-1 w-4 h-4 rounded-full border-4 border-orange-600 bg-white z-10"></div>

                        {/* Date */}
                        <div style={{ fontSize: '12px', marginTop: '3px' }} className="absolute left-0 top-0 w-30 text-gray-500 text-right pr-9">
                            {exp.startDate} - {exp.endDate}
                        </div>

                        {/* Content */}
                        <div className="ml-9">
                            <h3 className="text-sm font-semibold text-gray-600">{exp.position}</h3>
                            <p className="text-xs text-orange-600 mb-1">{exp.company}</p>
                            <p style={{ fontSize: '10px' }} className="text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Education - Timeline */}
            <div className="mb-8 relative">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Education</h2>

                {/* Vertical Timeline Line */}
                <div className="absolute left-[102px] top-8 bottom-0 w-px bg-gray-300"></div>

                {data.education.map((edu, index) => (
                    <div key={index} className="relative pl-21 mb-6">
                        {/* Timeline Bullet */}
                        <div className="absolute left-[94px] top-1 w-4 h-4 rounded-full border-4 border-orange-600 bg-white z-10"></div>

                        {/* Date */}
                        <div style={{ fontSize: '12px', marginTop: '3px' }} className="absolute left-0 top-0 w-30 text-gray-500 text-right pr-9">
                            {edu.startDate} - {edu.endDate}
                        </div>

                        {/* Content */}
                        <div className="ml-9">
                            <h3 className="text-sm font-semibold text-gray-600">{edu.institution}</h3>
                            <p className="text-xs text-orange-600 mb-1">{edu.degree}</p>
                            {edu.field && <p className="text-xs text-gray-700 leading-relaxed">{edu.field}</p>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Qualifications */}
            {data.qualifications.length > 0 && (
                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Certifications</h2>
                    {data.qualifications.map((qual, index) => (
                        <div key={index} className="mb-3">
                            <div className="flex justify-between">
                                <h3 style={{ fontSize: '14px' }} className="font-semibold text-gray-500">{qual.name}</h3>
                                <p style={{ fontSize: '11px', fontWeight: '300' }} className="text-gray-500">{qual.date}</p>
                            </div>
                            <p  style={{ fontSize: '13px' }} className="text-orange-600">{qual.issuer}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}