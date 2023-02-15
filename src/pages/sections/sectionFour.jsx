import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import img from "../../assets/images/bg.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Container, Row } from "react-bootstrap";
import {getGallery} from "../../server/firebase.config";

const SectionFour = () => {

  const [Gallery, setGallery] = useState(null);

  const effect = useEffect(() => {
    const subscription = getGallery().subscribe((item) => {
      setGallery(item);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <section className="section2">

<div class="jumbotron jumbotron-fluid">
        <div className="title">Past Events</div>
      </div>
      <Container className="card_col" fluid>
        <Row>
        {Gallery?.length === 0? (<>
        {/* <div className="no_prod">We Don't Have any event available at the moment</div> */}
        </>) : Gallery?.map( (item) => (
          <Col xs="12" sm="12" md="4">
            <Card className="product_card">
              <CardMedia component="img" image={item?.mainImage?.imageUrl} alt="" />
              <CardContent className="card_body">
                <Typography
                  gutterBottom
                  variant="h5"
                  className="product_title"
                  component="div"
                >
                  {item?.event_name} 
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product_desc"
                >
                  {item?.event_date} 
                </Typography>
                <div className="card_btn">
                <a href={`${item?.image_link}`} target="_blank" >
                <Button variant="outlined">View Images</Button>
                </a>
                </div>
              </CardContent>
            </Card>
          </Col>

          
          
          ))} 
        </Row>
      </Container>
    </section>
  );
};

export default SectionFour;
