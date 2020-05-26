import React, { useEffect } from "react";
import "./styles.css";
import { withRouter } from "react-router-dom";
import SoundIcon from "../SoundIcon";
import infoSVG from "../../assets/icons/info.svg";
import UoMLogo from "../UoMLogo";

const Heading = ({ history }) => {
  return (
    <div className="heading">
      <div className="umlogo-heading">
        <UoMLogo />
      </div>
      <div className="heading-outer">
        {/* <div className="heading-container"> */}
        NATIONAL RECONCILIATION WEEK 2020 VIRTUAL GALLERY
        {/* </div> */}
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
