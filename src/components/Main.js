import "../style/Main.scss";
import { Component } from "react";
import idleSpite from "../images/Idle.png";
import createSpriteAnimation from "../handyFunctions.js";

class Main extends Component {
  componentDidMount() {
    const idleSpirte = document.querySelector(".idleSprite");
    const mainAboutTitle = document.querySelector(".mainAboutTitle");
    const mainContainerBackground = document.querySelector(
      "main .container .imageContainer"
    );
    const elementsToActivate = [mainAboutTitle, mainContainerBackground];

    window.addEventListener("scroll", () => {
      elementsToActivate.forEach((item) => {
        if (window.scrollY >= item.offsetTop / 3) {
          item.classList.add("active");
        }
      });
    });

    createSpriteAnimation(idleSpirte, 150);
  }

  render() {
    return (
      <main>
        <h2 className="mainAboutTitle">What is D&D</h2>
        <div className="container">
          <div className="imageContainer">
            <div className="background"></div>
            <div className="image">
              <img
                src={idleSpite}
                alt="Idle animation"
                className="idleSprite"
              />
            </div>
          </div>
          <div className="textContainer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            maiores voluptatibus maxime perferendis iste. Voluptates, nihil
            omnis pariatur laudantium eius deserunt minima quis natus dolorum
            quo ea distinctio nemo quam? Quasi atque a tempora, asperiores enim
            eveniet voluptatem eum! Sint labore illo excepturi eius repellat
            doloremque. Unde praesentium consequuntur explicabo?
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
