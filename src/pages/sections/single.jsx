import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row, Form } from "react-bootstrap";
import { getOneEvent, createNewsletter } from "../../server/firebase.config";
import queryString from "query-string";

const Single = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [post, setPost] = useState(null);
  let url = window.location.href;
  let id = queryString.parse(url);

  const realId = Object.values(id)[0];
  const effect = useEffect(() => {
    const subscription = getOneEvent(realId).subscribe((item) => {
      setPost(item);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const formData = (event) => {
    event.preventDefault();
    const values = Array.from(event.target.elements)
      .map((item) => ({
        name: item.name,
        value: item.value,
      }))
      .filter((val) => val.name !== "");

    let valueFields = {};

    for (const items in values) {
      const { name, value } = values[items];
      valueFields[name] = value;
    }

    valueFields = { ...valueFields, createdOn: Date.now() };
    valueFields = { ...valueFields, status: "active" };
    valueFields = { ...valueFields, event:  post?.event_name};

    createNewsletter(valueFields);
    document.getElementById("form").reset();
    alert("Subscribed successfully");
    handleClose();
  };

  return (
    <section className="section2">
      <div class="jumbotron jumbotron-fluid" style={{backgroundImage: `url(${post?.mainImage?.imageUrl})`}}></div>
      <Container className="card_col" fluid>
        <Row>
          <Col xs="12" sm="12" md="6">
            <Card className="product_card">
              <CardMedia
                component="img"
                image={post?.mainImage?.imageUrl}
                alt=""
              />
            </Card>
          </Col>

          <Col xs="12" sm="12" md="6">
            <div className="single_title">{post?.event_name}</div>
            <p className="single_body">
              {post?.event_type === "concert" ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{ __html: `${post?.editorData}` }}
                  ></div>
                  Click the link below to secure your spot at{" "}
                  <b>{post?.event_name}</b>. We can't wait to vibe with you ! :)
                </>
              ) : (
                <p>
                  <div
                    dangerouslySetInnerHTML={{ __html: `${post?.editorData}` }}
                  ></div>{" "}
                  <br />
                  for table reservations contact{" "}
                  <a href="callto:48575629718"> +48 575 629 718 </a>
                </p>
                // <div
                //   dangerouslySetInnerHTML={{ __html: `${post?.editorData}` }}
                // ></div>
              )}
            </p>

            {/* {post?.links?.map((item) => ( */}

            {post?.link === '' ? (
              <>
              <Button
                onClick={handleShow}
                className="single_btn"
                variant="outlined"
              >
                Presale Ticket
              </Button>
                
              </>
            ) : (
              <>
              {post?.event_type === "concert" ? (
                <>
                <iframe style={{borderRadius:'12'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3934sHh5dw4?utm_source=generator" width="300" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <br />
                  <a href={`${post?.link}`} target="_blank">
                    <Button className="single_btn" variant="outlined">
                      Buy Tickets
                    </Button>
                  </a>
                </>
              ) : (
                <></>
              )}
              </>
            )}
            
          </Col>

          {/* </a>
          ))} */}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="wrapper">
            <h2>Get Informed First</h2>
            <Form
              id="form"
              onSubmit={(event) => {
                formData(event);
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Single;
