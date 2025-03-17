"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface WindowProps {
  title: string;
  onClose: (e?: React.MouseEvent) => void;
  onFolderClick?: (folder: string) => void;
}

const Window = ({ title, onClose, onFolderClick }: WindowProps) => {
  const [showDropup, setShowDropup] = useState<boolean>(false);
  const [history, setHistory] = useState<ReactNode[]>([
    "Welcome to SREY 2K25 Terminal",
    "Click on the terminal to see available commands",
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const dropupRef = useRef<HTMLDivElement>(null);
  
  const contacts = [
    { name: "Manash Das", phone: "+91 7439270692" },
    { name: "Deepan Chowdhury", phone: "+91 9836579142" },
    { name: "Adil", role: "", phone: "+91 6291227656" },
    { name: "Tushar Anand", phone: "+91 8709288805" },
    { name: "Sourik Poddar", phone: "+91 6298767026" }
  ];

  const commands = [
    { name: "/help", description: "Show available commands" },
    { name: "/insta", description: "Get our Instagram handle" },
    { name: "/fb", description: "Get our Facebook page" },
    { name: "/contact", description: "View contact information" },
    { name: "/website", description: "Visit college website" },
    { name: "/mail", description: "Contact via email" },
    { name: "/clear", description: "Clear the terminal" },
    { name: "/close", description: "Close this window" },
  ];

  const handleFolderClick = (folder: string) => {
    if (onFolderClick) {
      onFolderClick(folder);
    }
  };

  const toggleDropup = () => {
    setShowDropup(!showDropup);
  };

  const selectCommand = (cmd: string) => {
    processCommand(cmd);
    setShowDropup(false);
  };

  // Function to handle link clicks
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  // Function to handle phone calls
  const handlePhoneClick = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  // Function to handle email
  const handleMailClick = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  // Function to render Instagram with clickable link
  const renderInstagram = () => {
    return (
      <div>
        Instagram: <a 
          href="https://www.instagram.com/stcet.ac.in" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick("https://www.instagram.com/stcet.ac.in", e)}
          className="text-blue-400 hover:underline cursor-pointer"
        >
          @stcet.ac.in
        </a>
      </div>
    );
  };

  // Function to render Facebook with clickable link
  const renderFacebook = () => {
    return (
      <div>
        Facebook: <a 
          href="https://www.facebook.com/profile.php?id=100072114125436" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick("https://www.facebook.com/profile.php?id=100072114125436", e)}
          className="text-blue-400 hover:underline cursor-pointer"
        >
          St Thomas College of Engineering & Technology
        </a>
      </div>
    );
  };

  // Function to render website link
  const renderWebsite = () => {
    return (
      <div>
        Website: <a 
          href="https://www.stcet.ac.in" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick("https://www.stcet.ac.in", e)}
          className="text-blue-400 hover:underline cursor-pointer"
        >
          www.stcet.ac.in
        </a>
      </div>
    );
  };

  // Function to render email
  const renderEmail = () => {
    return (
      <div>
        Email: <a 
          href="mailto:srey@stcet.ac.in" 
          onClick={(e) => handleMailClick("srey@stcet.ac.in", e)}
          className="text-blue-400 hover:underline cursor-pointer"
        >
          srey@stcet.ac.in
        </a>
      </div>
    );
  };

  // Function to render contact with clickable phone numbers
  const renderContact = () => {
    return (
      <>
        <div>--- SREY 2K25 Contact Information ---</div>
        {contacts.map((contact, index) => (
          <div key={index}>
            {contact.name}: <a 
              href={`tel:${contact.phone}`}
              onClick={(e) => handlePhoneClick(contact.phone, e)}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              {contact.phone}
            </a>
          </div>
        ))}
      </>
    );
  };

  const processCommand = (command: string) => {
    const newHistory = [...history, `> ${command}`];
    
    switch(command.toLowerCase()) {
      case '/help':
        newHistory.push("Available commands:");
        commands.forEach(cmd => {
          newHistory.push(`${cmd.name} - ${cmd.description}`);
        });
        break;
      
      case '/insta':
        newHistory.push(renderInstagram());
        break;
      
      case '/fb':
        newHistory.push(renderFacebook());
        break;
      
      case '/contact':
        newHistory.push(renderContact());
        break;

      case '/website':
        newHistory.push(renderWebsite());
        break;

      case '/mail':
        newHistory.push(renderEmail());
        break;
      
      case '/clear':
        setHistory(["Terminal cleared."]);
        return;
        
      case '/close':
        newHistory.push("Closing window...");
        setHistory(newHistory);
        // Delay the window close for a moment to show the closing message
        setTimeout(() => {
          onClose();
        }, 500);
        return;
      
      default:
        newHistory.push(
          `Command not recognized: ${command}`,
          "Click on the terminal to see available commands."
        );
    }
    
    setHistory(newHistory);
  };

  useEffect(() => {
    // Ensure scrolling to the bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Close dropup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropupRef.current && 
        !dropupRef.current.contains(event.target as Node) &&
        terminalRef.current && 
        !terminalRef.current.contains(event.target as Node)
      ) {
        setShowDropup(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };

  // Separate handler for navigation buttons to prevent dragging when clicking these buttons
  const handleNavigation = (action: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (action === 'back' || action === 'home') {
      onClose(e);
    }
  };

  // College website link handler
  const handleCollegeWebsite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://www.stcet.ac.in', '_blank');
  };

  // Function to capitalize the first letter of the title
  const capitalizeTitle = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden flex flex-col">
      {/* Title Bar */}
      <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs handle cursor-move">
        <span className="">{capitalizeTitle(title)}</span>
        <button
          onClick={handleClose}
          className="close-button bg-gray-600 border-l border-white text-black px-1"
        >
          ✖
        </button>
      </div>

      {title === "events" ? (
        <>
          <div className="flex items-center bg-gray-400 text-white text-xs border-t border-b border-white">
            <span className="border-r border-white px-1 cursor-pointer no-drag" onClick={(e) => handleNavigation('back', e)}>🔙</span>
            <span className="border-r border-white px-1 cursor-pointer no-drag" onClick={(e) => handleNavigation('home', e)}>🏠︎</span>
            <span className="px-2">C:\Events\</span>
          </div>
          <div className="bg-gray-300 p-2 text-xs flex-1 flex">
            <div 
              className="cursor-pointer mr-4" 
              onClick={() => handleFolderClick("day1")}
            >
              <img
                src="folder-d42ea2.png"
                alt="Folder"
                className="w-8 h-8 mr-2"
              />
              <span className="">Day 1</span>
            </div>
            <div 
              className="cursor-pointer" 
              onClick={() => handleFolderClick("day2")}
            >
              <img
                src="/folder-d42ea2.png"
                alt="Folder"
                className="w-8 h-8 mr-2"
              />
              <span className="">Day 2</span>
            </div>
          </div>
        </>
      ) : title === "aboutus" ? (
        <div className="p-4 text-xs text-gray-800 overflow-y-auto flex-1">
          <h2 className="text-blue-900 font-bold text-sm">🚀 <span 
            className="cursor-pointer hover:underline"
            onClick={handleCollegeWebsite}
          >St. Thomas' College of Engineering and Technology</span> proudly presents</h2>
          <h3 className="text-red-600 font-bold text-sm">SREY 2K25 🎉</h3>
          <p className="mt-2">
            Kolkata's premier on-campus tech festival. 💡🔥
          </p>
          <p className="mt-1">
            This immersive experience offers a dynamic platform for aspiring innovators and tech enthusiasts. 🛠️🤖
          </p>
          <p className="mt-1">
            Engage in thought-provoking events, insightful interactions, and electrifying competitions designed to challenge and inspire. 🎯⚡
          </p>
          <p className="mt-1">
            Network with knowledgeable minds, connect with fellow tech aficionados, and gain firsthand exposure to cutting-edge advancements. 🌐👨‍💻
          </p>
          <p className="mt-1 font-bold">
            Join us and be wired, inspired, and empowered! 🔥✨
          </p>
        </div>
      ) : title === "contact" ? (
        <div className="flex flex-col flex-1">
          <div className="flex items-center bg-gray-900 text-green-500 text-xs border-t border-b border-white px-2 py-1">
            <span>SREY2K25 Terminal v1.0</span>
          </div>
          <div className="flex flex-col flex-1 bg-black relative">
            {/* Terminal output area - now properly scrollable */}
            <div 
              ref={terminalRef}
              className="text-green-500 font-mono text-xs p-2 flex-1 overflow-y-auto absolute top-0 left-0 right-0 bottom-8 touch-auto"
              onClick={toggleDropup}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4a5568 #000000',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {history.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            
            {/* Fixed command bar at the bottom */}
            <div className="flex bg-black text-green-500 font-mono text-xs px-2 py-1 border-t border-gray-800 absolute bottom-0 left-0 right-0 h-8">
              <span className="cursor-pointer" onClick={toggleDropup}>{">"} Click for commands</span>
            </div>
            
            {/* Dropup menu with reduced text size */}
            {showDropup && (
              <div 
                ref={dropupRef}
                className="absolute bottom-8 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg max-h-32 overflow-y-auto touch-auto z-50"
                style={{
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {commands.map((cmd, index) => (
                  <div 
                    key={index}
                    onClick={() => selectCommand(cmd.name)}
                    className="px-2 py-0.5 text-green-500 hover:bg-gray-700 cursor-pointer flex justify-between text-xs"
                  >
                    <span>{cmd.name}</span>
                    <span className="text-gray-400 text-xs">
                      {cmd.description}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-red-600 font-bold p-3 flex-1">❌ Access Denied: Invalid Folder</div>
      )}
    </div>
  );
};

export default Window;