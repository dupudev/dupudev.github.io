/// icons
import {
  VscChevronDown,
  VscChevronRight,
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from 'react-icons/vsc';

import style from './Sidebar.module.scss';
import { pages } from '../../pages';

import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TabsContext from '../../contexts/TabsContext';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  
  const { tabs, setTabs } = useContext(TabsContext);

  useEffect(() => {
    if (window.innerWidth > 1620) setSidebarOpen(true);
  }, []);

  const createTab = (target) => {
    

    console.log(target);

    const link = target.href.split(`http://${target.host}/#`)[1];

    let tabIdx;
    let filterTabs = tabs.filter((tab, idx) => {
      if (tab.label === target.innerText) {
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
        label: target.innerText,
        link: link,
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
    // ${style.closed}
    <div className={`${style.sidebar} ${!sidebarOpen && style.closed}`}>
      {/* side menu */}
      <div className={`${style.sidebar_left}`}>
        {/* top icon group */}
        <div className={style.sidebar_left_top}>
          <button
            className={style.nav_toggler}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <VscFiles className={style.icon} />
          </button>
          <VscSearch className={style.icon} />
          <VscSourceControl className={style.icon} />
          <VscDebugAlt className={style.icon} />
          <VscExtensions className={style.icon} />
        </div>
        {/* bottom icon group */}
        <div className={style.sidebar_left_bottom}>
          <VscAccount className={style.icon} />
          <VscSettingsGear className={style.icon} />
        </div>
      </div>
      {/* navigation */}

      <div className={style.sidebar_right}>
        <div className={style.sidebar_right_top}>
          <div className={style.logo}>
            <a href='https://github.com/dupudev' target='_blank'>
              <span>github.com/</span>dupudev
            </a>
          </div>
          <div className={style.folder}>
            <VscChevronDown /> <p>PORTFOLIO</p>
          </div>
          <nav>
            <ul className={style.ul}>
              <li className='text-muted'>
                <VscChevronRight />
                <img
                  className={style.icon}
                  src='./img/icons/node.png'
                  alt='node folder icon'
                />
                node_modules
              </li>
              <li>
                <VscChevronRight />
                <img
                  className={style.icon}
                  src='./img/icons/public.png'
                  alt='public folder icon'
                />
                public
              </li>
              <li>
                <VscChevronDown />
                <img
                  className={style.icon}
                  src='./img/icons/src.png'
                  alt='src folder icon'
                />
                src
              </li>

              <li>
                <VscChevronRight />
                <img
                  className={style.icon}
                  src='./img/icons/components.png'
                  alt='components folder icon'
                />
                components
              </li>
              <li>
                <VscChevronDown />
                <img
                  className={style.icon}
                  src='./img/icons/pages.png'
                  alt='pages folder icon'
                />
                pages
              </li>
              {/* real navigation menu */}
              {/* ******************************************* */}
              {pages.map((page, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${style.page} ${
                      location.pathname === page.link && style.active
                    }`}
                  >
                    <Link
                      to={page.link}
                      onClick={(event) => createTab(event.target)}
                    >
                      <img
                        className={style.icon}
                        src='./img/icons/js.png'
                        alt='js folder icon'
                      />
                      {page.label}
                    </Link>
                  </li>
                );
              })}

              {/* real navigation END */}
              {/* ******************************************* */}
              <li>
                <VscChevronRight />
                <img
                  className={style.icon}
                  src='./img/icons/styles.png'
                  alt='styles folder icon'
                />
                styles
              </li>
              <li>
                <img
                  className={style.icon}
                  src='./img/icons/js.png'
                  alt='js icon'
                />
                App.js
              </li>
              <li>
                <img
                  className={style.icon}
                  src='./img/icons/js.png'
                  alt='js icon'
                />
                index.js
              </li>
              <li>
                <img
                  className={style.icon}
                  src='./img/icons/git.png'
                  alt='git folder icon'
                />
                .gitignore
              </li>
              <li>
                <img
                  className={style.icon}
                  src='./img/icons/npm.png'
                  alt='npm folder icon'
                />
                package-lock.json
              </li>
              <li>
                <img
                  className={style.icon}
                  src='./img/icons/npm.png'
                  alt='npm folder icon'
                />
                package.json
              </li>
              <li>
                <img
                  className={style.icon}
                  src='./img/icons/readme.png'
                  alt='readme folder icon'
                />
                README.md
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.sidebar_right_bottom}>
          <div className={style.folder}>
            <VscChevronRight /> <p>OUTLINE</p>
          </div>
          <div className={style.folder}>
            <VscChevronRight /> <p>TIMELINE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
