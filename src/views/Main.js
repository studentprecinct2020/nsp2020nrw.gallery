import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import ImageModal from "../components/ImageModal";
import InfoModal from "../components/InfoModal";
import Map from "../components/Map";
import Heading from "../components/Heading";
import Images from "../components/Images";
const Main = (props) => {
  const [gallery, setGallery] = useState(true);
  const modalOpen = props.location.pathname !== "/";
  return (
    <div>
      {gallery && !modalOpen && <Heading />}
      {/* <button onClick={() => setGallery(true)}>LOADGALLERY</button> */}
      <Route path="/frog/:img" component={ImageModal} />
      <Route path="/info" component={InfoModal} />
      <Map setGallery={setGallery} />
      <Images modalOpen={modalOpen} show={gallery} />
    </div>
  );
};
export default Main;
