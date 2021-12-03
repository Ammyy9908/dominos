import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-item">
          <div className="footer-item-header">Company</div>
          <div className="footer-item-links">
            <a href="#blog">Blog</a>
            <a href="#invest">Investor</a>
            <a href="#feedback">Feedback</a>
            <a href="#ads">Ads</a>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item-header">About</div>
          <div className="footer-item-links">
            <a href="#gift">Gift Card</a>
            <a href="#enquiry">Card Balance Enquiry</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item-header">Legal</div>
          <div className="footer-item-links">
            <a href="#disclaimer">Disclaimer</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-item">
          <div className="footer-item-header">Social Media</div>
          <div className="footer-item-links social-links">
            <a href="#fb">
              <img
                src="https://www.dominos.co.in/assets/fb.png"
                alt="facebook-icon"
              />
            </a>
            <a href="#twitter">
              <img
                src="https://www.dominos.co.in/assets/twitter.png"
                alt="twitter-icon"
              />
            </a>
            <a href="#insta">
              <img
                src="https://www.dominos.co.in/assets/instagram.png"
                alt="insta-icon"
              />
            </a>
            <a href="#yt">
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
