import React, { useEffect } from "react";
import { AustraliaMap } from "../../assets/map/australiaMap";

const MapArea = ({ setGallery, startAnimating }) => {
  useEffect(() => {
    if (!startAnimating) return;
    let frame;
    let counter = 0;
    let wave = 0;
    const australia = document.getElementById("AUSTRALIA");
    const mapArea = document.querySelector(".map-area");
    mapArea.classList.remove("split");

    const animate = () => {
      if (wave < 1) {
        wave = 0.5 * (1.2 + Math.sin(counter * Math.PI * 2 * 0.01));
        australia.style.opacity = wave;
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setGallery(true);
          mapArea.className += " hide";
        }, 1100);
      }
      counter++;
    };
    setTimeout(() => animate(), 1000);
    return () => cancelAnimationFrame(frame);
  }, [setGallery, startAnimating]);
  return (
    <div className="map-area split">
      <AustraliaMap />
    </div>
  );
};
export default MapArea;
