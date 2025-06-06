import React from 'react';

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  summary: string;
  experience: {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

interface ResumeTemplateProps {
  data: ResumeData;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md text-gray-800">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{data.fullName}</h1>
        <p className="text-sm">{data.email} | {data.phone}</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-sm">{data.summary}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-md font-bold">{exp.jobTitle} - {exp.company}</h3>
            <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumeTemplate;
