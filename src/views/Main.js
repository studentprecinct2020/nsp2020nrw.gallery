import React, { useState } from "react";
import { Route } from "react-router-dom";
import ImageModal from "../components/ImageModal";
import InfoModal from "../components/InfoModal";
import Map from "../components/Map";
import Heading from "../components/Heading";
import Images from "../components/Images";
const Main = ({ location }) => {
  const [gallery, setGallery] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const modalOpen = location.pathname !== "/";
  return (
    <div>
      <Heading playMusic={playMusic} setPlayMusic={setPlayMusic} />
      <Route path="/:img" component={ImageModal} />
      <Map setGallery={setGallery} setPlayMusic={setPlayMusic} />
      <Images modalOpen={modalOpen} show={gallery} />
    </div>
  );
};
export default Main;
