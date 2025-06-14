import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface SkillsFormProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    onChange(updatedSkills);
  };

  const handleAddSkill = () => {
    onChange([...skills, '']);
  };

  const handleRemoveSkill = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2 group">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Skill name"
          />
          <button
            onClick={() => handleRemoveSkill(index)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      ))}
      <button
        onClick={handleAddSkill}
        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        Add Skill
      </button>
    </div>
  );
}