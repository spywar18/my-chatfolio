import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 px-4 pb-10 sm:px-8 lg:px-20">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-3xl font-bold sm:text-4xl"
      >
        Projects
      </motion.h2>

      {/* Projects List */}
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap items-center justify-center lg:justify-start"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-1/3 lg:w-1/4 flex justify-center mb-6 lg:mb-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-32 h-32 rounded-lg object-cover sm:w-40 sm:h-40"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-2/3 lg:w-3/4 px-4"
            >
              <h6 className="mb-2 text-lg font-semibold sm:text-xl">{project.title}</h6>
              <p className="mb-4 text-sm text-neutral-400 sm:text-base">
                {project.description}
              </p>
              {/* Technologies */}
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
