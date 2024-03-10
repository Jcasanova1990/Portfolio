import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/Projects">
        <div>Projects</div>
      </Link>
      <Link to="/AboutMe">
        <div>AboutMe</div>
      </Link>
      <Link to="/Contact">
        <div>Contact</div>
      </Link>
    </div>
  );
};

export default Nav;