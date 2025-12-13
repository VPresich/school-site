import React from 'react';

export const CurveUpSeparator: React.FC = () => {
  return (
    <div
      className=" w-full            
      border-t-2        
      border-l-2        
      border-r-2        
      border-b-0        
      rounded-t-xl       
      border-[#993333]   
      h-2 mb-1"
    />
  );
};

export const CurveDownSeparator: React.FC = () => {
  return (
    <div
      className=" w-full            
      border-t-0        
      border-l-2        
      border-r-2        
      border-b-2        
      rounded-b-xl       
      border-[#993333]   
      h-2 mt-1"
    />
  );
};
