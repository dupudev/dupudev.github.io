import style from './Contact.module.scss';

/// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { VscMail, VscGithubInverted } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = ({ contactAnime, setContactAnime }) => {
  const contact = useRef();
  const form = useRef();
  const [blockHeight, setBlockHeight] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    setBlockHeight(contact.current.scrollHeight);
  }, []);

  const onEmailChange = (target) => {
    setEmail(target.value);

    if (target.checkValidity()) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_8fxbuim',
        'template_7yghy11',
        form.current,
        'VK9nwhhiM5gRsd4R5'
      )
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');

        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      });
  };

  return (
    <Container ref={contact} className={style.contact}>
      <div className={`${style.function} d-inline-block`}>
        <h5
          className={`${style.fn_h5} ${contactAnime ? style.anime : undefined}`}
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
          <span className={style.blue}>Contact</span>&nbsp;
          <span className={style.sign}>=</span>&nbsp;
          <span className={style.yellow}>{'()'}</span>&nbsp;
          <span className={style.purple}>=&gt;</span>
          <span className={style.yellow}>{' {'}</span> <br />
        </h5>
        <h5
          className={`${style.fn_h5} ${contactAnime ? style.anime : undefined}`}
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
        <Row className='g-5'>
          <Col xs={12} md={6} xl={{ span: 5, offset: 1 }}>
            <div className={style.heading}>
              <h3 className={contactAnime ? style.anime : undefined}>
                Contact Info
              </h3>
            </div>
            <div className={style.contact_links}>
              <div
                className={`${style.link} ${
                  contactAnime ? style.anime : undefined
                } `}
              >
                <VscMail className={style.icon} />
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=puzigaca.dusan5@gmail.com'
                  target='_blank'
                >
                  puzigaca.dusan5@gmail.com
                </a>
              </div>
              <div
                className={`${style.link} ${
                  contactAnime ? style.anime : undefined
                } `}
              >
                <FaLinkedinIn className={style.icon} />
                <a
                  href='https://www.linkedin.com/in/dušan-puzigaća-762b031ba/'
                  target='_blank'
                >
                  Dušan Puzigaća
                </a>
              </div>
              <div
                className={`${style.link} ${
                  contactAnime ? style.anime : undefined
                } `}
              >
                <VscGithubInverted className={style.icon} />
                <a href='https://github.com/dupudev' target='_blank'>
                  dupudev
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <h4 className={`${contactAnime ? style.anime : undefined} pb-3`}>
              Send me a message
            </h4>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type='text'
                value={name}
                placeholder='Name'
                name='user_name'
                required
                className={`${style.input_name} ${
                  contactAnime ? style.anime : undefined
                }`}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type='email'
                value={email}
                placeholder='Email'
                name='user_email'
                required
                className={`${style.input_email} ${
                  contactAnime ? style.anime : undefined
                } ${emailValid ? style.valid : ''} ${
                  !emailValid && email.length > 0 ? style.invalid : ''
                }`}
                onChange={(event) => onEmailChange(event.target)}
              />
              <textarea
                value={message}
                placeholder='Message'
                name='message'
                required
                className={`${style.input_message} ${
                  contactAnime ? style.anime : undefined
                }`}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
              <div
                className={`${style.input_submit} ${
                  contactAnime ? style.anime : undefined
                } d-flex align-items-center overflow-hidden`}
                onAnimationEnd={() => setContactAnime(false)}
              >
                <input type='submit' value='Send' />
                <p className={`mb-0 ms-4 ${messageSent ? style.sent : ''}`}>
                  Message Sent!
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Contact;
