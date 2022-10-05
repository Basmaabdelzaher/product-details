import React from 'react';
import { useEffect, useState } from 'react';
import { getProductDetails } from '../services/dummy-services';
import ProductSlider from './ProductSlider';

function Product() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProduct(getProductDetails());
        setLoading(false);
    }, []);

    if (loading)
        return <h4 className="p-3">Product is  loading, please wait ...</h4>
    else
        return (
            <div className="row section-padding">
                <div className="col-lg-7">
                    {/* <img src={require('../images/Group 333.png')} alt="img"/> */}
                    <ProductSlider images={product.images} />
                </div>
                <div className="col-lg-5">
                    product details here
            </div>

            </div>
        )
}
export default Product;