import React, { useEffect } from "react";
import { AustraliaMap } from "../../assets/map/australiaMap2";

// must match css
const splitAnimationTime = 7000;

const MapArea = ({ setGallery, startAnimating }) => {
  useEffect(() => {
    if (!startAnimating) return;
    let frame;
    let counter = 0;
    let wave = 0;
    const mapArea = document.querySelector(".map-area");
    mapArea.classList.remove("split");

    const animate = () => {
      if (wave < 1) {
        wave = 0.5 * (1.2 + Math.sin(counter * Math.PI * 2 * 0.01));
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setGallery(true);
          mapArea.className += " hide";
        }, 1100);
      }
      counter++;
    };

    setTimeout(() => animate(), splitAnimationTime);

    return () => cancelAnimationFrame(frame);
  }, [setGallery, startAnimating]);
  return (
    <div className="map-area split">
      <AustraliaMap />
    </div>
  );
};
export default MapArea;
