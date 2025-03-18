'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface PosterPopupProps {
  onClose: () => void;
}

export default function PosterPopup({ onClose }: PosterPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate in the popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Close popup when clicking outside
    const handleOutsideClick = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        ref={popupRef}
        className={`relative rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[80vh] overflow-hidden transition-transform duration-500 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)'
        }}
      >
        {/* Close button with improved visibility */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-white bg-opacity-20 text-white hover:bg-opacity-40 p-2 rounded-full z-20"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Poster content with constrained height */}
        <div className="flex justify-center p-4">
          <div className="w-full h-auto">
            <Image
              src="/Srey_Poster.jpeg" 
              alt="Pragyan 2023 Event Poster"
              width={800}
              height={1000}
              className="w-full h-auto object-contain max-h-[70vh]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}