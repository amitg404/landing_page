import Section from '../layout/Section';
import LogoLoop from '../ui/LogoLoop';

const endorsements = [
  { src: '/microsoft_for startups.webp', alt: 'Microsoft for Startups' },
  { src: '/vadhwani_foundation.webp', alt: 'Wadhwani Foundation' },
  { src: '/eleven_labs.png', alt: 'Eleven Labs' },
  { src: '/block71.avif', alt: 'Block71' }
];

export default function EndorsedBySection() {
  return (
    <Section id="endorsed-by" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 md:mb-10 lg:mb-12">
          Endorsed By
        </h2>
        <LogoLoop
          logos={endorsements}
          speed={70}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          fadeOut={false}
          ariaLabel="Endorsed By"
        />
      </div>
    </Section>
  );
}
