import React from 'react'
import aboutImg from '../assets/laptop.jpg'
import { ABOUT_TEXT } from '../constants/index'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 px-4 pb-8 sm:px-8 lg:px-20">
      {/* Heading */}
      <h2 className="my-10 text-center text-3xl font-bold sm:text-4xl">
        About 
        <span className="text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 mb-6 lg:mb-0"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImg}
              className="rounded-2xl w-4/5 sm:w-3/4 lg:w-full max-w-sm object-cover"
              alt="About Me"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
