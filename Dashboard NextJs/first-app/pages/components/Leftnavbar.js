import React from "react";
import styles from "../../styles/Home.module.css";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EngineeringIcon from "@mui/icons-material/Engineering";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Leftnavbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <h2>DemoBoard</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <DashboardIcon
              fontSize="small"
              style={{ cursor: "pointer", width: "18px" }}
            />
            <a href="#">Dashboard </a>
          </li>
          <li>
            <RocketLaunchIcon
              fontSize="small"
              style={{ cursor: "pointer", width: "18px" }}
            />
            <a href="#">Explore </a>
          </li>
          <li>
            <ImportContactsOutlinedIcon
              fontSize="small"
              style={{ cursor: "pointer", width: "18px" }}
            />
            <a href="#">Library </a>
          </li>
          <li>
            <FavoriteIcon
              fontSize="small"
              style={{ cursor: "pointer", width: "18px" }}
            />
            <a href="#"> Favourites </a>
          </li>
          <li>
            <EngineeringIcon
              fontSize="small"
              style={{ cursor: "pointer", width: "18px" }}
            />
            <a href="#">Settings </a>
          </li>
          <li>
            <LogoutIcon
              fontSize="small"
              style={{ cursor: "pointer", width: "18px" }}
            />
            <a href="#">Logout </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftnavbar;
