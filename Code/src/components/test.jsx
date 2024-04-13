import React, { useEffect, useState } from "react";

const phrases = [
  "No",
  "Are You Sure!?",
  "Really Sure??",
  "Zaza Please!",
  "Don't do this for me",
  "I'm Gonna Cry!",
  "You're breaking my heart ;(",
];

function Test({ yesbtn }) {
  const [noCount, setNoCount] = useState(0);
  const [count, setCount] = useState(3);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    if (yesPressed) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [yesPressed]);

  return (
    <div className="back">
      <div className="val-cont">
        {yesPressed ? (
          <>
            <img alt="helo" src="bear-kiss.gif" />
            <div className="text">Yaaaayyyyyyyy!!❤️</div>
            <div>Wait {count} seconds</div>
          </>
        ) : (
          <>
            <img alt="helo" src="bearr.gif" />
            <div className="text">Will you be my valentine Zaza?</div>
            <div className="val-buttons">
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize }}
                onClick={() => {
                  setYesPressed(true);
                  setTimeout(() => {
                    yesbtn(false);
                  }, 3000);
                }}
              >
                YES
              </button>
              <button className="noButton" onClick={handleNoClick}>
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Test;
