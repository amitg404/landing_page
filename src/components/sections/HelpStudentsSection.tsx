import Section from '../layout/Section';

export default function HelpStudentsSection() {
  const benefits = [
    'Reduce eye strain with optimized study interfaces',
    'Faster learning through AI-powered personalization',
    'Interactive practice with instant feedback',
    'Comprehensive medical knowledge database',
    'Study progress tracking and analytics',
    'Collaborative learning tools'
  ];

  return (
    <Section id="help-students" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 md:mb-8 lg:mb-12">
          How We Help Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full max-w-5xl">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-5 lg:p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#3333CC] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xs md:text-sm lg:text-base">{idx + 1}</span>
                </div>
                <p className="text-xs md:text-base lg:text-lg text-white leading-relaxed">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
