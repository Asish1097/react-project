//libs
import React, { useState } from "react";
//styles
import S from "./about.module.scss";
import About from 'src/images/aboutus.JPEG'
import CarouselOne from 'src/images/carousal_one.jpg'
import CarouselTwo from 'src/images/carousal_two.jpg'
import CarouselThree from 'src/images/carousal_three.jpg'

import Carousel from 'react-bootstrap/Carousel';

import { HeaderFooterHoc } from "src/components";
import './about.module.scss';
const AboutUs = ({ }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <HeaderFooterHoc isLight showFooter>
      <div className={S.container}>
        <main className={S.main}>
          <div className={S.banner_sec}>
            <div className='container'>
              <div className="row">
                <h2 className={`text-center ${S.contact_heading}`}>About Us</h2>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-3 mt-3 mt-md-0">
                  <div className={S.aboutUs_carousel_div}>
                    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                      <Carousel.Item>
                        <img
                          className={S.aboutus_img}
                          src={CarouselOne}
                          alt="CarouselOne" />

                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={S.aboutus_img}
                          src={CarouselTwo}
                          alt="CarouselTwo" />

                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={S.aboutus_img}
                          src={CarouselThree}
                          alt="CarouselThree" />

                      </Carousel.Item>

                    </Carousel>
                  </div>

                </div>
                <div className="col-md-12 col-lg-9">
                  <div className={S.aboutus_contain}>
                    <h3>Our Mission Statement:</h3>
                    <p>We at Postablur, Inc. aim to create and maintain a social networking environment where all content creators can reach their audience without being charged to do so and where their audience can reach them directly without worry if they are actually receiving their support.</p>
                    <h3>Our Experience:</h3>
                    <p>We at Postablur, Inc. aim to create and maintain a social networking environment where all content creators can reach their audience without being charged to do so and where their audience can reach them directly without worry if they are actually receiving their support. We at Postablur, Inc. aim to create and maintain a social networking environment where all content creators can reach their audience without being charged to do so.</p>
                    <h3>Our Goals:</h3>
                    <ul>
                      <li>Create a new way to create content with content creators.</li>
                      <li>Create a new way to create content with content creators.</li>
                      <li>Create a new way to create content with content creators.</li>
                    </ul>


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

export default AboutUs;
