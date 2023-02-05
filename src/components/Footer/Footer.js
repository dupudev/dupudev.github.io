import style from './Footer.module.scss';
/// icons
import {
  VscSourceControl,
  VscCloudUpload,
  VscError,
  VscWarning,
  VscInfo,
  VscEye,
  VscBroadcast,
  VscCheckAll,
  VscFeedback,
  VscBellDot,
} from 'react-icons/vsc';

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className={style.left}>
        <div>
          <VscSourceControl className={style.source_control} />
          <span>
            main<sup>*</sup>
          </span>
        </div>
        <div>
          <VscCloudUpload />
        </div>
        <div className={style.error}>
          <VscError />
          <span>0</span>
          <VscWarning />
          <span>0</span>
          <VscInfo />
          <span>2</span>
        </div>
        <span>Git Graph</span>
      </div>
      <div className={style.center}>
        &copy;&nbsp;{new Date().getFullYear()}
        <span>Dušan Puzigaća</span>
      </div>
      <div className={style.right}>
        <div className={style.watch_sass}>
          <VscEye />
          <span>Watch Sass</span>
        </div>
        <div className={style.line_col}>
          <span>Ln 4,</span>
          <span>Col 2</span>
        </div>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>CRLF</span>
        <div>
          <span>{'{ }'}</span>&nbsp;
          <span>JavaScript</span>
        </div>
        <div className={style.go_live}>
          <VscBroadcast />
          <span>Go Live</span>
        </div>
        <div className={style.prettier}>
          <VscCheckAll />
          <span>Prettier</span>
        </div>
        <VscFeedback />
        <VscBellDot />
      </div>
    </footer>
  );
};

export default Footer;
