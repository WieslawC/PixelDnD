import "../style/Main.scss";
import { Component } from "react";
import idleEvilMage from "../images/IdleEvilMage.png";
import idleSamuraj from "../images/IdleSamuraj.png";
import createSpriteAnimation from "../handyFunctions.js";

class Main extends Component {
  componentDidMount() {
    const idleEvilMageSprite = document.querySelector(".idleEvilMageSprite");
    const idleSamurajSprite = document.querySelector(".idleSamurajSprite");
    const mainAboutTitle = document.querySelector(".mainAboutTitle");
    const mainContainerBackground = document.querySelector(
      "main .container .imageContainer"
    );
    const mainContainerBackground2 = document.querySelector(
      "main .container .imageContainerSecond"
    );
    const elementsToActivate = [
      mainAboutTitle,
      mainContainerBackground,
      mainContainerBackground2,
    ];

    window.addEventListener("scroll", () => {
      elementsToActivate.forEach((item) => {
        if (window.scrollY >= item.offsetTop / 2) {
          item.classList.add("active");
        }
      });
    });

    createSpriteAnimation(idleEvilMageSprite, 150);
    createSpriteAnimation(idleSamurajSprite, 150);
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
                src={idleEvilMage}
                alt="Idle animation"
                className="idleEvilMageSprite"
              />
            </div>
          </div>
          <div className="textContainer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            maiores voluptatibus maxime perferendis iste. Voluptates, nihil
            omnis pariatur laudantium eius deserunt minima quis natus dolorum
          </div>
        </div>
        <div className="container secondContainer">
          <div className="imageContainerSecond">
            <div className="background"></div>
            <div className="image">
              <img
                src={idleSamuraj}
                alt="Idle animation"
                className="idleSamurajSprite"
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
