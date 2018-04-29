import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col , Button , Alert } from 'reactstrap';
import ToDo from 'module./ToDo';


class App extends Component {
  state ={
    todos:[],
    loading: false
  }
  onVote =() =>{
    this.setState({vote:true })
  }
  render() {
   
    return (
      <div>
        <ToDo onAdd >
      </div>
    );
  }
}

export default App;
