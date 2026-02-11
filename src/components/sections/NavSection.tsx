import NavTabs from '../ui/NavTabs';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavSectionProps {
  viewMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavSection({ viewMode, onModeChange }: NavSectionProps) {
  return (
    <section id="navigation" className="relative w-full py-16 md:py-24 bg-transparent">
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 transition-colors duration-500">
          Discover What We Offer
        </h2>
        
        <div className="px-2 py-2 transition-all duration-500">
          <NavTabs activeMode={viewMode} onModeChange={onModeChange} />
        </div>
      </div>
    </section>
  );
}
