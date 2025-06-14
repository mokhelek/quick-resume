import { PersonalInfo, PersonalInfoVariant } from '@/app/types/resume';
import ClassicPersonalInfo from './variants/ClassicPersonalInfo';
import ModernPersonalInfo from './variants/ModernPersonalInfo';

interface PersonalInfoSectionProps {
  data: PersonalInfo;
  variant?: PersonalInfoVariant;
}

export default function PersonalInfoSection({
  data,
  variant = 'classic',
}: PersonalInfoSectionProps) {
  switch (variant) {
    case 'modern':
      return <ModernPersonalInfo data={data} />;
    case 'classic':
    default:
      return <ClassicPersonalInfo data={data} />;
  }
}