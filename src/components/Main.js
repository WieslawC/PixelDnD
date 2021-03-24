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
    const textContainer = document.querySelector(
      "main .container .textContainer"
    );
    const textContainer2 = document.querySelector(
      "main .secondContainer .textContainer"
    );

    const elementsToActivate = [
      mainAboutTitle,
      mainContainerBackground,
      mainContainerBackground2,
      textContainer,
      textContainer2,
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
            "The core of D&D is storytelling. You and your friends tell a story
            together, guiding your heroes through quests for treasure, battles
            with deadly foes, daring rescues, courtly intrigue, and much more.
            You can also explore the world of Dungeons & Dragons through any of
            the novels written by its fantasy authors, as well as engaging board
            games and immersive video games. All of these stories are part of
            D&D." -> dnd.wizards.com
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
