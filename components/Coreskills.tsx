"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { IconCode, IconPhone, IconGlobe, IconBook } from "@tabler/icons-react";
import { clsx } from "clsx";
import { companies } from "@/data"; // Import companies here
import React from "react";

const CoreSkills = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen py-16 px-6 lg:px-20 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Core Skills & Expertise
      </motion.h2>

      {/* Core Skills Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {[  
          {
            title: "Programming Languages",
            description: "C, C++, Java",
            icon: <IconCode size={40} className="text-purple-400 animate-pulse" />,
          },
          {
            title: "Android Development",
            description: "Android Studio, Java, Firebase, XML, Kotlin",
            icon: <IconPhone size={40} className="text-purple-400 animate-pulse" />,
          },
          {
            title: "Web Technologies",
            description: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
            icon: <IconGlobe size={40} className="text-purple-400 animate-pulse" />,
          },
          {
            title: "Coursework",
            description: "OOPs, DBMS, Computer Networks, Operating Systems, Cloud Computing, AIML",
            icon: <IconBook size={40} className="text-purple-400 animate-pulse" />,
          },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className={clsx(
              "bg-gray-800 shadow-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-600",
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-300"
            )}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-purple-300">{skill.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Clients Section with Company Logos */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-16">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex flex-col items-center md:max-w-60 max-w-32 gap-2">
              {/* Company Logo */}
              <img
                src={company.img}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
              {/* Company Name */}
              <h3 className="text-center text-sm md:text-lg font-semibold mt-2">
                {company.name}
              </h3>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CoreSkills;
