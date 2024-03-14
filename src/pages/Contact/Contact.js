// Contact.jsx

import React from 'react';
import styles from './Contact.module.scss'; // Adjust the path based on your project structure

export default function Contact(props) {
  return (
    <div className={styles['contact-container']}>
      <h1>Contact Info</h1>
      <h2>Jeremy Casanova</h2>
      <h3>1+609-676-7413</h3>
      <h4>jeremykcasanova@gmail.com</h4>
    </div>
  );
}
