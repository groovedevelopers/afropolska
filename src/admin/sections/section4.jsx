import React, { useEffect, useState, useRef } from "react";
import "../../assets/admin-css/style.css";
import Nav from "../components/header";
import Sidebar from "../components/sidebar";
import {
  Button,
  Container,
  Modal,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  editEvent,
  getimageFromFirebase,
  getOneEvent,
} from "../../server/firebase.config";
import { firstValueFrom } from "rxjs";
import UploadAdapter, { uploadResult$ } from "../components/uploadAdapter";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { config } from "rxjs";
import queryString from "query-string";

let loading = false;

const Section4 = () => {
  const [show, setShow] = useState(false);
  const description = useRef("");
  const imageDetails = useRef(null);
  const file = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Image, setImages] = useState(null);
  const [Event, setEvent] = useState(null);

  let url = window.location.href;
  let id = queryString.parse(url);
  const realId = Object.values(id)[0];

  const effect = useEffect(() => {
    firstValueFrom(getimageFromFirebase())
      .then((item) => {
        setImages(item);
      })
      .catch((error) => {
        console.log(error);
      });

    firstValueFrom(getOneEvent(realId))
      .then((item) => {
        //   console.log(item)
        setProduct(item);
      })
      .catch((error) => {
        console.log(error);
      });

    const sub = uploadResult$.subscribe((item) => {
      // console.log(item);
      imageDetails.current = item;
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  const formData = (event) => {
    if (loading) {
      return;
    }
    loading = true;
    event.preventDefault();

    try {
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
      if (file.current) {
        // console.log(file.current);
        valueFields = {
          ...valueFields,
          mainImage: file.current,
        };
      }

      valueFields = { ...valueFields, Created_on: Date.now() };
      valueFields = { ...valueFields, editorData: description.current };

      editEvent(realId, valueFields);

      alert("Event Edited");
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  };

  const selectImage = (event) => {
    console.log({ event });
    file.current = event;
    handleClose();
  };

  return (
    <section>
      <Sidebar></Sidebar>
      <div class="content">
        <Nav></Nav>

        <Container className="container_box">
          <Form
            className="white_bg"
            id="form"
            onSubmit={(event) => {
              formData(event);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                name="event_name"
                defaultValue={Product?.event_name}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                name="event_date"
                defaultValue={Product?.event_date}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ticket Link</Form.Label>
              <Form.Control
                type="text"
                name="link"
                defaultValue={Product?.link}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Image</Form.Label>
              &nbsp; &nbsp;
              <img sr={Product?.mainImage?.imageUrl} className="small_img" />
              &nbsp; &nbsp;
              <Button variant="outline-danger" onClick={handleShow}>
                Add Image
              </Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Decription</Form.Label>
              {/* <Form.Control as="textarea" rows={3} name="description" /> */}
              <CKEditor
                onReady={(editor) => {
                  editor.plugins.get("FileRepository").createUploadAdapter = (
                    loader
                  ) => {
                    return new UploadAdapter(loader);
                  };
                }}
                editor={ClassicEditor}
                data={Product?.description}
                config={(config.height = "500")}
                onChange={(event, editor) => {
                  description.current = editor.getData();
                  return false;
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="outline-danger" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>

      <Modal className="popup_modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {Image?.map((item) => (
                <Col key={item.id} sm="12" md="4">
                  <Card
                    onClick={() => {
                      selectImage(item);
                    }}
                    className="imgSelection-li"
                  >
                    <label class="img-label" for={`cb${item.imageUrl}`}>
                      <Card.Img
                        variant="top"
                        className=""
                        src={item.imageUrl}
                      />
                    </label>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
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

export default Section4;
