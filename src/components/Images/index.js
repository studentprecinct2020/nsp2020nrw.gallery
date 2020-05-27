import React, { useEffect } from "react";
import "./styles.css";
import { loadedImages } from "../Map";
import { withRouter } from "react-router-dom";
import { numMap } from "./utils";
import eye from "../../assets/icons/eye-smoll.png";

const imagePositions = {
  0: { left: 1250, top: 60 },
  1: { left: 320, top: 56 },
  2: { left: 1063, top: 280 },
  3: { left: 1210, top: 640 },
  4: { left: 750, top: 130 },
  5: { left: -50, top: 70 },
  6: { left: 820, top: 610 },
  7: { left: 460, top: 370 },
  8: { left: 140, top: 339 },
  9: { left: 0, top: 640 },
  10: { left: 0, top: 640 },
};

const galleryWidth = 1690;

const Images = ({ history, modalOpen, show }) => {
  useEffect(() => {
    if (!show) return;
    const gallery = document.querySelector(".gallery-container");
    gallery.style.opacity = "100%";
    gallery.style.pointerEvents = "auto";

    if (window.innerWidth > 768) {
      console.log(window.innerWidth);
      // gallery.style.width = "80%";
      gallery.style.width = `${galleryWidth}px`;
      // gallery.style.top = "23%";
      // gallery.style.left = window.innerWidth < 768 ? "0" : "4%";
      // gallery.style.left = "-1000px";
      gallery.style.transform = "translate(-79.7462px, -33.1903px)";
      gallery.style.height = window.innerHeight + "px";

      const getNorm = (c) => ({
        x: (c.x / window.innerWidth - 0.5) * -2,
        y: (c.y / window.innerHeight - 0.5) * -2,
      });

      let interval;
      let cursorX = 0;
      let cursorY = 0;
      let decay = 2;
      let velocity = 0;
      const moveGallery = () => {
        clearInterval(interval);
        const cx = gallery.style.transform.split("(")[1].split("px")[0];
        const cy = gallery.style.transform.split("px,")[1].split(")")[0];
        //velocity = Math.abs(cursorX - cx);
        //console.log(getNorm({ x: parseInt(cx), y: parseInt(cy) }));
        const maxX = galleryWidth - window.innerWidth - 150;
        // const maxY = window.innerHeight -

        let newTranslateX = parseInt(cx) + cursorX * Math.PI * 2 * 2 - decay;
        let newTranslateY = parseInt(cy) + cursorY * Math.PI * 2 * 2 - decay;
        if (newTranslateX > 50) newTranslateX = 50;
        if (newTranslateX < -maxX) newTranslateX = -maxX;
        if (newTranslateY > 0) newTranslateY = 0;
        if (newTranslateY < -90) newTranslateY = -90;
        gallery.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px)`;
        decay = decay < 0.5 ? 0.5 : decay - 0.1;
        interval = setInterval(moveGallery, 10);
      };

      const checkCursor = (e) => {
        const normX = (e.clientX / window.innerWidth - 0.5) * -2;
        const normY = (e.clientY / window.innerHeight - 0.5) * -2;
        cursorX = normX;
        cursorY = normY;
      };

      const stopScrolling = () => clearInterval(interval);
      const startScrolling = () => {
        moveGallery();
        decay = 1;
      };
      window.addEventListener("mousemove", checkCursor);
      document.body.addEventListener("mouseenter", startScrolling);
      gallery.addEventListener("mouseleave", stopScrolling);
      window.onclick = () => console.log("WTF");
      // const images = document.getElementsByTagName("img");
      // for (let i = 0; i < images.length; i++) {
      //   images[i].addEventListener("mouseenter", stopScrolling);
      //   images[i].addEventListener("mouseleave", startScrolling);
      // }
    } else {
      gallery.style.width = "100%";
      gallery.style.height = window.innerHeight + "px";
    }
  }, [show]);

  const displayType = window.innerWidth < 768 ? "grid" : "flex";
  return (
    <div style={{ margin: 10 }}>
      <div
        onClick={() => console.log("container")}
        className="gallery-container"
        style={{ display: modalOpen ? "none" : displayType }}
      >
        {loadedImages.map((img, i) => {
          let { left, top } = imagePositions[i];
          let marginTop = 0;
          if (window.innerWidth < 768) {
            left = 0;
            top = 0;
            marginTop = getRandomInt(
              0,
              window.innerHeight / (((i + 0) % 3) + 1.9)
            );
          }
          return (
            <div
              onClick={() => {
                history.push(`/${img.path}`);
                console.log("LCICK");
              }}
              style={{
                // gridArea: `${numMap[i + 1]}`,
                gridRow: 1,
                marginBottom: "20px",
                // transform: `translateY(${getRandomInt(-100, 100)}px)`,
                left,
                top,
                marginTop,
              }}
              key={`${i}image`}
              className="image-wrap"
            >
              <img
                onClick={() => console.log("whAT")}
                style={{ cursor: `url(${eye}),auto` }}
                id={`${i}image`}
                src={img.img.src}
                alt="oops"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default withRouter(Images);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
