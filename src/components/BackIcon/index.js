import React from "react";
import backImg from "../../assets/icons/arrow_back.svg";
import whiteBackImg from "../../assets/icons/arrow_back_white.svg";
import "./styles.css";
import { withRouter } from "react-router-dom";

const BackIcon = ({ color = "black", history }) => {
  return (
    <div style={{ border: "none" }}>
      <div onClick={() => history.push("/")} className="back-button">
        <img
          id="back-icon-img"
          preload="true"
          alt="whart"
          src={color === "white" ? whiteBackImg : backImg}
        ></img>
      </div>
    </div>
  );
};
export default withRouter(BackIcon);
