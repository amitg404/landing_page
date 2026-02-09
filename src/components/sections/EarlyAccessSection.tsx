import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function EarlyAccessSection() {
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
    <section id="early-access" className="relative w-full py-16 md:py-24 bg-transparent">
      <div className="relative z-10 flex flex-col items-center px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6 text-center">
          Early Access is Out!
        </h2>
        <p className="text-xl md:text-2xl text-white/80 mb-8 md:mb-12 text-center">Try the beta today</p>

        {showConfirmation ? (
          <div className="text-center py-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
              You're on the list!
            </h2>
            <p className="text-lg md:text-xl text-white/80">
              We'll get in touch
            </p>
          </div>
        ) : showForm ? (
          <form onSubmit={handleSubmit} className="w-full max-w-sm md:max-w-md space-y-4 px-2">
            {/* Name fields - stacked on mobile */}
            {/* Name fields - side by side on all devices */}
            <div className="flex flex-row gap-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="flex-1 h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-colors"
                style={{ minWidth: 0 }} // Prevent flex item from overflowing
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                className="flex-1 h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-colors"
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
              className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-colors"
            />

            {/* Phone field */}
            <div className="flex gap-2">
              <span className="h-12 px-3 flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white font-medium shrink-0">
                +91
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Phone Number"
                className="flex-1 h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-colors min-w-0"
              />
            </div>

            {/* Buttons - with extra bottom margin for mobile to clear FloatingCTA */}
            <div className="flex gap-3 pt-2 pb-16 md:pb-2">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 h-12 border-2 border-white/30 rounded-xl text-white font-medium hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !firstName.trim() || !email.trim()}
                className="flex-1 h-12 bg-white text-gray-900 rounded-xl font-semibold hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleButtonClick}
            className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6"
          >
            Join Beta
          </button>
        )}
      </div>
    </section>
  );
}
