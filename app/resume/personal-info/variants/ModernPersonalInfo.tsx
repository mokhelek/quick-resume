import { PersonalInfo } from '@/app/types/resume';

export default function ModernPersonalInfo({ data }: { data: PersonalInfo }) {
  return (
    <div className="modern-style flex items-center gap-6">
      {data.photo && (
        <img 
          src={data.photo} 
          className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
          alt="Profile"
        />
      )}
      <div>
        <h1 className="text-2xl font-bold">
          {data.name} {data.surname}
        </h1>
        <p className="text-blue-600 font-medium">{data.jobTitle}</p>
        <div className="flex gap-2 mt-1 text-sm text-gray-600">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
        </div>
      </div>
    </div>
  );
}