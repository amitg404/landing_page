import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedContent from '../ui/AnimatedContent';

export default function EarlyAccessSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('medvora_signup')
        .insert([{
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone ? `+91${phone}` : ''
        }]);

      if (error) {
        throw error;
      }

      setShowConfirmation(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');

    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="relative w-full py-16 md:py-24 bg-transparent">
      <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 text-center">
            Early Access is Out!
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 md:mb-14 text-center">Try the beta today</p>
        </AnimatedContent>

        {showConfirmation ? (
          <AnimatedContent
            distance={30}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={0.95}
            threshold={0.1}
          >
            <div className="text-center py-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
                You're on the list!
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                We'll get in touch
              </p>
            </div>
          </AnimatedContent>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Right column: Form fields - appears first on mobile */}
            <AnimatedContent
              distance={30}
              direction="horizontal"
              reverse={true}
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.1}
              delay={400}
              className="order-1 md:order-2"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Join the Beta</h3>
                {/* Name fields */}
                <div className="flex flex-row gap-3">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                    className="flex-1 h-12 px-4 bg-white border-2 border-[#dedede] rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-[#3333CC] focus:outline-none transition-colors"
                    style={{ minWidth: 0 }}
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                    className="flex-1 h-12 px-4 bg-white border-2 border-[#dedede] rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-[#3333CC] focus:outline-none transition-colors"
                    style={{ minWidth: 0 }}
                  />
                </div>

                {/* Email field */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full h-12 px-4 bg-white border-2 border-[#dedede] rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-[#3333CC] focus:outline-none transition-colors"
                />

                {/* Phone field */}
                <div className="flex gap-2">
                  <span className="h-12 px-3 flex items-center bg-gray-100 border-2 border-[#dedede] rounded-xl text-gray-600 font-medium shrink-0">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Phone Number"
                    className="flex-1 h-12 px-4 bg-white border-2 border-[#dedede] rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-[#3333CC] focus:outline-none transition-colors min-w-0"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !firstName.trim() || !email.trim()}
                    className="w-full h-12 bg-[#3333CC] text-white rounded-xl font-semibold hover:bg-[#24248f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-[0_4px_12px_rgba(51,51,204,0.3)]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Early Access'}
                  </button>
                </div>
              </form>
            </AnimatedContent>

            {/* Left column: Contact details - appears second on mobile */}
            <AnimatedContent
              distance={30}
              direction="horizontal"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.1}
              delay={200}
              className="order-2 md:order-1"
            >
              <div className="bg-white border border-[#dedede] rounded-2xl p-6 md:p-8 h-full flex flex-col justify-center shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Contact Us</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ebebfa] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#3333CC]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900 font-medium">contact@medvora.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ebebfa] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#3333CC]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900 font-medium">+91 00000 00000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ebebfa] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#3333CC]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900 font-medium">India</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        )}
      </div>
    </section>
  );
}
