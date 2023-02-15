import React, { useEffect, useState } from "react";
import "../../assets/admin-css/style.css";
import { getEvents, deleteEvent } from "../../server/firebase.config";
import { Row, Container, Col, Card } from "react-bootstrap";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";

const Section2 = () => {
  const [Events, setEvents] = useState(null);

  const effect = useEffect(() => {
    const subscription = getEvents().subscribe((item) => {
        setEvents(item);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Container className="container_box">
      <Row className="container_row">
        {Events?.map((item) => (
          <Col sm="12" md="3">
            <Card className="container_card">
              <Card.Img
                variant="top"
                className="crypto_cardImg"
                src={item.mainImage.imageUrl}
              />
              <Card.Body className="crypto_cardBody">
                <div className="title"> {item.event_name}</div>
                <div className="title"> {item.event_date}</div>
                <div>
                  <FaTrash
                    className="icon"
                    onClick={() => {
                        deleteEvent(item.id);
                    }}
                  ></FaTrash>
                  &nbsp;

                  <a href={`/admin/edit-event?id=${item.id}`}><FaEdit
                    className="icon"
                  ></FaEdit>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Section2;
