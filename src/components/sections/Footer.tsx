import Section from '../layout/Section';

export default function Footer() {
  return (
    <Section id="footer" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 py-8 md:py-0">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Logo and tagline */}
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/medvora_logo.png" 
                alt="Medvora" 
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-3 md:mb-4 object-contain" 
              />
              <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
                AI-powered clinical assistance for the future of healthcare
              </p>
            </div>

            {/* Quick links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4">Contact</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>contact@medvora.ai</li>
                <li>+91 XXX XXX XXXX</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
            <p className="text-xs md:text-sm text-gray-500">
              © {new Date().getFullYear()} Medvora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
