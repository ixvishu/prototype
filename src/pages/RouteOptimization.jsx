import React, { useState } from 'react';
import { Map, Clock, Navigation, Leaf, AlertTriangle, RefreshCw, Send, Route as RouteIcon, MapPin } from 'lucide-react';

const mockRoutes = [
  {
    id: 1,
    name: 'Primary Route (Via NH-44)',
    time: '2h 15m',
    distance: '145 km',
    co2: '18.5 kg',
    risk: 'Low',
    isBest: true,
  },
  {
    id: 2,
    name: 'Alternative 1 (Via SH-17)',
    time: '2h 45m',
    distance: '130 km',
    co2: '16.2 kg',
    risk: 'Medium',
    isBest: false,
    delayReason: 'Traffic expected in 45m',
  },
  {
    id: 3,
    name: 'Alternative 2 (Via City Ring)',
    time: '3h 10m',
    distance: '155 km',
    co2: '21.0 kg',
    risk: 'High',
    isBest: false,
    delayReason: 'Active roadwork reported',
  }
];

const mockShipments = [
  'TRK-90021 - Bengaluru → Mysuru',
  'TRK-90022 - Delhi → Mumbai',
  'TRK-90023 - Chennai → Pune',
];

const RouteOptimization = () => {
  const [isRecomputing, setIsRecomputing] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(1);

  const handleRecompute = () => {
    setIsRecomputing(true);
    setTimeout(() => setIsRecomputing(false), 1500);
  };

  return (
    <div className="p-6 h-full flex flex-col bg-slate-50">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Route Optimization</h1>
          <p className="text-slate-500 mt-1 text-sm">Analyze and select the most efficient path for delivery.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-80">
            <Map className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm text-slate-700 font-medium appearance-none">
              {mockShipments.map((shipment, idx) => (
                <option key={idx} value={shipment}>{shipment}</option>
              ))}
            </select>
          </div>
          
          <button 
            onClick={handleRecompute}
            className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm whitespace-nowrap disabled:opacity-50"
            disabled={isRecomputing}
          >
            <RefreshCw size={18} className={isRecomputing ? "animate-spin text-blue-500" : ""} />
            {isRecomputing ? 'Computing...' : 'Recompute'}
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        
        {/* Left Column: Map Visualization */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <RouteIcon className="text-blue-500" size={20} />
              Route Map
            </h2>
            <div className="flex gap-2">
               <span className="flex items-center gap-1 text-xs font-medium text-slate-500"><div className="w-3 h-1 bg-blue-500 rounded-full"></div> Primary</span>
               <span className="flex items-center gap-1 text-xs font-medium text-slate-500"><div className="w-3 h-1 bg-slate-300 rounded-full"></div> Alternate</span>
            </div>
          </div>
          <div className="flex-1 bg-slate-100 flex items-center justify-center relative overflow-hidden">
            {/* Map Placeholder */}
            <div className="absolute inset-0 pattern-dots pattern-slate-300 pattern-bg-white pattern-size-4 opacity-50"></div>
            <div className="text-center relative z-10 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm max-w-sm">
              <MapPin size={48} className="text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">Interactive Route Map</h3>
              <p className="text-slate-500 text-sm mb-4">Integrate mapping library here to visualize waypoints, real-time traffic, and route alternatives.</p>
              <div className="flex justify-center gap-4 text-xs font-medium text-slate-500">
                 <span className="flex items-center gap-1"><MapPin size={14} className="text-green-500"/> Origin</span>
                 <span className="flex items-center gap-1"><MapPin size={14} className="text-red-500"/> Destination</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Route Options */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">Available Routes</h2>
            <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">3 Options</span>
          </div>

          <div className="space-y-4 flex-1">
            {mockRoutes.map((route) => (
              <div 
                key={route.id}
                onClick={() => setSelectedRoute(route.id)}
                className={`relative bg-white rounded-xl p-5 border-2 transition-all cursor-pointer shadow-sm
                  ${selectedRoute === route.id ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-200 hover:border-slate-300'}
                `}
              >
                {route.isBest && (
                  <div className="absolute -top-3 -right-2">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 border-2 border-white">
                       <Leaf size={12} />
                       Best Route
                    </span>
                  </div>
                )}
                
                <h3 className="font-bold text-slate-800 mb-4 pr-16">{route.name}</h3>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1"><Clock size={14}/> Est. Time</span>
                    <span className="text-slate-800 font-semibold">{route.time}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1"><Navigation size={14}/> Distance</span>
                    <span className="text-slate-800 font-semibold">{route.distance}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1"><Leaf size={14}/> CO2 Impact</span>
                    <span className={`font-semibold ${route.isBest ? 'text-green-600' : 'text-slate-800'}`}>{route.co2}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1"><AlertTriangle size={14}/> Risk Level</span>
                    <span className={`font-semibold 
                      ${route.risk === 'Low' ? 'text-green-600' : ''}
                      ${route.risk === 'Medium' ? 'text-orange-500' : ''}
                      ${route.risk === 'High' ? 'text-red-600' : ''}
                    `}>
                      {route.risk}
                    </span>
                  </div>
                </div>

                {route.delayReason && (
                  <div className="mt-4 p-2.5 bg-orange-50 border border-orange-100 rounded-lg flex items-start gap-2">
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-xs font-medium text-orange-800">{route.delayReason}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 mt-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-transform active:scale-95">
              <Send size={18} />
              Dispatch on Selected Route
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RouteOptimization;
