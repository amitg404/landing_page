import Section from '../layout/Section';
import AnimatedContent from '../ui/AnimatedContent';

export default function AboutSection() {
  return (
    <Section id="about" className="bg-transparent py-6 md:py-8">
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.1}
        >
          <div className="text-center px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 md:mb-6">
              About Medvora AI
            </h2>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl text-gray-700">
              <p>
                Medvora is revolutionizing healthcare with AI-powered clinical assistance designed for
                medical professionals and students.
              </p>
              <p>
                Our platform combines cutting-edge artificial intelligence with deep medical knowledge
                to provide personalized support, reduce cognitive load, and improve patient outcomes.
              </p>
              <p>
                We're building the future of medical education and clinical practice, one intelligent
                interaction at a time.
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </Section>
  );
}
