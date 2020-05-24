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
          <marquee behavior="scroll">
            NATIONAL RECONCILIATION WEEK 2020 VIRTUAL GALLERY
          </marquee>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon sound">
          <SoundIcon />
        </div>
        <div onClick={() => history.push("/info")} className="icon info">
          <img src={infoSVG} alt="mhm" />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Heading);
