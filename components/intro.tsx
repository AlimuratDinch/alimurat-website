"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section id = "home" className = "mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className = "flex items-center justify-center">
            <div className = "relative">
               <motion.div
                initial = {{ opacity:0, scale:0}}
                animate = {{ opacity:1, scale:1}}
               >
                <Image src ="/me.png" alt="Mine portret" 
                width="192" 
                height="192" 
                quality = "95"
                priority = {true}
                className = "h-36 w-36 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
                />
                </motion.div> 
            </div>
        </div>
        
        <motion.p className = "mb-10 mt-10 px-4 text-2x1 font-medium text-[1.4rem] !leading-[1.5] sm:text-4x1"
        initial = {{ opacity:0, y:100}}
        animate = {{ opacity:1, y:0}}>
            <span className = "font-bold">Hello, </span> 
            <span className = "italic">my name is Alimurat. </span>I am currently a third-year student at {" "}
            <span className = "font-bold">Concordia University </span>
            pursuing my {" "}
            <span className = "font-bold italic">Bachelor&apos;s Degree of Software Engineering. </span> 
            I am a chill guy who loves data and {" "} 
            <span className ="underline">healthy</span> snacks.
        </motion.p>

        <motion.div className = "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial = {{opacity:0, y:100}}
        animate = {{opacity:1, y:0}}
        transition= {{
            delay: 0.1,
        }}>
            <a className = "bg-white px-7 py-3 flex items-center gap-2 text-[1.45rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
            href = "https://www.linkedin.com/in/alimurat-dinchdonmez-223aa2234/" target = "_blank">
                <BsLinkedin/>
            </a>
            <a className = "bg-white px-7 py-3 flex items-center gap-2 text-[1.50rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
            href = "https://github.com/AlimuratDinch" target = "_blank">
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
