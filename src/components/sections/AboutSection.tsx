import { useRef } from 'react';
import Section from '../layout/Section';
import AnimatedContent from '../ui/AnimatedContent';

interface AboutSlide {
  id: number;
  title: string;
  content: string[];
  icon: JSX.Element;
  gradient: string;
  label: string;
  sublabel: string;
}

const aboutSlides: AboutSlide[] = [
  {
    id: 1,
    title: 'About Medvora AI',
    content: [
      'Medvora is revolutionizing healthcare with AI-powered clinical assistance designed for medical professionals and students.',
      'Our platform combines cutting-edge artificial intelligence with deep medical knowledge to provide personalized support, reduce cognitive load, and improve patient outcomes.',
      'We\'re building the future of medical education and clinical practice, one intelligent interaction at a time.'
    ],
    gradient: 'from-[#2B7FFF] to-[#3333CC]',
    label: 'Medvora AI',
    sublabel: 'Intelligent Healthcare Assistant',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'AI-Powered Diagnostics',
    content: [
      'Our advanced AI engine analyzes patient data with unprecedented accuracy, helping healthcare professionals make faster, more informed decisions.',
      'Leveraging machine learning models trained on millions of medical cases, Medvora provides differential diagnoses and treatment recommendations.',
      'Reduce diagnostic errors and improve patient safety with intelligent clinical decision support at your fingertips.'
    ],
    gradient: 'from-[#3bc73b] to-[#008000]',
    label: 'Smart Diagnostics',
    sublabel: 'AI-Driven Clinical Insights',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Medical Education Platform',
    content: [
      'Transform the way medical students learn with interactive AI tutoring, personalized study plans, and real-world case simulations.',
      'Our platform adapts to each student\'s learning pace, identifying knowledge gaps and providing targeted educational content.',
      'Prepare for exams with confidence using our comprehensive question banks and AI-powered performance analytics.'
    ],
    gradient: 'from-[#ffd666] to-[#cc8800]',
    label: 'Learn & Grow',
    sublabel: 'Personalized Medical Education',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Clinical Workflow Optimization',
    content: [
      'Streamline your practice with intelligent automation that handles routine tasks, documentation, and administrative workflows.',
      'Spend more time with patients and less time on paperwork with AI-assisted charting and automated clinical note generation.',
      'Integrate seamlessly with existing EHR systems while maintaining the highest standards of data security and patient privacy.'
    ],
    gradient: 'from-[#ff3333] to-[#cc0000]',
    label: 'Workflow AI',
    sublabel: 'Efficient Clinical Operations',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Evidence-Based Medicine',
    content: [
      'Access the latest medical research and clinical guidelines instantly, with AI-curated recommendations based on current evidence.',
      'Our platform continuously updates with new studies, ensuring you always have access to the most recent medical knowledge.',
      'Make treatment decisions backed by robust scientific evidence and peer-reviewed research from trusted medical journals.'
    ],
    gradient: 'from-[#8989e1] to-[#5e5e98]',
    label: 'Research Hub',
    sublabel: 'Evidence-Based Practice',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Patient-Centered Care',
    content: [
      'Enhance patient engagement with personalized health insights, treatment explanations, and educational resources.',
      'Empower patients to take an active role in their healthcare journey with accessible, easy-to-understand medical information.',
      'Build stronger patient-provider relationships through improved communication and shared decision-making tools.'
    ],
    gradient: 'from-[#6fdb6f] to-[#3bc73b]',
    label: 'Patient Care',
    sublabel: 'Compassionate Healthcare',
    icon: (
      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function AboutSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="about" className="bg-transparent py-12 md:py-16 lg:py-20">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.1}
        >
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#dedede] flex items-center justify-center hover:border-[#3333CC] hover:bg-[#ebebfa] transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-[#3333CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#dedede] flex items-center justify-center hover:border-[#3333CC] hover:bg-[#ebebfa] transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-[#3333CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-8 pb-4">
              {aboutSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0 w-full snap-center"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Image */}
                    <div className="order-2 lg:order-1">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <div className={`aspect-square bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
                          <div className="text-center p-8">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              {slide.icon}
                            </div>
                            <p className="text-white text-lg font-medium">{slide.label}</p>
                            <p className="text-white/80 text-sm mt-2">{slide.sublabel}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1c1c1c] mb-6">
                        {slide.title}
                      </h2>
                      <div className="space-y-5 text-lg md:text-xl text-[#3b3b3b]">
                        {slide.content.map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {aboutSlides.map((slide) => (
              <div
                key={slide.id}
                className="w-2 h-2 rounded-full bg-[#dedede] transition-all duration-300"
              />
            ))}
          </div>
        </AnimatedContent>
      </div>
    </Section>
  );
}
