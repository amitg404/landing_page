import Section from '../layout/Section';
import LogoLoop from '../ui/LogoLoop';

const compliances = [
  { src: '/dpdp.png', alt: 'DPDP' },
  { src: '/hippa.png', alt: 'HIPAA' },
  { src: '/gdpr.jpg', alt: 'GDPR' }
];

export default function ComplianceSection() {
  return (
    <Section id="compliance" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 md:mb-10 lg:mb-12">
          Compliance & Security
        </h2>
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
        <p className="mt-8 md:mt-10 lg:mt-12 text-base md:text-lg text-gray-600 text-center px-4 md:px-8">
          We adhere to the highest standards of data protection and healthcare compliance to ensure
          your information is always secure.
        </p>
      </div>
    </Section>
  );
}
