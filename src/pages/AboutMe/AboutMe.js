import React from 'react';
import styles from './AboutMe.module.scss'; // Import the SCSS file

export default function AboutMe(props){
  return (
    <div className={styles['about-me']}>
      <h1>You Can Find Me Here</h1>
      <a href="docs/Jeremy_Casanova_updated_cv.pdf" download>
        <img src="/img/pdficon.png" alt="Resume Icon" className={styles.icon} />
        Download Resume
      </a>
      <a href="https://www.linkedin.com/in/jeremy-casanova-a63594297/">
        <img src="/img/Lin.png" alt="Link 1 Icon" className={styles.icon} />
        Linkedin
      </a>
      <a href="https://app.otta.com/profile">
        <img src="/img/otta.png" alt="Link 2 Icon" className={styles.icon} />
        Otta
      </a>
      <a href="https://www.github.com/Jcasanova1990">
        <img src="/img/git.png" alt="Link 3 Icon" className={styles.icon} />
        Github
      </a>
      <a href="https://www.upwork.com/apps/">
        <img src="/img/upW.png" alt="Link 3 Icon" className={styles.icon} />
        Upwork
      </a>
    </div>
  );
};
