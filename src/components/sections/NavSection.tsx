import Section from '../layout/Section';
import NavTabs from '../ui/NavTabs';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavSectionProps {
  viewMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function NavSection({ viewMode, onModeChange }: NavSectionProps) {
  return (
    <Section id="navigation" className="bg-transparent">
      {/* Centered glassmorphism navbar */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-black/30 border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-2 py-2">
          <NavTabs activeMode={viewMode} onModeChange={onModeChange} />
        </div>
      </div>
    </Section>
  );
}
