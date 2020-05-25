import React, { useEffect } from "react";
import "./styles.css";
import { withRouter } from "react-router-dom";
import SoundIcon from "../SoundIcon";
import infoSVG from "../../assets/icons/info.svg";
import UoMLogo from "../UoMLogo";

const Heading = ({ history }) => {
  useEffect(() => {
    setTimeout(() => document.getElementById("div0").remove(), 10000);
  }, []);
  return (
    <div className="heading">
      <div className="umlogo-heading">
        <UoMLogo />
      </div>
      <div className="heading-outer">
        <div className="heading-container">
          <span id="div0">
            NATIONAL RECONCILIATION WEEK 2020 VIRTUAL GALLERY
            <span style={{ color: "white" }}>_</span>
          </span>
          <div id="div1">
            NATIONAL RECONCILIATION WEEK 2020 VIRTUAL GALLERY
            <span style={{ color: "white" }}>_</span>
          </div>
          <div id="div2">
            NATIONAL RECONCILIATION WEEK 2020 VIRTUAL GALLERY
            <span style={{ color: "white" }}>_</span>
          </div>
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
  );
};
export default withRouter(Heading);
