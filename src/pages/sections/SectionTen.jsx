import React, { useState, useEffect } from "react";
import "../../assets/css/style.css";
import { Col, Container, Row } from "react-bootstrap";
import { getSettings } from "../../server/firebase.config";

const SectionTen = () => {
  const [Settings, setSettings] = useState(null);

  const effect = useEffect(() => {
    const subscription = getSettings().subscribe((item) => {
      setSettings(item);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <section className="section2">
      <div class="jumbotron jumbotron-fluid">
        <div className="title"> Terms & Conditions</div>
      </div>
      <Container className="body_field" fluid>
        <p>
          <div
            dangerouslySetInnerHTML={{ __html: `${Settings?.terms}` }}
          ></div>
        </p>
      </Container>
    </section>
  );
};

export default SectionTen;
