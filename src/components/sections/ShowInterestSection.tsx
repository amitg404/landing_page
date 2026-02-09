import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import AnimatedContent from '../ui/AnimatedContent';

export default function ShowInterestSection() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleButtonClick = () => {
    setShowForm(true);
  };

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
      setShowForm(false);
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

  const handleCancel = () => {
    setShowForm(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <section id="show-interest" className="relative w-full py-16 md:py-24 bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 text-center">
            Show Your Interest
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Get notified when we launch our product for doctors
          </p>
        </AnimatedContent>

        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.1}
          delay={200}
          className="w-full flex justify-center"
        >
          {showConfirmation ? (
            <div className="text-center py-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
                You're on the list!
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                We'll get in touch
              </p>
            </div>
          ) : showForm ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              {/* Name fields */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                  className="flex-1 h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
                  style={{ minWidth: 0 }}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                  className="flex-1 h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
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
                className="w-full h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
              />

              {/* Phone field */}
              <div className="flex gap-2">
                <span className="h-12 px-3 flex items-center bg-gray-100 border-2 border-gray-300 rounded-xl text-gray-600 font-medium">
                  +91
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Phone Number"
                  className="flex-1 h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 h-12 border-2 border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !firstName.trim() || !email.trim()}
                  className="flex-1 h-12 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={handleButtonClick}
              className="btn-primary text-xl px-12 py-6"
            >
              Notify Me
            </button>
          )}
        </AnimatedContent>
      </div>
    </section>
  );
}
