"use client";

import React from "react";

interface RulesDocumentProps {
  title: string;
  content: string;
  onClose: (e?: React.MouseEvent) => void;
}

const RulesDocument: React.FC<RulesDocumentProps> = ({ title, content, onClose }) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };

  // New handlers for home and back buttons
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };

  return (
    <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden">
      {/* Title bar remains draggable */}
      <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs handle cursor-move">
        <span className="">{title}</span>
        <button 
          onClick={handleClose} 
          className="close-button bg-gray-600 border-l border-white text-black px-1"
        >
          ✖
        </button>
      </div>
      
      {/* Navigation bar with non-draggable buttons */}
      <div className="flex items-center bg-gray-400 text-white text-xs border-t border-b border-white">
        {/* Back and Home buttons removed from handle class */}
        <button 
          className="border-r border-white px-1 no-drag" 
          onClick={handleBackClick}
        >
          🔙
        </button>
        <button 
          className="border-r border-white px-1 no-drag" 
          onClick={handleHomeClick}
        >
          🏠︎
        </button>
        
        {/* Path remains draggable */}
        <span className="px-2 handle cursor-move">{`C:\\Documents\\${title}.pdf`}</span>
      </div>
      
      <div className="p-4 text-xs text-gray-800 overflow-y-auto h-[160px] bg-white">
        <div className="flex items-center justify-between border-b pb-2 mb-2">
          <div className="flex items-center">
            <img src="\srey_logo.PNG" alt="PDF" className="w-10 h-10 mr-2" />
            <span className="font-bold">{title}</span>
          </div>
          <div className="text-[10px] text-gray-500">PDF Document</div>
        </div>
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
};

export default RulesDocument;