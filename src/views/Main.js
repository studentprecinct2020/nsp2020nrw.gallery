import React, { useState } from "react";
import { Route } from "react-router-dom";
import ImageModal from "../components/ImageModal";
import InfoModal from "../components/InfoModal";
import Map from "../components/Map";
import Heading from "../components/Heading";
import Images from "../components/Images";
const Main = () => {
  const [gallery, setGallery] = useState(false);
  return (
    <div>
      <Heading />
      {/* <button onClick={() => setGallery(true)}>LOADGALLERY</button> */}
      <Route path="/frog/:img" component={ImageModal} />
      <Route path="/info" component={InfoModal} />
      <Map setGallery={setGallery} />
      <Images show={gallery} />
    </div>
  );
};
export default Main;
