import React, { useState } from "react";
import { Route } from "react-router-dom";
import ImageModal from "../components/ImageModal";
import InfoModal from "../components/InfoModal";
import Map from "../components/Map";
import Heading from "../components/Heading";
import Images from "../components/Images";
const Main = ({ location }) => {
  const [gallery, setGallery] = useState(false);
  const modalOpen = location.pathname !== "/";
  return (
    <div>
      {gallery && !modalOpen && <Heading />}
      <Route path="/frog/:img" component={ImageModal} />
      <Route path="/info" component={InfoModal} />
      <Map setGallery={setGallery} />
      <Images modalOpen={modalOpen} show={gallery} />
    </div>
  );
};
export default Main;
