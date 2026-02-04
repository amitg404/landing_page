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
    <Section id="help-students" className="bg-black">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl font-semibold text-white mb-12">How We Help Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#3333CC] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-semibold">{idx + 1}</span>
                </div>
                <p className="text-lg text-white">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
