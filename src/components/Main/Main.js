import style from './Main.module.scss';
import OpenTabs from '../OpenTabs/OpenTabs';

/// Pages
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Projects from '../../pages/Projects/Projects';
import Contact from '../../pages/Contact/Contact';
import NotFound from '../../pages/NotFound/NotFound';

import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Main = () => {
  const main = useRef();
  const { pathname } = useLocation();

  const [homeAnime, setHomeAnime] = useState(true);
  const [cta2Anime, setCta2Anime] = useState(true);
  const [recentAnime, setRecentAnime] = useState(true);
  const [projectsAnime, setProjectsAnime] = useState(true);
  const [contactAnime, setContactAnime] = useState(true);
  const [aboutAnime, setAboutAnime] = useState(true);

  useEffect(() => {
    main.current.scrollTop = 0;
  }, [pathname]);

  return (
    <main ref={main} className='overflow-auto'>
      <OpenTabs />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              homeAnime={homeAnime}
              setHomeAnime={setHomeAnime}
              cta2Anime={cta2Anime}
              setCta2Anime={setCta2Anime}
              recentAnime={recentAnime}
              setRecentAnime={setRecentAnime}
            />
          }
        />
        <Route
          path='projects'
          element={
            <Projects
              projectsAnime={projectsAnime}
              setProjectsAnime={setProjectsAnime}
            />
          }
        />
        <Route
          path='about'
          element={
            <About aboutAnime={aboutAnime} setAboutAnime={setAboutAnime} />
          }
        />
        <Route
          path='contact'
          element={
            <Contact
              contactAnime={contactAnime}
              setContactAnime={setContactAnime}
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
