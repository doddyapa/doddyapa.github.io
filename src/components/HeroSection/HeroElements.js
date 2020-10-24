import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const HeroBg = styled.div`
  background-color: #06609c;
  /* z-index: 1;
  height:2000px; */
  display: flex;
  /* justify-content: center; */
`;

export const HeroIntroWrapper = styled.div`
  margin: 50px 0;
  background-color: #fff;
  border: 1px solid #c1c1c1;
  border-radius: 5px 5px 0 0;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "HeroNavWrapper HeroNavWrapper"
    "HeroLeftCol HeroRightCol";

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "HeroNavWrapper"
      "HeroLeftCol"
      "HeroRightCol";
  }
`;

export const HeroNavWrapper = styled.div`
  border-radius: 5px 5px 0 0;
  grid-area: HeroNavWrapper;
  border-bottom: 1px solid #c1c1c1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
`;

export const HeroDotsWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const HeroBrowserDots = styled.div`
  background-color: black;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  &:nth-child(1) {
    background-color: #fc6058;
  }

  &:nth-child(2) {
    background-color: #fec02f;
  }

  &:nth-child(3) {
    background-color: #2aca3e;
  }
`;

export const HeroLeftCol = styled.div`
  grid-area: HeroLeftCol;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const BgLeftCol = styled.div`
  width: 100%;

  #profile-pic {
    display: block;
    margin: 0 auto;
    height: 250px;
    width: 250px;
    object-fit: cover;
    border: 3px solid #06609c;
    /* border-right: 3px solid #06609c; */
  }
`;

export const HeroRightCol = styled.div`
  grid-area: HeroRightCol;
  display: grid;
  align-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const PreviewShadow = styled.div`
  &#preview-shadow {
    background-color: #06609c;
    width: 300px;
    height: 130px;
    padding-left: 10px;
    padding-top: 10px;
  }
`;

export const HeroPreview = styled.div`
  &#preview {
    width: 300px;
    border: 1.5px solid #17a2b8;
    background-color: #f0ead6;
    padding: 20px;
    position: relative;
  }

  @media screen and (max-width: 800px) {
    &#preview {
      width: 275px;
    }
  }

  @media screen and (max-width: 340px) {
    &#preview {
      width: 250px;
    }
  }
`;

export const PreviewCorner = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1.5px solid #17a2b8;
  background-color: #fff;
  position: absolute;

  &:nth-child(1) {
    top: -5px;
    left: -5px;
  }

  &:nth-child(2) {
    top: -5px;
    right: -5px;
  }

  &:nth-child(5) {
    bottom: -5px;
    right: -5px;
  }

  &:nth-child(6) {
    bottom: -5px;
    left: -5px;
  }
`;

export const HeroH4 = styled.h4`
  font-size: 24px;
  color: black;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
`;

export const HeroP = styled.p`
  color: #4b5156;
  font-family: "Roboto Mono", monospace;
  margin-top: 10px;
`;
