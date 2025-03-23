"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 bg-slate-900/80 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform translate-x-4 translate-y-4"></div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="About Me"
                width={500}
                height={600}
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              Hello! I'm John, a passionate full-stack developer with over 5 years of experience in creating beautiful,
              functional websites and applications. My journey in web development started when I was in college, and
              I've been hooked ever since.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              I specialize in JavaScript frameworks like React and Next.js, and I'm experienced in building responsive,
              accessible, and performant web applications. I believe in clean code, thoughtful UI/UX, and staying
              up-to-date with the latest web technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Name:</h3>
                <p className="text-gray-300">Afaq Ahmad</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Email:</h3>
                <p className="text-gray-300">ufaq3022@gmail.com</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Location:</h3>
                <p className="text-gray-300">Mardan, KPK</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Availability:</h3>
                <p className="text-gray-300">Freelance / Full-time</p>
              </div>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

