"use client";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ResumeTemplate } from './ResumeTemplate';
import { ResumeData } from '../types/resume';

interface PdfDownloadButtonProps {
  data: ResumeData;
  template: number;
}

export const PdfDownloadButton = ({ data, template }: PdfDownloadButtonProps) => (
  <PDFDownloadLink
    document={<ResumeTemplate data={data} template={template} />}
    fileName={`${data.personal.name}_${data.personal.surname}_Resume.pdf`}
    className="flex items-center px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors shadow-md"
  >
    <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
    Download PDF
  </PDFDownloadLink>
);