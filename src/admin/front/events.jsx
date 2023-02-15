import React, { useEffect, useState } from "react";
import "../../assets/admin-css/style.css";
import Nav from "../components/header";
import Sidebar from "../components/sidebar";
import { Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Section2 from "../sections/section2";

const AdminEvents = () => {

  return (
    <section>
      <Sidebar></Sidebar>
      <div class="content">
        <Nav></Nav>

        <Container className="container_box">
          <div className="move_right">
            <Link to="/admin/add-event">
            <Button className="btn btn-outline" >
              Add Event
            </Button>
            </Link>
          </div>
          <Section2></Section2>
        </Container>

        
      </div>
    </section>
  );
};

export default AdminEvents;
