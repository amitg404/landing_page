import Section from '../layout/Section';
import Marquee from '../ui/Marquee';

const compliances = [
  { name: 'DPDP', logo: '/dpdp.png' },
  { name: 'HIPAA', logo: '/hippa.png' },
  { name: 'GDPR', logo: '/gdpr.jpg' }
];

export default function ComplianceSection() {
  return (
    <Section id="compliance" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Compliance & Security</h2>
        <Marquee speed={40} className="w-full">
          {compliances.map((item, idx) => (
            <div
              key={idx}
              className="mx-8 flex items-center justify-center bg-white rounded-2xl p-8 shadow-md min-w-[180px] h-[100px] border-2 border-gray-200"
            >
              <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </Marquee>
        <p className="mt-12 text-lg text-gray-600 text-center px-8">
          We adhere to the highest standards of data protection and healthcare compliance to ensure
          your information is always secure.
        </p>
      </div>
    </Section>
  );
}
