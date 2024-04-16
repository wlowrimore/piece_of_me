"use client";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
// Modal Imports
import TechSkills from "../Modals/TechSkills";
import Experience from "../Modals/Experience";
import Education from "../Modals/Education";
import Certifications from "../Modals/Certifications";
import Testimonials from "../Modals/Testimonials";
import ResumeDownload from "./ResumeDownload";

const LinksSection: React.FC = () => {
  const [techSkillsOpen, setTechSkillsOpen] = useState<boolean>(false);
  const [experienceOpen, setExperienceOpen] = useState<boolean>(false);
  const [educationOpen, setEducationOpen] = useState<boolean>(false);
  const [certificationsOpen, setCertificationsOpen] = useState<boolean>(false);
  const [testimonialsOpen, setTestimonialsOpen] = useState<boolean>(false);

  const handleOpenTechSkills = (): void => {
    setTechSkillsOpen(!techSkillsOpen);
  };

  const handleOpenExperience = (): void => {
    setExperienceOpen(!experienceOpen);
  };

  const handleOpenEducation = (): void => {
    setEducationOpen(!educationOpen);
  };

  const handleOpenCertifications = (): void => {
    setCertificationsOpen(!certificationsOpen);
  };

  const handleOpenTestimonials = (): void => {
    setTestimonialsOpen(!testimonialsOpen);
  };

  return (
    <div className="w-full pt-10 text-white 2xl:pt-0">
      <ul className="space-y-12 md:space-y-12 md:px-20 lg:px-44 xl:px-64 2xl:px-[44rem]  flex flex-col">
        <Fade direction={"left"} duration={1000} triggerOnce={true}>
          <li
            onClick={handleOpenTechSkills}
            className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between cursor-pointer hover:bg-zinc-200/10 rounded-t-xl transition duration-300"
          >
            <span>
              <FaRegEye />
            </span>
            Technical Skills
          </li>
        </Fade>
        <Fade
          direction={"right"}
          delay={300}
          duration={1000}
          triggerOnce={true}
        >
          <li
            onClick={handleOpenExperience}
            className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between cursor-pointer hover:bg-zinc-200/10 rounded-t-xl transition duration-300"
          >
            <span>
              <FaRegEye />
            </span>
            Experience
          </li>
        </Fade>
        <Fade direction={"left"} delay={600} duration={1000} triggerOnce={true}>
          <li
            onClick={handleOpenEducation}
            className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between cursor-pointer hover:bg-zinc-200/10 rounded-t-xl transition duration-300"
          >
            <span>
              <FaRegEye />
            </span>
            Education
          </li>
        </Fade>
        <Fade
          direction={"right"}
          delay={800}
          duration={1000}
          triggerOnce={true}
        >
          <li
            onClick={handleOpenCertifications}
            className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between cursor-pointer hover:bg-zinc-200/10 rounded-t-xl transition duration-300"
          >
            <span>
              <FaRegEye />
            </span>
            Certifications
          </li>
        </Fade>
        <Fade
          direction={"left"}
          delay={1000}
          duration={1000}
          triggerOnce={true}
        >
          <li
            onClick={handleOpenTestimonials}
            className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between cursor-pointer hover:bg-zinc-200/10 rounded-t-xl transition duration-300"
          >
            <span>
              <FaRegEye />
            </span>
            Testimonials
          </li>
        </Fade>
      </ul>
      <ResumeDownload
        downloadSuccess={false}
        handleDownload={() => {}}
        parentNode={null}
      />
      {techSkillsOpen && (
        <TechSkills handleOpenTechSkills={handleOpenTechSkills} />
      )}
      {experienceOpen && (
        <Experience handleOpenExperience={handleOpenExperience} />
      )}
      {educationOpen && <Education handleOpenEducation={handleOpenEducation} />}
      {certificationsOpen && (
        <Certifications handleOpenCertifications={handleOpenCertifications} />
      )}
      {testimonialsOpen && (
        <Testimonials handleOpenTestimonials={handleOpenTestimonials} />
      )}
    </div>
  );
};

export default LinksSection;
