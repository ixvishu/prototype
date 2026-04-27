import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Clock, Target, ThumbsUp } from 'lucide-react';

const kpiData = [
  { label: 'Total Volume', value: '14,892', icon: <TrendingUp size={24} className="text-blue-500" />, change: '+8.2%', color: 'border-blue-500' },
  { label: 'Avg Delivery Time', value: '1.2 Days', icon: <Clock size={24} className="text-indigo-500" />, change: '-4.1%', color: 'border-indigo-500' },
  { label: 'Efficiency Score', value: '94.5/100', icon: <Target size={24} className="text-emerald-500" />, change: '+1.5', color: 'border-emerald-500' },
  { label: 'Customer Satisfaction', value: '4.8/5.0', icon: <ThumbsUp size={24} className="text-orange-500" />, change: '+0.2', color: 'border-orange-500' },
];

const deliveryTrendData = [
  { name: 'Mon', onTime: 145, delayed: 12 },
  { name: 'Tue', onTime: 162, delayed: 8 },
  { name: 'Wed', onTime: 150, delayed: 24 },
  { name: 'Thu', onTime: 180, delayed: 15 },
  { name: 'Fri', onTime: 195, delayed: 10 },
  { name: 'Sat', onTime: 210, delayed: 18 },
  { name: 'Sun', onTime: 165, delayed: 5 },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics Overview</h1>
          <p className="text-slate-500 mt-1 text-sm">Monitor performance metrics and delivery trends over time.</p>
        </div>
        <select className="border border-slate-300 rounded-lg px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm font-medium">
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <div key={index} className={`bg-white p-5 rounded-xl shadow-sm border-t-4 ${kpi.color}`}>
            <div className="flex justify-between items-start mb-2">
              <div className="text-slate-500 text-sm font-medium">{kpi.label}</div>
              <div className="p-2 bg-slate-50 rounded-lg">{kpi.icon}</div>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
              <span className={`text-xs font-semibold ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-emerald-500'}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">On-Time vs Delayed Deliveries</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Export Data</button>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={deliveryTrendData}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line 
                  type="monotone" 
                  dataKey="onTime" 
                  name="On-Time"
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  activeDot={{ r: 6, strokeWidth: 0 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="delayed" 
                  name="Delayed"
                  stroke="#ef4444" 
                  strokeWidth={3}
                  activeDot={{ r: 6, strokeWidth: 0 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Placeholder for additional analytics (e.g. pie chart or list) */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-lg font-bold text-slate-800">Delay Reasons</h2>
           </div>
           <div className="flex-1 flex flex-col justify-center">
             <div className="space-y-4">
               {[
                 { reason: 'Traffic Congestion', percentage: '45%', color: 'bg-red-500' },
                 { reason: 'Vehicle Breakdown', percentage: '25%', color: 'bg-orange-500' },
                 { reason: 'Weather Conditions', percentage: '15%', color: 'bg-blue-400' },
                 { reason: 'Customer Unavailable', percentage: '10%', color: 'bg-slate-400' },
                 { reason: 'Other', percentage: '5%', color: 'bg-slate-200' }
               ].map((item, idx) => (
                 <div key={idx}>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="text-slate-600 font-medium">{item.reason}</span>
                     <span className="text-slate-800 font-bold">{item.percentage}</span>
                   </div>
                   <div className="w-full bg-slate-100 rounded-full h-2">
                     <div className={`${item.color} h-2 rounded-full`} style={{ width: item.percentage }}></div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
