import React from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import UoMLogo from "../UoMLogo";
import BackIcon from "../BackIcon";

const Modal = ({ match }) => {
  return createPortal(
    <div className="info-modal">
      <div className="info-body">
        <div className="info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>

        <div className="logo-wrapper">
          <UoMLogo />
        </div>
        <div className="back-wrapper">
          <BackIcon />
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default Modal;
