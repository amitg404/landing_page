import { useState } from 'react';

const BOT_TOKEN = '7656890184:AAGH-GphPdHuTtFYCS6DzvpdJI_qogFGptA';
const CHAT_ID = '1520337166';

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
      const text = `🐞 *Bug Report / Feedback*\n\n${message}`;
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
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
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl w-80 animate-in slide-in-from-bottom-2 fade-in duration-200">
            <div className="flex justify-between items-center mb-2">
            <h3 className="text-white font-medium text-sm">Submit Feedback</h3>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white"
            >
                ✕
            </button>
            </div>
          <p className="text-white/70 text-xs mb-3">
            Found a bug? Let us know! This is a WIP build.
          </p>
          <textarea
            className="w-full h-24 bg-black/20 border border-white/10 rounded p-2 text-white text-sm focus:outline-none focus:border-blue-500/50 resize-none placeholder:text-white/30"
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
