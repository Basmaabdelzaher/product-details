import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProductSlider({ images }) {
  const breakpoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4},
    //{ width: 850, itemsToShow: 4 },
    // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    // { width: 1450, itemsToShow: 4 },
    // { width: 1750, itemsToShow: 4},
  ];

  const [currentImg, setCurrentImage] = useState(images[0]);
  return (
    <div>
      <img src={currentImg} alt="current-img" style={{width: '100%', height: 'auto'}} />
      <Carousel
        itemsToScroll={1}
        breakPoints={breakpoints}
        pagination={false}
        style={{ height: "120px" }}
        className="my-4"
        itemPadding={["5px", "5px", "5px", "5px"]}
        renderArrow={({ type, onClick, isEdge }) => (
          <div onClick={onClick}>
            {type === consts.PREV ? (
              <BsChevronLeft size="2em" className="carousel-arrows" />
            ) : (
              <BsChevronRight size="2em" className="carousel-arrows" />
            )}
          </div>
        )}
      >
        {images.map((img, index) => {
          return (
            <img
              src={img}
              key={index}
              alt="product-img"
              style={{cursor: 'pointer'}}
              onClick={() => setCurrentImage(img)}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
export default ProductSlider;
