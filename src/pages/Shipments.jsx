import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, X } from 'lucide-react';

const mockShipments = [
  { id: 'TRK-90021', cargo: 'Electronics', route: 'Bengaluru → Mysuru', status: 'In Transit', risk: 'Low', eta: 'Today, 2:00 PM' },
  { id: 'TRK-90022', cargo: 'Medical Supplies', route: 'Delhi → Mumbai', status: 'Delayed', risk: 'Critical', eta: 'Tomorrow, 9:00 AM' },
  { id: 'TRK-90023', cargo: 'Automotive Parts', route: 'Chennai → Pune', status: 'Delivered', risk: 'Low', eta: 'Yesterday' },
  { id: 'TRK-90024', cargo: 'Apparel', route: 'Hyderabad → Kochi', status: 'In Transit', risk: 'Medium', eta: 'Today, 6:30 PM' },
  { id: 'TRK-90025', cargo: 'FMCG', route: 'Kolkata → Patna', status: 'Pending', risk: 'Low', eta: 'Nov 12, 10:00 AM' },
  { id: 'TRK-90026', cargo: 'Industrial Gear', route: 'Ahmedabad → Surat', status: 'In Transit', risk: 'High', eta: 'Today, 11:45 PM' },
  { id: 'TRK-90027', cargo: 'Perishables', route: 'Lucknow → Kanpur', status: 'Delivered', risk: 'Low', eta: 'Nov 9, 8:00 AM' },
  { id: 'TRK-90028', cargo: 'Construction Mat.', route: 'Jaipur → Delhi', status: 'Delayed', risk: 'High', eta: 'Nov 11, 4:00 PM' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'In Transit': return 'bg-blue-100 text-blue-800';
    case 'Delivered': return 'bg-green-100 text-green-800';
    case 'Delayed': return 'bg-red-100 text-red-800';
    case 'Pending': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const getRiskBadge = (risk) => {
  switch (risk) {
    case 'Low': return 'bg-slate-100 text-slate-600 border border-slate-200';
    case 'Medium': return 'bg-orange-50 text-orange-700 border border-orange-200';
    case 'High': return 'bg-red-50 text-red-700 border border-red-200';
    case 'Critical': return 'bg-red-600 text-white border border-red-700';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const Shipments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 h-full flex flex-col bg-slate-50 relative">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Shipments</h1>
          <p className="text-slate-500 mt-1 text-sm">Manage and track all active and historical shipments.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          New Order
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col overflow-hidden">
        {/* Controls Area */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Tracking ID, Cargo, Route..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Filter size={16} />
              Filters:
            </div>
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Statuses</option>
              <option value="in-transit">In Transit</option>
              <option value="delivered">Delivered</option>
              <option value="delayed">Delayed</option>
              <option value="pending">Pending</option>
            </select>
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Risks</option>
              <option value="low">Low Risk</option>
              <option value="medium">Medium Risk</option>
              <option value="high">High Risk</option>
              <option value="critical">Critical Risk</option>
            </select>
          </div>
        </div>

        {/* Table Area */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 sticky top-0 z-10 border-b border-slate-200 shadow-sm">
              <tr>
                <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tracking ID</th>
                <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Cargo</th>
                <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Route</th>
                <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Risk</th>
                <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">ETA</th>
                <th className="py-3 px-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {mockShipments.map((shipment, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-slate-900">{shipment.id}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{shipment.cargo}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{shipment.route}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(shipment.status)}`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium shadow-sm ${getRiskBadge(shipment.risk)}`}>
                      {shipment.risk}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{shipment.eta}</td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded hover:bg-slate-100">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between text-sm text-slate-500">
          <div>Showing <span className="font-medium text-slate-700">1</span> to <span className="font-medium text-slate-700">8</span> of <span className="font-medium text-slate-700">124</span> shipments</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-slate-300 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 rounded border border-slate-300 bg-white hover:bg-slate-50 text-slate-600">Next</button>
          </div>
        </div>
      </div>

      {/* New Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">Create New Order</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors rounded-full p-1 hover:bg-slate-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Basic Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Cargo Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Item Description <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Industrial Generators" 
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Weight (kg) <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="number" 
                        placeholder="0.0" 
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Priority <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700">
                        <option value="">Select Priority</option>
                        <option value="standard">Standard</option>
                        <option value="express">Express</option>
                        <option value="urgent">Urgent / Critical</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100"></div>

                {/* Routing Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Routing Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pickup */}
                    <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <h4 className="font-medium text-slate-700 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        Pickup Address
                      </h4>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Facility / Warehouse</label>
                        <input type="text" placeholder="Search facilities..." className="w-full px-3 py-1.5 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Full Address <span className="text-red-500">*</span></label>
                        <textarea rows="2" placeholder="Enter complete pickup address" className="w-full px-3 py-1.5 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                      </div>
                    </div>

                    {/* Delivery */}
                    <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <h4 className="font-medium text-slate-700 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Delivery Address
                      </h4>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Customer / Hub</label>
                        <input type="text" placeholder="Search hubs..." className="w-full px-3 py-1.5 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Full Address <span className="text-red-500">*</span></label>
                        <textarea rows="2" placeholder="Enter complete delivery address" className="w-full px-3 py-1.5 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                Create Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shipments;
