"use client";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import TechSkills from "../Modals/TechSkills";
import Experience from "../Modals/Experience";
import Education from "../Modals/Education";
import Certifications from "../Modals/Certifications";
import Testimonials from "../Modals/Testimonials";

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
    <div className="w-full pt-10 text-white">
      <ul className="space-y-8 flex flex-col">
        <li
          onClick={handleOpenTechSkills}
          className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between"
        >
          <span>
            <FaRegEye />
          </span>
          Technical Skills
        </li>
        <li
          onClick={handleOpenExperience}
          className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between"
        >
          <span>
            <FaRegEye />
          </span>
          Experience
        </li>
        <li
          onClick={handleOpenEducation}
          className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between"
        >
          <span>
            <FaRegEye />
          </span>
          Education
        </li>
        <li
          onClick={handleOpenCertifications}
          className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between"
        >
          <span>
            <FaRegEye />
          </span>
          Certifications
        </li>
        <li
          onClick={handleOpenTestimonials}
          className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between"
        >
          <span>
            <FaRegEye />
          </span>
          Testimonials
        </li>
      </ul>
      <div className="w-full text-center mt-12 py-2 px-6 bg-blue-300 rounded-3xl">
        <p className="text-zinc-950 font-semibold">Download Printable Resume</p>
      </div>
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
