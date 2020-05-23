import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { loadedImages } from "../Map";
import BackIcon from "../BackIcon";
import artInfo from "./descriptions.json";

const Modal = ({ match }) => {
  const [loadingImg, setLoadingImg] = useState(true);
  const [loadingIcon, setLoadingIcon] = useState(true);
  useEffect(() => {
    const startTime = Date.now();
    const image = document.querySelector("#modal-image");
    image.addEventListener("load", () => {
      let elapsed = Date.now() - startTime;
      while (elapsed < 1200) {
        elapsed = Date.now() - startTime;
      }
      setLoadingImg(false);
    });

    const icon = document.querySelector("#back-icon-img");
    icon.addEventListener("load", () => {
      console.log("icon loaded");
      setLoadingIcon(false);
    });
  });

  const index = match.params.img;

  // artInfo is an object starting at 1
  const info = artInfo[parseInt(index) + 1];

  // loadedImages is an indexed array starting at 0
  const src = loadedImages[index].src;
  return createPortal(
    <div className="modal">
      {loadingImg | loadingIcon ? <Loading /> : null}
      <div
        className="view-pane"
        style={{ display: !loadingImg && !loadingIcon ? "grid" : "none" }}
      >
        <div className="image-container">
          <img
            className={loadingImg ? "loading" : "loaded"}
            id="modal-image"
            src={src}
            alt={"no koala for you"}
          ></img>
        </div>
        <div className="description">
          <div className="header">
            {info.artist}. {info.title} ({info.year}), digital image,
            1650x700cm`
          </div>
          <div>{info.description}</div>
        </div>
        <Link to="/">
          <div className="close-modal">
            <BackIcon />
          </div>
        </Link>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default Modal;
