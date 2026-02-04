import Section from '../layout/Section';

export default function AboutSection() {
  return (
    <Section id="about" className="bg-transparent">
      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <div className="text-center px-8">
          <h2 className="text-4xl font-semibold text-gray-900 mb-8">About Medvora AI</h2>
          <div className="space-y-6 text-xl text-gray-700">
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
      </div>
    </Section>
  );
}
