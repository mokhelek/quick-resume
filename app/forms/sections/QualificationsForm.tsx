import { QualificationItem } from '@/app/types/resume';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface QualificationsFormProps {
  qualifications: QualificationItem[];
  onAdd: () => void;
  onChange: (index: number, field: keyof QualificationItem, value: string) => void;
  onRemove: (index: number) => void;
}

export default function QualificationsForm({
  qualifications,
  onAdd,
  onChange,
  onRemove,
}: QualificationsFormProps) {
  return (
    <div className="space-y-4">
      {qualifications.map((qual, index) => (
        <div key={qual.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800">Qualification #{index + 1}</h3>
            <button
              onClick={() => onRemove(index)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={qual.name}
                onChange={(e) => onChange(index, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issuer</label>
              <input
                type="text"
                value={qual.issuer}
                onChange={(e) => onChange(index, 'issuer', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Obtained</label>
            <input
              type="text"
              value={qual.date}
              onChange={(e) => onChange(index, 'date', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="MM/YYYY"
            />
          </div>
        </div>
      ))}

      <button
        onClick={onAdd}
        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        Add Qualification
      </button>
    </div>
  );
}