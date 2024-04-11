"use client";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
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
    <div className="w-full pt-10 text-white">
      <ul className="space-y-8 md:space-y-12 md:px-20 lg:px-44 xl:px-64 2xl:px-[44rem]  flex flex-col">
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
