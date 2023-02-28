import style from './Projects.module.scss';

/// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { projects_list } from './Projects_list';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscChevronDown } from 'react-icons/vsc';

const Projects = ({ projectsAnime, setProjectsAnime }) => {
  const projects = useRef();
  const selectBtnText = useRef();
  const dropdownMenu = useRef();

  const [blockHeight, setBlockHeight] = useState(null);
  const [category, setCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects_list);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setBlockHeight(projects.current.scrollHeight);

    const closeDropdownMenu = (event) => {
      console.log(event);
      setActive(false);
    };

    document.body.addEventListener('click', closeDropdownMenu);
    return () => {
      document.body.removeEventListener('click', closeDropdownMenu);
    };
  }, []);

  useEffect(() => {
    const filtered_list = projects_list.filter((project) => {
      if (category == 'all') {
        return project;
      } else if (project.category === category) {
        return project;
      }
    });
    setFilteredProjects(filtered_list);
  }, [category]);

  const openDropdownMenu = (event) => {
    event.stopPropagation();
    setActive((prev) => !prev);
  };

  const selectOption = (event) => {
    event.stopPropagation();
    console.log(event);
    setCategory(event.target.id);
    setActive(false);

    selectBtnText.current.innerText = event.target.innerText;
  };

  return (
    <Container ref={projects} className={`${style.projects}`}>
      <div className={`${style.function} d-inline-block`}>
        <h5
          className={`${style.fn_h5} ${
            projectsAnime ? style.anime : undefined
          }`}
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
          <span className={style.blue}>Projects</span>&nbsp;
          <span className={style.sign}>=</span>&nbsp;
          <span className={style.yellow}>{'()'}</span>&nbsp;
          <span className={style.purple}>=&gt;</span>
          <span className={style.yellow}>{' {'}</span> <br />
        </h5>
        <h5
          className={`${style.fn_h5} ${
            projectsAnime ? style.anime : undefined
          }`}
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

      <div className={style.content}>
        <div
          className={`${style.select_menu} ${
            projectsAnime ? style.anime : undefined
          } ms-auto me-4 mb-5`}
        >
          <div
            ref={dropdownMenu}
            className={`${style.select_btn} ${style[category]} ${
              active && style.active
            } d-flex justify-content-between align-items-center`}
            onClick={(event) => openDropdownMenu(event)}
          >
            <span ref={selectBtnText}>All</span>
            <VscChevronDown className='fs-4' />
          </div>
          <ul
            className={`${style.options}  p-0 m-0 ${
              active ? 'd-block' : 'd-none'
            }`}
          >
            <li
              className={`${style.option} ${style.all}`}
              id='all'
              onClick={(event) => selectOption(event)}
            >
              All
            </li>
            <li
              className={`${style.option} ${style.react}`}
              id='react'
              onClick={(event) => selectOption(event)}
            >
              React Apps
            </li>
            <li
              className={`${style.option} ${style.static}`}
              id='static'
              onClick={(event) => selectOption(event)}
            >
              Static Websites
            </li>
          </ul>
        </div>

        <Row
          as={motion.div}
          layout
          xs={1}
          md={2}
          xl={3}
          className={`${style.projects_row} ${
            projectsAnime ? style.anime : undefined
          } gy-5 ps-2`}
          onAnimationEnd={() => {
            setProjectsAnime(false);
            setBlockHeight(projects.current.scrollHeight);
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              return (
                <Col
                  as={motion.div}
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <article
                    className={` ${style[project.category]} me-2 mx-sm-3`}
                  >
                    <div className={style.project_img}>
                      <img src={project.img} alt={`${project.title} image`} />
                    </div>
                    <div className={style.project_overlay}></div>
                    <div
                      className={`${style.project_text} ${
                        style[project.category]
                      } d-flex flex-column justify-content-center `}
                    >
                      <h4 className={`${style[project.category]}`}>
                        {project.title}
                      </h4>
                      <div className='d-flex gap-3 flex-row flex-sm-row align-items-center justify-content-center'>
                        <a
                          className={style.btn_run}
                          href={project.url}
                          target='_blank'
                        >
                          {project.category === 'react' ? 'runApp()' : 'open()'}
                        </a>
                        <a
                          className={style.btn_github}
                          href={project.github_url}
                          target='_blank'
                        >
                          viewCode()
                        </a>
                      </div>
                    </div>
                  </article>
                </Col>
              );
            })}
          </AnimatePresence>
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
