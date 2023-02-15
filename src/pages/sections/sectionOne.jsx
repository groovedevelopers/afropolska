import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/style.scss"
import Header from "../components/header";

const SectionOne = () => {
  return (
    <div className="section1">
      {/* <h1>Poland's &nbsp;
        <span class="underlined underline-clip">Home</span><br/>to 
        <span class="underlined underline-mask">&nbsp; Afrobeats</span><br/> 
        <span class="underlined underline-overflow"> <Link to="/events"> Events</Link></span>
        </h1> */}

        <h1>Afropolska</h1>
        <p>Poland's Home To Afrobeats Events</p>
    </div>
  );
};

export default SectionOne;
