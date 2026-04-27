import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Shipments from './pages/Shipments';
import RouteOptimization from './pages/RouteOptimization';
import BharatOps from './pages/BharatOps';
import Analytics from './pages/Analytics';
import Alerts from './pages/Alerts';

function App() {
  console.log('App rendering...');
  
  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw', backgroundColor: '#f1f5f9', display: 'flex' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="shipments" element={<Shipments />} />
            <Route path="route-optimization" element={<RouteOptimization />} />
            <Route path="bharat-ops" element={<BharatOps />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="alerts" element={<Alerts />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
