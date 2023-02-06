import style from './About.module.scss';

/// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const About = ({ aboutAnime, setAboutAnime }) => {
  const about = useRef();
  const [blockHeight, setBlockHeight] = useState(null);

  useEffect(() => {
    setBlockHeight(about.current.scrollHeight);
  }, []);

  return (
    <Container ref={about} className={style.about}>
      <div className={`${style.function} d-inline-block`}>
        <h5
          className={`${style.fn_h5} ${aboutAnime ? style.anime : undefined}`}
        >
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
          <span className={style.blue}>About</span>&nbsp;
          <span className={style.sign}>=</span>&nbsp;
          <span className={style.yellow}>{'()'}</span>&nbsp;
          <span className={style.purple}>=&gt;</span>
          <span className={style.yellow}>{' {'}</span> <br />
        </h5>
        <h5
          className={`${style.fn_h5} ${aboutAnime ? style.anime : undefined}`}
        >
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
        <Row className='gap-5 gap-lg-0'>
          <Col
            xs={{ span: 12, order: 2 }}
            lg={{ span: 7, offset: 0, order: 1 }}
          >
            <div className={style.heading}>
              <span className={aboutAnime ? style.anime : undefined}>
                Hello,
              </span>
              &nbsp;
              <br />
              <span className={aboutAnime ? style.anime : undefined}>
                I'm <span>Dušan</span>
              </span>
            </div>
            <p className={aboutAnime ? style.anime : undefined}>
              After graduation in Environmental Engineering at Faculty of
              Technical Sciences, University of Novi Sad, I worked as a
              Laboratory Technician at the same faculty for two and a half
              years. Later I have decided to switch my carrier path and become
              Front-End Web Developer. I don't have any previous working
              experience but I am looking for an opportunity to work, improve
              and expand my knowledge in field of Web development. <br /> I
              don't give up easily and I always do my best to find a solution
              for any problem.
            </p>
            <a
              href='./data/resume.pdf'
              download='[CV] Dušan Puzigaća.pdf'
              className={`${style.btn_download} ${
                aboutAnime ? style.anime : ''
              }`}
            >
              downloadCV()
            </a>
          </Col>
          <Col
            xs={{ span: 10, offset: 1, order: 1 }}
            sm={{ span: 8, offset: 2, order: 1 }}
            md={{ span: 6, offset: 3, order: 1 }}
            lg={{ span: 5, offset: 0, order: 2 }}
            xl={{ span: 4, offset: 1, order: 2 }}
          >
            <img
              className={aboutAnime ? style.anime : undefined}
              src='./img/DP2.jpg'
              alt=''
              onAnimationEnd={() =>
                setTimeout(() => {
                  setAboutAnime(false);
                }, 2500)
              }
            />
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default About;
