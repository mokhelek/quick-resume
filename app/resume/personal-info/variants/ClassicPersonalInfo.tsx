import { PersonalInfo } from '@/app/types/resume';

export default function ClassicPersonalInfo({ data }: { data: PersonalInfo }) {
  return (
    <div className="classic-style space-y-2">
      <h1 className="text-3xl font-bold">
        {data.name} <span className="font-normal">{data.surname}</span>
      </h1>
      <p className="text-gray-600 text-lg">{data.jobTitle}</p>
      <p className="text-gray-700">{data.summary}</p>
    </div>
  );
}