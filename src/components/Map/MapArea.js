import React, { useEffect } from "react";
import { AustraliaMap } from "../../assets/map/australiaMap";

const MapArea = ({ setGallery, startAnimating }) => {
  useEffect(() => {
    if (!startAnimating) return;
    let frame;
    let counter = 0;
    let wave = 1;
    const australia = document.getElementById("AUSTRALIA");
    const mapArea = document.querySelector(".map-area");
    const animate = () => {
      if (wave > 0) {
        wave = 0.5 * (0.8 + Math.cos(counter * Math.PI * 2 * 0.1));
        australia.style.opacity = wave;
        requestAnimationFrame(animate);
      } else {
        mapArea.className += " split";
        setTimeout(() => {
          setGallery(true);
          mapArea.className += " hide";
        }, 1100);
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
