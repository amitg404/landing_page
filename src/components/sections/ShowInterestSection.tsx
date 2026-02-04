import { useState } from 'react';
import Section from '../layout/Section';

interface ShowInterestSectionProps {
  isLoggedIn: boolean;
  userEmail: string | null;
  onShowInterest: () => Promise<void>;
  onLoginRequired: () => void;
}

export default function ShowInterestSection({
  isLoggedIn,
  userEmail,
  onShowInterest,
  onLoginRequired
}: ShowInterestSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = async () => {
    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }

    setIsSubmitting(true);
    try {
      await onShowInterest();
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 5000);
    } catch (error) {
      console.error('Interest signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
        ) : (
          <button
            onClick={handleClick}
            disabled={isSubmitting}
            className="btn-primary text-xl px-12 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processing...' : 'Notify Me'}
          </button>
        )}

        {isLoggedIn && userEmail && (
          <p className="mt-6 text-gray-500 text-sm">Signed in as {userEmail}</p>
        )}
      </div>
    </Section>
  );
}
