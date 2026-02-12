import AnimatedContent from '../ui/AnimatedContent';

const endorsements = [
  { src: '/endorsed_by/microsoft_for startups.webp', alt: 'Microsoft for Startups' },
  { src: '/endorsed_by/vadhwani_foundation.webp', alt: 'Wadhwani Foundation' },
  { src: '/endorsed_by/eleven_labs.png', alt: 'Eleven Labs' },
  { src: '/endorsed_by/block71.avif', alt: 'Block71' },
  { src: '/endorsed_by/IIT_Dharwad.svg', alt: 'IIT Dharwad' }
];

export default function EndorsedBySection() {
  const cols = endorsements.length <= 3 ? endorsements.length : 4;

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
          <div
            className="grid gap-4 md:gap-6"
            style={{
              gridTemplateColumns: `repeat(${Math.min(cols, 2)}, 1fr)`,
            }}
          >
            {endorsements.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 flex items-center justify-center border border-[#dedede] shadow-[0_4px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[2px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </AnimatedContent>

        {/* Responsive: show more columns on md+ */}
        <style>{`
          @media (min-width: 768px) {
            #endorsed-by .grid {
              grid-template-columns: repeat(${cols}, 1fr) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
