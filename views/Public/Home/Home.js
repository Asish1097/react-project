//libs
import React from "react";
//styles
import S from "./home.module.scss";
import AppStore from 'src/images/app_store.png'
import PostaBlur from 'src/images/postablur.png'
import FacebookIcon from 'src/images/icons/facebook_icon.png'
import YoutubeIcon from 'src/images/icons/youtube_icon.png'
import TwitterIcon from 'src/images/icons/twitter_icon.png'
import InstaIcon from 'src/images/icons/instagram_icon.png'
import SnapchatIcon from 'src/images/icons/snapchat_icon.png'
import TopMobile from 'src/images/mobile_frame/top-mobile.png'
import MobOne from 'src/images/mobile_frame/top1.png'
import MobTwo from 'src/images/mobile_frame/top2.png'
import MobThree from 'src/images/mobile_frame/top3.png'
import MobFour from 'src/images/mobile_frame/top4.png'
import MobFive from 'src/images/mobile_frame/top5.png'
import PostablurLogo from 'src/images/banner_logo.png'
import { HeaderFooterHoc } from "src/components";

const Home = ({ }) => {
  return (
    <HeaderFooterHoc>
      <div className={S.container}>
        <main className={S.main}>

          {/* End Header */}
          <div className={S.banner_sec}>
            <div className='container'>
              <div className={S.banner_wrap}>
                <div className='row'>
                  <div className='col-md-8'>
                    <div className={S.banner_summary}>
                      <div className={S.animated_pics}>
                        <img
                          className={S.blur_logo_2}
                          src={PostablurLogo}
                          alt="Postablur"
                        />
                        <img
                          className={S.blur_logo}
                          src={PostablurLogo}
                          alt="Postablur"
                        />
                      </div>

                      <h2>The 1st Social Network<br />
                        where Fan engagement<br />
                        unblurs Content Creators post.</h2>
                      <p>Simply create or upload content, add a Like or Credit goal, and set to share to other social networks. Your followers engage and each Like or Credit you receive incrementally
                        unblurs your post. </p>
                      <div className={S.btn_apps}>
                        <a href="#" target="_blank">
                          <img
                            src={AppStore}
                            alt="Postablur"
                          />
                        </a>
                        <a href="#">
                          <img
                            src={PostaBlur}
                            alt="Postablur"
                          />
                        </a>
                      </div>
                    </div>

                  </div>

                  <div className='col-md-4 text-md-right'>
                    <div className={S.home_right}>
                      <div className={S.rht_animated_pics}>
                        <img
                          className={S.b_logo1}
                          src={PostablurLogo}
                          alt="Postablur"
                        />
                        <img
                          className={S.b_logo2}
                          src={PostablurLogo}
                          alt="Postablur"
                        />
                      </div>

                      <div className={S.mobileslid}>
                        <img src={TopMobile} alt="" />
                      </div>
                      <div className={S.profilemsg}>
                        <img src={MobTwo} alt="top2" className="img-fluid" />
                      </div>
                      <div className={S.awesome}>
                        <img src={MobThree} alt="top3" className="img-fluid" />
                      </div>
                      <div className={S.profileone}><img src={MobFour} alt="top4" className="img-fluid" /></div>
                      <div className={S.emoji}><img src={MobFive} alt="top5" className="img-fluid" /></div>
                      <div className={S.profiletwo}><img src={MobOne} alt="top1" className="img-fluid" /></div>
                    </div>
                  </div>

                </div>
                <div className={`d-flex flex-wrap ${S.ban_btm}`}>

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

                  <p>Registered © CIRCA 2022-25 Postablur, Inc. Postablur App. <span><a href="#">Privacy Policy</a> and <a href="#">Terms</a></span></p>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </HeaderFooterHoc>
  );
};

export default Home;
