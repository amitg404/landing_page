import { useState } from 'react';
import Section from '../layout/Section';
import { supabase } from '../../lib/supabase';

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const DESIGNATIONS = ['', 'Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];

export default function EarlyAccessSection() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Form fields
  const [designation, setDesignation] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !college.trim() || !email.trim()) return;

    setIsSubmitting(true);
    
    try {
      // 1. Store in Supabase
      const { error: supabaseError } = await supabase
        .from('student_beta_signups')
        .insert([{
          name,
          designation,
          college,
          email,
          created_at: new Date().toISOString()
        }]);

      if (supabaseError) {
        console.warn('Supabase storage failed:', supabaseError);
        // Continue to Telegram notification as fallback/parallel
      }

      // 2. Send Telegram Notification
      const fullName = designation ? `${designation} ${name}` : name;
      const text = `📚 Student Beta Signup\n\nName: ${fullName}\nCollege: ${college}\nEmail: ${email}`;
      
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });

      if (response.ok) {
        setShowConfirmation(true);
        setShowForm(false);
        // Reset form
        setDesignation('');
        setName('');
        setCollege('');
        setEmail('');
      } else {
        console.error('Failed to send signup');
      }
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setDesignation('');
    setName('');
    setCollege('');
    setEmail('');
  };

  return (
    <Section id="early-access" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-5xl font-semibold text-white mb-6 text-center">
          Early Access is Out!
        </h2>
        <p className="text-2xl text-white/80 mb-12 text-center">Try the beta today</p>

        {showConfirmation ? (
          <div className="bg-green-500/20 border-2 border-green-500 rounded-2xl p-8 max-w-md text-center">
            <p className="text-xl text-white font-medium">
              Thank you for your interest! We'll send you an email regarding the beta product.
            </p>
          </div>
        ) : showForm ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            {/* Name field with designation */}
            <div className="flex gap-3">
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-24 h-12 px-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}
              >
                {DESIGNATIONS.map((d) => (
                  <option key={d} value={d} className="bg-gray-900 text-white">
                    {d || 'Title'}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="flex-1 h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            {/* College field */}
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="College / University"
              required
              className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-colors"
            />

            {/* Email field */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder:text-white/50 focus:border-white focus:outline-none transition-colors"
            />

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 h-12 border-2 border-white/30 rounded-xl text-white font-medium hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || !college.trim() || !email.trim()}
                className="flex-1 h-12 bg-white text-gray-900 rounded-xl font-semibold hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
            Join Beta
          </button>
        )}
      </div>
    </Section>
  );
}
