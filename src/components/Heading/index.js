import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <div className="heading-outer">
        <div className="heading-container">
          <div>RECONCILIATION WEEK VIRTUAL GALLERY</div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon sound">C</div>
        <Link to="/info">
          <div className="icon info">i</div>
        </Link>
      </div>
    </div>
  );
};
export default Heading;
