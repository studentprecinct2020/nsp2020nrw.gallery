import React, { useState, useRef, useEffect } from "react";
import { Route } from "react-router-dom";
import ImageModal from "../components/ImageModal";
import InfoModal from "../components/InfoModal";
import Map from "../components/Map";
import Heading from "../components/Heading";
import Images from "../components/Images";
import music from "../assets/audio/music.mp3";

const Main = ({ history, location }) => {
  const [gallery, setGallery] = useState(false);
  const [entryWindow, setEntryWindow] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const modalOpen = location.pathname !== "/";

  const audioRef = useRef();
  const toggleMusic = () => setPlayMusic(!playMusic);

  useEffect(() => {
    if (playMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playMusic]);
  return (
    <div>
      {!modalOpen && gallery && (
        <Heading
          playMusic={playMusic}
          setPlayMusic={setPlayMusic}
          toggleMusic={toggleMusic}
        />
      )}
      <Route
        path="/info"
        exact
        render={() => <InfoModal setGallery={setGallery} />}
      />
      <Route
        path="/entrance"
        exact
        render={() => (
          <InfoModal
            setGallery={setGallery}
            setPlayMusic={setPlayMusic}
            type={"entrance"}
          />
        )}
      />
      {location.pathname !== "/info" && location.pathname !== "/entrance" && (
        <Route path="/:img" component={ImageModal} />
      )}
      {!gallery && (
        <Map
          entryWindow={entryWindow}
          history={history}
          location={location.pathname}
          setEntryWindow={setEntryWindow}
          setGallery={setGallery}
          setPlayMusic={setPlayMusic}
        />
      )}
      <Images modalOpen={modalOpen} show={gallery} />
      <audio ref={audioRef} loop={true} src={music} />
    </div>
  );
};
export default Main;
