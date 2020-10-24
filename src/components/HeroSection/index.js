import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroIntroWrapper,
  HeroNavWrapper,
  HeroDotsWrapper,
  HeroBrowserDots,
  HeroLeftCol,
  BgLeftCol,
  HeroRightCol,
  PreviewShadow,
  HeroPreview,
  PreviewCorner,
  HeroH4,
  HeroP,
} from "./HeroElements";
import HeroLeftImage from "assets/images/foto1.jpg";
const HeroSection = () => {
  return (
    <>
      <HeroBg>
        <HeroContainer>
          <HeroIntroWrapper>
            <HeroNavWrapper>
              <HeroDotsWrapper>
                <HeroBrowserDots />
                <HeroBrowserDots />
                <HeroBrowserDots />
              </HeroDotsWrapper>
            </HeroNavWrapper>

            <HeroLeftCol>
              <BgLeftCol>
                <img src={HeroLeftImage} alt="" id="profile-pic" />
              </BgLeftCol>
            </HeroLeftCol>

            <HeroRightCol>
              <PreviewShadow id="preview-shadow">
                <HeroPreview id="preview">
                  <PreviewCorner></PreviewCorner>
                  <PreviewCorner></PreviewCorner>
                  <HeroH4>Hello! I'm Doddy Arlieno</HeroH4>
                  <HeroP>I'm Web Front-End Developer</HeroP>
                  <PreviewCorner></PreviewCorner>
                  <PreviewCorner></PreviewCorner>
                </HeroPreview>
              </PreviewShadow>
            </HeroRightCol>
          </HeroIntroWrapper>
        </HeroContainer>
      </HeroBg>
    </>
  );
};

export default HeroSection;
