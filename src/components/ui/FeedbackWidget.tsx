import { useState } from 'react';

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsSending(true);
    setStatus('idle');

    try {
      const text = `🐞 Bug Report / Feedback\n\n${message}`;
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const errorData = await response.json();
        console.error('Telegram Error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-[100] flex flex-col items-start gap-2">
      {isOpen && (
        <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg shadow-2xl w-80">
            <div className="flex justify-between items-center mb-2">
            <h3 className="text-white font-medium text-sm">Submit Feedback</h3>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white"
            >
                ✕
            </button>
            </div>
          <p className="text-neutral-400 text-xs mb-3">
            Found a bug? Let us know! This is a WIP build.
          </p>
          <textarea
            className="w-full h-24 bg-neutral-800 border border-neutral-700 rounded p-2 text-white text-sm focus:outline-none focus:border-blue-500 resize-none placeholder:text-neutral-500"
            placeholder="Describe the issue..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSending}
          />
          <div className="flex justify-between items-center mt-3">
            <span className={`text-xs ${status === 'success' ? 'text-green-400' : status === 'error' ? 'text-red-400' : 'text-transparent'}`}>
              {status === 'success' ? 'Sent successfully!' : 'Failed to send.'}
            </span>
            <button
              onClick={sendMessage}
              disabled={isSending || !message.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs px-3 py-1.5 rounded transition-colors"
            >
              {isSending ? 'Sending...' : 'Send Report'}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500/80 hover:bg-red-500 hover:scale-105 active:scale-95 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/10 transition-all font-medium text-sm flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        WIP Feedback
      </button>
    </div>
  );
}
