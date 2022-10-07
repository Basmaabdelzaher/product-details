import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./components/ShoppingCart";
import Overlay from "./components/Overlay";

function App() {
  const [itemsCount, setItemsCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  function updateItemsCount(count) {
    setItemsCount(itemsCount + count);
  }
  function toggleShoppingCart() {
    setShowCart(!showCart);
  }
  return (
    <div className="container-fluid">
      { showCart && <ShoppingCart toggleShoppingCart={toggleShoppingCart} itemsCount={itemsCount}/>}
      { showCart && <Overlay /> }
      <Header itemsCount={itemsCount} toggleShoppingCart={toggleShoppingCart} />
      <ProductPage updateItemsCount={updateItemsCount}></ProductPage>
      <Footer />
    </div>
  );
}

export default App;
