import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 100px 0 0 0;

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContact = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  img {
    display: flex;
    width: 100%;
    height: auto;
    background-size: cover;
  }

  /* @media screen and (max-width: 475px) {
    width: 50%;
  } */
`;

export const RightContact = styled.div`
  background-color: #06609c;
  flex: 1;
  position: relative;
  align-items: center;
  width: 100%;
  margin: 0 0 0 48px;

  ::after {
    content: "";
    position: absolute;
    top: -5%;
    left: 3%;
    z-index: -1;
    width: 105%;
    height: 550px;
    /* -moz-border-radius: 70px; 
  -webkit-border-radius: 70px; 
  border-radius: 70px; */
    border: 5px solid #06609c;
  }

  @media screen and (max-width: 800px) {
    ::after {
      display: none;
    }
    margin-top: 20px;
    margin-left: 0;
  }

  @media screen and (max-width: 1024px) {
    ::after {
      display: none;
    }
  }
`;

export const ContactH2 = styled.h2`
  font-size: 36px;
  color: black;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  text-align: center;
  color: white;
  margin-top: 50px;
`;

export const RightContactTop = styled.ul`
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
`;

export const RightContactTopItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  span:first-child {
    flex-basis: 15%;
    margin-right: 20px;
  }

  span:last-child {
    color: white;
    font-family: "Roboto Mono", monospace;
    font-size: 16px;
    margin: 20px 0 0 50px;
  }
  img {
    width: 100%;
    margin: 20px 0 0 50px;
  }
`;
