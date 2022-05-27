import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TextContainer from "./TextContainer";
import Carousel from "./Carousel";
import InnerBody from "./InnerBody";
import BackVideo from "../images/BackVideo.mp4";
import "../App.css";

function Website() {
  return (
    <div className="main-body">
      <Navbar />

      <div className="container-m">
        <div className="main-container">
          <div className="video-container">
            <video id="myVideo" autoplay={true} controls muted>
              <source src={"./images/BackVideo.mp4"} type="video/mp4" />
            </video>
            <div class="content">
              <h3>WELCOME TO THE OPEN METAVERSE</h3>
              <p> THE RABP </p>
              <h4>
                Play, Create, Own, and Govern a virtual Metaverse made by
                players
              </h4>
            </div>
          </div>
        </div>
      </div>

      <Body />

      <InnerBody />

      <div className="container-text">
        <TextContainer />
      </div>

      <Carousel />

      <Footer />
    </div>
  );
}
export default Website;
