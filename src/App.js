import React, { Component } from "react";
import LifeCycle from "./LifeCycle";
import "./styles.css";

class App extends Component {
  state = {
    display:true
  }

  handleClick = ()=> {
    this.setState({display:!this.state.display})  
  }

  render() {

const showComponent = this.state.display ? (<LifeCycle first_name="toto2" />) : (<div></div>);
    return (
      <div className="App">
        {showComponent}
        <button onClick={this.handleClick}>
          Cliquez ici
          </button>
      </div>
    );
  }
}

export default App;
