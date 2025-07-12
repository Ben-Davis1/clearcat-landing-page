import React, { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mblynwyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          thoughts: thoughts,
          source: 'ClearCat Landing Page'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setThoughts('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Form submission failed');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-2">
            You're on the list!
          </h3>
          <p className="text-charcoal/70">
            We'll email you when ClearCat is ready to help you track expenses effortlessly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-charcoal mb-2">Join the waitlist</h2>
        <p className="text-charcoal/70 mb-6">
          Be among the first to experience effortless expense tracking with ClearCat.
        </p>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="thoughts" className="block text-sm font-medium text-charcoal mb-2">
              Share your thoughts (optional)
            </label>
            <textarea
              id="thoughts"
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="What features would you love to see? How could ClearCat help your business?"
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
            />
          </div>
          
          {/* Benefits */}
          <ul className="text-sm text-charcoal/70 space-y-2 my-4">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Early access to all features</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Priority customer support</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Help shape the product</span>
            </li>
          </ul>
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-accent hover:bg-accent/90 text-charcoal font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              {status === 'submitting' ? 'Submitting...' : 
               status === 'error' ? 'Try again' :
               'Join the waitlist'}
            </span>
            {status !== 'submitting' && (
              <PawIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            )}
          </button>
          {status === 'error' && (
            <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
          )}
          
          <p className="text-xs text-charcoal/50 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
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