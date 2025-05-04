import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import petweb from "@/public/petweb.png";
import cnn from "@/public/cnn.png";
import campusGuide from "@/public/campus_guide.png";
import house from "@/public/house.png";


export const links = [ //array of objects
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience", 
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
] as const;



export const projectsData = [
  {
    title: "Campus Guide",
    description:
      "Concordia Campus Guide mobile application that allows students to have seamless navigation and accessibility of Concordia Campus on both Android and iOS platforms.",
    tags: ["React Native", "JavaScript", "Expo", "Supabase"],
    imageUrl: campusGuide,
  },
  {
    title: "Facial Emotions Recognition",
    description:
      "Engineered CNN model that classifies facial expressions into six categories: happy, sad, angry, disgusted, surprised and neutral. ",
    tags: ["Python", "Pytorch", "Pandas", "NumPy"],
    imageUrl: cnn,
  },
  {
    title: "Real Estate Website",
    description:
      "Real Estate website made with MERN stack. Employed CRUD operations via REST API, facilitating efficient data management and interaction with server system",
    tags: ["HTML","CSS","JavaScript","ReactJS","NodeJS","MongoDB"],
    imageUrl: house,
  }
] as const; // so that we do not precise the type

export const skillsData = [
  "JavaScript",
  "PHP",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Git",
  "Docker",
  "MongoDB",
  "Java",
  "Python",
  "PyTorch",
  "SQL",
  "DBT",
  "Airflow",
  "Airbyte",
  "PySpark",
  "Power BI",
  "Snowflake",
  "AWS",
  "DataBricks",
  "Supabase",
  "PowerAutomate"
  
] as const;
