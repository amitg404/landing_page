import { useState, useEffect } from 'react';
import ChromaGrid from '../ui/ChromaGrid';
import CardSwap, { Card } from '../ui/CardSwap';
import AnimatedContent from '../ui/AnimatedContent';

const teamMembers = [
  { 
    image: '/ceo.jpg', 
    title: 'CEO', 
    subtitle: 'Chief Executive Officer',
    borderColor: '#3333CC',
    gradient: 'linear-gradient(145deg, #3333CC, #1c1c1c)'
  },
  { 
    image: '/cto.jpg', 
    title: 'CTO', 
    subtitle: 'Chief Technology Officer',
    borderColor: '#24248f',
    gradient: 'linear-gradient(210deg, #24248f, #1c1c1c)'
  },
  { 
    image: '/akash.jpg', 
    title: 'Akash', 
    subtitle: 'Team Member',
    borderColor: '#8989e1',
    gradient: 'linear-gradient(165deg, #8989e1, #1c1c1c)'
  },
  { 
    image: '/disha.jpg', 
    title: 'Disha', 
    subtitle: 'Team Member',
    borderColor: '#5e5e98',
    gradient: 'linear-gradient(195deg, #5e5e98, #1c1c1c)'
  },
  { 
    image: '/engineer1.jpg', 
    title: 'Engineer 1', 
    subtitle: 'Software Engineer',
    borderColor: '#3333CC',
    gradient: 'linear-gradient(225deg, #3333CC, #1c1c1c)'
  },
  { 
    image: '/engineer2.jpg', 
    title: 'Engineer 2', 
    subtitle: 'Software Engineer',
    borderColor: '#1f1f7c',
    gradient: 'linear-gradient(135deg, #1f1f7c, #1c1c1c)'
  }
];

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="team" className="relative w-full py-12 md:py-24 bg-transparent overflow-hidden">
      <div className="relative flex flex-col items-center px-4 md:px-8">
        {/* Title - positioned with isolation to ensure it's above cards */}
        <div className="w-full text-center mb-0 md:mb-12 relative" style={{ zIndex: 100 }}>
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

        {/* Cards container - positioned below the title with lower z-index */}
        <div className="w-full max-w-5xl relative" style={{ zIndex: 10 }}>
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
            {isMobile ? (
              // Increased marginTop to 80px to prevent card stack from overlapping the title
              <div className="relative w-full flex justify-center" style={{ height: '400px', marginTop: '80px' }}>
                <CardSwap
                  cardDistance={5}
                  verticalDistance={15}
                  delay={3000}
                  pauseOnHover={true}
                  width="100%"
                  height="100%"
                >
                  {teamMembers.map((member, idx) => (
                    <Card key={idx} className="overflow-hidden border-2" style={{ borderColor: member.borderColor || 'transparent', background: '#1c1c1c', width: '260px', height: '340px' }}>
                      <div className="relative h-full w-full flex flex-col">
                         <img src={member.image} alt={member.title} className="w-full h-3/4 object-cover" />
                         <div className="p-4 bg-gradient-to-t from-black to-transparent flex flex-col justify-end h-1/4">
                           <h3 className="text-white text-xl font-bold">{member.title}</h3>
                           <p className="text-gray-300">{member.subtitle}</p>
                         </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            ) : (
              <ChromaGrid 
                items={teamMembers}
                radius={350}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            )}
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
