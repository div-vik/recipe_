import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.left}>
          Recipe_
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contact</li>
          <li className={classes.listItem}>Services</li>
        </ul>
        <div className={classes.right}>
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
