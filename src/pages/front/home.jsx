import React from "react";
import "../../assets/css/style.css";
import Footer from "../components/footer";
import Header from "../components/header";
import SectionOne from "../sections/sectionOne";
import SectionThree from "../sections/sectionThree";
import SectionTwo from "../sections/sectionTwo";

const Home = () => {
  return (
    <>

    <Header></Header>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
    <Footer></Footer>
     
    </>
  );
};

export default Home;
