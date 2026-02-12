import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import AnimatedContent from '../ui/AnimatedContent';

const benefits = [
  {
    num: 1,
    title: 'Virtual Patient Simulator',
    text: 'Practice diagnosis, communication, and clinical reasoning with unique virtual patient cases that mimic real-world unpredictability.',
    span: 'col-span-1',
  },
  {
    num: 2,
    title: 'Targeted Error Feedback',
    text: 'The engine explains exactly why you made a mistake, helping to build real clinical reasoning skills instead of rote memorization.',
    span: 'col-span-1',
  },
  {
    num: 3,
    title: 'Instant Doubt Clearing',
    text: 'Get immediate answers and explanations for your questions on any topic, ensuring you never get stuck or slow down your study flow.',
    span: 'col-span-1',
  },
  {
    num: 4,
    title: 'Adaptive Learning Paths',
    text: 'Get a personal AI tutor that adapts to your level, offering customized difficulty, spaced repetition, and preferred learning styles.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    num: 5,
    title: '2D-to-3D Visualizations',
    text: "Convert any medical-related video's 2D content into interactive 3D models for deeper anatomical and procedural understanding.",
    span: 'col-span-1',
  },
  {
    num: 6,
    title: 'Auto-Notes & Summaries',
    text: 'Automatically generate lecture notes and organized summaries, freeing up your time to focus on complex analysis and learning.',
    span: 'col-span-1',
  },
  {
    num: 7,
    title: 'Self-Assessment & Revision',
    text: 'Utilize organized revision paths and self-assessment tools to easily track your progress and ensure efficient mastery of difficult concepts.',
    span: 'col-span-1 md:col-span-2',
  },
];

function BentoCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
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
      className={`${benefit.span} relative overflow-hidden rounded-2xl border border-[#dedede] bg-white p-6 md:p-8 cursor-default group shadow-[0_4px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={{ willChange: 'transform' }}
    >
      {/* Spotlight glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(51, 51, 204, 0.08), transparent 60%)`
            : 'none',
        }}
      />

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#3333CC]/30" />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-[#3333CC] flex items-center justify-center mb-4">
          <span className="text-white font-semibold text-lg">{benefit.num}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
          {benefit.title}
        </h3>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {benefit.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function HelpStudentsSection() {
  return (
    <section id="help-students" className="relative w-full py-12 md:py-16 bg-transparent">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-8">
            How We Help Students
          </h2>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {benefits.map((benefit, idx) => (
            <BentoCard key={benefit.num} benefit={benefit} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
