import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Route, Map, BarChart3, Bell } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Shipments', path: '/shipments', icon: <Package size={20} /> },
    { name: 'Route Optimization', path: '/route-optimization', icon: <Route size={20} /> },
    { name: 'Bharat Ops', path: '/bharat-ops', icon: <Map size={20} /> },
    { name: 'Analytics', path: '/analytics', icon: <BarChart3 size={20} /> },
    { name: 'Alerts', path: '/alerts', icon: <Bell size={20} /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800">
      <div className="p-4 mb-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white tracking-wide">Logi<span className="text-blue-500">Dash</span></h1>
      </div>
      
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600/10 text-blue-400 font-medium' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 text-sm text-slate-500">
        &copy; 2026 Logistics Inc.
      </div>
    </aside>
  );
};

export default Sidebar;
