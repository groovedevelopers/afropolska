import React from "react";
import Single from "../../../src/pages/sections/single";
import "../../assets/css/style.css";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionOne from "../sections/sectionOne";
import SectionThree from "../sections/sectionThree";
import SectionTwo from "../sections/sectionTwo";
import Tour from "../sections/tour";

const Singlemain = () => {
  return (
    <>

    <Header></Header>
    <Single></Single>
    <SectionThree></SectionThree>
    <Footer></Footer>
     
    </>
  );
};

export default Singlemain;
