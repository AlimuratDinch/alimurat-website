"use client";

import React from 'react';
import { motion } from "framer-motion";
import SectionHeading from './section-heading';

export default function About() {
  return (
  <motion.section className = "mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
  initial = {{opacity:0, y:100}}
  animate = {{opacity:1, y:0}}
  transition = {{
    delay:0.175,
  }}
  id = "about">
    <SectionHeading>About Me</SectionHeading>
     <p>
     I was always curious about discovering the new features in life. I first started coding in Python when I was in Marianopolis College.
          When I first wrote my "Hello World" program, I felt the power in my hands such that I can code everything.
     </p>

     <p>
     Initially, I started my academic journey in Health Science at Marianopolis College. 
     However, I discovered my true affinity for mathematics, which led me to shift gears and pursue software engineering at Concordia University and do the 
     things that i enjoy the most which is spending hours to fix that little bug in the code with a cup of coffee. 
     </p>
  </motion.section>
  )
  
}
