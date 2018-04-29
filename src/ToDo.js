import React, { Component } from 'react';
import './ToDo.css';
import { Container, Row, Col ,Button, InputGroupAddon ,Input, Alert, Form, FormGroup} from 'reactstrap';



class ToDo extends Component {

  render() {

    return (
      <div className="App">
      <Container>
        <br/>
        <br/>
        <br/>
          <Row>
        <Col></Col>
          <Col>
       <Form inline>
        <FormGroup>
          <Input type="text" name="textbx" id="textbx" size="lg" placeholder="Enter text !!" />
          <InputGroupAddon addonType="append" ><Button size="lg" color="primary">+</Button></InputGroupAddon>
        </FormGroup>
      </Form>
      </Col>
      <Col></Col>
      </Row>
      </Container>

      </div>

    );
  }
}

export default ToDo;
