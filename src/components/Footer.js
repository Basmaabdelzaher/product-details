import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="row section-padding">
      <div className="col-12">
        <div className="row my-2 justify-content-between">
          <div className="col-lg-6">
            <img src="../images/yellow-logo.svg" alt="logo" className="my-5" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
            </p>
            <p>
              m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit
            </p>
          </div>
          <div className="col-lg-5 mt-5">
            <h5 className="text-light">Subscribe to our newsletter</h5>
            <div className="input-container">
              <input type="text" placeholder="Enter Your Mail" />
              <button className="button button-secondary">
                Subscribe <IoPaperPlaneOutline />
              </button>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 links-list">
                <ul>
                  <li>
                    <Link to="">About Us</Link>
                  </li>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="">Track Order</Link>
                  </li>
                  <li>
                    <Link to="">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="">Sell With Us</Link>
                  </li>
                  <li>
                    <Link to="">Shipping And Returns</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 links-list">
                <ul>
                  <li>
                    <Link to="">
                      <img
                        src="../images/Group 1432.svg"
                        alt="facebook"
                        className="social-logo"
                      />
                      /YESHTERY
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="../images/Group 1435.svg"
                        alt="linkedIn"
                        className="social-logo"
                      />
                      /YESHTERY
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="../images/Group 1433.svg"
                        alt="instgram"
                        className="social-logo"
                      />
                      /YESHTERY
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="../images/Group 1434.svg"
                        alt="twitter"
                        className="social-logo"
                      />
                      /YESHTERY
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
        <div className="row justify-content-between align-items-center pb-3">
          <div className="col my-1">
            <p>© 2021 yeshtery, all rights reserved.</p>
          </div>
          <div className="col my-1">
            <div className="d-flex">
              <img src="../images/Rectangle 586.png" alt="cashondelivery" className="mr-2"/>
              <img src="../images/Group 1437.png" alt="visa" className="mr-2" />
              <img src="../images/Group 1438.png" alt="mastercard" className="mr-2" />
            </div>
          </div>
          <div className="col text-right my-1">
            Powered By
            <img src="../images/Group 1439.svg" alt="nasnav" className="ml-2 pb-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
