import React from 'react';

const CatMascot = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cat ears */}
      <path
        d="M50 70 L30 30 Q35 25 45 30 L65 50"
        fill="currentColor"
      />
      <path
        d="M150 70 L170 30 Q165 25 155 30 L135 50"
        fill="currentColor"
      />
      
      {/* Cat head */}
      <ellipse
        cx="100"
        cy="100"
        rx="70"
        ry="65"
        fill="currentColor"
      />
      
      {/* Cat face features */}
      <g fill="#FFF8E1">
        {/* Eyes */}
        <ellipse cx="75" cy="90" rx="8" ry="12" />
        <ellipse cx="125" cy="90" rx="8" ry="12" />
        
        {/* Pupils */}
        <ellipse cx="75" cy="92" rx="4" ry="8" fill="#22223B" />
        <ellipse cx="125" cy="92" rx="4" ry="8" fill="#22223B" />
        
        {/* Nose */}
        <path
          d="M100 110 L95 105 Q100 100 105 105 Z"
          fill="#FFC107"
        />
        
        {/* Mouth */}
        <path
          d="M100 110 Q90 115 85 110 M100 110 Q110 115 115 110"
          stroke="#22223B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Whiskers */}
        <g stroke="#22223B" strokeWidth="1.5" strokeLinecap="round">
          <line x1="40" y1="95" x2="65" y2="95" />
          <line x1="40" y1="105" x2="65" y2="100" />
          <line x1="135" y1="95" x2="160" y2="95" />
          <line x1="135" y1="100" x2="160" y2="105" />
        </g>
      </g>
      
      {/* Cat paws */}
      <ellipse cx="70" cy="155" rx="20" ry="15" fill="currentColor" />
      <ellipse cx="130" cy="155" rx="20" ry="15" fill="currentColor" />
      
      {/* Paw pads */}
      <g fill="#FFC107">
        <ellipse cx="65" cy="155" rx="3" ry="4" />
        <ellipse cx="75" cy="155" rx="3" ry="4" />
        <ellipse cx="70" cy="148" rx="4" ry="3" />
        
        <ellipse cx="125" cy="155" rx="3" ry="4" />
        <ellipse cx="135" cy="155" rx="3" ry="4" />
        <ellipse cx="130" cy="148" rx="4" ry="3" />
      </g>
    </svg>
  );
};

export default CatMascot;