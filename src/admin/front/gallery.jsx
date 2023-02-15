import React, { useEffect, useState } from "react";
import "../../assets/admin-css/style.css";
import Nav from "../components/header";
import Sidebar from "../components/sidebar";
import { Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Section5 from "../sections/section5";

const AdminGallery = () => {

  return (
    <section>
      <Sidebar></Sidebar>
      <div class="content">
        <Nav></Nav>

        <Container className="container_box">
          <div className="move_right">
            <Link to="/admin/add-gallery">
            <Button className="btn btn-outline" >
              Add Gallery
            </Button>
            </Link>
          </div>
          <Section5></Section5>
        </Container>

        
      </div>
    </section>
  );
};

export default AdminGallery;
