"use client";

import React from "react";
import Draggable from "react-draggable";

interface Day1WindowProps {
  onClose: () => void;
  onFolderClick?: (folderId: string) => void;
}

export const Day1Content = ({ onFolderClick }: { onFolderClick?: (folderId: string) => void }) => {
  // Custom folder names
  const folders = [
    "Table Tennis",
    "Chess",
    "Carrom",
    "Badminton",
    "Pixcellence",
    "Film Making",
    "Hackathon",
    "Sketchify",
    "Valorant",
    "Quiz"
  ];

  const handleFolderClick = (folderName: string) => {
    if (onFolderClick) {
      // Convert folder name to ID format (lowercase with hyphens)
      const folderId = folderName.toLowerCase().replace(/\s+/g, '-');
      onFolderClick(folderId);
    }
  };

  return (
    <div className="p-2 text-xs text-gray-800 overflow-y-auto h-[160px]">
      <div className="mt-2 grid grid-cols-4 gap-2">
        {folders.map((folderName, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleFolderClick(folderName)}
          >
            <img
              src="/folder-d42ea2.png"
              alt={folderName}
              className="w-8 h-8"
            />
            <span className="text-center mt-1">{folderName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Day1Window = ({ onClose, onFolderClick }: Day1WindowProps) => {
  // Handler for navigation buttons to prevent dragging
  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <Draggable handle=".handle" cancel=".no-drag">
      <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden">
        {/* Title Bar */}
        <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs">
          <span className="handle cursor-move flex-grow">Day 1</span>
          <button
            onClick={onClose}
            className="bg-gray-600 border-l border-white text-black px-1 cursor-pointer"
          >
            ✖
          </button>
        </div>
        <div className="flex items-center bg-gray-400 text-white text-xs border-t border-b border-white">
          <span className="border-r border-white px-1 cursor-pointer no-drag" onClick={handleNavigation}>🔙</span>
          <span className="border-r border-white px-1 cursor-pointer no-drag" onClick={handleNavigation}>🏠︎</span>
          <span className="px-2 handle cursor-move">C:\Events\Day1</span>
        </div>
        <Day1Content onFolderClick={onFolderClick} />
      </div>
    </Draggable>
  );
};

export default Day1Window;