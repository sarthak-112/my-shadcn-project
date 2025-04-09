"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TabId = "projects" | "clients";
type CategoryId =
  | "all"
  | "branding"
  | "uxui"
  | "development"
  | "strategy"
  | "marketing"
  | "research"
  | "analytics";

interface TabCounts {
  projects: number;
  clients: number;
}

interface CategoryCount {
  projects: number;
  clients: number;
}

interface CategoryCounts {
  [key: string]: CategoryCount;
}

interface Project {
  id: number;
  name: string;
  video: string;
  title: string;
  description: string;
  category: CategoryId;
  size: string;
  imageHeight: string;
}

interface Client {
  id: number;
  name: string;
  image: string;
  description: string;
  category: CategoryId;
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const clients: Client[] = [
    {
      id: 1,
      name: "Coca Cola",
      image: "logo-1.svg",
      description:
        "Coca Cola is a global leader in the beverage industry, with a focus on extreme sports and entertainment. We worked with Coca Cola to develop a new brand identity and marketing strategy.",
      category: "branding",
    },
    {
      id: 2,
      name: "Amazon",
      image: "logo-2.svg",
      description:
        "Amazon is a leading e-commerce platform, with a focus on cloud-based solutions. We collaborated with Amazon to develop a new digital platform for their e-commerce business.",
      category: "development",
    },
    {
      id: 3,
      name: "Forbes",
      image: "logo-3.svg",
      description:
        "Forbes is a leading media company, with a focus on innovation and accessibility. We worked with Forbes to develop a new digital platform for their e-commerce business.",
      category: "uxui",
    },
    {
      id: 4,
      name: "Booking.com",
      image: "logo-4.svg",
      description:
        "Booking.com is a leading travel booking platform, with a focus on user experience and data analytics. We collaborated with Booking.com to develop a new brand identity and marketing strategy.",
      category: "branding",
    },
    {
      id: 5,
      name: "Microsoft",
      image: "logo-5.svg",
      description:
        "Microsoft is a leading software company, with a focus on innovation and accessibility. We collaborated with Microsoft to develop a new digital platform for their e-commerce business.",
      category: "development",
    },
    {
      id: 6,
      name: "PayPal",
      image: "logo-6.svg",
      description:
        "PayPal is a leading payment platform, with a focus on user experience and data analytics. We collaborated with PayPal to develop a new brand identity and marketing strategy.",
      category: "uxui",
    },
    {
      id: 7,
      name: "Under Armour",
      image: "under-armour.svg",
      description:
        "Under Armour is a leading sports apparel brand, with a focus on innovation and performance. We collaborated with Under Armour to develop a new brand identity and marketing strategy.",
      category: "uxui",
    },
    {
      id: 8,
      name: "Slack",
      image: "slack.svg",
      description:
        "Slack is a leading team collaboration platform, with a focus on user experience and accessibility. We collaborated with Slack to develop a new digital platform for their e-commerce business.",
      category: "analytics",
    },
    {
      id: 9,
      name: "LinkedIn",
      image: "linkedin-icon-2.svg",
      description:
        "LinkedIn is a leading professional networking platform, with a focus on user experience and data analytics. We collaborated with LinkedIn to develop a new brand identity and marketing strategy.",
      category: "marketing",
    },
    {
      id: 10,
      name: "Figma",
      image: "figma-icon.svg",
      description:
        "Partnered with Audi to develop a research framework for their autonomous driving initiative, focusing on user acceptance and adoption.",
      category: "research",
    },
    {
      id: 11,
      name: "Sony",
      image: "sony.svg",
      description:
        "Sony is a great client of ours. We have worked with them on a number of projects, including the development of a new digital platform for their e-commerce business.",
      category: "strategy",
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      name: "Sony",
      video:
        "https://videos.pexels.com/video-files/6572598/6572598-hd_1920_1080_25fps.mp4",
      title: "Innovating the future of entertainment",
      description:
        "Partnered with sony to introduce a new line of cameras, focusing on user experience and accessibility. And shot this promo video.",
      category: "branding",
      size: "col-span-12 md:col-span-4 row-span-1",
      imageHeight: "h-80",
    },
    {
      id: 2,
      name: "Adidas",
      video:
        "https://videos.pexels.com/video-files/4126123/4126123-uhd_2732_1440_25fps.mp4",
      title: "Innovation meets sustainability",
      description:
        "Until now, Qwant has been the search engine that knows nothing about you—and that hasn't changed. But there are some new developments.",
      category: "development",
      size: " col-span-12 md:col-span-4",
      imageHeight: "h-48",
    },
    {
      id: 3,
      name: "Tokyo Roast",
      video:
        "https://videos.pexels.com/video-files/2909914/2909914-uhd_2732_1440_24fps.mp4",
      title: "Craftsmanship in every cup",
      description:
        "Primary designs innovative, patient-centered medical offices. We crafted a brand for them that is as warm as it is modern, seamlessly bridging the gap between in-person and digital experiences.",
      category: "uxui",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-48",
    },
    {
      id: 4,
      name: "Spotify",
      video:
        "https://videos.pexels.com/video-files/5077471/5077471-uhd_1440_2732_25fps.mp4",
      title: "Music streaming reimagined",
      description:
        "Spotify is a leading music streaming service, with a focus on user experience and data analytics. We collaborated with Spotify to develop a new brand identity and marketing strategy.",
      category: "strategy",
      size: "col-span-12 row-span-2",
      imageHeight: "h-[600px]",
    },
    {
      id: 5,
      name: "Ecomworld",
      video:
        "https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4",
      title: "All-in-one ecommerce platform",
      description:
        "Ecomworld is an all in one platform for ecommerce businesses to set up their own storefronts. We build out the back-end technology to make it extremely scalable.",
      category: "branding",
      size: "col-span-12 md:col-span-6 row-span-1",
      imageHeight: "h-80",
    },
    {
      id: 6,
      name: "Toyota",
      video:
        "https://videos.pexels.com/video-files/4419251/4419251-hd_1920_1080_25fps.mp4",
      title: "Driving innovation forward",
      description:
        "Toyota is a global leader in the automotive industry, with a focus on innovation and sustainability. We worked with Toyota to develop a new digital platform for their e-commerce business.",
      category: "uxui",
      size: "col-span-12 md:col-span-6 row-span-1",
      imageHeight: "h-80",
    },
    {
      id: 7,
      name: "Visa",
      video:
        "https://videos.pexels.com/video-files/3945147/3945147-uhd_2732_1440_25fps.mp4",
      title: "Digital wallet experience",
      description:
        "Partnered with Visa to design a new digital wallet experience, focusing on user-centered design and accessibility.",
      category: "strategy",
      size: "col-span-12 md:col-span-3 row-span-1",
      imageHeight: "h-44",
    },
    {
      id: 8,
      name: "Tesla",
      video:
        "https://videos.pexels.com/video-files/27421705/12140050_2730_1440_30fps.mp4",
      title: "Automating the future",
      description:
        "Collaborated on enhancing Tesla's data analytics dashboard, providing deeper insights into user listening patterns and preferences.",
      category: "analytics",
      size: "col-span-12 md:col-span-3 row-span-1",
      imageHeight: "h-44",
    },
    {
      id: 9,
      name: "Nike",
      video:
        "https://videos.pexels.com/video-files/8533114/8533114-uhd_2560_1440_25fps.mp4",
      title: "Steps Towards Sustainability",
      description:
        "Developing a marketing campaign that brings Nike's commitment to sustainability to the forefront of their brand narrative.",
      category: "marketing",
      size: "col-span-12 md:col-span-6 row-span-2",
      imageHeight: "h-96",
    },
  ];

  const tabCounts = React.useMemo(() => {
    const projectCount = projects.length;
    const clientCount = clients.length;

    const categoryCount: Record<string, CategoryCount> = {
      all: {
        projects: projectCount,
        clients: clientCount,
      },
      branding: {
        projects: projects.filter((p) => p.category === "branding").length,
        clients: clients.filter((c) => c.category === "branding").length,
      },
      uxui: {
        projects: projects.filter((p) => p.category === "uxui").length,
        clients: clients.filter((c) => c.category === "uxui").length,
      },
      development: {
        projects: projects.filter((p) => p.category === "development").length,
        clients: clients.filter((c) => c.category === "development").length,
      },
      strategy: {
        projects: projects.filter((p) => p.category === "strategy").length,
        clients: clients.filter((c) => c.category === "strategy").length,
      },
      marketing: {
        projects: projects.filter((p) => p.category === "marketing").length,
        clients: clients.filter((c) => c.category === "marketing").length,
      },
      research: {
        projects: projects.filter((p) => p.category === "research").length,
        clients: clients.filter((c) => c.category === "research").length,
      },
      analytics: {
        projects: projects.filter((p) => p.category === "analytics").length,
        clients: clients.filter((c) => c.category === "analytics").length,
      },
    };

    return {
      tabCounts: {
        projects: projectCount,
        clients: clientCount,
      },
      categoryCounts: categoryCount,
    };
  }, []);

  const tabs = [
    { id: "projects" as const, name: "Projects", count: tabCounts.tabCounts.projects },
    { id: "clients" as const, name: "Clients", count: tabCounts.tabCounts.clients },
  ];

  const categories = [
    { id: "all" as const, name: "All", count: tabCounts.categoryCounts.all[activeTab] },
    {
      id: "branding" as const,
      name: "Branding",
      count: tabCounts.categoryCounts.branding[activeTab],
    },
    {
      id: "uxui" as const,
      name: "UX/UI",
      count: tabCounts.categoryCounts.uxui[activeTab],
    },
    {
      id: "development" as const,
      name: "Development",
      count: tabCounts.categoryCounts.development[activeTab],
    },
    {
      id: "strategy" as const,
      name: "Strategy",
      count: tabCounts.categoryCounts.strategy[activeTab],
    },
    {
      id: "marketing" as const,
      name: "Marketing",
      count: tabCounts.categoryCounts.marketing[activeTab],
    },
    {
      id: "research" as const,
      name: "Research",
      count: tabCounts.categoryCounts.research[activeTab],
    },
    {
      id: "analytics" as const,
      name: "Analytics",
      count: tabCounts.categoryCounts.analytics[activeTab],
    },
  ];

  const renderContent = () => {
    return (
      <div
        className={`
          md:mx-auto   
          2xl:w-4/5 md:px-16
          px-6 py-40
          ${activeTab === 'projects' ? 'bg-white' : 'bg-black'}
        `}
      >
        {/* Main Navigation */}
        <div className="flex flex-wrap gap-8 mb-12 items-center">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-2xl md:text-4xl font-bold ${
                  activeTab === tab.id
                    ? activeTab === 'projects' 
                      ? "border-b-2 border-black text-black"
                      : "border-b-2 border-white text-white"
                    : activeTab === 'projects'
                      ? "text-gray-600"
                      : "text-gray-400"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
                <span className="text-sm ml-1 align-super">{tab.count}</span>
              </motion.button>
              {index < tabs.length - 1 && (
                <div className={`p-2 rounded-full ${activeTab === 'projects' ? 'bg-black' : 'bg-white'} h-4 w-4 items-center flex justify-center`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-6 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 ${
                activeCategory === category.id 
                  ? activeTab === 'projects' 
                    ? "font-bold text-black" 
                    : "font-bold text-white"
                  : activeTab === 'projects'
                    ? "text-gray-500"
                    : "text-gray-400"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className={`text-xs ml-1 align-super ${activeTab === 'projects' ? 'text-gray-500' : 'text-gray-400'}`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "clients" ? (
          <motion.div
            layout
            key="clients"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10"
          >
            <motion.div
              layout
              key="clients"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="col-span-4 mb-12 md:mb-0 border border-gray-200 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="relative h-32 mb-6">
                <Image
                  priority
                  height={100}
                  width={100}
                  src={`/${clients[0].image}`}
                  alt={clients[0].name}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{clients[0].name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {clients[0].description}
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            layout
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10"
          >
            <motion.div
              layout
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`${projects[0].size} bg-black rounded-lg p-4 hover:shadow-lg transition-shadow`}
            >
              <div className={`relative ${projects[0].imageHeight} mb-4`}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src={projects[0].video} type="video/mp4" />
                </video>
              </div>
              <h3 className="text-sm font-bold mb-2 text-gray-400">
                / {projects[0].name}
              </h3>
              <h3 className="text-xl font-bold mb-2 text-white">{projects[0].title}</h3>
              <p className="text-gray-400">{projects[0].description}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    );
  };

  return renderContent();
};

export default Hero;
