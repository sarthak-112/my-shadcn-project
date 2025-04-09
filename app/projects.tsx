'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import Navbar from "./navbar";

interface Project {
  src: string;
  name: string;
  logo: string;
  description: string;
  className: string;
}

const projects: Project[] = [
    {
      src: "/adidas.svg",
      name: "Adidas",
      logo: "/adidas-logo.png",
      description: "Created Adidas back to school campaign",
      className: "",
    },
    {
      src: "/airbnb.svg",
      name: "Airbnb",
      logo: "/airbnb-logo.png",
      description: "Designed Airbnb landing page",
      className: "",
    },
    {
      src: "/audi.svg",
      name: "Audi",
      logo: "/audi-logo.png",
      description: "Developed Audi car configurator",
      className: "",
    },
    {
      src: "/paypal.svg",
      name: "Paypal",
      logo: "/paypal-logo.png",
      description: "Integrated Paypal payment gateway",
      className: "",
    },
    {
      src: "/sony.svg",
      name: "Sony",
      logo: "/sony-logo.png",
      description: "Developed Sony Playstation website",
      className: "",
    },
    {
      src: "/under-armour.svg",
      name: "Under Armour",
      logo: "/under-armour-logo.png",
      description: "Designed Under Armour fitness app",
      className: "",
    },
    {
      src: "/redbull.svg",
      name: "Redbull",
      logo: "/redbull-logo.png",
      description: "Created Redbull energy drink campaign",
      className: "",
    },
    {
      src: "/spalding.svg",
      name: "Spalding",
      logo: "/spalding-logo.png",
      description: "Designed Spalding basketball landing page",
      className: "",
    },
    {
      src: "/visa.svg",
      name: "Visa",
      logo: "/visa-logo.png",
      description: "Integrated Visa payment gateway",
      className: "",
    },
    {
      src: "/nord.svg",
      name: "Nordstrom",
      logo: "/nord-logo.png",
      description: "Designed Nordstrom ecommerce website",
      className: "",
    },
    {
      src: "/zara.svg",
      name: "Zara",
      logo: "/zara-logo.png",
      description: "Created Zara fashion campaign",
      className: "",
    },
  ];

const ReviewCard = ({
    src,
    name,
    description,
    onClick,
  }: {
    src: string;
    name: string;
    description: string;
    onClick: () => void;
  }) => {
    return (
      <motion.figure
        className="relative cursor-pointer overflow-hidden group aspect-[4/3] rounded-lg bg-white p-4"
        onClick={onClick}
      >
        <div className="relative h-full flex items-center justify-center">
          <Image
            width={300}
            height={300}
            src={src}
            alt="projects"
            className="object-contain w-full h-full"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>
      </motion.figure>
    );
  };

  const ProjectDetails = ({
    project,
    onClose,
  }: {
    project: (typeof projects)[0];
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full md:w-2/5 bg-black shadow-lg p-6 z-50 cursor-pointer"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          ×
        </button>
  
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">{project.name}</h2>
          <div className="bg-white p-4 rounded-lg mb-6 h-60 flex items-center justify-center">
            <Image
              src={project.src}
              alt={project.name}
              width={300}
              height={300}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-gray-300 mb-4">{project.description}</p>
  
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Project Details</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                Web Design
              </span>
              <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                Branding
              </span>
              <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                UI/UX
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<
      (typeof projects)[0] | null
    >(null);
  
    return (
      <div className="md:min-h-screen bg-white">
        <Navbar />
        <div className="pt-12 pb-6 px-6 mx-auto 2xl:w-4/5 md:px-16">
          <div className="mx-auto flex items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-2">
                Our Projects
              </h1>
              <p className="text-xl text-neutral-500">
                Discover our latest work and see how we've helped our clients achieve their goals
              </p>
            </div>
          </div>
        </div>
  
        <section className="w-full bg-white py-4 md:mx-auto 2xl:w-4/5 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ReviewCard
                key={index}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>
  
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelectedProject(null)}
              />
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

export default Projects;