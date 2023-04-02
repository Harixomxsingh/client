import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import styles from "../../App.module.css";

function Layout() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
}

export default Layout;
