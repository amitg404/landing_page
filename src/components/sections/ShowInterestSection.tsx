import { useState } from 'react';
import Section from '../layout/Section';
import { supabase } from '../../lib/supabase';

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const DESIGNATIONS = ['', 'Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];

export default function ShowInterestSection() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Form fields
  const [designation, setDesignation] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    
    try {
      // 1. Store in Supabase
      const { error: supabaseError } = await supabase
        .from('doctor_interest_signups')
        .insert([{
          name,
          designation,
          email,
          created_at: new Date().toISOString()
        }]);

      if (supabaseError) {
        console.warn('Supabase storage failed:', supabaseError);
        // Continue to Telegram notification as fallback/parallel
      }

      // 2. Send Telegram Notification
      const fullName = designation ? `${designation} ${name}` : name;
      const text = `🩺 Doctor Interest Signup\n\nName: ${fullName}\nEmail: ${email}`;
      
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
        setEmail('');
      } else {
        console.error('Failed to send signup');
      }
    } catch (error) {
      console.error('Interest signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setDesignation('');
    setName('');
    setEmail('');
  };

  return (
    <Section id="show-interest" className="bg-transparent">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-5xl font-semibold text-gray-900 mb-6 text-center">
          Show Your Interest
        </h2>
        <p className="text-2xl text-gray-600 mb-12 text-center max-w-2xl">
          Get notified when we launch our product for doctors
        </p>

        {showConfirmation ? (
          <div className="bg-green-100 border-2 border-green-500 rounded-2xl p-8 max-w-md text-center">
            <p className="text-xl text-gray-900 font-medium">
              Thank you for your interest! We'll notify you when the product is ready.
            </p>
          </div>
        ) : showForm ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            {/* Name field with designation */}
            <div className="flex gap-3">
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-24 h-12 px-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 focus:border-blue-600 focus:outline-none transition-colors appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23333'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}
              >
                {DESIGNATIONS.map((d) => (
                  <option key={d} value={d}>
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
                className="flex-1 h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none transition-colors"
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
                disabled={isSubmitting || !name.trim() || !email.trim()}
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
      </div>
    </Section>
  );
}
