import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import Loading from "../Loading";
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
  const infoRef = useRef();

  const path = match.params.img;
  let index;
  Object.keys(artInfo).forEach((key) => {
    if (artInfo[key].path === path) {
      index = key;
    }
  });
  console.log(index);
  useEffect(() => {
    const image = new Image();
    image.src = require(`../../assets/imgs/${index}.jpg`);
    image.addEventListener("load", () => {
      setLoadingImg(false);
      setImgSrc(image.src);
      const resizedHeight =
        (image.height * containerWidth * imageWidthPercent) / image.width;
      const aspect = image.width / image.height;

      if (resizedHeight > containerHeight) {
        imgRef.current.style.marginTop = "";
        imgRef.current.style.width =
          (containerHeight - hPadding) * aspect + "px";
      } else {
        // imgRef.current.style.marginTop = `${
        //   (containerHeight - resizedHeight) / 2
        // }px`;
      }
      // console.log(document.querySelector("img").height);
      // infoRef.current.style.height = 100 + "px";
      // console.log(infoRef.current);
      setTimeout(() => (imgRef.current.style.opacity = 1), 100);
    });
  }, [index]);

  // artInfo is an object starting at 1
  const info = artInfo[index];
  const dLength = info.description.length;
  const fontSize = () => {
    if (dLength > 1200) {
      return 11;
    }
    return 16;
  };
  return createPortal(
    <div className="modal">
      <div className="modal-wrap">
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
                {info.artist}, <i>{info.title}</i>, {info.year}, {info.format},{" "}
                {info.dimensions}.
              </div>
              <div
                className="info"
                style={{ fontSize: fontSize() }}
                ref={infoRef}
              >
                {info.description}
              </div>
              <Link to="/">
                <div className={`close-modal ${info.title}`}>
                  <BackIcon />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default Modal;
