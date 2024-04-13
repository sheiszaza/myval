import React, { useEffect, useState } from "react";
import Test from "./test";
import First from "./first";
import Second from "./second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";

function first() {
  const [loading, setLoading] = useState(true);
  const [Yes, setYes] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <>
        <div className="back"></div>
        <div className="heart"></div>
      </>
    );
  } else if (Yes) {
    return <Test yesbtn={setYes} />;
  } else
    return (
      <div className="wrap">
        <div id="page1" className="page">
          <First />
        </div>

        <div id="page2" className="page">
          <Second />
        </div>

        <div id="page3" className="page">
          <Third />
        </div>

        <div id="page4" className="page">
          <Fourth />
        </div>

        <div id="page5" className="page">
          <Fifth />
        </div>
      </div>
    );
}

export default first;
