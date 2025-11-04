import React from 'react';

const Logo = () => (
    <div className="group">
        <svg width="60" height="60" viewBox="0 0 100 100" className="transition-colors duration-300 text-black group-hover:text-brand-green">
            <circle cx="50" cy="50" r="45" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <text x="50" y="62" fontFamily="Poppins, sans-serif" fontSize="50" fontWeight="bold" textAnchor="middle" fill="currentColor" className="text-brand-green group-hover:text-white transition-colors duration-300">D</text>
        </svg>
    </div>
);

export default Logo;
