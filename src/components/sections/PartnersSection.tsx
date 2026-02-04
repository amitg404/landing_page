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
    <Section id="partners" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 md:mb-10 lg:mb-12">
          Our Partners
        </h2>
        <Marquee speed={50} className="w-full">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="mx-2 md:mx-4 lg:mx-8 flex items-center justify-center bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-5 lg:p-8 shadow-md min-w-[80px] md:min-w-[140px] lg:min-w-[200px] h-[60px] md:h-[90px] lg:h-[120px]"
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
