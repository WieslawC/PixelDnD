import "../style/Header.scss";
import createSpriteAnimation from "../handyFunctions.js";
import { Component } from "react";
import idleSprite from "../images/Idle.png";

class Header extends Component {
  componentDidMount() {
    const idleImage = document.querySelector(".idleAnimationSprite");
    createSpriteAnimation(idleImage);
  }
  render() {
    return (
      <header>
        <div className="headerBackgroundImage"></div>
        <h1>Pixel DnD</h1>
        <div className="idleImageContainer">
          <img
            src={idleSprite}
            alt="idleAnimation"
            className="idleAnimationSprite"
          />
        </div>
      </header>
    );
  }
}

export default Header;
