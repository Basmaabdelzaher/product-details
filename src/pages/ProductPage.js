import React from "react";
import Product from "../components/Product";
import SimilarProducts from "../components/SimilarProducts";
import { getSimilarProducts } from "../services/dummy-services";
import { useEffect, useState } from "react";
import { getProductDetails } from "../services/dummy-services";

function ProductPage({updateItemsCount}) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    setProduct(getProductDetails());
    setSimilarProducts(getSimilarProducts());
    setLoading(false);
  }, []);

  if (loading)
    return <h4 className="p-3">Product is loading, please wait ...</h4>;
  else
    return (
      <main className="section-padding">
        <Product product={product} updateItemsCount={updateItemsCount}/>

        <h1 className="section-title">Similar Products</h1>
        <h5 className="text-secondary mb-3">You may like these products also</h5>

        <SimilarProducts similarProducts={similarProducts} />
      </main>
    );
}

export default ProductPage;
