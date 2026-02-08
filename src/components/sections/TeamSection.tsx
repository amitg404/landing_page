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
    <section id="team" className="relative w-full py-16 md:py-24 bg-transparent">
      <div className="relative z-10 flex flex-col items-center px-4 md:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 md:mb-12">
            Meet the Team
          </h2>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
          delay={200}
          className="w-full max-w-5xl"
        >
          {isMobile ? (
             <div style={{ height: '400px', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <CardSwap
                cardDistance={5} // Reduced distance to keep cards centered
                verticalDistance={15} // Reduced vertical stack
                delay={3000}
                pauseOnHover={true}
                width="100%"
                height="100%"
              >
                {teamMembers.map((member, idx) => (
                  <Card key={idx} className="overflow-hidden border-2" style={{ borderColor: member.borderColor || 'transparent', background: '#1c1c1c', width: '280px', height: '360px' }}>
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
    </section>
  );
}
