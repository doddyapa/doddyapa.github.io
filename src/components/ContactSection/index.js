// import React from "react";
// import {
//   ContactContainer,
//   ContactWrapper,
//   LeftContact,
//   RightContact,
//   ContactH2,
//   RightContactTop,
//   RightContactTopItem,
// } from "./ContactElements";
// import LeftContactImg from "assets/images/contact.jpg";
// import Google from "assets/images/google-plus.svg";
// import Whatsapp from "assets/images/whatsapp.svg";

// const ContactSection = () => {
//   return (
//     <>
//       <ContactContainer>
//         <ContactWrapper>
//           <LeftContact>
//             <img src={LeftContactImg} alt="" />
//           </LeftContact>

//           <RightContact>
//             <ContactH2>Contact Me</ContactH2>
//             <RightContactTop>
//               <RightContactTopItem>
//                 <span>
//                   {" "}
//                   <img src={Google} alt="" />
//                 </span>
//                 <span>MerganLori</span>
//               </RightContactTopItem>
//             </RightContactTop>
//           </RightContact>
//         </ContactWrapper>
//       </ContactContainer>
//     </>
//   );
// };

// export default ContactSection;

import React, { Component } from "react";
import {
  ContactContainer,
  ContactWrapper,
  LeftContact,
  RightContact,
  ContactH2,
  RightContactTop,
  RightContactTopItem,
} from "./ContactElements";

import Aos from "aos";
import LeftContactImg from "assets/images/contact.jpg";
import Google from "assets/images/google-plus.svg";
import Whatsapp from "assets/images/whatsapp.svg";

class ContactSection extends Component {
  state = {
    logos: [
      {
        id: 1,
        img: <img src={Google} alt="" />,
        text: "Lorem Lorem Lorem",
      },
      {
        id: 2,
        img: <img src={Whatsapp} alt="" />,
        text: "Lorem Lorem Lorem",
      },
      //   {
      //     id: 3,
      //     img: <img src={ProjectImages3} alt="" />,
      //     text: "Lorem Lorem Lorem",
      //   },
    ],
  };

  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  componentDidUpdate() {
    Aos.init({ duration: 2000 });
  }

  render() {
    return (
      <>
        <ContactContainer>
          <ContactWrapper>
            <LeftContact data-aos={"fade-right"} data-aos-once={"false"}>
              <img src={LeftContactImg} alt="" />
            </LeftContact>
            <RightContact>
              <ContactH2>Contact Me</ContactH2>

              <RightContactTop data-aos={"fade-left"}>
                {this.state.logos.map((logo) => (
                  <RightContactTopItem key={logo.id}>
                    <span>{logo.img}</span>
                    <span>{logo.text}</span>
                  </RightContactTopItem>
                ))}
              </RightContactTop>
            </RightContact>
          </ContactWrapper>
        </ContactContainer>
      </>
    );
  }
}

export default ContactSection;
