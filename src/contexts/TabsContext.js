import { useState, createContext } from 'react';

const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
  const [tabs, setTabs] = useState([
    {
      label: 'Home.js',
      link: '/',
      isActive: true,
      dragOver: false,
    },
  ]);

  return (
    <TabsContext.Provider value={{ tabs, setTabs }}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabsContext;
