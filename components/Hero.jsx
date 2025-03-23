"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Laptop, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-400 font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="inline-block">
              {Array.from("Afaq Ahmad").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-blue-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full Stack Dev • Shopify & WordPress Expert
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
           I blend code with creativity to craft visually striking and highly responsive digital experiences. Whether it's a sleek Shopify store or a custom WordPress site, I bring ideas to life with flair and functionality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-600/20 backdrop-blur-sm"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
              }}
            />

            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-blue-400/30">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D35AQG042qJ105eMA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1683913588432?e=1743109200&v=beta&t=Nd0H_Do6AYq1nEb9ofzkQDJbAru8Nyv-yXgp4e_tHzc"
                alt="Profile"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating icons */}
            <FloatingIcon icon={<Code className="w-full h-full text-blue-400" />} top="-10%" left="0%" delay={0} />
            <FloatingIcon
              icon={<Laptop className="w-full h-full text-blue-400" />}
              top="50%"
              right="-15%"
              delay={1.5}
            />
            <FloatingIcon icon={<Zap className="w-full h-full text-blue-400" />} bottom="-5%" right="10%" delay={0.8} />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="#about" className="flex flex-col items-center text-blue-400 hover:text-blue-300 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

function FloatingIcon({ icon, top, right, bottom, left, delay }) {
  return (
    <motion.div
      className="absolute w-10 h-10 p-2 rounded-full bg-slate-800/80 backdrop-blur-sm z-10"
      style={{ top, right, bottom, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3 + Math.random() * 2,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

