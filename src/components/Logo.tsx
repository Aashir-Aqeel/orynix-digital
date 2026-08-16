import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  size = 'md' 
}) => {
  const sizeMap = {
    sm: { icon: 30, text: 'text-lg', gap: 'gap-2' },
    md: { icon: 38, text: 'text-2xl', gap: 'gap-2.5' },
    lg: { icon: 46, text: 'text-3xl', gap: 'gap-3' },
    xl: { icon: 58, text: 'text-4xl', gap: 'gap-3.5' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* Precision ORYNIX Gradient Squircle Icon with White 'O' */}
      <div 
        style={{ width: currentSize.icon, height: currentSize.icon }}
        className="relative shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Smooth Vibrant Cyan to Purple Gradient as in official brand icon */}
            <linearGradient id="orynixIconGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077F5" />
              <stop offset="25%" stopColor="#00D2FF" />
              <stop offset="65%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Subtle top light sheen overlay */}
            <linearGradient id="orynixSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Squircle Badge */}
          <rect 
            x="4" 
            y="4" 
            width="92" 
            height="92" 
            rx="24" 
            ry="24" 
            fill="url(#orynixIconGradient)" 
          />

          {/* Subtle Corner Sheen Highlight */}
          <rect 
            x="4" 
            y="4" 
            width="92" 
            height="92" 
            rx="24" 
            ry="24" 
            fill="url(#orynixSheen)" 
          />

          {/* Clean White Bold 'O' Ring matching uploaded brand image */}
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M50 25C36.745 25 26 35.745 26 49C26 62.255 36.745 73 50 73C63.255 73 74 62.255 74 49C74 35.745 63.255 25 50 25ZM50 37.5C43.096 37.5 37.5 42.649 37.5 49C37.5 55.351 43.096 60.5 50 60.5C56.904 60.5 62.5 55.351 62.5 49C62.5 42.649 56.904 37.5 50 37.5Z" 
            fill="#FFFFFF" 
          />
        </svg>
      </div>

      {/* Brand Typography matching official ORYNIX text mark */}
      {variant !== 'icon' && (
        <span className={`font-black tracking-tight ${currentSize.text} ${
          variant === 'white' 
            ? 'text-white' 
            : 'text-[#0F172A]'
        }`}>
          ORYNIX
        </span>
      )}
    </div>
  );
};
