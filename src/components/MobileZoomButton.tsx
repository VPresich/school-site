import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface MobileZoomButtonProps {
  onClick: () => void;
}

const MobileZoomButton: React.FC<MobileZoomButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        absolute bottom-3 right-3       
        md:hidden                        
        bg-black/60                      
        p-2                              
        rounded-full                     
        shadow-lg                         
        flex items-center justify-center  
        active:scale-90                  
        transition-transform duration-200 
        focus:outline-none               
      "
      aria-label="Увеличить афишу"
    >
      <FiSearch className="w-5 h-5 text-white" />
    </button>
  );
};

export default MobileZoomButton;
