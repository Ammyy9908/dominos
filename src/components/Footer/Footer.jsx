import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-item">
          <div className="footer-item-header">Company</div>
          <div className="footer-item-links">
            <a href="#">Blog</a>
            <a href="#">Investor</a>
            <a href="#">Feedback</a>
            <a href="#">Ads</a>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item-header">About</div>
          <div className="footer-item-links">
            <a href="#">Gift Card</a>
            <a href="#">Card Balance Enquiry</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item-header">Legal</div>
          <div className="footer-item-links">
            <a href="#">Disclaimer</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-item">
          <div className="footer-item-header">Social Media</div>
          <div className="footer-item-links social-links">
            <a href="#">
              <img
                src="https://www.dominos.co.in/assets/fb.png"
                alt="facebook-icon"
              />
            </a>
            <a href="#">
              <img
                src="https://www.dominos.co.in/assets/twitter.png"
                alt="twitter-icon"
              />
            </a>
            <a href="#">
              <img
                src="https://www.dominos.co.in/assets/instagram.png"
                alt="insta-icon"
              />
            </a>
            <a href="#">
              <img
                src="https://www.dominos.co.in/assets/You_tube.png"
                alt="yt-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
