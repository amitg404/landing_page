import { useState } from 'react';

/**
 * Echo UI Team / 01 - Inspired Design
 * Custom implementation inspired by Framer's Echo Team component
 */

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedIn?: string;
}

const defaultTeamMembers: TeamMember[] = [
  {
    name: 'Vedavyasa Pai',
    role: 'Founder & CEO',
    image: '/Team/Vedavyasa Pai,Founder & CEO.png',
    bio: 'Leading the vision and strategy',
    linkedIn: 'https://www.linkedin.com/in/vedavyasa-pai/'
  },
  {
    name: 'Sasi Priya Ayyanan',
    role: 'Co-Founder, CTO',
    image: '/Team/Sasi Priya Ayyanan,Co-Founder, CTO .png',
    bio: 'Driving technical innovation',
    linkedIn: 'https://www.linkedin.com/in/sasipriyaayyanan/'
  },
  {
    name: 'Amit G',
    role: 'Founding Engineer',
    image: '/Team/Amit G,Founding Engineer.png',
    bio: 'Building the core platform',
    linkedIn: 'https://www.linkedin.com/in/amit-g-79b29024a/'
  },
  {
    name: 'Sampath Herga',
    role: 'Head of Engineering',
    image: '/Team/Sampath Herga,Head of Engineering.png',
    bio: 'Leading engineering excellence',
    linkedIn: 'https://www.linkedin.com/in/sampath06/'
  },
  {
    name: 'Dr. Sanath Kumar N',
    role: 'Head of Growth and Partnership',
    image: '/Team/Dr. Sanath Kumar N, Head of Growth and Partnership.png',
    bio: 'Driving partnerships and growth',
    linkedIn: 'https://www.linkedin.com/in/sanathkumaruom/'
  },
  {
    name: 'Shreyas S',
    role: 'Medical Lead',
    image: '/Team/Shreyas S,Medical Lead.png',
    bio: 'Ensuring medical accuracy'
    // No LinkedIn profile
  },
  {
    name: 'Deepak Pitta',
    role: 'Post-Exit Tech Entrepreneur-Mentor',
    image: '/Team/Deepak Pitta, Post-Exit Tech Entrepreneur-Mentor.png',
    bio: 'Guiding strategic direction',
    linkedIn: 'https://www.linkedin.com/in/deepakpitta/'
  },
  {
    name: 'Shreenatha M',
    role: 'COO & Director Quadwave, Mentor & Board member',
    image: '/Team/Shreenatha M,COO and Director Quadwave-Mentor and Board member.png',
    bio: 'Strategic operations guidance',
    linkedIn: 'https://www.linkedin.com/in/shreenatha/'
  },
  {
    name: 'Sudhanva Dhananjaya',
    role: 'CMD Excelsoft Technologies Ltd, Mentor',
    image: '/Team/Sudhanva Dhananjaya, CMD Excelsoft Technologies Ltd -Mentor.png',
    bio: 'Technology leadership mentor',
    linkedIn: 'https://www.linkedin.com/in/sudhanva-dhananjaya-087356/'
  }
];

interface EchoTeamProps {
  members?: TeamMember[];
  className?: string;
}

export default function EchoTeam({ members = defaultTeamMembers, className = '' }: EchoTeamProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {members.map((member, index) => {
          const CardContent = (
            <div
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div
                className={`relative overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out ${member.linkedIn ? 'cursor-pointer' : ''}`}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredIndex === index
                    ? '0 20px 40px rgba(51, 51, 204, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)'
                    : '0 4px 12px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                      filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0.6,
                    }}
                  />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 md:p-6 text-white">
                    <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mb-0.5 sm:mb-1 transition-transform duration-500 leading-tight"
                      style={{
                        transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                      }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-200 mb-1 sm:mb-2 transition-all duration-500 leading-tight"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0.8,
                        transform: hoveredIndex === index ? 'translateY(-2px)' : 'translateY(0)',
                      }}
                    >
                      {member.role}
                    </p>
                    
                    {/* Bio - appears on hover, hidden on mobile */}
                    {member.bio && (
                      <p
                        className="hidden md:block text-xs text-gray-300 transition-all duration-500"
                        style={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                          maxHeight: hoveredIndex === index ? '100px' : '0',
                        }}
                      >
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>

                {/* Accent Border - appears on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3333CC] to-[#8989e1] transition-all duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </div>
            </div>
          );

          return member.linkedIn ? (
            <a
              key={index}
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </a>
          ) : (
            <div key={index}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}

