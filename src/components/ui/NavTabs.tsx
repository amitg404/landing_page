import GlareHover from './GlareHover';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavTabsProps {
  activeMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavTabs({ activeMode, onModeChange }: NavTabsProps) {
  return (
    <div className="flex items-center gap-3">
      <GlareHover
        width="auto"
        height="auto"
        background="transparent"
        borderRadius="12px"
        borderColor="transparent"
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        className="border-0"
        style={{ padding: 0 }}
      >
        <button
          onClick={() => onModeChange('students')}
          className={`px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 text-sm md:text-lg lg:text-2xl font-semibold rounded-xl transition-all duration-300 w-full ${
            activeMode === 'students'
              ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.4)]'
              : 'bg-white/50 backdrop-blur-sm text-gray-900 hover:bg-white/80 border border-white/30'
          }`}
        >
          For Students
        </button>
      </GlareHover>
      
      <GlareHover
        width="auto"
        height="auto"
        background="transparent"
        borderRadius="12px"
        borderColor="transparent"
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        className="border-0"
        style={{ padding: 0 }}
      >
        <button
          onClick={() => onModeChange('doctors')}
          className={`px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 text-sm md:text-lg lg:text-2xl font-semibold rounded-xl transition-all duration-300 w-full ${
            activeMode === 'doctors'
              ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.4)]'
              : 'bg-white/50 backdrop-blur-sm text-gray-900 hover:bg-white/80 border border-white/30'
          }`}
        >
          For Doctors
        </button>
      </GlareHover>
    </div>
  );
}
