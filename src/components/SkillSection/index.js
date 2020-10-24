import React, { Component } from "react";
import {
  SkillContainer,
  SkillH2,
  SkillCardWrapper,
  SkillCard,
  SkillCardContent,
} from "./SkillElements";

import { CircleProgress } from "react-gradient-progress";
import Aos from "aos";
import "aos/dist/aos.css";

import Css from "assets/images/css.svg";
import Html from "assets/images/html.svg";
import Js from "assets/images/javascript.svg";
class SkillSection extends Component {
  state = {
    skillcard: [
      {
        id: 1,
        img: <img src={Html} alt="" />,
        text: "lorem lorem lorem lorem lorem",
        progress: 90,
        color: ["#FC8C48", "#FABF9B"],
      },
      {
        id: 2,
        img: <img src={Css} alt="" />,
        text: "lorem lorem lorem lorem lorem",
        progress: 90,
        color: ["#70D6F9", "#1AA6D6"],
      },
      {
        id: 3,
        img: <img src={Js} alt="" />,
        text: "lorem lorem lorem lorem lorem",
        progress: 70,
        color: ["#FC657E", "#fabf9b"],
      },
    ],
  };

  render() {
    // useEffect(() => {
    //   Aos.init({ duration: 1500 });
    // }, []);
    return (
      <>
        <SkillContainer>
          <SkillH2>My Skills</SkillH2>
          <SkillCardWrapper>
            {this.state.skillcard.map((skill) => (
              <SkillCard key={skill.id}>
                {" "}
                {skill.img}
                <SkillCardContent>
                  <CircleProgress
                    percentage={skill.progress}
                    strokeWidth={8}
                    width={150}
                    primaryColor={skill.color}
                  />
                </SkillCardContent>
              </SkillCard>
            ))}
          </SkillCardWrapper>
        </SkillContainer>
      </>
    );
  }
}

export default SkillSection;
