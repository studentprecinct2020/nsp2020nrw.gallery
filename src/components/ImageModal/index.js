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
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    const startTime = Date.now();
    const image = new Image();
    image.src = loadedImages[index].src;
    image.addEventListener("load", () => {
      let elapsed = Date.now() - startTime;
      while (elapsed < 1200) {
        elapsed = Date.now() - startTime;
      }
      console.log(image.height);
      setLoadingImg(false);
      setImgSrc(image.src);
    });
  }, []);

  useEffect(() => {
    if (imgSrc) {
      document.getElementById("modal-image").className = "loaded";
    }
  }, [imgSrc]);

  const index = match.params.img;

  // artInfo is an object starting at 1
  const info = artInfo[parseInt(index) + 1];

  return createPortal(
    <div className="modal">
      {loadingImg && (
        <div className="modal-loading">
          <Loading />
        </div>
      )}
      <div
        className="view-pane"
        style={{ display: !loadingImg ? "grid" : "none" }}
      >
        <div className="image-container">
          <img id="modal-image" src={imgSrc} alt={"no koala for you"}></img>
        </div>
        <div className="description">
          <div className="header">
            {info.artist}. {info.title} ({info.year}), digital image, 1650x700cm
          </div>
          <div className="info">{info.description}</div>
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
