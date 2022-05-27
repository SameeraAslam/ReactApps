import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getAllProds = async () => {
      try {
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
          setloading(true);
          setdata(res.data);
          setfilter(data);
          setloading(false);
        });
      } catch (err) {
        console.log("error", err);
      }
    };

    getAllProds();
  }, [data]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3 bg-dark">
          <Skeleton height={350}> </Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}> </Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}> </Skeleton>
        </div>
      </>
    );
  };
  const filterProducts = (cats) => {
    const updatedData = data.filter((x) => x.category === cats);
    setfilter(updatedData);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setfilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 "
            onClick={() => {
              filterProducts("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 abc"
            onClick={() => {
              filterProducts("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProducts("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProducts("electronics");
            }}
          >
            Electronics
          </button>
        </div>

        {filter.map((items) => {
          return (
            <>
              <div className=" col-md-3  mb-4">
                <div
                  className="card h-100 text-center p-4"
                  key={items.id}
                  width="15rem"
                >
                  <img
                    src={items.image}
                    className="card-img-top"
                    height="200px"
                    alt={items.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark mb-0">
                      {items.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text text-dark lead fw-bold ">
                      ${items.price}
                    </p>
                    <NavLink to="/hi" className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className=" display-6 text-center fw-bolder text-dark">
              Latest..
            </h1>
            <hr className="bg-dark" />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
