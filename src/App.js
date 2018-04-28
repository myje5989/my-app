import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col , Button , Alert } from 'reactstrap';



class App extends Component {
  state ={
    vote: false
  }
  onVote =() =>{
    this.setState({vote:true })
  }
  render() {
    const { vote } =this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mask Singer</h1>
        </header>

        <Container>
          <Row>
          <Col>
          <img className='mask-img' src="https://i.pinimg.com/564x/10/3e/56/103e5656f11a0d73354df4aab8d6d414.jpg" alt="หน้ากากทุเรียน" />
          {
            vote ? null : (<Button  color="primary" onClick={this.onVote}>Vote</Button>)
            }
          </Col>

          <Col>
          <img className='mask-img' src="https://i.pinimg.com/564x/6e/bd/a0/6ebda0a04b81bb6a165ead5303431fa5.jpg" alt="หน้ากากอีกาดำ" />
          {
            vote ? null : (<Button  color="primary" onClick={this.onVote}>Vote</Button>)
            }
          </Col>
          </Row>
          <Row>
          <Col>
            {vote ?(<Alert color="success">
                   Thank you for your vote.
            </Alert>) : null
            }
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
