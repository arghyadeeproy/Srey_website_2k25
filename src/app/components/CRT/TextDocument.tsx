"use client";

import React from "react";

interface TextDocumentProps {
  title: string;
  content: string;
  onClose: (e?: React.MouseEvent) => void;
}

const TextDocument: React.FC<TextDocumentProps> = ({ title, content, onClose }) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };

  return (
    <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden">
      <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs">
        <span className="handle cursor-move flex-grow">{title}</span>
        <button 
          onClick={handleClose} 
          className="close-button bg-gray-600 border-l border-white text-black px-1"
        >
          ✖
        </button>
      </div>
      <div className="flex items-center bg-gray-400 text-white text-xs border-t border-b border-white">
        <span className="border-r border-white px-1 cursor-pointer no-drag" onClick={onClose}>🔙</span>
        <span className="border-r border-white px-1 cursor-pointer no-drag" onClick={onClose}>🏠︎</span>
        <span className="px-2 handle cursor-move">{`C:\\Documents\\${title}.txt`}</span>
      </div>
      <div className="p-4 text-xs text-gray-800 overflow-y-auto h-[160px]">
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
};

export default TextDocument;