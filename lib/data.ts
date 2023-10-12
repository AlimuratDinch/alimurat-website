import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import petweb from "@/public/petweb.png";
import binaryReading from "@/public/binaryReading.png";
import reversi from "@/public/reversi.png";


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
    title: "Cat and Dog Adoptation Website",
    description:
      "It was my first real website that i made using JavaScript and PHP. After this experience, i wanted to learn about coding even more.",
    tags: ["HTML","CSS","JavaScript","PHP"],
    imageUrl: petweb,
  },
  {
    title: "Binary Reading",
    description:
      "It is the project where I had to read the inputs from a text file that transform to obejcts that are written into binary file.",
    tags: ["Java"],
    imageUrl: binaryReading,
  },
  {
    title: "Reversi",
    description:
      "This game was my first challenge to implement my coding knowledge into the real world experience. This game showed me that everything can be done by coding.",
    tags: ["Python"],
    imageUrl: reversi,
  },
] as const; // so that we do not precise the type

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Java",
  "C#",
  "Python",
  "SQL",
  "Framer Motion",
] as const;
