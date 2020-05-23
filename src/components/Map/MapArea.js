import React, { useEffect } from "react";
import { AustraliaMap } from "../../assets/map/australiaMap";

const MapArea = ({ setGallery, startAnimating }) => {
  useEffect(() => {
    if (!startAnimating) return;
    let frame;
    let counter = 0;
    let wave = 1;
    const australia = document.getElementById("AUSTRALIA");

    const animate = () => {
      if (wave > 0) {
        wave = 0.5 * (0.8 + Math.cos(counter * Math.PI * 2 * 0.1));
        australia.style.opacity = wave;
        requestAnimationFrame(animate);
      } else {
        document.querySelector(".map-area").className += " split";
        setTimeout(() => setGallery(true), 1100);
      }
      counter++;
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [startAnimating]);
  return (
    <div className="map-area">
      <AustraliaMap />
    </div>
  );
};
export default MapArea;
