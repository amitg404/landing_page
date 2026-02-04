import Section from '../layout/Section';

export default function Footer() {
  return (
    <Section id="footer" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and tagline */}
            <div>
              <img src="/medvora_logo.png" alt="Medvora" className="w-32 h-32 mb-4" />
              <p className="text-gray-400">
                AI-powered clinical assistance for the future of healthcare
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@medvora.ai</li>
                <li>+91 XXX XXX XXXX</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Medvora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
