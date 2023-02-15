import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import img from "../../assets/images/bg.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Container, Row } from "react-bootstrap";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SingleTwo = () => {
  return (
    <section className="section2">
      <div class="jumbotron jumbotron-fluid"></div>
      <Container className="card_col" fluid>
        <Row>
          <Col xs="12" sm="12" md="6">
            <Card className="product_card">
              <CardMedia component="img" image="https://firebasestorage.googleapis.com/v0/b/afropolska-a7fd5.appspot.com/o/partners%2F1-01.png?alt=media&token=254d4b48-2519-4591-958c-9ddefb3b0c39" alt="" />
            </Card>
          </Col>

          <Col xs="12" sm="12" md="6">
            <div className="single_title">Jaywise Entertainment</div>
            <p className="single_body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div>
              Follow Us : <FacebookOutlinedIcon className="icon"></FacebookOutlinedIcon> &nbsp; <InstagramIcon className="icon"></InstagramIcon> &nbsp; <TwitterIcon className="icon"></TwitterIcon> 
            </div>
          </Col>

          {/* </a>
          ))} */}
        </Row>
      </Container>
    </section>
  );
};

export default SingleTwo;
