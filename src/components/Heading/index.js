import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { withRouter } from "react-router-dom";
import infoSVG from "../../assets/icons/info.svg";
import volUp from "../../assets/icons/vol_up.svg";
import volOff from "../../assets/icons/vol_off.svg";
import music from "../../assets/audio/music.mp3";
import UoMLogo from "../UoMLogo";

const Heading = ({ history, playMusic, setPlayMusic }) => {
  const [musicOn, setMusicOn] = useState(false);
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
    <div className="heading">
      <div className="umlogo-heading">
        <UoMLogo />
      </div>
      <div className="right">
        National Reconciliation Week 2020 Virtual Gallery
        {/* <div className="icon-container"> */}
        <img
          style={{ cursor: "pointer" }}
          src={infoSVG}
          onClick={() => history.push("/info")}
        />
        <div onClick={toggleMusic} style={{ cursor: "pointer" }}>
          {!playMusic ? <img src={volOff} /> : <img src={volUp} />}
        </div>
        <audio ref={audioRef} src={music} />
        {/* <div className="icon-wrap">
          <div className="icon sound">
            <SoundIcon />
          </div>
        </div>
        <div
          className="icon-wrap"
          onClick={() => history.push("/info")}
          style={{ marginLeft: 11 }}
        >
          <div className="icon info">
            <img src={infoSVG} alt="mhm" />
          </div>
        </div>*/}
        {/* </div> */}
      </div>
    </div>
  );
};
export default withRouter(Heading);
