import React from "react";
import RatingsStars from "./RatingStars";

function ProductCard({ product }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 my-3">
      <div className="card p-1">
        <img src={product.image} alt="product-img" />
        <div className="p-2">
          <h6>{product.title}</h6>
          <div className="clearfix">
            <div className="float-left d-flex flex-column">
              <span className="primary-color">{product.price} LE</span>
              <span>
                <del className="text-secondary">{product.oldPrice} LE</del>
                <span className="highlightLabel ml-2 small">
                  {product.discount}%
                </span>
              </span>
            </div>
            <div className="float-right pt-2">
              <img src={product.logo} alt="logo" />
            </div>
          </div>
          <div className="my-2">
            <RatingsStars rate={product.rate} />
            <span className="mx-3">{product.rate} of 5</span>
          </div>
          {product.insideEgypt && (
            <div className="text-center small">
              <label>Pickup From: {product.pickupInfo[0]}</label>
            </div>
          )}

          {!product.insideEgypt && (
            <div className="small d-flex justify-content-between">
                <label className="mr-3">From: {product.pickupInfo[0]}</label>
                <label className="mr-3">To: {product.pickupInfo[1]}</label>
                <label className="mr-3">in: {product.pickupInfo[2]}</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
