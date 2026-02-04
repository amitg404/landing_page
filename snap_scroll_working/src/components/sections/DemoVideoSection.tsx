import Section from '../layout/Section';

export default function DemoVideoSection() {
  return (
    <Section id="demo-video" className="bg-white">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Demo Video</h2>
        <div className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Medvora Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="mt-8 text-lg text-gray-600 text-center max-w-2xl">
          Watch how Medvora transforms clinical workflows and reduces physician burnout through
          intelligent automation.
        </p>
      </div>
    </Section>
  );
}
