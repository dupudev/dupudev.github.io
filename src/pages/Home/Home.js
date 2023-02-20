import style from './Home.module.scss';

/// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import TabsContext from '../../contexts/TabsContext';
import Marquee from 'react-fast-marquee';
import { pages } from '../../pages';
import { motion } from 'framer-motion';

const Home = ({ homeAnime, setHomeAnime, cta2Anime, setCta2Anime }) => {
  const navigate = useNavigate();
  const home = useRef();
  const [blockHeight, setBlockHeight] = useState(null);
  const { tabs, setTabs } = useContext(TabsContext);

  const { ref: weatherImg, inView: weatherImgInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -250px 0px',
  });
  const { ref: weatherText, inView: weatherTextInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -250px 0px',
  });
  const { ref: storeImg, inView: storeImgInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -250px 0px',
  });
  const { ref: storeText, inView: storeTextInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -250px 0px',
  });
  const { ref: cta2, inView: cta2InView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setBlockHeight(home.current.scrollHeight);
  }, []);

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
    <Container ref={home} className={`${style.home}`}>
      <div className={`${style.function} d-inline-block`}>
        <h5 className={`${style.fn_h5} ${homeAnime ? style.anime : undefined}`}>
          <div className={style.before}></div>
          <div
            style={{
              height: `calc(${blockHeight}px + 100px)`,
              paddingTop: `calc(${blockHeight}px + 100px)`,
            }}
            className={style.after}
          >
            {'}'} <span>;</span>
          </div>
          <span className={style.purple}>const</span>{' '}
          <span className={style.blue}>Home</span>&nbsp;
          <span className={style.sign}>=</span>&nbsp;
          <span className={style.yellow}>{'()'}</span>&nbsp;
          <span className={style.purple}>=&gt;</span>
          <span className={style.yellow}>{' {'}</span> <br />
        </h5>
        <h5 className={`${style.fn_h5} ${homeAnime ? style.anime : undefined}`}>
          <div className={style.before}></div>
          <div
            style={{
              height: `calc(${blockHeight}px + 100px  - 5ch )`,
              paddingTop: `calc(${blockHeight}px + 100px - 5ch)`,
            }}
            className={style.after}
          >
            {')'} <span>;</span>
          </div>
          <span className={style.purple}>return</span>
          <span className={style.green}>{' ('}</span>
        </h5>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={style.content}
      >
        <section className={style.hero}>
          <Row>
            <Col
              xl={8}
              className='d-flex flex-column justify-content-start align-items-center gap-4'
            >
              <div
                className={`${style.heading} ${
                  homeAnime ? style.anime : undefined
                }`}
              >
                <h1>
                  DUŠAN <span>PUZIGAĆA</span>
                </h1>
                <h3>FRONT-END WEB DEVELOPER</h3>
              </div>
              <Row className='gap-5 gap-md-0'>
                <Col
                  xs={{ span: 12, order: 2 }}
                  md={{ span: 6, offset: 0, order: 1 }}
                  lg={{ span: 6, offset: 0, order: 1 }}
                  xl={{ span: 12, offset: 0, order: 1 }}
                  className={`${style.cta} d-flex align-items-center justify-content-center gap-3`}
                >
                  <div className='d-flex flex-column align-items-start justify-content-center gap-3'>
                    <h5 className={homeAnime ? style.anime : undefined}>
                      <span className={style.purple}>if</span>&nbsp;
                      <span className={style.yellow}>{'('}</span>
                      <span className={style.red}>interested to hire me</span>
                      <span className={style.yellow}>{')'}</span>&nbsp;
                      <span className={style.yellow}>{'{'}</span>
                    </h5>
                    <button
                      className={`${style.cta_btn} ${
                        homeAnime ? style.anime : undefined
                      } align-self-center`}
                      onClick={() => openNewTab(pages[3])}
                    >
                      clickHere()
                    </button>
                    <h5 className={homeAnime ? style.anime : undefined}>
                      <span className={style.yellow}>{'}'}</span>&nbsp;
                      <span className={style.purple}>else</span>&nbsp;
                      <span className={style.yellow}>{'{'}</span>
                    </h5>
                    <h5
                      className={`${
                        homeAnime ? style.anime : undefined
                      } align-self-center`}
                    >
                      <span className={style.green}>'keep scrolling'</span>
                    </h5>
                    <h5
                      className={homeAnime ? style.anime : undefined}
                      onAnimationEnd={() => setHomeAnime(false)}
                    >
                      <span className={style.yellow}>{'}'}</span>;
                    </h5>
                  </div>
                </Col>
                <Col
                  xs={{ span: 8, offset: 2, order: 1 }}
                  sm={{ span: 8, offset: 2, order: 1 }}
                  md={{ span: 5, offset: 1, order: 2 }}
                  lg={{ span: 5, offset: 0, order: 1 }}
                  className=''
                >
                  <img
                    className={`${style.profile_pic} ${style.pic2} ${
                      homeAnime ? style.anime : undefined
                    }`}
                    src='./img/DP1.jpg'
                    alt='Dušan Puzigaća'
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs={1}
              xl={4}
              className='d-flex align-items-center justify-content-center'
            >
              <img
                className={`${style.profile_pic} ${style.pic1} ${
                  homeAnime ? style.anime : undefined
                }`}
                src='./img/DP1.jpg'
                alt='Dušan Puzigaća'
              />
            </Col>
          </Row>
          <div
            className={`${style.skills} ${homeAnime ? style.anime : undefined}`}
          >
            <Marquee
              pauseOnHover={true}
              gradientColor={[40, 44, 52]}
              gradientWidth={150}
              style={{
                backgroundColor: '#21252b',
              }}
            >
              <img src='./img/marquee/html.png' alt='html logo' />
              <img src='./img/marquee/css.png' alt='css logo' />
              <img src='./img/marquee/javascript.png' alt='javascript logo' />
              <img
                className={style.bootstrap}
                src='./img/marquee/bootstrap.png'
                alt='bootstrap logo'
              />
              <img src='./img/marquee/git.png' alt='git logo' />
              <img src='./img/marquee/react.png' alt='react logo' />
              <img src='./img/marquee/sass.png' alt='sass logo' />
              <img
                className={style.github}
                src='./img/marquee/github.png'
                alt='github logo'
              />
              <img
                src='./img/marquee/react-bootstrap.png'
                alt='react-bootstrap logo'
              />
            </Marquee>
          </div>
        </section>

        <section
          className={`${style.recent_projects} ${
            homeAnime ? style.anime : undefined
          }`}
        >
          <div className={style.heading}>
            <h2>LATEST PROJECTS</h2>
          </div>
          <Row className={`${style.weather_app} gap-4 ps-2 gap-xxl-5`}>
            <Col
              xs={{ span: 11 }}
              sm={{ span: 12 }}
              md={{ span: 10, offset: 1 }}
              lg={{ span: 8, offset: 2 }}
              xl={{ span: 5, offset: 1 }}
              xxl={{ span: 5, offset: 1 }}
              className='d-flex align-items-center justify-content-center'
            >
              <div
                ref={weatherImg}
                className={`${style.project_img} ${
                  weatherImgInView ? style.anime : ''
                }`}
              >
                <img src='./img/projects/weather_app.png' alt='weather app' />
              </div>
            </Col>
            <Col
              xs={{ span: 11 }}
              sm={{ span: 12 }}
              md={{ span: 10, offset: 1 }}
              lg={{ span: 8, offset: 2 }}
              xl={{ span: 5, offset: 0 }}
              ref={weatherText}
              className={`${style.project_text} ${
                weatherTextInView ? style.anime : ''
              }`}
            >
              <div>
                <h3>Weather App</h3>
                <p>
                  Application will automatically load weather based on user
                  location if location access is allowed. If access is denied,
                  user will be asked to search manually. Background image will
                  change dynamically on every search, displaying random picture
                  of searched location.
                </p>
              </div>
              <div className='d-flex gap-3 align-self-center align-self-sm-start'>
                <a
                  href='https://dupudev.github.io/react-weather-app/'
                  target='_blank'
                  className={style.btn_run}
                >
                  runApp()
                </a>
                <a
                  href='https://github.com/dupudev/react-weather-app'
                  target='_blank'
                  className={style.btn_code}
                >
                  viewCode()
                </a>
              </div>
            </Col>
          </Row>
          <Row className={`${style.fake_store} gap-4 ps-2 gap-xxl-5`}>
            <Col
              xs={{ span: 11, order: 2 }}
              sm={{ span: 12, order: 2 }}
              md={{ span: 10, offset: 1, order: 2 }}
              lg={{ span: 8, offset: 2 }}
              xl={{ span: 5, offset: 1 }}
              xxl={{ span: 5, offset: 1 }}
              ref={storeText}
              className={`${style.project_text} ${
                storeTextInView ? style.anime : ''
              }`}
            >
              <div>
                <h3>Fake Store</h3>
                <p>
                  Users can search and filter items by category and add them to
                  cart. There is also an option to log in as admin. Admin page
                  can be used to edit and remove existing items or add new ones.
                  If new item is added with a category that doesn't exist, it
                  will be created automatically. Also, if all items from one
                  category are deleted, the whole category will be deleted as
                  well.
                </p>
              </div>
              <div className='d-flex gap-3 align-self-center align-self-sm-start'>
                <a
                  href='https://dupudev.github.io/react-simple-web-shop/'
                  target='_blank'
                  className={style.btn_run}
                >
                  runApp()
                </a>
                <a
                  href='https://github.com/dupudev/react-simple-web-shop'
                  target='_blank'
                  className={style.btn_code}
                >
                  viewCode()
                </a>
              </div>
            </Col>
            <Col
              xs={{ span: 11, order: 1 }}
              sm={{ span: 12, order: 1 }}
              md={{ span: 10, offset: 1, order: 1 }}
              lg={{ span: 8, offset: 2 }}
              xl={{ span: 5, offset: 0, order: 2 }}
              xxl={{ span: 5, offset: 0 }}
              className='d-flex align-items-center justify-content-center'
            >
              <div
                ref={storeImg}
                className={`${style.project_img} ${
                  storeImgInView ? style.anime : ''
                }`}
              >
                <img src='./img/projects/fake_store.png' alt='weather app' />
              </div>
            </Col>
          </Row>
        </section>
        <div
          ref={cta2}
          className={`${style.cta2} d-flex flex-column align-items-center justify-content-center`}
        >
          <div className='d-flex flex-column align-items-start justify-content-center gap-4'>
            <h5 className={cta2Anime && cta2InView ? style.anime : ''}>
              <span className={style.purple}>if</span>&nbsp;
              <span className={style.yellow}>{'('}</span>
              <span className={style.red}>interested to see more</span>
              <span className={style.yellow}>{')'}</span>&nbsp;
              <span className={style.yellow}>{'{'}</span>
            </h5>
            <button
              className={`${style.cta2_btn1} ${
                cta2Anime && cta2InView ? style.anime : ''
              } align-self-center`}
              onClick={() => openNewTab(pages[1])}
            >
              projects()
            </button>
            <h5 className={cta2Anime && cta2InView ? style.anime : ''}>
              <span className={style.yellow}>{'}'}</span>&nbsp;
              <span className={style.purple}>else if</span>&nbsp;
              <span className={style.yellow}>{'('}</span>
              <span className={style.red}>more about me</span>
              <span className={style.yellow}>{')'}</span>&nbsp;
              <span className={style.yellow}>{'{'}</span>
            </h5>
            <button
              className={`${style.cta2_btn2} ${
                cta2Anime && cta2InView ? style.anime : ''
              } align-self-center`}
              onClick={() => openNewTab(pages[2])}
            >
              aboutMe()
            </button>
            <h5 className={cta2Anime && cta2InView ? style.anime : ''}>
              <span className={style.yellow}>{'}'}</span>&nbsp;
              <span className={style.purple}>else</span>&nbsp;
              <span className={style.yellow}>{'{'}</span>
            </h5>
            <button
              className={`${style.cta2_btn3} ${
                cta2Anime && cta2InView ? style.anime : ''
              } align-self-center`}
              onClick={() => openNewTab(pages[3])}
            >
              contactMe()
            </button>
            <h5
              className={cta2Anime && cta2InView ? style.anime : ''}
              onAnimationEnd={() => setCta2Anime(false)}
            >
              <span className={style.yellow}>{'}'}</span>;
            </h5>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Home;
