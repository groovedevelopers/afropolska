import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../assets/css/footer.css";
import { Link } from "react-router-dom";
import Newsletter from "./newsletter";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../../assets/images/logo.jpeg"


const Footer = () => {
    
  return (
    <div className="footer">


      <Container className="menu_container">
        <Row>
          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">CONTACT</div>
              <ul>
                <li>contact@afropolska.pl</li>
              </ul>
            </div>
          </Col>

          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">ABOUT</div>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/sponsor">For Sponsorsip</Link></li>
              </ul>
            </div>
          </Col>

          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">POLICY</div>
              <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
          </Col>

          <Col sm="3" md="3">
            <div className="footer_section">
              <div className="sec_title">SOCIALS</div>
              <ul>
                <li><a href="https://facebook.com/Afropolska" target="_blank"><FacebookOutlinedIcon></FacebookOutlinedIcon> Facebook</a></li>
                <li><a href="https://instagram.com/afropolska" target="_blank"><InstagramIcon></InstagramIcon> Instagram</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Newsletter className="newsletter"></Newsletter>

      <div className="copy_footer">

      <div className="copy">
      © 2023 AFROPOLSKA, All Rights Reserved. Designed by <a href="mailto:contactgroovedevelopers@gmail.com">Groove Developers</a>
      </div>
      </div>

    </div>
  );
};

export default Footer;
