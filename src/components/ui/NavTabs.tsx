type ViewMode = 'default' | 'students' | 'doctors';

interface NavTabsProps {
  activeMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavTabs({ activeMode, onModeChange }: NavTabsProps) {
  return (
    <div className="flex items-center justify-center gap-8">
      <button
        onClick={() => onModeChange('students')}
        className={`px-8 py-4 text-xl font-medium rounded-xl transition-all duration-300 ${
          activeMode === 'students'
            ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.3)]'
            : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-[#3333CC]'
        }`}
      >
        For Students
      </button>
      <button
        onClick={() => onModeChange('doctors')}
        className={`px-8 py-4 text-xl font-medium rounded-xl transition-all duration-300 ${
          activeMode === 'doctors'
            ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.3)]'
            : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-[#3333CC]'
        }`}
      >
        For Doctors
      </button>
    </div>
  );
}
