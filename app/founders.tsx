'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  PiLinkedinLogo,
  PiTwitterLogo,
  PiCaretLeftBold,
  PiCaretRightBold,
  PiInstagramLogo,
} from "react-icons/pi";
import Navbar from "./navbar";

interface Social {
    linkedin: string;
    twitter: string;
    website?: string;
    instagram?: string;
  }

interface Founder {
    name: string;
    role: string;
    image: string;
    description: string;
    social: Social;
  }

const founders: Founder[] = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/image-1.jpg",
      description: "Leading our vision with over a decade of experience in AI and business strategy",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Jamie Lee",
      role: "CTO",
      image: "/image-2.jpg",
      description: "Expert in AI technologies, driving innovation and technical excellence across our projects",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Morgan Smith",
      role: "Marketing Director",
      image: "/image-3.jpg",
      description: "Crafting impactful marketing strategies that resonate with our clients and their audiences",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Taylor Brown",
      role: "Lead Developer",
      image: "/image-4.jpg",
      description: "Creating innovative solutions with our expert development team",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Chris White",
      role: "Head of Design",
      image: "/image-4.jpg",
      description: "Driving creative direction and design excellence across all our projects",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Emily Green",
      role: "Product Manager",
      image: "/image-5.jpg",
      description: "Leading product development and strategy with a focus on user experience",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ];

const FounderCard = ({ founder }: { founder: typeof founders[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative w-64 h-64 mx-auto mb-6 rounded-lg overflow-hidden">
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
      <p className="text-gray-400 mb-4">{founder.role}</p>
      <p className="text-gray-300 mb-6">{founder.description}</p>
      <div className="flex justify-center space-x-6">
        <motion.a
          href={founder.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <PiLinkedinLogo className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={founder.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <PiTwitterLogo className="w-6 h-6" />
        </motion.a>
        {founder.social.instagram && (
          <motion.a
            href={founder.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <PiInstagramLogo className="w-6 h-6" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Founders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const itemsPerView = 3;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === founders.length - itemsPerView ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === founders.length - itemsPerView ? 0 : prevIndex + 1
    );
    setIsAutoRotating(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? founders.length - itemsPerView : prevIndex - 1
    );
    setIsAutoRotating(false);
  };

  const visibleFounders = founders.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="md:min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-10 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
              Our Founders
            </h1>
            <p className="text-xl text-neutral-500">
              Meet the team behind our success
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleFounders.map((founder, index) => (
            <FounderCard key={index} founder={founder} />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            <PiCaretLeftBold size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            <PiCaretRightBold size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Founders;