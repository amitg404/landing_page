import AnimatedContent from '../ui/AnimatedContent';

const compliances = [
  { src: '/dpdp.png', alt: 'DPDP' },
  { src: '/hippa.png', alt: 'HIPAA' },
  { src: '/gdpr.jpg', alt: 'GDPR' },
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
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.1}
          delay={200}
          className="w-full max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {compliances.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 flex items-center justify-center border border-[#dedede] shadow-[0_4px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[2px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 md:h-18 lg:h-20 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
