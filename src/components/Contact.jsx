
import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 px-4 pb-20 sm:px-8 lg:px-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-3xl font-bold sm:text-4xl lg:text-5xl"
      >
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-base sm:text-lg lg:text-xl"
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone Number */}
        {/* <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 text-base sm:text-lg lg:text-xl"
        >
          {CONTACT.phoneNo}
        </motion.p> */}

        {/* Email */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-base text-cyan-500 underline hover:text-cyan-700 sm:text-lg lg:text-xl"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
