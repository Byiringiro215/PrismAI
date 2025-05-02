import React, { createContext, useContext, useState } from 'react';

const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  function toogleSidebar() {
    setShowSidebar(prev => !prev);
  }

  return (
    <SideBarContext.Provider value={{ showSidebar, setShowSidebar, toogleSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
};
