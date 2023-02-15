import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import img from "../../assets/images/bg.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Container, Row } from "react-bootstrap";
import {getEvents} from "../../server/firebase.config";

const SectionTwo = () => {

  const [Event, setEvents] = useState(null);

  const effect = useEffect(() => {
    const subscription = getEvents().subscribe((item) => {
      setEvents(item);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <section className="section2">
      <div className="title">Events</div>
      <Container className="card_col" fluid>
        <Row>
          {Event?.length === 0? (<>
        {/* <div className="no_prod">We Don't Have any event available at the moment</div> */}
        </>) : Event?.map( (item) => (
          <Col xs="12" sm="12" md="4">
            <Card className="product_card">
              <Link to={`/single?id=${item.id}`}>
                {" "}
                <CardMedia component="img" image={item?.mainImage?.imageUrl} alt="" />{" "}
              </Link>
              <CardContent className="card_body">
                <Link to={`/single?id=${item.id}`}>
                  {" "}
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="product_title"
                    component="div"
                  >
                    {item?.event_name} 
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="product_desc"
                >
                  {item?.event_date} 
                </Typography>
                <div className="card_btn">
                  <Link to={`/single?id=${item.id}`}>
                    {" "}
                    <Button variant="outlined">See More Details</Button>
                  </Link>
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

export default SectionTwo;
