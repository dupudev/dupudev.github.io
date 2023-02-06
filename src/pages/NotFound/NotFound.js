import style from './NotFound.module.scss';

import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import TabsContext from '../../contexts/TabsContext';
import { pages } from '../../pages';

const NotFound = () => {
  const navigate = useNavigate();
  const { tabs, setTabs } = useContext(TabsContext);

  const openNewTab = (openTab) => {
    navigate(openTab.link);

    let tabIdx;
    let filterTabs = tabs.filter((tab, idx) => {
      if (tab.label === openTab.label) {
        tabIdx = idx;
        return tab;
      }
    });

    if (filterTabs.length > 0) {
      setTabs((prevTabs) => {
        prevTabs.forEach((tab) => {
          tab.isActive = false;
        });
        prevTabs[tabIdx].isActive = true;
        return [...prevTabs];
      });
    } else {
      let newTab = {
        label: openTab.label,
        link: openTab.link,
        isActive: true,
        dragOver: false,
      };
      setTabs((prevTabs) => {
        prevTabs.forEach((tab) => {
          tab.isActive = false;
        });
        return [...prevTabs, newTab];
      });
    }
  };

  return (
    <div
      className={`${style.error} d-flex flex-column align-items-center justify-content-center mt-5 me-5`}
    >
      <h4>404</h4>
      <p>Page not found</p>
      <button onClick={() => openNewTab(pages[0])}>Home Page</button>
    </div>
  );
};

export default NotFound;
