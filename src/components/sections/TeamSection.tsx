import Section from '../layout/Section';

const teamMembers = [
  { name: 'CEO', photo: '/ceo.jpg', role: 'Chief Executive Officer' },
  { name: 'CTO', photo: '/cto.jpg', role: 'Chief Technology Officer' },
  { name: 'Akash', photo: '/akash.jpg', role: 'Team Member' },
  { name: 'Disha', photo: '/disha.jpg', role: 'Team Member' },
  { name: 'Engineer 1', photo: '/engineer1.jpg', role: 'Software Engineer' },
  { name: 'Engineer 2', photo: '/engineer2.jpg', role: 'Software Engineer' }
];

export default function TeamSection() {
  return (
    <Section id="team" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 md:mb-8 lg:mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-2 md:mb-3 lg:mb-4 border-2 md:border-3 lg:border-4 border-[#3333CC]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
