import React, { useEffect, useState, useRef } from "react";
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
  const imgRef = useRef();
  useEffect(() => {
    const image = new Image();
    image.src = loadedImages[index].src;
    image.addEventListener("load", () => {
      setLoadingImg(false);
      setImgSrc(image.src);
      setTimeout(() => (imgRef.current.style.opacity = 1), 100);
    });
  }, []);

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
      {!loadingImg && (
        <div className="view-pane">
          <div className="image-container">
            <img
              ref={imgRef}
              id="modal-image"
              src={imgSrc}
              alt={"no koala for you"}
            ></img>
          </div>
          <div className="description">
            <div className="header">
              {info.artist}. {info.title} ({info.year}), digital image,
              1650x700cm
            </div>
            <div className="info">{info.description}</div>
          </div>
          <Link to="/">
            <div className="close-modal">
              <BackIcon />
            </div>
          </Link>
        </div>
      )}
    </div>,
    document.getElementById("modal-root")
  );
};
export default Modal;
