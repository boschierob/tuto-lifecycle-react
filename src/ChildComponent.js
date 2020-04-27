import React, { Component } from "react";
import "./styles.css";

class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log(`je suis dans le constructor() ENFANT`);
  }
  componentDidMount() {
    //invoquée une seule fois apres que le composant + ses enfants seront montés
    console.log(` je suis dans le componentDidMount() de l'ENFANT`);
  }
  render() {
    console.log(`Je suis dans le ENFANT()`);
    return (
      <div>
        {console.log(`mise a jour du DOM de l'ENFANT`)}
        Hello ici enfant
      </div>
    );
  }
}

export default ChildComponent;
