import React from "react";
import colSevenTwo from "../images/colSevenTwo.jpg";
import "../App.css";
import disCover from "../images/disCover.jpg";
function InnerBody() {
  return (
    <div className="Body-content">
      <div className="discover">
        <div className="dicover-body row">
          <div class="col-4">
            <div className="img-tag">
              <img src={colSevenTwo} />
            </div>
          </div>

          <div class="col-10  ">
            <h1 className="heading">CREATE YOUR OWN LAND</h1>
            <p className="dis-para">
              Non-Fungible Tokens (NFTs) are virtual tokens minted on the
              blockchain for digital scarity,security and authenticity. They are
              unique, indivisible and non-interchangeable -allowing true digital
              ownership of in-game assets.
            </p>
            <div className="buttons">
              <button className="btns">Buy Land</button>
              <button className="btns"> Buy ETH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InnerBody;
