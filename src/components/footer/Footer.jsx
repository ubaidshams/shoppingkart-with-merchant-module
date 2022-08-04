import React from "react";
import foot from "./footer.module.css";
import { IoMdBriefcase, IoIosHelpCircle } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className={foot.footer_Section}>
      <div className={foot.footer_Upperhalf}>
        <div className={foot.footer_Links}>
          <div className={foot.footer_about}>
            <div>ABOUT</div>
            <div><Link to="#">About Us</Link></div>
            <div><Link to="#">Contact Us</Link></div>
            <div><Link to="#">Careers</Link></div>
            <div><Link to="#">ShoppingKart Stories</Link></div>
            <div><Link to="#">Press</Link></div>
            <div><Link to="#">ShoppingKart Wholesale</Link></div>
            <div><Link to="#">Corporate Information</Link></div>
          </div>
          <div className={foot.footer_help}>
            <div>HELP</div>
            <div><Link to="#">Payments</Link></div>
            <div><Link to="#">Shipping</Link></div>
            <div><Link to="#">Cancellation & Returns</Link></div>
            <div><Link to="#">FAQ</Link></div>
            <div><Link to="#">Report Infringement</Link></div>
          </div>
          <div className={foot.footer_policy}>
            <div>POLICY</div>
            <div><Link to="#">Return Policy</Link></div>
            <div><Link to="#">Terms Of Use</Link></div>
            <div><Link to="#">Security</Link></div>
            <div><Link to="#">Privacy</Link></div>
            <div><Link to="#">Sitemap</Link></div>
            <div><Link to="#">EPR Compliance</Link></div>
          </div>
          <div className={foot.footer_social}>
            <div>SOCIAL</div>
            <div><Link to="#">Facebook</Link></div>
            <div><Link to="#">Twitter</Link></div>
            <div><Link to="#">YouTube</Link></div>
          </div>
        </div>
        <div className={foot.sideBorder}></div>
        <div className={foot.footer_EmailContact}>
          <div>
            <div>Mail Us:</div>
            <div>
              ShoppingKart Private Limited, #88 3rd floor, Brigade
              Chambers,Gandhi Bazar Main Road, Basavanagudi Bengaluru, 560004,
              Karnataka, India
            </div>
          </div>
          <div>
            <div>Registered Office Address:</div>
            <div>
              ShoppingKart Private Limited, #88 3rd floor, Brigade
              Chambers,Gandhi Bazar Main Road, Basavanagudi Bengaluru, 560004,
              Karnataka, India CIN : U51109KA2012PTC066107 Telephone:{" "}
              <span>080-41204235</span>
            </div>
          </div>
        </div>
      </div>
      <div className={foot.bottomBorder}></div>
      <div className={foot.footer_Lowerhalf}>
        <div className={foot.Seller}>
          <span>
            <IoMdBriefcase />
          </span>
          <span><Link to="merchant-signup" >Become a Seller</Link></span>
        </div>
        <div className={foot.Advertise}>
          <span>
            <MdStars />
          </span>
          <span><Link to="#" >Advertise</Link></span>
        </div>
        <div className={foot.gift}>
          <span>
            <FaGift />
          </span>
          <span><Link to="#" >Gift Cards</Link></span>
        </div>
        <div className={foot.helpCenter}>
          <span>
            <IoIosHelpCircle />
          </span>
          <span><Link to="#">Help Center</Link></span>
        </div>
        <div className={foot.tradeMark}>© 2007-2022 ShoppingKart.com</div>
        <div className={foot.payments}>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
            alt="payments"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
