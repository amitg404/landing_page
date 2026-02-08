export default function HelpStudentsSection() {
  const benefits = [
    { num: 1, text: 'Reduce eye strain with optimized study interfaces' },
    { num: 2, text: 'Faster learning through AI-powered personalization' },
    { num: 3, text: 'Interactive practice with instant feedback' },
    { num: 4, text: 'Comprehensive medical knowledge database' },
    { num: 5, text: 'Study progress tracking and analytics' },
    { num: 6, text: 'Collaborative learning tools' }
  ];

  return (
    <section id="help-students" className="relative w-full py-12 md:py-16 bg-transparent">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center mb-8">
          How We Help Students
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.num}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3333CC] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-lg">{benefit.num}</span>
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
