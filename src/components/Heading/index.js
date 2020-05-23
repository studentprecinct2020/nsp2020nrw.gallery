import React from "react";
import "./styles.css";
import { withRouter } from "react-router-dom";
import SoundIcon from "../SoundIcon";
import infoSVG from "../../assets/icons/info.svg";

const Heading = ({ history }) => {
  return (
    <div>
      <div className="heading-outer">
        <div className="heading-container">
          <div>RECONCILIATION WEEK VIRTUAL GALLERY</div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon sound">
          <SoundIcon />
        </div>
        <div onClick={() => history.push("/info")} className="icon info">
          <img src={infoSVG} />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Heading);
