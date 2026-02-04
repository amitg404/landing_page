import Section from '../layout/Section';
import Marquee from '../ui/Marquee';

const endorsements = [
  { name: 'Microsoft for Startups', logo: '/microsoft_for startups.webp' },
  { name: 'Wadhwani Foundation', logo: '/vadhwani_foundation.webp' },
  { name: 'Eleven Labs', logo: '/eleven_labs.png' },
  { name: 'Block71', logo: '/block71.avif' }
];

export default function EndorsedBySection() {
  return (
    <Section id="endorsed-by" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Endorsed By</h2>
        <Marquee speed={50} className="w-full">
          {endorsements.map((item, idx) => (
            <div
              key={idx}
              className="mx-8 flex items-center justify-center bg-white rounded-2xl p-8 shadow-md min-w-[200px] h-[120px]"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
