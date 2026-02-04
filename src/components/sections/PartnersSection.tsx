import Section from '../layout/Section';
import LogoLoop from '../ui/LogoLoop';

const partners = [
  { src: '/IIT_Dharwad.svg', alt: 'IIT Dharwad' },
  { src: '/college.png', alt: 'College 1' },
  { src: '/college1.png', alt: 'College 2' },
  { src: '/mmc.jpg', alt: 'MMC' }
];

export default function PartnersSection() {
  return (
    <Section id="partners" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 md:mb-10 lg:mb-12">
          Our Partners
        </h2>
        <LogoLoop
          logos={partners}
          speed={70}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          fadeOut={false}
          ariaLabel="Our Partners"
        />
      </div>
    </Section>
  );
}
