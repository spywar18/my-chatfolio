import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import profilePic from '../assets/profile.jpg'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-8 lg:pb-12">
            <div className="flex flex-wrap items-center lg:flex-nowrap">
                
                <div className="w-full px-4 lg:w-1/2 lg:px-12">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            whileInView="visible"
                            className="pb-6 text-4xl font-thin tracking-tight sm:text-5xl lg:pb-8 lg:mt-12 lg:text-7xl"
                        >
                            John Doe
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            className="bg-gradient-to-r from-cyan-400 via-slate-500 to-cyan-600 bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl"
                        >
                            Senior Software Engineer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            whileInView="visible"
                            className="my-4 max-w-full px-2 py-4 text-base font-light tracking-tight sm:text-lg lg:py-6 lg:max-w-xl"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 lg:px-12">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Saniya Imroze"
                            className="h-25 w-25 rounded-t-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
