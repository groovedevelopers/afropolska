import React, { useEffect, useState } from "react";
import "../../assets/admin-css/style.css";
import Nav from "../components/header";
import Sidebar from "../components/sidebar";
import { Container, Row, Col, Modal, Button, Card } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";
import {
  getimageFromFirebase,
  storage,
  saveImage,
  deleteImage,
} from "../../server/firebase.config";
import { getDownloadURL } from "rxfire/storage";
import { uploadBytes, ref } from 'firebase/storage';
import { firstValueFrom, lastValueFrom } from "rxjs";

const Media = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Image, setImages] = useState(null);

  const addToSorage = (date, item) => {

    const imageref = ref(storage, `images/${date}`);
    return  uploadBytes(imageref, item).then(() =>  firstValueFrom(getDownloadURL(imageref))).then((download) => ({
        imageUrl: download,
        imagePath: `images/${date}`,
        timestamp: Date.now(),
    }));
    

};

  const img = (event) => {
    if (event) {
      const files = Array.from(event);

      const promises = files.map((item) => {
        const date = Date.now();
        return addToSorage(date, item);
      });
      Promise.all(promises)
        .then((urls) => {
          return urls.map((item) => {
            return saveImage(item);
          });
        })
        .then(() => {
          document.querySelector(".imageInput").value = null;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const effect = useEffect(() => {
    const subscription = getimageFromFirebase().subscribe((item) => {
      setImages(item);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <section>
      <Sidebar></Sidebar>
      <div class="content">
        <Nav></Nav>

        <Container  className="container_box">
          <div className="move_right">
            <Button className="btn btn-outline" onClick={handleShow}>
              Add Image(s)
            </Button>
          </div>
          <Row className="container_row">
            {Image?.map((item) => (
              <Col sm="12" md="3">
                <Card className="container_card">
                  <Card.Img
                    variant="top"
                    className="crypto_cardImg"
                    src={item.imageUrl}
                  />
                  <Card.Body className="crypto_cardBody">
                    <div>
                        <FaTrash
                          className="icon"
                          onClick={() => {
                            deleteImage(item.id, item.imagePath);
                          }}
                        ></FaTrash>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <Modal className="popup_modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Images</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Dropzone
                name="pimg"
                onDrop={(event) => {
                  img(event);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()} className="dropzone">
                      <input {...getInputProps()} className="imageInput" />

                      <FaUpload className="icon"></FaUpload>
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    </section>
  );
};

export default Media;
