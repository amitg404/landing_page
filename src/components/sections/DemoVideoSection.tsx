import AnimatedContent from '../ui/AnimatedContent';

export default function DemoVideoSection() {
  return (
    <section id="demo-video" className="relative w-full py-16 md:py-24 bg-transparent">
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
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 md:mb-12 text-center">Demo Video</h2>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.1}
          delay={200}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Medvora Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </AnimatedContent>

        <AnimatedContent
           distance={30}
           direction="vertical"
           reverse={false}
           initialOpacity={0}
           animateOpacity
           scale={1}
           threshold={0.1}
           delay={400}
        >
          <p className="mt-8 text-lg text-gray-600 text-center px-4 md:px-8 max-w-3xl mx-auto">
            Watch how Medvora transforms clinical workflows and reduces physician burnout through
            intelligent automation.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
}
