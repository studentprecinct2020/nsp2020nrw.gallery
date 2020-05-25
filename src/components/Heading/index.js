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
          <div id="div1">
            NATIONAL RECONCILIATION WEEK 2020 VIRTUAL GALLERY
            <span style={{ color: "white" }}>_</span>
          </div>
          <div id="div2">
            NATIONAL RECONCILIATION WEEK 2020 VIRTUAL GALLERY
            <span style={{ color: "white" }}>_</span>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon-wrap">
            <div className="icon sound">
              <SoundIcon />
            </div>
          </div>
          <div
            className="icon-wrap"
            onClick={() => history.push("/info")}
            style={{ marginLeft: 11 }}
          >
            <div className="icon info">
              <img src={infoSVG} alt="mhm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Heading);
