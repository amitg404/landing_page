import LogoLoop from '../ui/LogoLoop';
import AnimatedContent from '../ui/AnimatedContent';

const endorsements = [
  { src: '/microsoft_for startups.webp', alt: 'Microsoft for Startups' },
  { src: '/vadhwani_foundation.webp', alt: 'Wadhwani Foundation' },
  { src: '/eleven_labs.png', alt: 'Eleven Labs' },
  { src: '/block71.avif', alt: 'Block71' }
];

export default function EndorsedBySection() {
  return (
    <section id="endorsed-by" className="relative w-full py-8 md:py-12 bg-transparent">
      <div className="relative z-10 flex flex-col items-center px-4 md:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 md:mb-8">
            Endorsed By
          </h2>
        </AnimatedContent>
        {/* LogoLoop without AnimatedContent wrapper to prevent animation glitch */}
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
    </section>
  );
}
