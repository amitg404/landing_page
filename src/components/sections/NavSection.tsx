import Section from '../layout/Section';
import NavTabs from '../ui/NavTabs';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavSectionProps {
  viewMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  isDarkMode: boolean;
}

export default function NavSection({ viewMode, onModeChange, isDarkMode }: NavSectionProps) {
  return (
    <Section id="navigation" className={isDarkMode ? 'bg-black' : 'bg-white'}>
      <div className="relative z-10 flex items-center justify-center h-full">
        <NavTabs activeMode={viewMode} onModeChange={onModeChange} />
      </div>
    </Section>
  );
}
