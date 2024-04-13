import React, { useState, useEffect } from "react";
import "./Styles.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FavoriteIcon from "@mui/icons-material/Favorite";

function First() {
  const [showNextParagraph, setShowNextParagraph] = useState(false);
  const [writtenText, setWrittenText] = useState("");
  const [fullText, setFullText] = useState(
    "Zeinab, you are the most precious person in my life. Your presence fills " +
      "my days with warmth, your laughter echoes like music in my soul. With " +
      "you by my side, every moment becomes a treasure, every challenge becomes " +
      "conquerable, and every dream becomes attainable. I am endlessly grateful " +
      "for your love, your kindness, and your unwavering support. You are my " +
      "everything, and I cherish you more than words can express."
  );

  useEffect(() => {
    if (showNextParagraph) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setWrittenText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust speed here
      return () => clearInterval(interval);
    }
  }, [showNextParagraph, fullText]);

  const handleFavoriteClick = () => {
    setShowNextParagraph(true);
  };

  return (
    <div className="first-main">
      <a href="#page2">
        <button className="down_button">
          <ArrowDownwardIcon />
        </button>
      </a>
      <h1 className="first-Hello">Hello Darling!</h1>

      <p className="first-txt">
        First of all sweat heart, this work is done with care and love.{" "}
      </p>
      <p className="first-heart" onClick={handleFavoriteClick}>
        <FavoriteIcon />
        <p className="first-press-me">press</p>
      </p>

      {showNextParagraph && <p className="first-txt">{writtenText}</p>}
    </div>
  );
}

export default First;
