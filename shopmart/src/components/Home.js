import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div class="card text-white border-0">
        <img
          src="/assets/bg.webp"
          class="card-img"
          alt="background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder  mb-0">NEW ARRIVALS</h5>
            <p class="card-text lead fs-2">CHECK OUT THE MID SUMMER SALE!</p>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};
export default Home;
