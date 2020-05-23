import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import MapArea from "./MapArea";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const loadedImages = images.map((i) => {
  const src = require(`../../assets/imgs/${i}-smoll.jpg`);
  const img = new Image();
  img.src = src;
  return img;
});

const Map = ({ setGallery }) => {
  const [startAnimating, setStartAnimating] = useState(false);

  const textContainerRef = useRef("");

  const typeWriterRefOne = useRef("");
  const typeWriterRefTwo = useRef("");
  const typeWriterRefThree = useRef("");

  useEffect(() => {
    var i = 0;
    var blocks = 0;
    var txt = "Acknowledgement of country "; /* The text */
    var speed = 10; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
      if (i < txt.length) {
        typeWriterRefOne.current.innerHTML += txt.charAt(i);
        typeWriterRefTwo.current.innerHTML += txt.charAt(i);
        typeWriterRefThree.current.innerHTML += txt.charAt(i);

        i++;
        setTimeout(typeWriter, speed);
      } else {
        i = 0;
        blocks++;
        if (blocks < 10) {
          typeWriter();
        } else {
          setStartAnimating(true);
          textContainerRef.current.className = "hide";
        }
      }
    }
    typeWriter();
  }, []);

  return (
    <div className="map-container">
      <MapArea startAnimating={startAnimating} setGallery={setGallery} />
      <div id="text-container" ref={textContainerRef}>
        <div className="tw-container left">
          <div className="one" ref={typeWriterRefOne}></div>
          <div className="two" ref={typeWriterRefTwo}></div>
        </div>
        <div className="tw-container right">
          <div className="one" ref={typeWriterRefThree}></div>
        </div>
      </div>
    </div>
  );
};
export default Map;
