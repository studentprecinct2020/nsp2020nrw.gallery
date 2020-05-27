import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import UoMLogo from "../UoMLogo";
import BackIcon from "../BackIcon";
import arrowForward from "../../assets/icons/arrow_forward.svg";
import { withRouter } from "react-router-dom";

const Modal = ({ history, match, setGallery, setPlayMusic, type = "info" }) => {
  useEffect(() => {
    const infoModal = document.querySelector(".info-modal");
    const infoBody = document.querySelector(".info-body");
    const logoWrapper = document.querySelector(".logo-wrapper");
    if (type === "entrance") {
      setTimeout(() => {
        infoModal.style.width = window.innerWidth > 768 ? "937px" : "100%";
        infoModal.style.height = window.innerWidth > 768 ? "70%" : "100%";
        infoModal.style.left = "0px";
        infoModal.style.top = "0px";
        setTimeout(() => {
          infoBody.style.opacity = 1;
          setTimeout(() => {
            logoWrapper.style.opacity = 1;
          }, 1000);
        }, 2000);
      }, 100);
    }
  }, []);
  return createPortal(
    <div className={`info-modal ${type}`}>
      <div className="info-body" style={{ opacity: type === "info" && 1 }}>
        <div className="info-text">
          <p>
            The New Student Precinct Project at The University of Melbourne is
            proud to present this National Reconciliation Week 2020 Virtual
            Gallery. This gallery has been curated and designed by Bachelor of
            Environments student Cristina Margherita Napoleone and features the
            works of eight staff, students and alumni who submitted images and
            artworks in response to this year’s theme
            <i> in this together.</i>
          </p>
          <p>
            To be <i> in this together</i>
            is to not shy away from our grief, nor our remorse. Art can help us
            grow through grief and amplify compassion that compels us to love
            more and recognise a deeper kinship, toward one another and our
            shared more-than-human world.
          </p>
          <p>
            This year marks the twentieth anniversary of the reconciliation
            walks of 2000, when people from all backgrounds came together to
            walk across the nation and show their support for a more reconciled
            Australia. While many steps have been taken, many steps remain as we
            learn our shared story.
          </p>
          <p>
            This annual National Reconciliation Week themed gallery, presented
            by the University of Melbourne’s{" "}
            <a href="https://students.unimelb.edu.au/student-precinct/home">
              New Student Precinct Project
            </a>
            , serves as a platform of active support by the University
            community, both Indigenous and non-Indigenous, to showcase artworks
            that express reflections in the spirit of reconciliation to honour
            the oldest living culture on Earth.
          </p>
          <p>
            <i>Biik Ngarrga</i> and <i>Buln Buln Ngarrga</i> were written and
            performed by Mandy Nicholson live with the Djirri Djirri Dancers at
            The University of Melbourne in April 2019. <i>Biik Ngarrga</i> is a
            Wurundjeri song used to teach wider communities about the six
            interconnected layers of Country: Biik-ut (Below Country), Biik-dui
            (On Country), Baanj Biik (Water Country), Murnmut Biik (Wind
            Country), Wurru wurru Biik (Sky Country) and Tharangalk Biik (Star
            Country). <i>Buln Buln Ngarrga</i> is also a Wurundjeri song that
            honours the lyrebird, known for their expert mimicry of surrounding
            sounds, both human and non-human.
          </p>
          <p>
            The Outdoor Gallery, originally located in Porter's Lane at the back
            of the ERC Library and now for the first time digitally, seeks to
            provide the University of Melbourne community with a creative space
            that references the energy and activity of Melbourne’s creative
            laneway culture.
          </p>
          <p>
            Since the launch of the gallery in May 2017, exhibitors have
            included Science Gallery Melbourne, Wilin Centre for Indigenous Arts
            and Cultural Development, University of Melbourne’s Student Union,
            Murrup Barak Melbourne Institute for Indigenous Development, Nite
            Art, and Farrago Magazine. m
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        {type === "entrance" && (
          <div
            className="arrow-forward"
            onClick={() => {
              history.push("/");
              setGallery(true);
              setPlayMusic(true);
            }}
          >
            <img src={arrowForward} />
          </div>
        )}
        <div className="logo-wrapper" style={{ opacity: type === "info" && 1 }}>
          <UoMLogo />
        </div>
        {type === "info" && (
          <div style={{ position: "relative" }}>
            <div className="back-wrapper">
              <BackIcon color={"white"} />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default withRouter(Modal);
