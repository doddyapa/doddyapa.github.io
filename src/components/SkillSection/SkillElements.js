import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 80px 0;

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const SkillH2 = styled.h2`
  font-family: "Russo One", sans-serif;
  font-size: 36px;
  text-align: center;
  margin: 0 0 50px 0;
`;

export const SkillCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SkillCard = styled.div`
  flex-direction: column;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  margin: 0 40px;
  border-radius: 9px;
  width: 200px;
  /* width: 900px; */

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
  }

  :hover {
    -webkit-box-shadow: 13px 13px 7px -7px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 13px 13px 7px -7px rgba(0, 0, 0, 0.17);
    box-shadow: 5px 10px 40px #b3b3b3;
    transition: 0.4s;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    margin: 20px 0;
  }
`;

export const SkillCardContent = styled.p`
  color: #4b5156;
  font-family: "Roboto Mono", monospace;
`;

// export const SkillCardFace = styled.div`
//   width: 300px;
//   height: 200px;
//   transition: 0.5s;

//   .skill-card-face1 {
//     background: #06609c;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 1;
//     transform: translateY(100px);
//   }
// `;

// export const SkillCardFace1 = styled.div`
//   .skill-card:hover {
//     transform: translateY(0);
//     background: #06609c;
//   }
// `;

// export const SkillCardFace2 = styled.div`
//   background: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
//   box-sizing: border-box;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
//   transform: translateY(-100px);

//   .skill-card:hover {
//     transform: translateY(0);
//   }
// `;
