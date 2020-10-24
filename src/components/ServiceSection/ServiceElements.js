import styled from "styled-components";

export const ServiceContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 80px 0;

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const ServiceH2 = styled.h2`
  font-family: "Russo One", sans-serif;
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ServiceP = styled.p`
  color: #4b5156;
  font-family: "Roboto Mono", monospace;
  text-align: center;
`;

export const ServiceCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ServiceCard = styled.div`
  flex-grow: 1;
  /* background-color: #48a7ff; */
  padding: 20px 20px;
  -webkit-box-shadow: 13px 13px 7px -7px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 13px 13px 7px -7px rgba(0, 0, 0, 0.17);
  box-shadow: 13px 13px 7px -7px rgba(0, 0, 0, 0.17);

  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const ServiceCardImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const ServiceCardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 20px;
  color: black;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
`;
