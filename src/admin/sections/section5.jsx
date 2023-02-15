import React, { useEffect, useState } from "react";
import "../../assets/admin-css/style.css";
import { getGallery, deleteGallery } from "../../server/firebase.config";
import { Row, Container, Col, Card } from "react-bootstrap";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";

const Section5 = () => {
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
    <Container className="container_box">
      <Row className="container_row">
        {Gallery?.map((item) => (
          <Col sm="12" md="3">
            <Card className="container_card">
              <Card.Img
                variant="top"
                className="crypto_cardImg"
                src={item?.mainImage?.imageUrl}
              />
              <Card.Body className="crypto_cardBody">
                <div className="title"> {item.event_name}</div>
                <div className="title"> {item.event_date}</div>
                <div>
                  <FaTrash
                    className="icon"
                    onClick={() => {
                        deleteGallery(item.id);
                    }}
                  ></FaTrash>
                  &nbsp;

                  <a href={`/admin/edit-gallery?id=${item.id}`}><FaEdit
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

export default Section5;
