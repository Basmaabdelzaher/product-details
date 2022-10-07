import React, { useRef } from "react";
import ProductSlider from "./ProductSlider";
import RatingStars from "./RatingStars"; 

function Product({product, updateItemsCount}) {
    // const [quantity, setQuantity] = useState(0);
    const quantityRef= useRef(0);

    return (
      <div className="row py-2">
        <div className="col-xl-5 p-4">
          <ProductSlider images={product.images} />
        </div>
        <div className="col-xl-5 py-4 product-details">
          <img src={product.logo} alt="logo" className="brand-img" />
          <h5 className="mt-3 mb-2">{product.title}</h5>
          <h6 className="mb-2 text-secondary">{product.gender}</h6>

          <div>
            <span >
                <RatingStars rate={product.rate} />
            </span>
            <h6 className="d-inline mx-3">{product.rate} of 5</h6>
            <h6 className="d-inline text-secondary">{product.ratings} Rates</h6>
          </div>

          <div className="my-2">
            <label className="section-title mr-3">
              {product.price} <span className="small mx-1">LE</span>
            </label>
            <del className="secondary-color mr-3">{product.oldPrice} LE</del>
            <label className="highlightLabel mr-3">
              {product.discount}% Off
            </label>
          </div>
          <hr />
          <h5 className="mb-3">Size</h5>
          <div>
            {product.availableSizes.map((sizeObj) => {
              return (
                <label key={sizeObj.id}>
                  <input type="radio" name="size" value={sizeObj.size} />
                  <span className="size-label">{sizeObj.size}</span>
                </label>
              );
            })}
          </div>
          <hr />

          <h5 className="mb-3">Color</h5>
          <div>
            {product.availableColors.map((colorObj) => {
              return (
                <label key={colorObj.id}>
                  <input type="radio" name="color" value={colorObj.color} />
                  <img src={colorObj.image} alt="color-img" />
                </label>
              );
            })}
          </div>
          <hr />

          <h5 className="mb-3">Quantity</h5>
          <div>
            <div className="input-container">
              <button onClick={() => quantityRef.current.value =  quantityRef.current.value == 0 ? 0 : +quantityRef.current.value - 1 }>-</button>
              <input type="number" defaultValue="0" ref={quantityRef} />
              
              <button onClick={() => quantityRef.current.value =  +quantityRef.current.value  + 1 }>+</button>
            </div>
          </div>

          <div className="my-4">
            <button className="button button-main my-2" onClick={() => updateItemsCount(+quantityRef.current.value)}>Add To Cart</button>
            <button className="button button-secondary mx-2 my-2">Pickup From Store</button>
          </div>
        </div>
      </div>
    );
}
export default Product;
