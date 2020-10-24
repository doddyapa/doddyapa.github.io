import React, { Component } from "react";
import {
  BgProject,
  ProjectContainer,
  BgTop,
  ProjectH2,
  Projects,
  ProjectImg,
  ProjectText,
} from "./ProjectElements";
import BackgroundProject from "assets/images/projects.png";
import ProjectImages from "assets/images/adidas.jpg";
import ProjectImages2 from "assets/images/explain.ind.jpg";
import ProjectImages3 from "assets/images/greenery.jpg";
class ProjectSection extends Component {
  state = {
    projects: [
      {
        id: 1,
        img: <img src={ProjectImages} alt="" />,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore a tenetur id necessitatibus aliquid voluptatem deserunt repellendus vitae possimus accusantium",
      },
      {
        id: 2,
        img: <img src={ProjectImages2} alt="" />,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore a tenetur id necessitatibus aliquid voluptatem deserunt repellendus vitae possimus accusantium",
      },
      {
        id: 3,
        img: <img src={ProjectImages3} alt="" />,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore a tenetur id necessitatibus aliquid voluptatem deserunt repellendus vitae possimus accusantium",
      },
    ],
  };
  render() {
    return (
      <>
        <BgProject>
          <ProjectContainer>
            <BgTop>
              <img src={BackgroundProject} alt="" />
            </BgTop>
            <ProjectH2>My Projects</ProjectH2>
            {this.state.projects.map((project) => (
              <Projects key={project.id}>
                <ProjectImg>{project.img}</ProjectImg>
                <ProjectText>{project.text}</ProjectText>
              </Projects>
            ))}
          </ProjectContainer>
        </BgProject>
      </>
    );
  }
}

export default ProjectSection;
