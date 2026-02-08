import { useRef, useEffect } from 'react';
import CountUp from '../ui/CountUp';
import AnimatedContent from '../ui/AnimatedContent';

const stats = [
  { value: 43.2, label: 'Physician Burnout', suffix: '%' },
  { value: 65, label: 'Nurses Under Extreme Strain', suffix: '%' },
  { value: 47, label: 'Personal Burnout', suffix: '%' },
  { value: 31, label: 'Work-Related Burnout', suffix: '%' },
  { value: 35, label: 'Patient-Related Burnout', suffix: '%' },
  { value: 24.9, label: 'Experience All Three Forms', suffix: '%' }
];

export default function HelpDoctorsSection() {
  return (
    <section id="help-doctors" className="relative w-full py-16 md:py-24 bg-transparent">
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
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 md:mb-4 text-center">How We Help Doctors</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 text-center px-4 md:px-8 max-w-3xl mx-auto">
            Reducing cognitive load, increasing patient context, and improving time efficiency
          </p>
        </AnimatedContent>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 w-full px-4 md:px-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <AnimatedContent
              key={idx}
              distance={30}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.1}
              delay={idx * 100} 
              className="h-full"
            >
              <div
                className="bg-white h-full rounded-xl md:rounded-2xl p-4 md:p-8 shadow-[8px_8px_16px_rgba(0,0,0,0.3)] md:shadow-[10px_10px_20px_rgba(0,0,0,0.3)] border-r-[2px] border-b-[2px] md:border-r-[3px] md:border-b-[3px] border-black hover:shadow-[10px_10px_20px_rgba(0,0,0,0.35)] md:hover:shadow-[12px_12px_24px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between"
              >
                <div className="text-3xl md:text-5xl font-semibold text-[#3333CC] mb-1 md:mb-2 break-words">
                  <CountUp to={stat.value} duration={1.5} separator="," />
                  {stat.suffix}
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-tight">{stat.label}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={600}
        >
          <div className="mt-8 md:mt-12 text-center px-4 md:px-8 max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-700">
              Medvora reduces these burnout rates by automating administrative tasks, providing
              instant patient insights, and streamlining clinical workflows.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
