export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface QualificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

export interface PersonalInfo {
  photo: string | null;
  name: string;
  surname: string;
  jobTitle: string;
  phone: string;
  email: string;
  linkedin: string;
  website: string;
  summary: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  qualifications: QualificationItem[];
  skills: string[];
}

export type PersonalInfoVariant = 'classic' | 'modern' | 'minimal';