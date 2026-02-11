import AnimatedContent from '../ui/AnimatedContent';
import EchoTeam from '../ui/EchoTeam';

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-12 md:py-24 bg-transparent overflow-hidden">
      <div className="relative flex flex-col items-center px-4 md:px-8">
        {/* Title */}
        <div className="w-full text-center mb-8 md:mb-12 relative" style={{ zIndex: 100 }}>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={0.9}
            threshold={0.1}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Meet the Team
            </h2>
          </AnimatedContent>
        </div>

        {/* Framer Echo Team Component */}
        <div className="w-full max-w-7xl relative" style={{ zIndex: 10 }}>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={0.9}
            threshold={0.1}
            delay={200}
          >
            <EchoTeam />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
