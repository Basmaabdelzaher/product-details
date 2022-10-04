import React from 'react';
import { Link } from 'react-router-dom';
function Breadcrumbs() {
  return (
    <div className="row section-padding py-4 bottom-border">
      <div className="col-12">
        <p className="font-weight-bold mb-0">
        <Link><u>Men</u></Link> / <Link><u>Clothing</u></Link> / <Link><u>Tops</u></Link> / <Link><u>Adidas</u></Link> / <Link>Adidas Black T-Shirt</Link>
        </p>
      </div>
    </div>
  );
}
export default Breadcrumbs;
