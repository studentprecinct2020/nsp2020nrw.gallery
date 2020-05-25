import React, { useEffect } from "react";
import "./styles.css";
import { loadedImages } from "../Map";
import { withRouter } from "react-router-dom";
import { numMap } from "./utils";
import eye from "../../assets/icons/eye-smoll.png";

const Images = ({ history, modalOpen, show }) => {
  useEffect(() => {
    if (!show) return;
    const gallery = document.querySelector(".gallery-container");
    gallery.style.width = "80%";
    gallery.style.opacity = "100%";
    gallery.style.top = "23%";
    gallery.style.left = window.innerWidth < 768 ? "0" : "4%";
  }, [show]);

  const displayType = window.innerWidth < 768 ? "block" : "grid";
  return (
    <div
      className="gallery-container"
      style={{ display: modalOpen ? "none" : displayType }}
    >
      {loadedImages.map((img, i) => {
        return (
          <div
            onClick={() => history.push(`/frog/${i}`)}
            style={{ gridArea: `${numMap[i + 1]}`, marginBottom: "20px" }}
            key={`${i}image`}
          >
            <img
              style={{ cursor: `url(${eye}),auto` }}
              id={`${i}image`}
              width="100%"
              src={img.src}
              alt="oops"
            ></img>
          </div>
        );
      })}
    </div>
  );
};
export default withRouter(Images);
