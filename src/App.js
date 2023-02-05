import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { useState } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { TabsProvider } from './contexts/TabsContext';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='App d-flex flex-column overflow-hidden'>
      <TabsProvider>
        <HashRouter>
          <div className='app d-flex flex-grow-1 overflow-hidden'>
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <Main sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          <Footer />
        </HashRouter>
      </TabsProvider>
    </div>
  );
};

export default App;
