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

const Tour = () => {
  return (
    <section className="section2">
      <div class="jumbotron jumbotron-fluid"></div>
      <Container className="card_col" fluid>
        <Row>
          <Col xs="12" sm="12" md="6">
            <Card className="product_card">
              <CardMedia component="img" image={img} alt="" />
            </Card>
          </Col>

          <Col xs="12" sm="12" md="6">
            <Row>
              <Col xs="12" sm="12" md="3">
                <Card className="product_card">
                  <CardContent className="card_body">
                   
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product_desc"
                    >
                      Mar 1, 2023 
                    </Typography>
                      <Button className="single_btn" variant="outlined">Lyon</Button>
                    
                  </CardContent>
                </Card>
              </Col>

              <Col xs="12" sm="12" md="3">
                <Card className="product_card">
                  <CardContent className="card_body">
                   
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product_desc"
                    >
                      Mar 2, 2023 
                    </Typography>
                      <Button className="single_btn" variant="outlined">Copenhagen</Button>
                    
                  </CardContent>
                </Card>
              </Col>

              <Col xs="12" sm="12" md="3">
                <Card className="product_card">
                  <CardContent className="card_body">
                   
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product_desc"
                    >
                      Mar 1, 2023 
                    </Typography>
                      <Button className="single_btn" variant="outlined">Warsaw</Button>
                    
                  </CardContent>
                </Card>
              </Col>

              <Col xs="12" sm="12" md="3">
                <Card className="product_card">
                  <CardContent className="card_body">
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product_desc"
                    >
                      Mar 1, 2023 
                    </Typography>
                    
                      <Button className="single_btn" variant="outlined">Germany</Button>
                    
                  </CardContent>
                </Card>
              </Col>

              <Col xs="12" sm="12" md="3">
                <Card className="product_card">
                  <CardContent className="card_body">
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product_desc"
                    >
                      Mar 1, 2023 
                    </Typography>
                    
                      <Button className="single_btn" variant="outlined">Germany</Button>
                    
                  </CardContent>
                </Card>
              </Col>

              <Col xs="12" sm="12" md="3">
                <Card className="product_card">
                  <CardContent className="card_body">
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product_desc"
                    >
                      Mar 1, 2023 
                    </Typography>
                    
                      <Button className="single_btn" variant="outlined">Germany</Button>
                    
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* </a>
          ))} */}
        </Row>
      </Container>
    </section>
  );
};

export default Tour;
