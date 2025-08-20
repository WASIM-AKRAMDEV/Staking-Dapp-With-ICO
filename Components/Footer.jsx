import React from "react";
// INTERNAL IMPORT
import {
 
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";



import { configureChains } from "wagmi";

const Footer = () => {
  const social = [
    {
      link: "#",
      icon: <FaTwitter />,
    },
    {
      link: "#",
      icon: <FaFacebookF />,
    },
    {
      link: "#",
      icon: <FaLinkedinIn />,
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6  col-lg-6 col-xl-4 order-1 order-lg-4 order-xl-1">
            <div className="footer__logo">
              <img src="img/logo.svg" alt="" />
            </div>

            <p className="footer__tagline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              consequatur deleniti ipsam quaerat eius, optio commodi facilis
              veritatis magni saepe ratione debitis?
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-3 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
            <h6 className="footer__title">Company</h6>
            <div className="footer__nav">
              <a href="#">About Centure</a>
              <a href="#">Our news</a>
              <a href="#">Licenses</a>
              <a href="#">Contacts</a>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-2 order-md-3 order-lg-1 order-xl-2">
            <div className="row">
              <div className="col-12">
                <h6 className="footer__title">Services &amp; features </h6>
              </div>

              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Invest</a>
                  <a href="#">Token</a>
                  <a href="#">Affilate</a>
                  <a href="#">Contest</a>
                </div>
              </div>

              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Safety</a>
                  <a href="#">Automatization</a>
                  <a href="#">Analytics</a>
                  <a href="#">Reports</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-4 order-md-4 order-lg-3 order-xl-4">
            <h6 className="footer__title">Support</h6>
            <div className="footer__nav">
              <a href="#">Help center</a>
              <a href="#">How it works</a>
              <a href="#">Privacy policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <div className="footer__social">
                {social.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ti">{item.icon}</i>
                    </a>
                  );
                })}
              </div>
              <small className="footer__copyright">
                © Centure 2025 · Created by 
                <a href="#" target="_blank">
                  — Wasim Akram — The Blockchain Developer
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
