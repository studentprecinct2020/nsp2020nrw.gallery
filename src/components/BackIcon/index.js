import React from "react";
import backImg from "../../assets/icons/back_arrow.png";
import "./styles.css";
import { withRouter } from "react-router-dom";

const BackIcon = ({ history }) => {
  return (
    <div onClick={history.goBack} className="back-button">
      <img id="back-icon-img" preload="true" alt="whart" src={backImg}></img>
    </div>
  );
};
export default withRouter(BackIcon);
