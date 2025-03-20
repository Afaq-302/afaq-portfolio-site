"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Companies from "@/components/Companies"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <main ref={ref} className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <motion.div style={{ opacity, scale }} className="relative z-10">
        <Hero />
      </motion.div>

      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Companies />
      <Contact />
      <Footer />
    </main>
  )
}

