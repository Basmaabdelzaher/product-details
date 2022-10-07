import React from "react";
import ProductCard from "./ProductCard";

function SimilarProducts({ similarProducts }) {
  return (
    <div className="row mb-3">
      {similarProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}
export default SimilarProducts;
