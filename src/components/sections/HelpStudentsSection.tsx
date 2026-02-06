import Section from '../layout/Section';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

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
      <div className="relative z-10 w-full h-screen">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center pt-36 md:pt-12 lg:pt-16 px-4">
          How We Help Students
        </h2>
        <ScrollStack
          itemDistance={50}
          itemScale={0.05}
          itemStackDistance={20}
          stackPosition="15%"
          scaleEndPosition="10%"
          baseScale={0.9}
        >
          {benefits.map((benefit, idx) => (
            <ScrollStackItem
              key={idx}
              itemClassName="bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 rounded-full bg-[#3333CC] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">{idx + 1}</span>
                </div>
                <p className="text-xl md:text-2xl text-white leading-relaxed flex items-center h-full">
                  {benefit}
                </p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </Section>
  );
}
