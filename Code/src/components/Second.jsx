import React, { useState } from "react";
import "./Styles.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PeopleIcon from "@mui/icons-material/People";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WcIcon from "@mui/icons-material/Wc";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

function Second() {
  const [showPhotos, setShowPhotos] = useState(false);
  const [showgif, setShowgif] = useState(false);
  const [showlove, setShowlove] = useState(false);
  const [showus, setShowus] = useState(false);
  const [showher, setShowher] = useState(false);

  const handleshowphoto = () => {
    setShowPhotos(true);
    setTimeout(() => {
      setShowPhotos(false);
    }, 3000);
  };

  const handleshowgif = () => {
    setShowgif(true);
    setTimeout(() => {
      setShowgif(false);
    }, 4000);
  };

  const handleshowlove = () => {
    setShowlove(true);
    setTimeout(() => {
      setShowlove(false);
    }, 3000);
  };

  const handleshowus = () => {
    setShowus(true);
    setTimeout(() => {
      setShowus(false);
    }, 3000);
  };

  const handleshowher = () => {
    setShowher(true);
    setTimeout(() => {
      setShowher(false);
    }, 3000);
  };

  return (
    <div className="second-main">
      <h1 className="second-title">Sketch of our timeline.</h1>
      <a href="#page3">
        <button className="down_button">
          <ArrowDownwardIcon />
        </button>
      </a>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            15/07/2023 <br />
            5:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              onClick={handleshowphoto}
              style={{
                animation: "heartbeat 1s infinite",
                background: "rgb(255, 0, 250)",
              }}
            >
              <PeopleIcon style={{ color: "Black" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              First Talk
            </Typography>
            <Typography>New Guy.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            15/08/2023 <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              onClick={handleshowgif}
              style={{
                animation: "heartbeat 1s infinite",
                background: "skyblue",
              }}
            >
              <ConnectWithoutContactIcon style={{ color: "Black" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="p" component="span">
              Talk for hours on snapchat
            </Typography>
            <Typography>New Feelings.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            15/09/2023 <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              onClick={handleshowlove}
              style={{
                animation: "heartbeat 1s infinite",
                background: "rgb(255, 0, 0)",
              }}
            >
              <FavoriteIcon style={{ color: "Black" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Fall in love
            </Typography>
            <Typography>She is the one.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            25/12/2023 <br />
            Our christmas.
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              onClick={handleshowus}
              style={{
                animation: "heartbeat 1s infinite",
                background: "rgb(15, 206, 12)",
              }}
            >
              <WcIcon style={{ color: "Black" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              First Meet
            </Typography>
            <Typography>Best moment ever.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            18/01/2024 <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              onClick={handleshowher}
              style={{
                animation: "heartbeat 1s infinite",
                background: "rgb(12, 70, 206)",
              }}
            >
              <FavoriteIcon style={{ color: "Black" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span"></Typography>
            <Typography>She shared me same feeling.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            14/02/2024 <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ background: "rgb(255, 230, 0)" }}>
              <AllInclusiveIcon style={{ color: "Black" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              And till the end.
            </Typography>
            <Typography></Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <div
        className="second-photos"
        style={showPhotos ? { display: "block" } : { display: "none" }}
      >
        <div>First😂😂😂</div>
        <img src="ome1.jpg" alt="First" />
        <div>Second😂😂😂</div>
        <img src="ome2.jpg" alt="Second" />
      </div>

      <div
        className="second-gif"
        style={showgif ? { display: "block" } : { display: "none" }}
      >
        <img src="chats.gif" alt="First" />
      </div>

      <div
        className="second-photos"
        style={showlove ? { display: "block" } : { display: "none" }}
      >
        <p>Some of my true feelings.</p>
        <img src="coll.jpg" alt="First" />
      </div>

      <div
        className="second-photos"
        style={showus ? { display: "block" } : { display: "none" }}
      >
        <p>B3d ta3ab tawel 7assalet lsora😂😍.</p>
        <img src="uss.jpg" alt="First" />
      </div>

      <div
        className="second-photos"
        style={showher ? { display: "block" } : { display: "none" }}
      >
        <p>2a5555 adde knt mbsot😁😍.</p>
        <img src="coll2.jpg" alt="First" />
      </div>
    </div>
  );
}

export default Second;
