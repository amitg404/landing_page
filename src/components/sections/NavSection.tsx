import NavTabs from '../ui/NavTabs';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavSectionProps {
  viewMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavSection({ viewMode, onModeChange }: NavSectionProps) {
  return (
    <section id="navigation" className="relative w-full h-screen flex items-center justify-center bg-transparent">
      <div className="relative z-10 flex flex-col items-center px-4 max-w-6xl mx-auto">
        {/* Heading and buttons in same line */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 flex-wrap">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 text-center md:text-left whitespace-nowrap">
            Discover What We Offer
          </h2>
          
          <div className="px-2 py-2 transition-all duration-500">
            <NavTabs activeMode={viewMode} onModeChange={onModeChange} />
          </div>
        </div>
      </div>
    </section>
  );
}
