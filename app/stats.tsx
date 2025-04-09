'use client'

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const formatNumber = (num: string): string => {
    if (num.includes("%")) {
      return num;
    }
    if (num.includes("$")) {
      return `$${num.replace(/[^0-9]/g, "")}+`;
    }
    return `${num.replace(/[^0-9]/g, "")}+`;
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-xl p-8 text-center"
    >
      <h3 className="text-4xl font-bold text-white mb-2">{formatNumber(number)}</h3>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard number="100+" label="Projects Completed" />
          <StatCard number="50+" label="Happy Clients" />
          <StatCard number="95%" label="Client Satisfaction" />
        </div>
      </div>
    </div>
  );
};

export default Stats;