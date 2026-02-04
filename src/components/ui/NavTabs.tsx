import GlareHover from './GlareHover';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavTabsProps {
  activeMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavTabs({ activeMode, onModeChange }: NavTabsProps) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
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
          className={`px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 xl:px-16 xl:py-8 text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold rounded-xl transition-all duration-300 w-full ${
            activeMode === 'students'
              ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.4)]'
              : 'bg-white/20 backdrop-blur-xl text-gray-900 hover:bg-white/30 border border-white/50 shadow-lg'
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
          className={`px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 xl:px-16 xl:py-8 text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold rounded-xl transition-all duration-300 w-full ${
            activeMode === 'doctors'
              ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.4)]'
              : 'bg-white/20 backdrop-blur-xl text-gray-900 hover:bg-white/30 border border-white/50 shadow-lg'
          }`}
        >
          For Doctors
        </button>
      </GlareHover>
    </div>
  );
}
