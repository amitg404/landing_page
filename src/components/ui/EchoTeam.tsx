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
}

const defaultTeamMembers: TeamMember[] = [
  {
    name: 'CEO',
    role: 'Chief Executive Officer',
    image: '/ceo.jpg',
    bio: 'Leading the vision and strategy'
  },
  {
    name: 'CTO',
    role: 'Chief Technology Officer',
    image: '/cto.jpg',
    bio: 'Driving technical innovation'
  },
  {
    name: 'Akash',
    role: 'Team Member',
    image: '/akash.jpg',
    bio: 'Building amazing products'
  },
  {
    name: 'Disha',
    role: 'Team Member',
    image: '/disha.jpg',
    bio: 'Creating exceptional experiences'
  },
  {
    name: 'Engineer 1',
    role: 'Software Engineer',
    image: '/engineer1.jpg',
    bio: 'Crafting elegant solutions'
  },
  {
    name: 'Engineer 2',
    role: 'Software Engineer',
    image: '/engineer2.jpg',
    bio: 'Building scalable systems'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Card */}
            <div
              className="relative overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out"
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
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
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
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-1 transition-transform duration-500"
                    style={{
                      transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-2 transition-all duration-500"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      transform: hoveredIndex === index ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                  >
                    {member.role}
                  </p>
                  
                  {/* Bio - appears on hover */}
                  {member.bio && (
                    <p
                      className="text-xs text-gray-300 transition-all duration-500"
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
        ))}
      </div>
    </div>
  );
}

