import { useState } from 'react';
import Section from '../layout/Section';

interface EarlyAccessSectionProps {
  isLoggedIn: boolean;
  userEmail: string | null;
  onSignup: () => Promise<void>;
  onLoginRequired: () => void;
}

export default function EarlyAccessSection({
  isLoggedIn,
  userEmail,
  onSignup,
  onLoginRequired
}: EarlyAccessSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = async () => {
    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }

    setIsSubmitting(true);
    try {
      await onSignup();
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 5000);
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
        ) : (
          <button
            onClick={handleClick}
            disabled={isSubmitting}
            className="btn-primary text-xl px-12 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processing...' : 'Join Beta'}
          </button>
        )}

        {isLoggedIn && userEmail && (
          <p className="mt-6 text-white/60 text-sm">Signed in as {userEmail}</p>
        )}
      </div>
    </Section>
  );
}
