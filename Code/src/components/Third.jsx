import React from "react";
import "./Styles.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Third() {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="third-main">
      <a href="#page4">
        <button className="down_button">
          <ArrowDownwardIcon />
        </button>
      </a>
      <h1 className="third-title">Reasons</h1>

      <Accordion
        className="third-acc-div-first"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ color: "white" }}>
            Reasons u r beautifulest girl ever.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <ol>
                <li>You're really kind.</li>
                <li>You have beautifulest personality ever.</li>
                <li>You have best laugh ever.</li>
                <li>You're strong and doesn't give up easily.</li>
                <li>You have the most amazing hair.</li>
                <li>You are the most tidy girl.</li>
              </ol>
              <br></br>
              Not forgetting you look so good in every single moment❤️🥰.
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="third-acc-div-second"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ color: "white" }}>
            Reasons why u r the one i choose.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <ol>
                <li>You makes me feel understood and supported.</li>
                <li>You brings out the best in me and encourages my growth.</li>
                <li>Your presence adds joy and excitement to my life.</li>
                <li>We have fun together and enjoy each other's company.</li>
                <li>
                  You accepted me for who I am, flaws and all. And a lot
                  more😁😁
                </li>
              </ol>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="third-acc-div-third"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ color: "white" }}>
            Reasons why i love you.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <ol>
                <li>You are the one who makes my day better.</li>
                <li>Being aside you make me feel loved.</li>
                <li>Texting you make my mind flew over.</li>
                <li>Seeing you make my heart beat faster.</li>
                <li>My dreams talk about how much i love you.</li>
                <br></br>I love you my precious princess.❤️😍
              </ol>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="third-acc-div-fourth"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ color: "white" }}>
            Reasons why am with you forever.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <ol>
                <li>You completes me in ways I never knew were possible.</li>
                <li>Our souls are bound together by an unbreakable bond.</li>
                <li>
                  You're my partner in every sense of the word, my confidant,
                  and my best friend.
                </li>
                <li>
                  With you, I found a love so deep and true that it transcends
                  time and space.
                </li>
                <br></br>And a lot more.❤️😍
              </ol>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Third;
