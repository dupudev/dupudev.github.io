import style from './OpenTabs.module.scss';
import { VscClose } from 'react-icons/vsc';
import { pages } from '../../pages';
import React, { useContext, useState, useEffect, useRef } from 'react';
import TabsContext from '../../contexts/TabsContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OpenTabs = () => {
  const dragTab = useRef();
  const dragOverTab = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { tabs, setTabs } = useContext(TabsContext);

  /// Ako se sajtu pristupa preko linka, ovde proveravam da li je unet link sa postojecom stranicom. Ako jeste, ta stranica se otvara u prvom tabu, ako nije, otvara se stranice Error.
  useEffect(() => {
    let initialLabel;

    if (location.pathname != '/') {
      const tempLabel = location.pathname.split('/')[1];
      initialLabel = `${tempLabel[0].toUpperCase()}${tempLabel.slice(1)}.js`;
    } else {
      initialLabel = 'Home.js';
    }

    const initialLabelValid = pages.some((page) => page.label === initialLabel);
    setTabs([
      {
        label: initialLabelValid ? initialLabel : 'Error.js',
        link: location.pathname,
        isActive: true,
      },
    ]);
  }, []);

  const handleDragStart = (idx) => {
    dragTab.current = idx;
  };
  const handleDragEnter = (idx) => {
    dragOverTab.current = idx;

    setTabs((prev) => {
      prev[idx].dragOver = true;
      return [...prev];
    });
  };

  const handleDragLeave = (idx) => {
    setTabs((prev) => {
      prev[idx].dragOver = false;
      return [...prev];
    });
  };

  const drop = () => {
    let tempTabs = [...tabs];
    let dragTabContent = tempTabs[dragTab.current];
    tempTabs.splice(dragTab.current, 1);
    tempTabs.splice(dragOverTab.current, 0, dragTabContent);
    tempTabs.forEach((tab) => {
      tab.dragOver = false;
    });
    dragTab.current = null;
    dragOverTab.current = null;
    setTabs(tempTabs);
  };

  const handleDragOver = (event, idx) => {
    event.preventDefault();
  };

  const handleSelectTab = (tab, idx) => {
    navigate(tab.link);
    setTabs((prev) => {
      prev.forEach((tab) => {
        tab.isActive = false;
      });
      prev[idx].isActive = true;
      return [...prev];
    });
  };

  const handleCloseTab = (event, idx) => {
    event.stopPropagation();

    const tempTabs = [...tabs];

    if (
      tempTabs.length > 1 &&
      tempTabs[idx].isActive &&
      idx < tempTabs.length - 1
    ) {
      navigate(tempTabs[idx + 1].link);
      tempTabs[idx + 1].isActive = true;
      tempTabs.splice(idx, 1);
    } else if (
      tempTabs.length > 1 &&
      tempTabs[idx].isActive &&
      idx >= tempTabs.length - 1
    ) {
      navigate(tempTabs[idx - 1].link);
      tempTabs[idx - 1].isActive = true;
      tempTabs.splice(idx, 1);
    } else if (tempTabs.length > 1 && !tempTabs[idx].isActive) {
      tempTabs.splice(idx, 1);
    }

    setTabs(tempTabs);
  };

  return (
    <div className={style.open_tabs}>
      {tabs.map((tab, idx) => {
        return (
          <div
            key={idx}
            className={`${style.tab} ${
              location.pathname === tab.link && style.active
            } ${tab.dragOver && style.over}`}
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDragEnter={() => handleDragEnter(idx)}
            onDragOver={(event) => handleDragOver(event, idx)}
            onDragLeave={() => handleDragLeave(idx)}
            onDragEnd={drop}
            onClick={() => handleSelectTab(tab, idx)}
          >
            <img src='./img/icons/js.png' alt='' />
            {tab.label}
            <button onClick={(event) => handleCloseTab(event, idx)}>
              <VscClose />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default OpenTabs;
