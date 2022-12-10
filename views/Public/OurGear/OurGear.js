//libs
import React from "react";
//styles
import S from "./gear.module.scss";
import Shortshirt from '../../../images/short_shirt.png';
import Longshirt from '../../../images/long_shirt.png';
import Sweaters from '../../../images/sweater_image.png';
import Hoodies from '../../../images/hoodies.png';


import { HeaderFooterHoc } from "src/components";

const OurGear = ({ }) => {
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <div className="container">
              <div className="row">
                <h2 className={`text-center  ${S.contact_heading}`}>Our Gear</h2>
              </div>
              <div className="row">
                <div className={S.main_grid}>
                  <div className={`${S.gear_short_shirt} ${S.gear_div}`}>
                    <img
                      // className={S.blur_logo_2}
                      src={Shortshirt}
                      alt="short shirt" />
                    <div className={S.img_content}>
                      <h3>T-Shirts</h3>
                      <ul>
                        <li>Short Sleeve</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${S.gear_long_shirt} ${S.gear_div}`}>
                    <img
                      // className={S.blur_logo_2}
                      src={Longshirt}
                      alt="longshirt" />
                    <div className={S.img_content}>
                      <h3>T-Shirts</h3>
                      <ul>
                        <li>Long Sleeve</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${S.gear_hoddies} ${S.gear_div}`}>
                    <img
                      // className={S.blur_logo_2}
                      src={Hoodies}
                      alt="hoodies" />
                    <div className={`d-flex flex-wrap ${S.img_content}`}>
                      <h3>Hoodies</h3>
                      <ul className={S.hoodies}>
                        <li>2XL</li>
                        <li><span>XL</span></li>
                        <li><span>L</span></li>
                        <li><span>M</span></li>
                        <li>S</li>
                        <li><span>XS</span></li>

                      </ul>
                    </div>

                  </div>
                  <div className={`${S.gear_sweaters} ${S.gear_div}`}>
                    <img
                      // className={S.blur_logo_2}
                      src={Sweaters}
                      alt="sweaters" />
                    <div className={S.img_content}>
                      <h3>Sweaters</h3>
                      <ul>
                        <li className="list-none invisible"></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </HeaderFooterHoc>
  );
};

export default OurGear;
