import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = () => {
  console.log('Layout component rendering...');
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
