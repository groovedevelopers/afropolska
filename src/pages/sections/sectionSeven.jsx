import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import img from "../../assets/images/bg.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Container, Row } from "react-bootstrap";
import { getSettings } from "../../server/firebase.config";

const SectionSeven = () => {
  const [Settings, setSettings] = useState(null);

  const effect = useEffect(() => {
    const subscription = getSettings().subscribe((item) => {
      setSettings(item);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <section className="section2">
      <div class="jumbotron jumbotron-fluid">
        <div className="title"> About US</div>
      </div>
      <Container className="body_field" fluid>
        <p>
          <div dangerouslySetInnerHTML={{ __html: `${Settings?.about}` }}></div>
        </p>
      </Container>
    </section>
  );
};

export default SectionSeven;
