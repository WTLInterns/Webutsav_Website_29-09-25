


"use client";

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"
import Image from "next/image";

const Hero = () => {
  const [videoElement, setVideoElement] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const videoRef = useCallback((node) => {
    if (node !== null) {
      setVideoElement(node)
    }
  }, [])

  useEffect(() => {
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Auto-play was prevented:", error)
        setIsPlaying(false)
      })
    }
  }, [videoElement])

  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  }

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.9,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      {/* <Head>
        <title>WebUtsav | Digital Marketing & Web Development Agency</title>
        <meta
          name="description"
          content="WebUtsav is your trusted digital partner offering SEO, website design, social media marketing, and mobile app development services across India."
        />
        <link rel="canonical" href="https://webutsav.com/" />
        <meta name="author" content="WebUtsav" />
        <meta
          name="keywords"
          content="digital marketing company, web development in India, SEO services, mobile app development, social media marketing, PPC services, local SEO, WebUtsav agency"
        />
        <meta name="robots" content="index, follow" />
      </Head> */}

      <div className="relative h-screen overflow-hidden">
        {/* Optimized Background Image using Next.js Image (WebP) */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/Home11.webp"
            alt="WebUtsav hero background"
            width={1920}
            height={850}
            quality={80}
            loading="lazy"
            className="w-full h-full object-cover scale-105"
            priority={false}
          />
        </motion.div>
        {/**
         * Original video code commented out as per request. To restore,
         * remove this comment block and delete the <motion.img> above.
         *
         * <motion.video
         *   ref={videoRef}
         *   className="absolute inset-0 w-full h-full object-cover scale-105"
         *   loop
         *   muted
         *   playsInline
         *   initial={{ scale: 1.1, opacity: 0 }}
         *   animate={{ scale: 1.05, opacity: 1 }}
         *   transition={{ duration: 2, ease: "easeOut" }}
         * >
         *   <source
         *     src="https://res.cloudinary.com/dvpk4sbzi/video/upload/v1740208926/3254066-uhd_3840_2160_25fps_oy3k7g.mp4"
         *     type="video/mp4"
         *   />
         *   Your browser does not support the video tag.
         * </motion.video>
         */}
        {/* Enhanced Overlay with Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
          initial="hidden"
          animate="visible"
          variants={overlayVariants}
        />
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-sky-400/10 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Enhanced Content Container */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading with Enhanced Animation */}
          <motion.div
            className="max-w-4xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mt-12">
              <span className="block">Accelerate your</span>
              <span className="block text-sky-300">growth</span>
              <span className="block">with our digital</span>
              <span className="block text-sky-300">solutions</span>
            </h1>
          </motion.div>

       

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto"
            >
              <Link
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-primary-dark to-brand-secondary hover:from-sky-700 hover:to-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 hover-glow text-sm sm:text-base"
                href="/contact"
              >
                <span>Get Started Today</span>
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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

            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                href="/aboutus"  
              >
                <span>Learn more about WebUtsav</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center w-full max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-white">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-300">180+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-300">250+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-300">12+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight">Awards Won</div>
            </div>
          </motion.div>
        </div>


      </div>
    </>
  )
}

export default Hero