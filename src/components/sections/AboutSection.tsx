import Section from '../layout/Section';
import AnimatedContent from '../ui/AnimatedContent';

interface AboutSectionProps {
  onSwitchTab?: (tab: 'students' | 'doctors') => void;
}

export default function AboutSection({ onSwitchTab }: AboutSectionProps) {
  return (
    <Section id="about" className="bg-transparent py-16 md:py-24">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
        
        {/* Main Headline */}
        <AnimatedContent
          distance={20}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 text-center mb-8 md:mb-12 leading-tight">
            Who We Are
          </h2>
        </AnimatedContent>

        {/* Introduction Text */}
        <AnimatedContent
          distance={20}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={100}
        >
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-4xl mx-auto space-y-6">
            <p>
              Medvora AI is transforming medical education and clinical practice with one unified AI engine. 
              We address the critical gap in medical understanding where fragmented learning and short consultation 
              times increase the risk of misdiagnosis and delayed diagnosis for millions.
            </p>
          </div>
        </AnimatedContent>

        {/* Our Solution Section */}
        <div className="space-y-8">
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={200}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Our Solution: One Unified Engine
              </h3>
              <p className="text-lg text-gray-600">
                The Medvora AI Engine operates in two powerful modes:
              </p>
            </div>
          </AnimatedContent>

          {/* Modes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Student Mode Card */}
            <AnimatedContent
              distance={30}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.1}
              delay={300}
              className="h-full"
            >
              <div 
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-start relative group cursor-pointer md:cursor-default"
                onClick={() => window.innerWidth < 768 && onSwitchTab?.('students')}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-[#3333CC]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Student Mode</h4>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  A personalized AI tutor that adapts to every medical student, offering virtual patients with unique cases, adaptive learning paths, and organized revision to build real clinical reasoning.
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSwitchTab?.('students');
                  }}
                  className="mt-auto inline-flex items-center text-[#3333CC] font-semibold group-hover:underline"
                >
                  For Students 
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </AnimatedContent>

            {/* Medic Mode Card */}
            <AnimatedContent
              distance={30}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.1}
              delay={400}
              className="h-full"
            >
              <div 
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-start relative group cursor-pointer md:cursor-default"
                onClick={() => window.innerWidth < 768 && onSwitchTab?.('doctors')}
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 text-[#008000]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Medic Mode</h4>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  An AI clinical assistant designed to support doctors during real consultations. It streamlines patient understanding, helps organize symptoms, analyzes reports, and enables faster, more accurate clinical decision-making.
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSwitchTab?.('doctors');
                  }}
                  className="mt-auto inline-flex items-center text-[#008000] font-semibold group-hover:underline"
                >
                  For Doctors
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </AnimatedContent>
          </div>
        </div>

        {/* Conclusion */}
        <AnimatedContent
          distance={20}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={500}
        >
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
              By unifying personalized learning and intelligent clinical support, Medvora AI provides 
              a seamless journey from mastering medicine to practicing it with confidence, positioning 
              us as a new category leader in medical AI.
            </p>
          </div>
        </AnimatedContent>

      </div>
    </Section>
  );
}
