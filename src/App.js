import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { BrowserRouter, HashRouter } from 'react-router-dom';
import { TabsProvider } from './contexts/TabsContext';

const App = () => {
  return (
    <div className='App d-flex flex-column overflow-hidden'>
      <TabsProvider>
        <HashRouter>
          <div className='app d-flex flex-grow-1 overflow-hidden'>
            <Sidebar />
            <Main />
          </div>
          <Footer />
        </HashRouter>
      </TabsProvider>
    </div>
  );
};

export default App;
