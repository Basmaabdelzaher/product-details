import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Line } from 'react-icons/ri';
import { BsHandbag } from 'react-icons/bs';
import { FiPhoneCall, FiShoppingCart, FiMapPin, FiSearch, FiHeart, FiUser } from 'react-icons/fi';
import brand from '../images/adidas.svg';
function Header() {
    return (
        <div className="container-fluid">
            <div class="row justify-content-between align-items-baseline top-banner">
                <div className="col-md-2">
                    <h3>
                        <RiMenu2Line />
                        Yeshtry
                    </h3>
                </div>
                <div className="col-md-5">
                    <p>
                        Valentine’s Day Offers! Buy Two Get One Free <u className="font-weight-bold">Shop Now</u>
                    </p>
                </div>
                <div className="col-md-5">
                    <span className="mx-1">
                        <FiPhoneCall />
                        Contact Us
                    </span>
                    <span>
                        <FiShoppingCart />
                        Track Order
                </span>
                    <span>
                        <FiMapPin />
                        Find A Store
                </span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <h3>
                        <FiSearch />
                        Search
                </h3>
                </div>
                <div className="col-md-5">
                    <img src={brand} alt="brand-logo" />
                </div>
                <div className="col-md-5">
                    <span>
                        <BsHandbag />
                        Cart
                </span>
                    <span>
                        <FiHeart />
                        Wishlist
                </span>
                    <span>
                        <FiUser />
                        Login
                </span>
                </div>
            </div>

            <div className="row justify-content-between bottom-banner">
                <span>Men</span>
                <span>Women</span>
                <span>Unisex</span>
                <span>Kids</span>
                <span>Best Sellers</span>
                <span>New Arrivals</span>
                <span>Offers</span>
            </div>
        </div>
    )
} export default Header;