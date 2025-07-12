import React from 'react';
import WaitlistForm from './WaitlistForm';
import CatMascot from './CatMascot';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">
      {/* Paw print background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 transform rotate-12">
          <PawPrint className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute top-40 right-20 transform -rotate-12">
          <PawPrint className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute bottom-20 left-1/3 transform rotate-45">
          <PawPrint className="w-20 h-20 text-primary" />
        </div>
        <div className="absolute bottom-10 right-1/4 transform -rotate-45">
          <PawPrint className="w-28 h-28 text-primary" />
        </div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
          Let ClearCat tidy up your expenses
        </h1>
        <p className="text-lg md:text-xl text-charcoal/80 mb-12 max-w-2xl mx-auto">
          Upload your bank statements, and our clever AI cat will instantly sort your spending — so you can relax.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64">
            <CatMascot 
              className="w-full h-full text-primary animate-bounce-slow" 
              alt="ClearCat mascot - friendly AI cat character for expense tracking"
              role="img"
              aria-label="ClearCat mascot illustration"
            />
          </div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};

// Paw print SVG component
const PawPrint = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="25" cy="30" rx="12" ry="18" />
    <ellipse cx="50" cy="20" rx="12" ry="18" />
    <ellipse cx="75" cy="30" rx="12" ry="18" />
    <ellipse cx="50" cy="60" rx="20" ry="25" />
  </svg>
);

export default HeroSection;