import Section from '../layout/Section';
import Marquee from '../ui/Marquee';

const partners = [
  { name: 'IIT Dharwad', logo: '/IIT_Dharwad.svg' },
  { name: 'College 1', logo: '/college.png' },
  { name: 'College 2', logo: '/college1.png' },
  { name: 'MMC', logo: '/mmc.jpg' }
];

export default function PartnersSection() {
  return (
    <Section id="partners" className="bg-black">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl font-semibold text-white mb-12">Our Partners</h2>
        <Marquee speed={50} className="w-full">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="mx-8 flex items-center justify-center bg-white rounded-2xl p-8 shadow-md min-w-[200px] h-[120px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
