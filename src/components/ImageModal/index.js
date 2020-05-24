import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { loadedImages } from "../Map";
import BackIcon from "../BackIcon";
import artInfo from "./descriptions.json";

const containerWidth = 655.9;
const containerHeight = 637;
const imageWidthPercent = 0.87;
const hPadding = 100;
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
      const resizedHeight =
        (image.height * containerWidth * imageWidthPercent) / image.width;

      if (resizedHeight > containerHeight) {
        imgRef.current.style.marginTop = "";
        const aspect = image.width / image.height;
        imgRef.current.style.width =
          (containerHeight - hPadding) * aspect + "px";
      } else {
        imgRef.current.style.marginTop = `${
          (containerHeight - resizedHeight) / 2
        }px`;
      }

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