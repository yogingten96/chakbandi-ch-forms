import React from "react";
import styles from "./index.module.css";
import upgovLogo from "../../Assets/upgov.png";
import userLogo from "../../Assets/userloged.png";
const Header = () => {
  return (
    <>
      <div className={styles.headerBox}>
        <div>
          <img src={upgovLogo} alt="up gov" width="280px" />
        </div>
        <div>
          <img src={userLogo} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Header;
