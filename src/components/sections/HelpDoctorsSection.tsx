import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import CountUp from '../ui/CountUp';
import AnimatedContent from '../ui/AnimatedContent';

const bentoItems = [
  {
    title: 'Reduce Burnout',
    stat: 43.2,
    suffix: '%',
    label: 'Physician Burnout Rate',
    span: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Save Time',
    stat: 65,
    suffix: '%',
    label: 'Nurses Under Extreme Strain',
    span: 'col-span-1',
  },
  {
    title: 'Better Outcomes',
    stat: 47,
    suffix: '%',
    label: 'Personal Burnout',
    span: 'col-span-1',
  },
  {
    title: 'Smarter Workflows',
    stat: 31,
    suffix: '%',
    label: 'Work-Related Burnout',
    span: 'col-span-1 md:col-span-2',
  },
];

const userFlowSteps = [
  { step: 1, title: 'Patient Intake', description: 'AI-assisted patient data collection and history review' },
  { step: 2, title: 'AI Analysis', description: 'Intelligent analysis of symptoms, history, and diagnostics' },
  { step: 3, title: 'Clinical Suggestions', description: 'Evidence-based treatment recommendations and protocols' },
  { step: 4, title: 'Documentation', description: 'Auto-generated clinical notes and prescriptions' },
  { step: 5, title: 'Follow-up Planning', description: 'Automated follow-up scheduling and reminders' },
  { step: 6, title: 'Insights Dashboard', description: 'Patient outcome analytics and practice insights' },
];

function DoctorBentoCard({
  item,
  index,
}: {
  item: (typeof bentoItems)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${item.span} relative overflow-hidden rounded-2xl bg-white p-4 md:p-5 lg:p-6 cursor-default group shadow-[0_4px_8px_rgba(0,0,0,0.08)] border border-[#dedede] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={{ willChange: 'transform' }}
    >
      {/* Spotlight glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(250px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(51, 51, 204, 0.08), transparent 60%)`
            : 'none',
        }}
      />

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#3333CC]/30" />

      <div className="relative z-10">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3333CC] mb-1">
          <CountUp to={item.stat} duration={1.5} separator="," />
          {item.suffix}
        </div>
        <p className="text-xs md:text-sm text-gray-600 font-medium mb-2 md:mb-3">{item.label}</p>
        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">{item.title}</h3>
      </div>
    </motion.div>
  );
}

export default function HelpDoctorsSection() {
  return (
    <section id="help-doctors" className="relative w-full py-12 md:py-16 lg:py-24 bg-transparent">
      <div className="relative z-10 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4 text-center">
            How We Help Doctors
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-12 text-center px-2 md:px-4 lg:px-8 max-w-3xl mx-auto">
            Reducing cognitive load, increasing patient context, and improving time efficiency
          </p>
        </AnimatedContent>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Top: Bento Grid */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 auto-rows-min mt-8 md:mt-12">
              {bentoItems.map((item, idx) => (
                <DoctorBentoCard key={idx} item={item} index={idx} />
              ))}
            </div>
          </div>

          {/* Bottom: Doctor's User Flow - Vertical Timeline for ALL screens */}
          <div className="w-full max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 md:mb-12 text-center">
              Doctor's User Flow
            </h3>

            <div className="relative pl-4 md:pl-8">
              {/* Vertical Loop Line */}
              <div className="absolute left-[27px] md:left-[43px] top-6 bottom-6 w-0.5 md:w-1 bg-gradient-to-b from-[#3333CC] via-[#3333CC]/50 to-transparent" />
              
              <div className="space-y-8 md:space-y-12">
                {userFlowSteps.map((step) => (
                  <motion.div 
                    key={step.step} 
                    className="relative flex gap-6 md:gap-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {/* Step Circle */}
                    <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#3333CC] text-white flex items-center justify-center text-sm md:text-base font-bold shadow-md z-10 mt-1">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow pt-1">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={300}
        >
          <div className="mt-16 md:mt-24 text-center px-4 md:px-8 max-w-4xl mx-auto">
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
