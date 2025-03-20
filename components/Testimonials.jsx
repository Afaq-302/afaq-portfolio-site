"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO at TechStart",
      image: "/placeholder.svg?height=100&width=100",
      text: "John delivered an exceptional website that exceeded our expectations. His attention to detail and ability to translate our vision into reality was impressive. The site is not only beautiful but also performs incredibly well.",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with John was a pleasure from start to finish. He understood our requirements perfectly and delivered a product that has significantly improved our online presence. His technical skills and creative approach make him a standout developer.",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      image: "/placeholder.svg?height=100&width=100",
      text: "John's expertise in creating responsive, user-friendly interfaces is remarkable. He took our complex requirements and simplified them into an intuitive experience for our users. I highly recommend his services.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="py-20 bg-slate-800/80 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working with me.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-blue-500/20">
              <Quote size={80} />
            </div>

            <div className="relative bg-slate-700/30 rounded-xl p-8 md:p-12 shadow-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 items-center"
                >
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-blue-500/30 object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <p className="text-gray-300 italic mb-6">{testimonials[currentIndex].text}</p>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-blue-400">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-slate-800/50 hover:bg-blue-600/50 text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-slate-800/50 hover:bg-blue-600/50 text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-slate-600 hover:bg-blue-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

