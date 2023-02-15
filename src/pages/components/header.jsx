import React, { useState, useEffect } from "react";
import "../../assets/css/header.css";
import logo from "../../assets/images/logo.jpeg";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { getSettings, createContact } from "../../server/firebase.config";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Header = () => {
  const [slideSidebar, setslideSidebar] = useState(false);
  const [Settings, setSettings] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const effect = useEffect(() => {
    const subscription = getSettings().subscribe((item) => {
      setSettings(item);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const formData = (event) => {
    event.preventDefault();
    const values = Array.from(event.target.elements)
      .map((item) => ({
        name: item.name,
        value: item.value,
      }))
      .filter((val) => val.name !== "");

    let valueFields = {};

    for (const items in values) {
      const { name, value } = values[items];
      valueFields[name] = value;
    }

    valueFields = { ...valueFields, createdOn: Date.now() };

    createContact(valueFields);
    handleClose()
    alert("Added to the club successfully");
  };

  return (
    <>
      <div className="headbar">
        <p>
          Welcome to the official website of AFROPOLSKA &nbsp;
          {/* {Settings?.head_text} */}
          <a href="#newsletter">Subscribe Now</a>
        </p>
      </div>
      <div className="header">
        <Link to="/home">
          {" "}
          <div className="header_logo">
            <img src={logo} />
            {/* <img src={Settings?.logo_img?.imageUrl} /> */}
          </div>
        </Link>
        <div className="menu">
          <ul>
            <Link to="/home">
              <li className="menulist">HOME</li>
            </Link>
            <Link to="/events">
              <li className="menulist">UPCOMING EVENTS</li>
            </Link>
            <Link to="/gallery">
              {" "}
              <li className="menulist">PAST EVENTS</li>
            </Link>
            {/* <Link to="/team">
              {" "}
              <li className="menulist">TEAM</li>
            </Link> */}
            <Link to="/merch">
              {" "}
              <li className="menulist">MERCH</li>
            </Link>{" "}
            <button onClick={handleShow}>GET IN TOUCH</button>
          </ul>
        </div>
        <div className="m_menu">
          <MenuIcon
            className="open_icon icon"
            onClick={() => {
              setslideSidebar(!slideSidebar);
            }}
          ></MenuIcon>

          
            {" "}
            <button onClick={handleShow}>GET IN TOUCH</button>
          

          <Slide
            direction="left"
            in={slideSidebar}
            mountOnEnter
            unmountOnExit
            {...(slideSidebar ? { timeout: 300 } : {})}
            style={{ display: `${slideSidebar ? "block" : "none"}` }}
          >
            <Nav className="mobile_menu">
              <div>
                <CloseIcon
                  className="close_menu"
                  onClick={() => {
                    setslideSidebar(!slideSidebar);
                  }}
                ></CloseIcon>
              </div>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/events">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="/gallery">Past Events</Link>
                </li>
                {/* <li>
                  <Link to="/team">Team</Link>
                </li> */}
                <li>
                  <Link to="/merch">Merch</Link>
                </li>
              </ul>
            </Nav>
          </Slide>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div class="wrapper">
              <h2>CONTACT US</h2>
              <form id="form"
            onSubmit={(event) => {
              formData(event);
            }}>
                <div class="form-group">
                  <label for="fullname">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Fullname"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="email@domain.tld"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name="Message"
                    id="message"
                    rows="5"
                    placeholder="Type your message here...."
                  ></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="submit">
                    <i class="far fa-paper-plane"></i>Send
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Header;
