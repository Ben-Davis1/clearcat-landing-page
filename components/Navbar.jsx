import React from 'react';
import CatMascot from './CatMascot';

const Navbar = () => {
  return (
    <nav className="bg-cream px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <CatMascot className="w-full h-full text-primary" />
          </div>
          <span className="text-2xl font-bold text-primary">ClearCat</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;