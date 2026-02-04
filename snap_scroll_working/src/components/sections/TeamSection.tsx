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
    <Section id="team" className="bg-white">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-16 overflow-y-auto">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#3333CC]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
