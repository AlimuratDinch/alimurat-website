"use client";

import React from 'react';
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: "AI Developer CO-OP",
      company: "Intact Financial Corporation",
      dates: "May 2025 – Aug 2025",
      image: "/intact.png",
      description: [
        "To Discover",
      ],
    },
    {
      title: "Data Engineer CO-OP",
      company: "Centre de services scolaire de la Pointe-de-l'Île (CSSPI)",
      dates: "Jan 2024 – Apr 2025",
      image: "/commisionScolaire.png",
      description: [
        "Worked on projects aimed at improving student success through data-driven strategies, personalized learning approaches and collaboration with educational professionals.",
        "Managed and configured a DBT project prescribed by Quebec Government to remove redundancies in the data warehouse by creating structured tables and transformed datasets.",
        "Established and configured data connections to Power BI that facilitates report visualization and provides actionable insights for analytical purposes.",
        "Automated dockerized ETL pipelines using Airflow and GitHub Actions to extract the DBT project to integrate the transformed data into Microsoft Azure DevOps repository and load it into a server to create continuous integration and continuous development environment.",
        "Built modern analytical environment based on docker to create the data warehouse for daily ETL injection into Snowflake.",
        "Used Agile technique for effective project management and delivery, incorporated projects into Microsoft Azure DevOps with version control tool git."
      ],
    },
  ];

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>

      <div className="space-y-12 mt-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * index, duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Image
              src={exp.image}
              alt={`${exp.company} Logo`}
              width={80}
              height={80}
              className="rounded-md object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.dates}</p>
              <div className="mt-2 space-y-3 text-base text-gray-700">
                {exp.description.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
