import styled from "styled-components";

export const BgProject = styled.div`
  position: relative;
  background-color: #06609c;
`;

export const ProjectContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 80px 0;

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const BgTop = styled.div`
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 95%;
    z-index: 0;
  }
`;

export const ProjectH2 = styled.h2`
  font-size: 36px;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  text-align: center;
  color: white;
`;

export const Projects = styled.div``;

export const ProjectImg = styled.div`
  img {
    display: flex;
    width: 100%;
    height: auto;
    margin: 5px 0 20px 0;
  }
`;

export const ProjectText = styled.p`
  color: #4b5156;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  color: white;
`;
