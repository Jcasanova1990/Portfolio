import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Dashboard</div>
      </Link>
    </div>
  );
};

export default Nav;