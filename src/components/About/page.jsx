"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return null
  const _aboutDisabled = `
    <>
    <section
      ref={ref}
      className="relative py-24 md:py-28 bg-gradient-to-b from-sky-50 via-indigo-50/60 to-white overflow-hidden"
    >
      {/* Enhanced Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft top-right ellipse */}
        <motion.div
          className="absolute -top-20 -right-24 w-[480px] h-[480px] bg-sky-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {/* Floating accent bubble */}
        <motion.div
          className="absolute bottom-16 left-10 w-28 h-28 bg-indigo-200/60 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle diagonal wave using borders */}
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-sky-100/40 -z-10 rounded-full" />
        <div className="absolute -bottom-20 left-20 w-72 h-72 border-2 border-indigo-100 rounded-full -z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Image section */}
          <motion.div
            className="relative"
            variants={imageVariants}
          >
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sky-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/Webutsav_ITTeam.JPG"
                  alt="WebUtsav IT Team - Professional Digital Solutions"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 md:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />

                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Expert Team</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content section */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8"
            variants={textVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About <span className="text-brand-primary-dark">WebUtsav</span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="space-y-4 md:space-y-6"
              variants={itemVariants}
            >
              <motion.p
                className="text-base md:text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                <span className="text-brand-primary-dark font-semibold">WebUtsav</span> is a leading digital solutions provider based in{" "}
                <span className="font-semibold text-gray-900">Kharadi, Pune</span>. We specialize in{" "}
                <span className="text-brand-primary-dark font-medium">App Development</span>,{" "}
                <span className="text-green-600 font-medium">Web Development</span>, and{" "}
                <span className="text-purple-600 font-medium">Digital Marketing</span>.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                With a proven track record of success, we have successfully completed over{" "}
                <span className="text-orange-600 font-bold text-xl">250+ projects</span> for more than{" "}
                <span className="text-orange-600 font-bold text-xl">180+ clients</span>, delivering impactful results
                through our insight-driven strategies.
              </motion.p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 py-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl font-bold text-brand-primary-dark"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  180+
                </motion.div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl font-bold text-brand-primary-dark"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  250+
                </motion.div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl font-bold text-brand-primary-dark"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  12+
                </motion.div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-2 md:pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/AboutUs"
                  className="group inline-flex items-center px-7 py-3 md:px-8 md:py-4 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 space-x-2"
                >
                  <span>More About Us</span>
                  <motion.svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    </>
  )
  `;
}

export default About

