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

const ackText = `We acknowledge the Kulin Nations as sovereign custodians of the lands on which this virtual vallery emerged, of the Wurundjeri, Boon Wurrung, Yorta Yorta and Dja Dja Wurrung peoples. We extend our respects to ancestors and Elders past, present and emerging, and to all First Nations people.`;
const Map = ({ setGallery }) => {
  const [startAnimating, setStartAnimating] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const enterButton = useRef(null);

  const textContainerRef = useRef("");

  const typeWriterRefOne = useRef("");
  const typeWriterRefTwo = useRef("");
  const typeWriterRefThree = useRef("");

  const typeWriterRefCenter = useRef("");

  useEffect(() => {
    var i = 0;
    var blocks = 0;
    var txt = ackText; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
      if (i < txt.length) {
        // typeWriterRefOne.current.innerHTML += txt.charAt(i);
        // typeWriterRefTwo.current.innerHTML += txt.charAt(i);
        // typeWriterRefThree.current.innerHTML += txt.charAt(i);
        typeWriterRefCenter.current.innerHTML += txt.charAt(i);

        i++;
        setTimeout(typeWriter, speed);
      } else {
        i = 0;
        blocks++;
        if (blocks < 1) {
          typeWriter();
        } else {
          // setShowMap(true);
          // textContainerRef.current.className = "hide";
          enterButton.current.style.display = "block";
        }
      }
    }
    typeWriter();
  }, []);

  const enter = () => {
    setShowMap(true);
    textContainerRef.current.className = "hide";
  };

  useEffect(() => {
    if (showMap) {
      setTimeout(() => setStartAnimating(true), 1000);
    }
  }, [showMap]);

  return (
    <div className="map-container">
      <div style={{ display: showMap ? "block" : "none" }}>
        <MapArea startAnimating={startAnimating} setGallery={setGallery} />
      </div>
      <div id="text-container" ref={textContainerRef}>
        <div className="tw-container center" ref={typeWriterRefCenter}></div>
        <div
          className="button-wrapper"
          ref={enterButton}
          style={{ display: "none" }}
        >
          <div className="button" onClick={enter}>
            CLICK TO ENTER
          </div>
        </div>
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
