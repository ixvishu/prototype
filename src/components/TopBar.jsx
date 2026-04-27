import React from 'react';

const TopBar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div className="flex items-center">
        {/* Placeholder for left-side items if needed, like a mobile menu toggle */}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-medium text-green-700">Live / Nominal</span>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium">
          A
        </div>
      </div>
    </header>
  );
};

export default TopBar;
