import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex justify-center px-4 sm:px-8"> 
        <div className="w-full max-w-4xl">
            <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial = {{opacity:0, y:-100}}
            transition={{duration : 1.5}}
            className="my-10 text-center text-3xl sm:text-4xl"> 
                Experience
            </motion.h1> 
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div 
                        key={index} 
                        className="mb-8 flex flex-wrap justify-between sm:justify-center" 
                    >
                        <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial = {{opacity:0, x:-100}}
                        transition={{duration : 1}}
                        className="w-full sm:w-1/3 lg:w-1/4 mb-2 sm:mb-0"> 
                            <p className="text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial = {{opacity:0, x:100}}
                        transition={{duration : 1}}
                        className="w-full sm:w-2/3 lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role}-{" "}
                                <span className="text-sm text-cyan-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-cyan-800"
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
    </div>
  )
}

export default Experience
