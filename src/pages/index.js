import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </>
  );
};

export default Home;
