import React from 'react';
import { Truck, FileCheck, IndianRupee, TrendingDown, Fuel, CalendarDays, Map, CreditCard, ShieldAlert } from 'lucide-react';

const kpiData = [
  { label: 'Active Trucks', value: '1,245', icon: <Truck size={24} className="text-blue-500" />, change: '+4%', color: 'border-blue-500' },
  { label: 'E-Way Bill Compliance', value: '99.2%', icon: <FileCheck size={24} className="text-green-500" />, change: '+0.5%', color: 'border-green-500' },
  { label: 'Total Invoice Value', value: '₹42.8 Cr', icon: <IndianRupee size={24} className="text-purple-500" />, change: '+12%', color: 'border-purple-500' },
  { label: 'Avg Cost/Km', value: '₹34.50', icon: <TrendingDown size={24} className="text-orange-500" />, change: '-₹1.20', color: 'border-orange-500' },
];

const routeCosts = [
  { route: 'Delhi → Mumbai', distance: '1,420 km', fuel: '₹14,500', fastag: '₹4,200', challan: '₹0', total: '₹18,700', status: 'Optimal' },
  { route: 'Bengaluru → Chennai', distance: '350 km', fuel: '₹3,800', fastag: '₹950', challan: '₹500', total: '₹5,250', status: 'Review' },
  { route: 'Kolkata → Patna', distance: '580 km', fuel: '₹6,100', fastag: '₹1,400', challan: '₹0', total: '₹7,500', status: 'Optimal' },
  { route: 'Hyderabad → Vijayawada', distance: '275 km', fuel: '₹2,900', fastag: '₹800', challan: '₹1,500', total: '₹5,200', status: 'Critical' },
  { route: 'Ahmedabad → Surat', distance: '265 km', fuel: '₹2,750', fastag: '₹750', challan: '₹0', total: '₹3,500', status: 'Optimal' },
];

const festivals = [
  { name: 'Diwali', date: 'Nov 1 - Nov 5', surge: '250%', category: 'Electronics & Apparel' },
  { name: 'Dussehra', date: 'Oct 12', surge: '180%', category: 'Automotive & FMCG' },
  { name: 'Onam', date: 'Sep 15', surge: '120%', category: 'Apparel (South)' },
];

const BharatOps = () => {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bharat Operations</h1>
          <p className="text-slate-500 mt-1 text-sm">Regional logistics, compliance, and hyper-local metrics.</p>
        </div>
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
              <span className={`text-xs font-semibold ${kpi.change.startsWith('+') && kpi.label !== 'Avg Cost/Km' || kpi.change.startsWith('-') && kpi.label === 'Avg Cost/Km' ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Three Column Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* GST Compliance Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <ShieldAlert className="text-indigo-500" size={20} />
              GST & E-Way Bills
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600 font-medium">Active E-Way Bills</span>
                <span className="text-slate-800 font-bold">1,150</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600 font-medium">Expiring in &lt; 24h</span>
                <span className="text-orange-600 font-bold">42</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600 font-medium">Expired / Non-compliant</span>
                <span className="text-red-600 font-bold">3</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '3%' }}></div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
               * Automatic e-way bill extension is enabled for 85% of the fleet.
            </div>
          </div>
        </div>

        {/* COD Pipeline Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <IndianRupee className="text-green-500" size={20} />
              COD Pipeline
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center py-2">
             <span className="text-slate-500 text-sm font-medium mb-1">Total COD Pending Remittance</span>
             <span className="text-3xl font-bold text-slate-800 mb-6">₹1.85 Cr</span>
             
             <div className="w-full grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                   <div className="text-green-800 font-bold text-lg">₹45 L</div>
                   <div className="text-green-600 text-xs font-medium uppercase tracking-wide mt-1">Collected Today</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                   <div className="text-orange-800 font-bold text-lg">₹12 L</div>
                   <div className="text-orange-600 text-xs font-medium uppercase tracking-wide mt-1">Overdue (&gt;48h)</div>
                </div>
             </div>
          </div>
        </div>

        {/* FASTag & Diesel Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Fuel className="text-orange-500" size={20} />
              FASTag & Fuel
            </h2>
          </div>
          <div className="space-y-5">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                   <CreditCard size={24} />
                </div>
                <div>
                   <div className="text-sm text-slate-500 font-medium">Daily FASTag Tolls</div>
                   <div className="text-xl font-bold text-slate-800">₹4.2 Lakhs</div>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 text-slate-600 rounded-lg">
                   <Fuel size={24} />
                </div>
                <div>
                   <div className="text-sm text-slate-500 font-medium">Daily Diesel Expense</div>
                   <div className="text-xl font-bold text-slate-800">₹18.5 Lakhs</div>
                </div>
             </div>
             <div className="pt-2">
                <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                   <span>FASTag Wallet Balance</span>
                   <span className="text-orange-600">Low (₹1.2L)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Per-route cost breakdown table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Map className="text-blue-500" size={20} />
              Per-Route Cost Breakdown
            </h2>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Download CSV</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Route</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Distance</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Fuel</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">FASTag</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">RTO/Challan</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Est.</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {routeCosts.map((route, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-3 px-4 text-sm font-medium text-slate-800">{route.route}</td>
                    <td className="py-3 px-4 text-sm text-slate-500">{route.distance}</td>
                    <td className="py-3 px-4 text-sm text-slate-600">{route.fuel}</td>
                    <td className="py-3 px-4 text-sm text-slate-600">{route.fastag}</td>
                    <td className="py-3 px-4 text-sm text-red-600 font-medium">{route.challan}</td>
                    <td className="py-3 px-4 text-sm font-bold text-slate-800">{route.total}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                        ${route.status === 'Optimal' ? 'bg-green-100 text-green-800' : ''}
                        ${route.status === 'Review' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${route.status === 'Critical' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {route.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Festival Demand Calendar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
          <div className="p-4 border-b border-slate-200 bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <CalendarDays className="text-pink-500" size={20} />
              Festival Demand Surges
            </h2>
          </div>
          <div className="p-4 flex-1 space-y-4">
            {festivals.map((fest, idx) => (
              <div key={idx} className="relative p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-pink-300 transition-colors">
                 <div className="absolute top-0 right-0 bg-pink-100 text-pink-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl">
                    +{fest.surge} Vol
                 </div>
                 <h3 className="font-bold text-slate-800 text-lg mb-1">{fest.name}</h3>
                 <div className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                    <CalendarDays size={14} /> {fest.date}
                 </div>
                 <div className="text-xs font-medium text-slate-600 bg-slate-100 inline-block px-2 py-1 rounded">
                    Focus: {fest.category}
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BharatOps;
