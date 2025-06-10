'use client';
import { Document, Page, View } from '@react-pdf/renderer';
import { ResumeData } from '@/app/types/resume';
// import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import { ProfessionalTemplate } from './PDF';


interface ResumeTemplateProps {
  data: ResumeData;
  template: number; // Note: This prop name must match what you pass in
}

export const ResumeTemplate = ({ data, template }: ResumeTemplateProps) => {
  switch (template) {
    case 1:
      return <ProfessionalTemplate data={data} template={template} />;
    case 2:
      return <ProfessionalTemplate  data={data} template={template} />;
    default:
      return <ProfessionalTemplate  data={data} template={template} />;
  }
};