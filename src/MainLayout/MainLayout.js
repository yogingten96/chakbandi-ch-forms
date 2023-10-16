import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

import { Box } from "@mui/material";
import Header from "../components/Header/Header";
// import Navbar from "../Component/Navbar/Navbar";
// import Footer from "../Component/Footer/Footer";

function MainLayout(props) {
  return (
    <>
      <Header />
      <div className={styles.layoutContainer}>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
