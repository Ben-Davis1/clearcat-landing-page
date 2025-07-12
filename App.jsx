import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <footer className="text-center py-8 text-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link 
              to="/terms" 
              className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline text-charcoal/40">•</span>
            <a 
              href="mailto:hello@clearcat.co.uk" 
              className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
            >
              Contact Us
            </a>
          </div>
          <p className="text-sm text-charcoal/60">Built with love and whiskers in London 🇬🇧</p>
        </div>
      </footer>
    </div>
  );
}

export default App;