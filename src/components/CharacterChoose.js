import { Component } from "react";
import "../style/CharacterChoose.scss";

class CharacterChose extends Component {
  componentDidMount() {
    const title = document.querySelector(".characterChooseContainer");
    const elementsToActivate = [title];

    window.addEventListener("scroll", () => {
      elementsToActivate.forEach((item) => {
        if (window.scrollY >= item.offsetTop / 2) {
          item.classList.add("active");
        }
      });
    });
  }
  render() {
    return (
      <div className="characterChoose">
        <div className="characterChooseContainer">
          <h2>Write your own story</h2>
          <p>and become a beloved hero or ... a hated villain</p>
        </div>
      </div>
    );
  }
}

export default CharacterChose;
