import React from "react";
//import image from "../../images/water.jpg";
import styles from "../../styles/Home.module.css";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className={styles.headContainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span className={styles.name}>Sameera</span>
          </h2>
          <p>Welcome to the board.</p>
        </div>
      </div>
      <div className={styles.profile}>
        <Avatar src="/avatar.png" className={styles.img} />
      </div>
    </div>
  );
};

export default Header;
