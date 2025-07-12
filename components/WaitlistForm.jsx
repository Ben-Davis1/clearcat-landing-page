import React, { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thanks for joining the waitlist!');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Join the waitlist</h2>
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-charcoal font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Join the waitlist</span>
            <PawIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </form>
  );
};

// Paw icon for button
const PawIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    <circle cx="8" cy="8" r="2" />
    <circle cx="16" cy="8" r="2" />
    <ellipse cx="12" cy="14" rx="3" ry="4" />
  </svg>
);

export default WaitlistForm;