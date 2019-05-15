import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.toggleDirection = this.toggleDirection.bind(this);
    this.state = {
      clockwise:true
    }
  }

  toggleDirection(){
    const {clockwise} = this.state;
    this.setState({
      clockwise: !clockwise
    });
  }

  render(){
    const {clockwise} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${!clockwise && 'App-logo--back'}`} alt="logo" />
          <div onClick={this.toggleDirection} className="App-handle"></div>
        </header>
      </div>
    ); 
  }
  
}

export default App;
