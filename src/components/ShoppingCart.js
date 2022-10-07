import React from "react";
import { GrClose } from "react-icons/gr";
import productImg from "../images/Group 1441@2x.png";
import { BsCart2 } from 'react-icons/bs';

function ShoppingCart({ toggleShoppingCart, itemsCount }) {
  return (
    <div className="shopping-cart-container p-4">
      <div className="text-right py-1">
        <GrClose
          size="1.5em"
          onClick={toggleShoppingCart}
          style={{ cursor: "pointer" }}
        />
      </div>
      <h4 className="section-title text-center mb-3">My Cart</h4>
      <h6>Cart Summary</h6>

      {itemsCount <= 0 && (
        <div className="card text-center p-1 my-3">
          <BsCart2 className="primary-color mx-auto" size="3em" />
          <p className="my-3">
            Your shopping cart is empty, start adding some stuff..
          </p>
        </div>
      )}
      {itemsCount > 0 && (
        <>
          <div className="card p-1">
            <div className="row">
              <div className="col-4">
                <img src={productImg} alt="product" />
              </div>
              <div className="col-8">
                <p className="mb-1">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit.
                </p>
                <p>Quantity: {itemsCount}</p>
                <div className="clearfix">
                  <div className="float-left">
                    <p className="primary-color pt-1">9,999 LE</p>
                  </div>
                  <div className="float-right">
                    <button className="button button-secondary">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-center my-3">Total: 19,999 LE</h5>
          <div className="d-flex justify-content-between">
            <button className="button button-secondary mr-3">
              Review Cart
            </button>
            <button className="button button-main">Complete Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
