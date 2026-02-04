import Section from '../layout/Section';
import CountUp from '../ui/CountUp';

const stats = [
  { value: 43.2, label: 'Physician Burnout', suffix: '%' },
  { value: 65, label: 'Nurses Under Extreme Strain', suffix: '%' },
  { value: 47, label: 'Personal Burnout', suffix: '%' },
  { value: 31, label: 'Work-Related Burnout', suffix: '%' },
  { value: 35, label: 'Patient-Related Burnout', suffix: '%' },
  { value: 24.9, label: 'Experience All Three Forms', suffix: '%' }
];

export default function HelpDoctorsSection() {
  return (
    <Section id="help-doctors" className="bg-white">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-16 overflow-y-auto">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">How We Help Doctors</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl">
          Reducing cognitive load, increasing patient context, and improving time efficiency
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] border-r-[3px] border-b-[3px] border-black hover:shadow-[12px_12px_24px_rgba(0,0,0,0.35)] transition-all"
            >
              <div className="text-5xl font-semibold text-[#3333CC] mb-2">
                <CountUp to={stat.value} duration={1.5} separator="," />
                {stat.suffix}
              </div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl text-center">
          <p className="text-lg text-gray-700">
            Medvora reduces these burnout rates by automating administrative tasks, providing
            instant patient insights, and streamlining clinical workflows.
          </p>
        </div>
      </div>
    </Section>
  );
}
