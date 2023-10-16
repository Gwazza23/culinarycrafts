import React from "./SectionOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function SectionOne() {
  function rotateWords() {
    //select text
    const text = document.querySelector(".section-one-button-text p");
    //split text into individual characters and convert into <span>
    text.innerHTML = text.innerText
      .split("")
      //each character is rotated by 5.8deg increases than the previous - making the text rotate around the icon
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 5.8}deg)" >${char}</span>`
      )
      //each character is joined back together to create the text again
      .join("");
  }

  useEffect(() => {
    rotateWords();
  }, []);

  return (
    <div className="section-one-container">
      <div className="section-one-bg"></div>
      <div className="section-one-text">
        <h1>CulinaryCrafts</h1>
        <h3>Elevating Every Bite, One Click at a Time</h3>
      </div>
      <button className="section-one-button">
        <FontAwesomeIcon id="section-one-button-icon" icon={faAnglesDown} />
        <div className="section-one-button-text">
          <p>Chinese - Italian - Indian - Mexican -</p>
        </div>
      </button>
    </div>
  );
}

export default SectionOne;