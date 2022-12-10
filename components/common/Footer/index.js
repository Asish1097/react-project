//libs
import React from "react";
import SnapchatIcon from 'src/images/icons/snapchat_icon.png'
import FacebookIcon from 'src/images/icons/facebook_icon.png'
import YoutubeIcon from 'src/images/icons/youtube_icon.png'
import TwitterIcon from 'src/images/icons/twitter_icon.png'
import InstaIcon from 'src/images/icons/instagram_icon.png'
import FooterApple from 'src/images/icons/appstore.svg'
import PostablurLogo from 'src/images/banner_logo.png'

//styles
import S from "./Footer.module.scss";

const Footer = ({ }) => {
  return (
    <footer className={S.footer}>
            
              <div className={S.footer_bg}>
                <div className={S.left_footer}>
                    <img
                      className={S.footer_left_img}
                      src={PostablurLogo}
                      alt="Footer left" />
                </div>
                <div>
                    <img
                      className={S.footer_right_img}
                      src={PostablurLogo}
                      alt="Footer right" />
                </div>
              </div>
            
        <div className="container">
            
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className={`d-flex ${S.footer_top}`}>
                    <p className="m-0">Create a Post, Add a Goal<span className={S.footer_span}>(the blur)</span>, Share it Online, & Draw earnings daily.</p>
                    <img
                      className={S.footer_logo}
                      src={FooterApple}
                      alt="Appstore" />
                </div>
                </div>
            </div>
            
            <div className={S.footer_width}>
            <div className="row">
                
                <div className="col-xs-6 col-sm-6 col-md offset-md-1">
                    <div className={S.footer_links}>
                        <h2>Explore</h2>
                        <ul className={`list-unstyled`}>
                            <li className={S.footer_li}>How It Works</li>
                            <li>About Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md">
                    <div className={S.footer_links}>
                        <h2>Customer Support</h2>
                            <ul className="list-unstyled">
                                <li>info@postablur.com</li>
                                <li>O# 214-215-0102</li>
                                <li>M-F 8am-5pm</li>
                            </ul>
                    </div>
                    
                </div>
                <div className="col-xs-6 col-sm-6 col-md">
                    <div className={S.footer_links}>
                        <h2>Company Info</h2>
                        <ul className="list-unstyled">
                            <li>Press Kit</li>
                            <li>Changelog</li>
                            <li>Investor Deck.pdf</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="col-xs-6 col-sm-6 col-md">
                    <div className={S.footer_links}>
                        <h2>Help</h2>
                        <ul className="list-unstyled">
                            <li> <span><a href="">Privacy Policy</a> </span>  &#38; <span><a href="">Terms</a> </span> </li>
                            <li>Don’t Sell My Info</li>
                        </ul>
                    </div>
                    
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3 mt-md-0">
                  <div className={S.footer_bottom}>
                    <p className={S.footer_bottom_heading}>Postablur, Inc. Registered Tradmark & Copyright © Postablur App 2020 - 2023</p>
                    <div className={S.footer_icons}>
                      <ul className={`list-unstyled d-flex ${S.social_icons}`}>

                      <li>
                        <a href="#" target="_blank">
                          <img
                            src={TwitterIcon}
                            alt="Twitter"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img
                            src={YoutubeIcon}
                            alt="Youtube"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img
                            src={SnapchatIcon}
                            alt="Snapchat"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img
                            src={InstaIcon}
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img
                            src={FacebookIcon}
                            alt="Facebook"
                          />
                        </a>
                      </li>
                    </ul>
                  
                </div>
                  </div>
                  
                </div>
                    
            </div>
        </div>
        {/* <div className={S.footer_bg}>
                <div className={S.left_footer}>
                    <img
                      className={S.footer_left_img}
                      src={PostablurLogo}
                      alt="Footer left" />
                </div>
                <div>
                    <img
                      className={S.footer_right_img}
                      src={PostablurLogo}
                      alt="Footer right" />
                </div>
              </div> */}
    </footer>
  );
};

export default Footer;
