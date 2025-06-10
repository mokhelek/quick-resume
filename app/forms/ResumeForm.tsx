import { ResumeData } from '@/app/types/resume';
import { useState, useCallback } from 'react';
import PersonalInfoForm from './sections/PersonalInfoForm';
import ExperienceForm from './sections/ExperienceForm';
import EducationForm from './sections/EducationForm';
import SkillsForm from './sections/SkillsForm';
import QualificationsForm from './sections/QualificationsForm';

export default function ResumeForm({ data, onChange }: { data: ResumeData; onChange: (data: ResumeData) => void }) {
  const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'education' | 'skills' | 'qualifications'>('personal');

  // Experience handlers
  const handleAddExperience = useCallback(() => {
    onChange({
      ...data,
      experience: [...data.experience, {
        id: Date.now(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    });
  }, [data, onChange]);

  const handleExperienceChange = useCallback((index: number, field: keyof ResumeData['experience'][0], value: string) => {
    const updated = [...data.experience];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, experience: updated });
  }, [data, onChange]);

  const handleRemoveExperience = useCallback((index: number) => {
    onChange({ ...data, experience: data.experience.filter((_, i) => i !== index) });
  }, [data, onChange]);

  // Education handlers
  const handleAddEducation = useCallback(() => {
    onChange({
      ...data,
      education: [...data.education, {
        id: Date.now(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: ''
      }]
    });
  }, [data, onChange]);

  const handleEducationChange = useCallback((index: number, field: keyof ResumeData['education'][0], value: string) => {
    const updated = [...data.education];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, education: updated });
  }, [data, onChange]);

  const handleRemoveEducation = useCallback((index: number) => {
    onChange({ ...data, education: data.education.filter((_, i) => i !== index) });
  }, [data, onChange]);

  // Skills handlers
  const handleSkillsChange = useCallback((skills: string[]) => {
    onChange({ ...data, skills });
  }, [data, onChange]);

  // Qualifications handlers
  const handleAddQualification = useCallback(() => {
    onChange({
      ...data,
      qualifications: [...data.qualifications, {
        id: Date.now(),
        name: '',
        issuer: '',
        date: ''
      }]
    });
  }, [data, onChange]);

  const handleQualificationChange = useCallback((index: number, field: keyof ResumeData['qualifications'][0], value: string) => {
    const updated = [...data.qualifications];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, qualifications: updated });
  }, [data, onChange]);

  const handleRemoveQualification = useCallback((index: number) => {
    onChange({ ...data, qualifications: data.qualifications.filter((_, i) => i !== index) });
  }, [data, onChange]);

  return (
    <div className="resume-form bg-white p-6 rounded-lg shadow-md">
      <div className="flex border-b mb-6">
        {(['personal', 'experience', 'education', 'skills', 'qualifications'] as const).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === tab
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'personal' && (
        <PersonalInfoForm
          data={data.personal}
          onChange={(field, value) => 
            onChange({ ...data, personal: { ...data.personal, [field]: value } })
          }
        />
      )}

      {activeTab === 'experience' && (
        <ExperienceForm
          experiences={data.experience}
          onAdd={handleAddExperience}
          onChange={handleExperienceChange}
          onRemove={handleRemoveExperience}
        />
      )}

      {activeTab === 'education' && (
        <EducationForm
          education={data.education}
          onAdd={handleAddEducation}
          onChange={handleEducationChange}
          onRemove={handleRemoveEducation}
        />
      )}

      {activeTab === 'skills' && (
        <SkillsForm
          skills={data.skills}
          onChange={handleSkillsChange}
        />
      )}

      {activeTab === 'qualifications' && (
        <QualificationsForm
          qualifications={data.qualifications}
          onAdd={handleAddQualification}
          onChange={handleQualificationChange}
          onRemove={handleRemoveQualification}
        />
      )}
    </div>
  );
}