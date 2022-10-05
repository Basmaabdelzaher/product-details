import React from 'react';
import Carousel from 'react-elastic-carousel';

function ProductSlider({ images }) {
    return (
        <div>
            <Carousel itemsToScroll={1} itemsToShow={4}>
                {
                    images.map((img, index) => {
                        return <img src={img} key={index} alt="product-img" />
                    })
                }
            </Carousel>

        </div>
    )

} export default ProductSlider;