import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import MiddlePage from "../components/middlepagecomponent/MiddlePage";
import styles from "../css/webpage.module.css"
import FooterComp from "../components/FooterComp";
function Webpage() {
  return (
    <div className={styles.webPageParent}>
      <Navbar />
      <PageHeader />
      <MiddlePage />
      <FooterComp />
    </div>
  );
}

export default Webpage;
