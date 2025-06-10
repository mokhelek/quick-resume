import { EducationItem } from '@/app/types/resume';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface EducationFormProps {
  education: EducationItem[];
  onAdd: () => void;
  onChange: (index: number, field: keyof EducationItem, value: string) => void;
  onRemove: (index: number) => void;
}

export default function EducationForm({
  education,
  onAdd,
  onChange,
  onRemove,
}: EducationFormProps) {
  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div key={edu.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800">Education #{index + 1}</h3>
            <button
              onClick={() => onRemove(index)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => onChange(index, 'institution', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => onChange(index, 'degree', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => onChange(index, 'field', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => onChange(index, 'startDate', e.target.value)}
                  placeholder="YYYY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => onChange(index, 'endDate', e.target.value)}
                  placeholder="YYYY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={onAdd}
        className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        Add Education
      </button>
    </div>
  );
}