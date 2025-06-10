import { ExperienceItem } from '@/app/types/resume';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface ExperienceFormProps {
  experiences: ExperienceItem[];
  onAdd: () => void;
  onChange: (index: number, field: keyof ExperienceItem, value: string) => void;
  onRemove: (index: number) => void;
}

export default function ExperienceForm({
  experiences,
  onAdd,
  onChange,
  onRemove,
}: ExperienceFormProps) {
  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800">Experience #{index + 1}</h3>
            <button
              onClick={() => onRemove(index)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => onChange(index, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => onChange(index, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => onChange(index, 'startDate', e.target.value)}
                placeholder="MM/YYYY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => onChange(index, 'endDate', e.target.value)}
                placeholder="MM/YYYY or Present"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => onChange(index, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Describe your responsibilities and achievements"
            />
          </div>
        </div>
      ))}

      <button
        onClick={onAdd}
        className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        Add Experience
      </button>
    </div>
  );
}