/*import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getSelectedProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setloading(true);
      setProduct(await res.json());
      console.log("my dataa", Product);
      setloading(false);
    };

    getSelectedProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <h3 className="text-dark">Loading...</h3>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={Product.image}
            alt={Product.title}
            height="400px"
            width="400px"
          />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};
export default Product;
*/
