import React, { Component } from 'react';
import './ToDo.css';
import { Container, Row, Col ,Button, InputGroupAddon ,InputGroup,Input, Alert, Form, FormGroup} from 'reactstrap';



class ToDo extends Component {
  state ={
    task: ''
  }

  onAdd = () =>{
    this.props.addToDo(this.state.task)
  }

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
       <Form inline >
        <InputGroup>
          <Input
           size="lg" placeholder="Enter task !!"
           value={this.state.task}
           onChange = {(e) => this.setState({task: e.target.value })}
           />
          <InputGroupAddon addonType="append" >
          <Button size="lg" color="primary">+</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
      </Col>
      <Col></Col>
      </Row>
      <br/>
        <br/>
        <br/>
      </Container>

      </div>

    );
  }
}

export default ToDo;
