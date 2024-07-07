// components/Layout.js
import Sidebar from '@/components/Sidebar';
import React, { ReactNode } from 'react';
interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar/>
      <main className='ml-[250px] w-full'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
