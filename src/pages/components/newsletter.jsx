import React, { useEffect } from "react";
import "../../assets/css/footer.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createNewsletter } from "../../server/firebase.config";

const Newsletter = () => {

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

    createNewsletter(valueFields);
    document.getElementById("form").reset();
    alert("Added to the club successfully");
  };

  return (
    <div className="newsletter" id="newsletter">

        <div className="sec_title">
            Get Informed First
        </div>

        <Form id="form" onSubmit={(event) => {
              formData(event);
            }}>

        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your e-mail address here"
          aria-label="Enter your e-mail address here"
          aria-describedby="basic-addon2"
          name="email"
          required
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          Subscribe
        </Button>
      </InputGroup>

      </Form>
     
    </div>
  );
};

export default Newsletter;
