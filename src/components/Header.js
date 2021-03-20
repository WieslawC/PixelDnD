import "../style/Header.scss";
// import createSpriteAnimation from "../handyFunctions.js";
import { Component } from "react";

class Header extends Component {
  componentDidMount() {
    // const idleImage = document.querySelector(".idleAnimationSprite");
    // createSpriteAnimation(idleImage);
  }
  render() {
    return (
      <header>
        <h1>Pixel DnD</h1>
        <div className="imageContainer">
          <div className="image layer0"></div>
          <div className="image layer1"></div>
          <div className="image layer2"></div>
          <div className="image layer3"></div>
          <div className="image layer4"></div>
          <div className="image layer5"></div>
          <div className="image layer6"></div>
          <div className="image layer7"></div>
          <div className="image layer8"></div>
          <div className="image layer9"></div>
          <div className="image layer10"></div>
        </div>
      </header>
    );
  }
}

export default Header;
