import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import GradientText from '../ui/GradientText';

const taglines = [
  'Personalized Clinical AI Assistant for Doctors',
  'Empowering Medical Students with AI enabled learning',
];

export default function TaglineStackSection() {
  return (
    <section className="relative w-full h-screen bg-transparent">
      <div className="h-full w-full">
        <ScrollStack
          itemDistance={80}
          itemScale={0.05}
          itemStackDistance={30}
          stackPosition="50%"
          scaleEndPosition="45%"
          baseScale={0.9}
          blurAmount={0}
        >
          {taglines.map((tagline, index) => (
            <ScrollStackItem key={index}>
              <div className="bg-transparent rounded-[32px] p-8 md:p-12 h-full flex items-center justify-center">
                <GradientText
                  colors={["#3333CC", "#8989e1", "#3333CC"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-center max-w-4xl px-4"
                >
                  {tagline}
                </GradientText>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
