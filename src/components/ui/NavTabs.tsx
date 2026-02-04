type ViewMode = 'default' | 'students' | 'doctors';

interface NavTabsProps {
  activeMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavTabs({ activeMode, onModeChange }: NavTabsProps) {
  return (
    <div className="flex items-center gap-2 md:gap-3 p-2 rounded-2xl backdrop-blur-xl border border-white/20">
      <button
        onClick={() => onModeChange('students')}
        className={`px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 xl:px-16 xl:py-8 text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold rounded-xl transition-all duration-300 ${
          activeMode === 'students'
            ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.4)]'
            : 'bg-transparent text-gray-900 hover:bg-white/20'
        }`}
      >
        For Students
      </button>

      <button
        onClick={() => onModeChange('doctors')}
        className={`px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 xl:px-16 xl:py-8 text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold rounded-xl transition-all duration-300 ${
          activeMode === 'doctors'
            ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.4)]'
            : 'bg-transparent text-gray-900 hover:bg-white/20'
        }`}
      >
        For Doctors
      </button>
    </div>
  );
}
