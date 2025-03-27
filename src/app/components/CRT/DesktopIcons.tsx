import React from 'react';

interface DesktopIconsProps {
  icons: { id: string; label: string; src: string }[];
  onIconClick: (id: string) => void;
  iconSize?: { width: number; height: number };
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ 
  icons, 
  onIconClick, 
  iconSize = { width: 30, height: 30 } 
}) => {
  // Determine text size based on icon size
  const getTextSize = () => {
    if (iconSize.width <= 10) return 'text-[6px]';
    if (iconSize.width <= 25) return 'text-[9px]';
    return 'text-xs';
  };

  // Determine item width based on icon size
  const getItemWidth = () => {
    if (iconSize.width <= 10) return 'w-10';
    if (iconSize.width <= 25) return 'w-16';
    return 'w-20';
  };

  return (
    <div className="flex flex-col items-start w-full gap-0.1 p-0.4">
      {/* First row with Events and Merchandise */}
      <div className="flex w-full gap-0.1">
        {icons.filter(icon => ['events', 'merch'].includes(icon.id)).map((icon) => (
          <div 
            key={icon.id} 
            className={`flex flex-col items-center cursor-pointer ${getItemWidth()}`} 
            onClick={() => onIconClick(icon.id)}
          >
            <img 
              src={icon.src} 
              alt={icon.label} 
              width={iconSize.width} 
              height={iconSize.height} 
              className="object-contain"
            />
            <span className={`text-white ${getTextSize()} crt-text mt-0.5 text-center line-clamp-2`}>
              {icon.label}
            </span>
          </div>
        ))}
      </div>

      {/* Remaining icons in subsequent rows */}
      {['contact', 'sponsor', 'aboutus'].map((rowId) => (
        <div 
          key={rowId} 
          className={`flex flex-col items-center cursor-pointer ${getItemWidth()}`} 
          onClick={() => onIconClick(rowId)}
        >
          {icons.filter(icon => icon.id === rowId).map((icon) => (
            <React.Fragment key={icon.id}>
              <img 
                src={icon.src} 
                alt={icon.label} 
                width={iconSize.width} 
                height={iconSize.height} 
                className="object-contain"
              />
              <span className={`text-white ${getTextSize()} crt-text mt-0.5 text-center line-clamp-2`}>
                {icon.label}
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;