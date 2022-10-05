import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import {
  FiPhoneCall,
  FiShoppingCart,
  FiMapPin,
  FiHeart,
  FiUser,
} from "react-icons/fi";
import Breadcrumbs from "./Breadcrumbs";
function Header() {
  return (
    <div className="header">
      <div class="row justify-content-between align-items-baseline top-banner pt-2 section-padding">
        <div className="col-lg-3">
          <h4>
            <img src="./images/menu.svg" alt="menu-icon"/>
            <img src="./images/logo.svg" alt="yeshtry-logo" className="ml-3" />
          </h4>
        </div>
        <div className="col-lg-5">
          <p>
            <FaAngleLeft className="mx-1" />
            Valentine’s Day Offers! Buy Two Get One Free
            <Link to="" className="ml-1">
              <u>Shop Now</u>
            </Link>
            <FaAngleRight className="mx-1" />
          </p>
        </div>
        <div className="col-lg-4">
          <Link to="" className="mx-2">
            <FiPhoneCall className="mr-2" />
            Contact Us
          </Link>
          <Link to="" className="mx-2">
            <FiShoppingCart className="mr-2" />
            Track Order
          </Link>
          <Link to="" className="mx-2">
            <FiMapPin className="mr-2" />
            Find A Store
          </Link>
        </div>
      </div>

      <div className="row section-padding justify-content-between align-items-baseline py-3">
        <div className="col-md-4">
          <div className="search-box">
            <FaSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-md-4 text-center">
          <img src="./images/adidas.svg" alt="brand-logo" />
        </div>
        <div className="col-md-4">
          <Link to="" className="mx-3">
            <span className="header-cart">
              <MdOutlineShoppingBasket className="mr-1" size="1.9em" />
              <span className="counter">0</span>
            </span>
            Cart
          </Link>
          <Link to="" className="mx-3">
            <FiHeart className="mr-1" size="1.6em" />
            Wishlist
          </Link>
          <Link to="" className="mx-3">
            <FiUser className="mr-1" size="1.6em" />
            Login
          </Link>
        </div>
      </div>

      <nav className="row justify-content-between bottom-banner section-padding py-3">
        <div class="col">
            <Link to="">Men</Link>
        </div>
        <div class="col"><Link to="">Women</Link></div>
        <div class="col"><Link to="">Unisex</Link></div>
        <div class="col"><Link to="">Kids</Link></div>
        <div class="col"><Link to="">Best Sellers</Link></div>
        <div class="col"><Link to="">New Arrivals</Link></div>
        <div class="col"><Link to="" style={{color: 'red'}}>Offers</Link></div>
      </nav>

      <Breadcrumbs />
    </div>
  );
}
export default Header;
