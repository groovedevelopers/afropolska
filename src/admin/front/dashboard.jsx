import React, { useEffect } from "react";
import "../../assets/admin-css/style.css";
import Nav from "../components/header";
import Sidebar from "../components/sidebar";
import SectionOne from "../sections/section1";
// import SectionTwo from "../sections/section2";

const Dashboard = () => {
  return (

    <section>
        <Sidebar></Sidebar>
        <div class="content">
            <Nav></Nav>
            <SectionOne></SectionOne>
            {/* <SectionTwo></SectionTwo> */}


        </div>
    </section>

  )
};

export default Dashboard;
