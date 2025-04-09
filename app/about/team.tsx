"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi";

interface StatItemProps {
  label: string;
  value: string;
}

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  social: SocialLinks;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <div
    className="flex flex-col items-center border-b md:border-b-0 
    md:border-l border-gray-700 px-4 py-6 first:border-l-0 
    flex-1 text-center bg-gray-900 rounded-lg m-2 p-4 hover:bg-gray-800 transition-colors"
  >
    <h3 className="text-gray-400 text-base mb-4">{label}</h3>
    <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white">{value}</span>
  </div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    {icon}
  </Link>
);

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  description,
  social,
}) => (
  <motion.div className="flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
    <div className="relative overflow-hidden group aspect-[4/3]">
      <motion.div transition={{ duration: 0.4 }} className="h-full w-full">
        <Image
          height={400}
          width={400}
          src={image}
          alt={name}
          className="object-contain w-full h-full bg-gray-800"
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
      />
    </div>
    <div className="pt-6 space-y-3 flex-1 p-6">
      <h3 className="font-medium text-xl text-white">{name}</h3>
      <p className="text-blue-400 font-medium">{role}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      <div className="flex gap-4 pt-4">
        {social.linkedin && (
          <SocialIcon
            href={social.linkedin}
            icon={<PiLinkedinLogo size={20} />}
          />
        )}
        {social.twitter && (
          <SocialIcon
            href={social.twitter}
            icon={<PiTwitterLogo size={20} />}
          />
        )}
      </div>
    </div>
  </motion.div>
);

const stats: StatItemProps[] = [
  { label: "Team Size", value: "6" },
  { label: "Research", value: "1" },
  { label: "Engineers", value: "2" },
  { label: "Data Science", value: "1" },
  { label: "Strategy", value: "1" },
  { label: "Entrepreneurs", value: "1" },
];

const teamMembers: Omit<TeamMemberProps, "index">[] = [
    {
        name: "Sarthak Waghmode",
        role: "Senior Software Engineer",
        image: "/Sarthak-Waghmode.jpg",
        description: "Full-stack development and system architecture",
        social: {
          linkedin: "https://www.linkedin.com",
          twitter: "https://twitter.com",
        },
    },
  {
    name: "Dikshita Belchada",
    role: "Lead Research Scientist",
    image: "/Dikshita-Belchada.jpg",
    description: "Pioneering AI research in healthcare applications",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  
  
  {
    name: "Anurag Bhole",
    role: "Data Science Lead",
    image: "/Anurag-Bhole.png",
    description: "Machine learning and predictive analytics",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Rohit Thakur",
    role: "Software Engineer",
    image: "/Rohit-Thakur.png",
    description: "Frontend development and UI/UX design",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Sujal Kesharwani",
    role: "Strategy Director",
    image: "/john-smith.jpg",
    description: "Business strategy and market analysis",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Manthan Sapkal",
    role: "Founder & CEO",
    image: "/john-smith.jpg",
    description: "Visionary leader and serial entrepreneur",
    social: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const Team = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-lg uppercase tracking-wider text-blue-400 mb-6 font-bold">
            Our Team
          </p>
          <p className="text-gray-300 max-w-3xl text-lg text-justify">
            Our team consists of dedicated professionals with diverse expertise in healthcare, technology, and innovation. Together, we work to create meaningful impact through cutting-edge solutions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between w-full mb-20">
          {stats.map((stat, index) => (
            <StatItem key={index} label={stat.label} value={stat.value} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;