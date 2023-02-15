import React from "react";
import "../../assets/css/style.css";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionOne from "../sections/sectionOne";
import SectionThree from "../sections/sectionThree";
import SectionTwo from "../sections/sectionTwo";
import Tour from "../sections/tour";

const Tourmain = () => {
  return (
    <>

    <Header></Header>
    <Tour></Tour>
    <SectionThree></SectionThree>
    <Footer></Footer>
     
    </>
  );
};

export default Tourmain;
