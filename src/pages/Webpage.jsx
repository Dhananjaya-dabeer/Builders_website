import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import MiddlePage from "../components/middlepagecomponent/MiddlePage";

function Webpage() {
  return (
    <div>
      <Navbar />
      <PageHeader />
      <MiddlePage/>
    </div>
  );
}

export default Webpage;
