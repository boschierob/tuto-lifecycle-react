import React, { Component } from "react";
//import ChildComponent from "./ChildComponent";
import "./styles.css";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "Clara",
      step: 1
    };

    console.log(`Etape ${this.state.step}: je suis dans le constructor()`);
  }

  componentDidMount() {
    //invoquée une seule fois apres que le composant + ses enfants seront montés
    console.log(
      `Etape ${this.state.step}: je suis dans le componentDidMount()`
    );
    this.setState({
      first_name: this.props.first_name,
      step: this.state.step + 1
    });
    console.log(
      `Etape ${this.state.step}: state modifié dans le componentDidMount()`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `Etape ${this.state.step} : Je suis dans le componentDidUpdate()`
    );
    console.log(prevState);
    console.log(this.state);
  }

  componentWillUnmount(){
    console.log(`je suis dans componentWillUnmount()`)
    
  }
  //methode render interprete les props et les state et les
  //retourne dans un jsx
  render() {
    console.log(`Etape ${this.state.step}: je suis dans le render()`);
    return (
      <div className="borderBox">
        {console.log(`Etape ${this.state.step}: je suis dans le DOM`)}
        <h1>Hello {this.state.first_name} CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default LifeCycle;
