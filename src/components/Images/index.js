import React, { useEffect } from "react";
import "./styles.css";
import { loadedImages } from "../Map";
import { withRouter } from "react-router-dom";
import { numMap } from "./utils";

const Images = ({ history, show }) => {
  useEffect(() => {
    if (!show) return;
    const gallery = document.querySelector(".gallery-container");
    gallery.style.width = "100%";
    gallery.style.opacity = "100%";
  }, [show]);
  return (
    <div className="gallery-container">
      {loadedImages.map((img, i) => {
        return (
          <div
            onClick={() => history.push(`/frog/${i}`)}
            style={{ gridArea: `${numMap[i + 1]}` }}
            key={`${i}image`}
          >
            <span className="beveled">
              <img id={`${i}image`} width="100%" src={img.src} alt="oops"></img>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default withRouter(Images);
