import NavTabs from '../ui/NavTabs';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavSectionProps {
  viewMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavSection({ viewMode, onModeChange }: NavSectionProps) {
  const containerClasses = viewMode === 'default'
    ? 'backdrop-blur-sm bg-transparent border border-gray-200/50 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
    : 'backdrop-blur-2xl bg-white/5 border border-white/20 rounded-2xl shadow-[0_2px_16px_rgba(255,255,255,0.05)]';

  return (
    <section id="navigation" className="relative w-full py-16 md:py-24 bg-transparent">
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h2 className={`text-xl md:text-2xl lg:text-3xl font-medium transition-colors duration-500 ${
          viewMode === 'students' ? 'text-white' : 'text-gray-700'
        }`}>
          Discover What We Offer
        </h2>
        
        <div className={`${containerClasses} px-2 py-2 transition-all duration-500`}>
          <NavTabs activeMode={viewMode} onModeChange={onModeChange} />
        </div>
      </div>
    </section>
  );
}
