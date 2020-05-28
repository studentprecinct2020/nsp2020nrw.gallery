import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import UoMLogo from "../UoMLogo";
import BackIcon from "../BackIcon";
import arrowForward from "../../assets/icons/arrow_forward.svg";
import { withRouter } from "react-router-dom";
import OpeningText from "./OpeningText";

const Modal = ({ history, match, setGallery, setPlayMusic, type = "info" }) => {
  useEffect(() => {
    const infoModal = document.querySelector(".info-modal");
    const infoBody = document.querySelector(".info-body");
    const logoWrapper = document.querySelector(".logo-wrapper");

    if (window.innerHeight > window.innerWidth) {
      infoModal.style.overflow = "auto";
    }

    if (type === "entrance") {
      setTimeout(() => {
        infoModal.style.width = window.innerWidth > 768 ? "937px" : "100%";
        infoModal.style.height = window.innerWidth > 768 ? "82.2%" : "100%";
        infoModal.style.left = window.innerWidth > 768 ? "50%" : "0%";
        infoModal.style.top = window.innerWidth > 768 ? "50%" : "0%";
        setTimeout(() => {
          infoBody.style.opacity = 1;
          logoWrapper.style.opacity = 1;

          setTimeout(() => {}, 1000);
        }, 2000);
      }, 100);
    }
  }, []);
  return createPortal(
    <div className={`info-modal ${type}`}>
      <div className="info-body" style={{ opacity: type === "info" && 1 }}>
        <div className="info-text">
          <OpeningText />
        </div>
        {type === "entrance" && (
          <div
            className="arrow-forward"
            onClick={() => {
              history.push("/");
              setGallery(true);
              setPlayMusic(true);
              document.querySelector("audio").play();
            }}
          >
            <img src={arrowForward} />
          </div>
        )}
        <div className="logo-wrapper" style={{ opacity: type === "info" && 1 }}>
          <UoMLogo />
        </div>
        <div
          className="logo-wrapper"
          style={{ opacity: 0, height: 47, width: 10 }}
        >
          <UoMLogo />
        </div>
        {type === "info" && (
          <div style={{ position: "relative" }}>
            <div className="back-wrapper">
              <BackIcon color={"white"} />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default withRouter(Modal);
