"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function Companies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const companies = [
    { name: "Company 1", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 2", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 3", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 4", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Company 5", logo: "/placeholder.svg?height=80&width=200" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 bg-slate-900/90 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Companies I've Worked With</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              className="w-32 md:w-40 h-20 flex items-center justify-center bg-slate-800/50 rounded-lg p-4 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={200}
                height={80}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

