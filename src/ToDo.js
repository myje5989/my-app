import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col , Button ,Input, Alert, Form, FormGroup} from 'reactstrap';



class ToDo extends Component {

  render() {

    return (
      <div className="App">
       <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="textbx" id="textbx" placeholder="Enter text !!" />
        </FormGroup>
        <Button >+</Button>
      </Form>
      </div>

    );
  }
}

export default ToDo;
