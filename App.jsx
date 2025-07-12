import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <footer className="text-center py-8 text-charcoal">
        <p className="text-sm">Built with love and whiskers in London 🇬🇧</p>
      </footer>
    </div>
  );
}

export default App;