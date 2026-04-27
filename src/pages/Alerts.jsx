import React, { useState } from 'react';
import { AlertTriangle, CloudRain, Car, Server, CheckCircle2, Clock, Filter, Bell } from 'lucide-react';

const initialAlerts = [
  {
    id: 1,
    type: 'Weather',
    title: 'Severe Cyclone Warning: Eastern Coast',
    description: 'Cyclone expected to hit Odisha and West Bengal coastlines within 48 hours. Anticipate major disruptions to all surface transport in the region.',
    risk: 'Critical',
    time: '10 mins ago',
    icon: <CloudRain className="text-red-500" size={24} />,
    color: 'border-red-500',
    bg: 'bg-red-50',
    acknowledged: false,
  },
  {
    id: 2,
    type: 'Traffic',
    title: 'Major Congestion: Delhi-Gurugram Border',
    description: 'Heavy traffic buildup due to roadworks. Expected delay of 2.5 hours for shipments on NH-48.',
    risk: 'High',
    time: '45 mins ago',
    icon: <Car className="text-orange-500" size={24} />,
    color: 'border-orange-500',
    bg: 'bg-orange-50',
    acknowledged: false,
  },
  {
    id: 3,
    type: 'System',
    title: 'API Rate Limit Warning',
    description: 'Google Maps API usage is approaching 90% of the daily quota. Consider optimizing route refresh rates.',
    risk: 'Medium',
    time: '2 hours ago',
    icon: <Server className="text-yellow-500" size={24} />,
    color: 'border-yellow-500',
    bg: 'bg-yellow-50',
    acknowledged: false,
  },
  {
    id: 4,
    type: 'Security',
    title: 'E-Way Bill Expiry Risk',
    description: '5 active shipments have E-Way bills expiring in less than 4 hours. Immediate renewal required.',
    risk: 'High',
    time: '3 hours ago',
    icon: <AlertTriangle className="text-orange-500" size={24} />,
    color: 'border-orange-500',
    bg: 'bg-orange-50',
    acknowledged: true,
  },
  {
    id: 5,
    type: 'Traffic',
    title: 'Toll Plaza System Outage',
    description: 'FASTag systems down at Kherki Daula toll plaza. Expect manual cash processing delays of up to 45 mins.',
    risk: 'Medium',
    time: '5 hours ago',
    icon: <Car className="text-yellow-500" size={24} />,
    color: 'border-yellow-500',
    bg: 'bg-yellow-50',
    acknowledged: false,
  }
];

const getRiskBadge = (risk) => {
  switch (risk) {
    case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
    case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Low': return 'bg-blue-100 text-blue-800 border-blue-200';
    default: return 'bg-slate-100 text-slate-800 border-slate-200';
  }
};

const Alerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleAcknowledge = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, acknowledged: true } : alert
    ));
  };

  return (
    <div className="p-6 h-full flex flex-col bg-slate-50">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Bell className="text-slate-700" size={24} />
            System Alerts
          </h1>
          <p className="text-slate-500 mt-1 text-sm">Monitor critical notifications, weather warnings, and traffic disruptions.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 shadow-sm transition-colors">
              <Filter size={16} />
              Filter Alerts
           </button>
           <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors">
              Acknowledge All
           </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`flex flex-col md:flex-row gap-4 bg-white rounded-xl shadow-sm border-l-4 p-5 transition-all
              ${alert.color} 
              ${alert.acknowledged ? 'opacity-60 saturate-50' : 'hover:shadow-md'}
            `}
          >
            {/* Icon Column */}
            <div className={`hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${alert.bg}`}>
               {alert.icon}
            </div>
            
            {/* Content Column */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <h2 className={`text-lg font-bold ${alert.acknowledged ? 'text-slate-600' : 'text-slate-900'}`}>
                    {alert.title}
                  </h2>
                  {alert.acknowledged && (
                     <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                        <CheckCircle2 size={12} /> Acknowledged
                     </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold border shadow-sm ${getRiskBadge(alert.risk)}`}>
                    {alert.risk} Risk
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
                    <Clock size={14} />
                    {alert.time}
                  </span>
                </div>
              </div>
              
              <p className={`text-sm ${alert.acknowledged ? 'text-slate-500' : 'text-slate-700'}`}>
                {alert.description}
              </p>
              
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{alert.type} Alert</span>
              </div>
            </div>
            
            {/* Action Column */}
            <div className="flex items-center sm:items-start justify-end sm:justify-start pt-2 sm:pt-0 shrink-0 border-t sm:border-t-0 sm:border-l border-slate-100 sm:pl-4 mt-2 sm:mt-0">
               {!alert.acknowledged ? (
                 <button 
                   onClick={() => handleAcknowledge(alert.id)}
                   className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 px-4 py-2 rounded-lg text-sm font-bold transition-colors w-full sm:w-auto"
                 >
                   Acknowledge
                 </button>
               ) : (
                 <button 
                   disabled
                   className="bg-slate-100 text-slate-400 border border-slate-200 px-4 py-2 rounded-lg text-sm font-bold w-full sm:w-auto cursor-not-allowed"
                 >
                   Dismissed
                 </button>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
