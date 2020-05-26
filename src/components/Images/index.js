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
    // gallery.style.width = "80%";
    gallery.style.width = "2960px";
    gallery.style.opacity = "100%";
    // gallery.style.top = "23%";
    // gallery.style.left = window.innerWidth < 768 ? "0" : "4%";
    gallery.style.left = "-1000px";
    gallery.style.transform = "translateX(10px)";
    gallery.style.pointerEvents = "auto";

    let interval;
    let cursorX = 0;
    let decay = 1;
    const moveGallery = () => {
      clearInterval(interval);
      const cx = gallery.style.transform.split("(")[1].split("px)")[0];
      let newTranslate = parseInt(cx) + (cursorX * 10) / decay;
      if (newTranslate > 945) newTranslate = 945;
      if (newTranslate < -935) newTranslate = -935;
      gallery.style.transform = `translateX(${newTranslate}px)`;

      decay += 0.01;
      interval = setInterval(moveGallery, 10);
    };

    const checkCursor = (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * -2;
      cursorX = normX;
    };

    const stopScrolling = () => clearInterval(interval);
    const startScrolling = () => {
      moveGallery();
      decay = 1;
    };
    window.addEventListener("mousemove", checkCursor);
    document.body.addEventListener("mouseenter", startScrolling);
    gallery.addEventListener("mouseleave", stopScrolling);

    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("mouseenter", stopScrolling);
      images[i].addEventListener("mouseleave", startScrolling);
    }
  }, [show]);

  const displayType = window.innerWidth < 768 ? "block" : "flex";
  return (
    <div
      className="gallery-container"
      style={{ display: modalOpen ? "none" : displayType }}
    >
      {loadedImages.map((img, i) => {
        return (
          <div
            onClick={() => history.push(`/${img.path}`)}
            style={{
              gridArea: `${numMap[i + 1]}`,
              marginBottom: "20px",
              transform: `translateY(${getRandomInt(-100, 100)}px)`,
            }}
            key={`${i}image`}
            className="image-wrap"
          >
            <img
              style={{ cursor: `url(${eye}),auto` }}
              id={`${i}image`}
              width="100%"
              src={img.img.src}
              alt="oops"
            ></img>
          </div>
        );
      })}
    </div>
  );
};
export default withRouter(Images);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
