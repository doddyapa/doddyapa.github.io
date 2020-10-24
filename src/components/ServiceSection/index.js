import React, { Component } from "react";
import {
  ServiceContainer,
  ServiceH2,
  ServiceP,
  ServiceCardWrapper,
  ServiceCard,
  ServiceCardImage,
  ServiceCardText,
} from "./ServiceElements";
import ServiceImages from "assets/images/coding.svg";
import ServiceImages2 from "assets/images/web-design.svg";
class ServiceSection extends Component {
  state = {
    servicecard: [
      {
        id: 1,
        img: <img src={ServiceImages} alt="" />,
        text: "Website Developer",
      },
      {
        id: 2,
        img: <img src={ServiceImages2} alt="" />,
        text: "Website Design",
      },
    ],
  };
  render() {
    return (
      <>
        <ServiceContainer>
          <ServiceH2>My Service</ServiceH2>
          <ServiceP>
            Hello! my name is Doddy Arlieno Putra Asmara. I'm a student from
            Vocational High School 4 Malang, my expertise competency is software
            engineering, especially in website. Currently, I'm an intern at PT.
            MejaKita Edunusa Mandiri, in this company i take part in the
            frontend team and website developer
          </ServiceP>

          <ServiceCardWrapper>
            {this.state.servicecard.map((service) => (
              <ServiceCard key={service.id}>
                <ServiceCardImage>{service.img}</ServiceCardImage>
                <ServiceCardText>{service.text}</ServiceCardText>
              </ServiceCard>
            ))}
          </ServiceCardWrapper>
        </ServiceContainer>
      </>
    );
  }
}

export default ServiceSection;
