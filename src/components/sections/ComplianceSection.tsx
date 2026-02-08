import LogoLoop from '../ui/LogoLoop';
import AnimatedContent from '../ui/AnimatedContent';

const compliances = [
  { src: '/dpdp.png', alt: 'DPDP' },
  { src: '/hippa.png', alt: 'HIPAA' },
  { src: '/gdpr.jpg', alt: 'GDPR' }
];

export default function ComplianceSection() {
  return (
    <section id="compliance" className="relative w-full py-16 md:py-24 bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 md:mb-10 lg:mb-12 text-center">
            Compliance & Security
          </h2>
        </AnimatedContent>

        <AnimatedContent
          distance={30}
          direction="horizontal"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={200}
          className="w-full"
        >
          <LogoLoop
            logos={compliances}
            speed={70}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut={false}
            ariaLabel="Compliance & Security"
          />
        </AnimatedContent>

        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={400}
        >
           <p className="mt-8 md:mt-10 lg:mt-12 text-base md:text-lg text-gray-600 text-center px-4 md:px-8 max-w-3xl mx-auto">
            We adhere to the highest standards of data protection and healthcare compliance to ensure
            your information is always secure.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
}
