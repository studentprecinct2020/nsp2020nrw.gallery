import React from "react";
import backImg from "../../assets/icons/keyboard_return.svg";
import "./styles.css";
import { withRouter } from "react-router-dom";

const BackIcon = ({ history }) => {
  return (
    <div style={{ border: "none" }}>
      <div onClick={() => history.push("/")} className="back-button">
        <img id="back-icon-img" preload="true" alt="whart" src={backImg}></img>
      </div>
    </div>
  );
};
export default withRouter(BackIcon);
