import { ResumeData } from '@/app/types/resume';
import PersonalInfoSection from '../resume/personal-info/PersonalInfo';

interface ProfessionalTemplateProps {
  data: ResumeData;
}

export default function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  return (
    <div className="professional-template p-8 max-w-4xl mx-auto">
      <PersonalInfoSection 
        data={data.personal} 
        variant="modern" 
      />
      
      <div className="mt-8 grid grid-cols-3 gap-8">
        <div className="col-span-1">
          {/* Left sidebar content */}
            <h1>Experience</h1>
        </div>
        <div className="col-span-2">
          {/* Main content */}
          {/* Other sections would go here */}
        </div>
      </div>
    </div>
  );
}