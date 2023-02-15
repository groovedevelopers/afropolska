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
import { getTeam } from "../../server/firebase.config";

const SectionSix = () => {
  const [Team, setTeam] = useState(null);

  const effect = useEffect(() => {
    const subscription = getTeam().subscribe((item) => {
      setTeam(item);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <section className="section2">
      <div class="jumbotron jumbotron-fluid">
        <div className="title">Team</div>
      </div>
      <Container className="card_col" fluid>
        <Row>
          {Team?.length === 0 ? (
            <>
              {/* <div className="no_prod">
                We Don't Have any event available at the moment
              </div> */}
            </>
          ) : (
            Team?.map((item) => (
              <Link to={`/team-single?id=${item.id}`} key={item.id}>
                <Col xs="12" sm="12" md="4">
                  <Card className="product_card">
                    <CardMedia
                      component="img"
                      image={item?.mainImage?.imageUrl} 
                      alt=""
                    />
                    <CardContent className="card_body">
                      <Link to={`/team-single?id=${item.id}`}>
                        {" "}
                        <Typography
                          gutterBottom
                          variant="h5"
                          className="product_title"
                          component="div"
                        >
                          {item?.team_name} 
                        </Typography>
                      </Link>
                    </CardContent>
                  </Card>
                </Col>
              </Link>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default SectionSix;
