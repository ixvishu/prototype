import React from 'react';
import { Package, Truck, CheckCircle, Clock, AlertTriangle, Activity, MapPin, Bell } from 'lucide-react';

// Static mock data
const KPIData = [
  { label: 'Total Shipments', value: '12,450', icon: <Package size={24} className="text-blue-500" />, change: '+12%', color: 'border-blue-500' },
  { label: 'In Transit', value: '3,820', icon: <Truck size={24} className="text-indigo-500" />, change: '+5%', color: 'border-indigo-500' },
  { label: 'Delivered', value: '8,405', icon: <CheckCircle size={24} className="text-green-500" />, change: '+18%', color: 'border-green-500' },
  { label: 'Delayed', value: '185', icon: <Clock size={24} className="text-orange-500" />, change: '-2%', color: 'border-orange-500' },
  { label: 'High Risk', value: '40', icon: <AlertTriangle size={24} className="text-red-500" />, change: '+10%', color: 'border-red-500' },
  { label: 'On-Time Rate', value: '96.2%', icon: <Activity size={24} className="text-teal-500" />, change: '+0.5%', color: 'border-teal-500' },
];

const highRiskShipments = [
  { id: 'SHP-9021', destination: 'Bengaluru South', issue: 'Severe Weather Delay', eta: 'Delayed by 4hrs', riskLevel: 'Critical' },
  { id: 'SHP-8834', destination: 'Mysuru Hub', issue: 'Vehicle Breakdown', eta: 'Delayed by 6hrs', riskLevel: 'Critical' },
  { id: 'SHP-9102', destination: 'Electronic City', issue: 'Traffic Congestion', eta: 'Delayed by 1hr', riskLevel: 'High' },
  { id: 'SHP-8755', destination: 'Whitefield', issue: 'Route Deviation', eta: 'On Time', riskLevel: 'Medium' },
];

const recentAlerts = [
  { id: 1, title: 'Fleet capacity at 95% in Zone B', time: '10 mins ago', type: 'warning' },
  { id: 2, title: 'New road closure: Outer Ring Road', time: '35 mins ago', type: 'critical' },
  { id: 3, title: 'Shipment SHP-8834 requires rerouting', time: '1 hr ago', type: 'critical' },
  { id: 4, title: 'Daily sync completed successfully', time: '3 hrs ago', type: 'info' },
  { id: 5, title: 'Driver shift change imminent', time: '4 hrs ago', type: 'info' },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <div className="text-sm text-slate-500">Last updated: Just now</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {KPIData.map((kpi, index) => (
          <div key={index} className={`bg-white p-4 rounded-xl shadow-sm border-t-4 ${kpi.color}`}>
            <div className="flex justify-between items-start mb-2">
              <div className="text-slate-500 text-sm font-medium">{kpi.label}</div>
              <div className="p-2 bg-slate-50 rounded-lg">{kpi.icon}</div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
              <span className={`text-xs font-semibold ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Live Fleet Tracking Placeholder */}
          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100 flex flex-col h-96">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <MapPin className="text-blue-500" size={20} />
                Live Fleet Tracking
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View Full Map</button>
            </div>
            <div className="flex-1 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin size={48} className="text-slate-400 mx-auto mb-2 opacity-50" />
                <p className="text-slate-500 font-medium">Map Visualization Placeholder</p>
                <p className="text-slate-400 text-sm mt-1">Google Maps API will be integrated here</p>
              </div>
            </div>
          </div>

          {/* High Risk Shipments */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle className="text-red-500" size={20} />
                High Risk Shipments
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              {highRiskShipments.map((shipment, index) => (
                <div key={index} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800">{shipment.id}</div>
                    <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <span className="font-medium">{shipment.destination}</span> &bull; {shipment.issue}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      shipment.riskLevel === 'Critical' ? 'bg-red-100 text-red-800' :
                      shipment.riskLevel === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {shipment.riskLevel} Risk
                    </span>
                    <div className="text-xs font-medium text-slate-500 mt-1">{shipment.eta}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-slate-100 text-center">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All Shipments</button>
            </div>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-6">
          {/* Recent Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Bell className="text-indigo-500" size={20} />
                Recent Alerts
              </h2>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">3 New</span>
            </div>
            <div className="p-4 flex-1">
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex gap-3">
                    <div className="mt-1">
                      <div className={`w-2.5 h-2.5 rounded-full ${
                        alert.type === 'critical' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' :
                        alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-400'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        alert.type === 'critical' ? 'text-red-700' : 'text-slate-800'
                      }`}>
                        {alert.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 border-t border-slate-100 text-center">
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Manage Alerts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
