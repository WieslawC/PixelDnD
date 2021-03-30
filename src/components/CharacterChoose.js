import { Component } from "react";
import "../style/CharacterChoose.scss";
import warriorAttack from "../images/WarriorAttack.png";
import mageAttack from "../images/MageAttack.png";
import huntressAttack from "../images/HuntressAttack.png";
import createSpriteAnimation from "../handyFunctions.js";

class CharacterChose extends Component {
  componentDidMount() {
    //Sprites elements
    const warriorAttackSprite = document.querySelector(".warriorAttackSprite");
    const mageAttackSprite = document.querySelector(".mageAttackSprite");
    const huntressAttackSprite = document.querySelector(
      ".huntressAttackSprite"
    );
    //Activate .active class
    const title = document.querySelector(".characterChooseContainer");
    const elementsToActivate = [title];

    window.addEventListener("scroll", () => {
      elementsToActivate.forEach((item) => {
        if (window.scrollY >= item.offsetTop / 2) {
          item.classList.add("active");
        }
      });
    });

    //Call function to create sprite animation
    createSpriteAnimation(warriorAttackSprite, 150);
    createSpriteAnimation(mageAttackSprite);
    createSpriteAnimation(huntressAttackSprite, 150);
  }
  render() {
    return (
      <div className="characterChoose">
        <div className="characterChooseContainer">
          <h2>Write your own story</h2>
          <p>and become a beloved hero or ... a hated villain</p>
        </div>
        <div className="backgroundWall"></div>
        <p className="characterImagesTitle">And as a... </p>
        <div className="charactersImages">
          <div className="image">
            <p className="spriteDescription">Warrior</p>
            <img
              src={warriorAttack}
              alt="warrior attack"
              className="warriorAttackSprite"
            />
          </div>
          <div className="image">
            <p className="spriteDescription">Ranger</p>
            <img
              src={huntressAttack}
              alt="huntress attack"
              className="huntressAttackSprite"
            />
          </div>
          <div className="image">
            <p className="spriteDescription">Mage</p>
            <img
              src={mageAttack}
              alt="mage attack"
              className="mageAttackSprite"
            />
          </div>
        </div>
        <div className="characterChooseEnd">
          <p>
            ...and many, many more character archetypes, or your own unique
            hero, travel through lands of great danger and precious treasures.
          </p>
        </div>
      </div>
    );
  }
}

export default CharacterChose;
