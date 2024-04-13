import React, { useState } from "react";
import "./Styles.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Fourth() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState("love5.jpg");

  return (
    <div className="fourth-main">
      <a href="#page5">
        <button className="down_button">
          <ArrowDownwardIcon />
        </button>
      </a>
      <h1 className="fourth-title">Things i want to do with you</h1>
      <div>
        <div className="fouth-btn-cont">
          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("sushi.jpg")}
          >
            <img className="fourth-icons" src="sushicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("snows.jpg")}
          >
            <img className="fourth-icons" src="snowicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("beach.jpg")}
          >
            <img className="fourth-icons" src="beachicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("coolview.jpg")}
          >
            <img className="fourth-icons" src="coolciewicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("malehe.jpg")}
          >
            <img className="fourth-icons" src="maleheicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("ourhome.jpg")}
          >
            <img className="fourth-icons" src="homeicon.webp" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("porposal.jpg")}
          >
            <img className="fourth-icons" src="propicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("family.jpg")}
          >
            <img className="fourth-icons" src="familyicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("wedding.jpg")}
          >
            <img className="fourth-icons" src="weddingicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("portrait.jpg")}
          >
            <img className="fourth-icons" src="portraiticon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("hijab.jpg")}
          >
            <img className="fourth-icons" src="hijabicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("gaming.jpg")}
          >
            <img className="fourth-icons" src="gamingicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("cleaning.jpg")}
          >
            <img className="fourth-icons" src="cleanicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("cook.jpg")}
          >
            <img className="fourth-icons" src="cookicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("praying.jpg")}
          >
            <img className="fourth-icons" src="prayicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("child.jpg")}
          >
            <img className="fourth-icons" src="childicon.png" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("nightbeach.jpg")}
          >
            <img className="fourth-icons" src="nightbeachicon.webp" />
          </button>

          <button
            className="fourth-button"
            onClick={() => setCurrentPhotoIndex("nightdrives.jpg")}
          >
            <img className="fourth-icons" src="nightdrivesicon.png" />
          </button>
        </div>
        <div className="fouth-img-cont">
          <img className="fourth-photo" src={currentPhotoIndex} alt="current" />
        </div>
      </div>
    </div>
  );
}

export default Fourth;
