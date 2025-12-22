"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import Image from "next/image"
import DesktopShowcase from "../DesktopShowcase/DesktopShowcase"

const ServicesTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const featuresRef = useRef(null)
  const webRef = useRef(null)
  const marqueeControls = useAnimation()
  const marqueeRef = useRef(null)
  const SHOW_FEATURE_IMAGE_LABELS = true // set to false to hide temporary filename labels

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  // Explicit mapping for 'Why Choose Our Services?' images.
  // Place these files in /public/images/ with the exact names below.
  // Card order (page 1): service1.jpeg, service2.jpeg, service3.jpeg
  // Card order (page 2): service4.jpeg, service5.jpeg, service6.jpeg
  // Optional extras if you add more: service7.jpeg, service8.jpeg
  const featuresData = [
    { icon: "🎯", title: "Expert Team", desc: "Skilled professionals with years of industry experience", image: "/images/service1.jpeg" },
    { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround times without compromising quality", image: "/images/service2.jpeg" },
    { icon: "🔧", title: "Custom Solutions", desc: "Tailored services to meet your specific business needs", image: "/images/service8.jpeg" },
    { icon: "📈", title: "Proven Results", desc: "Track record of successful projects and satisfied clients", image: "/images/service7.jpeg" },
    { icon: "🛡️", title: "Quality Assurance", desc: "Rigorous testing and quality control processes", image: "/images/service5.jpeg" },
    { icon: "💬", title: "24/7 Support", desc: "Round-the-clock assistance and maintenance services", image: "/images/service6.jpeg" },
  ]

  // Auto-scroll for features carousel (paged)
  useEffect(() => {
    const el = featuresRef.current
    if (!el) return
    const tick = () => {
      const step = el.clientWidth // slide by viewport width to show next page of cards
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: step, behavior: "smooth" })
      }
    }
    const id = setInterval(tick, 3000)
    return () => clearInterval(id)
  }, [])

  // Marquee animation controls (speed up and allow hover/touch pause)
  useEffect(() => {
    const startMarquee = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
      const duration = isMobile ? 20 : 12
      marqueeControls.start({
        x: [0, -1200],
        transition: { duration, ease: "linear", repeat: Infinity }
      })
    }
    startMarquee()
    const onResize = () => startMarquee()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [marqueeControls])

  // Auto-scroll for web projects carousel (paged)
  useEffect(() => {
    const el = webRef.current
    if (!el) return
    const tick = () => {
      const step = el.clientWidth
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: step, behavior: "smooth" })
      }
    }
    const id = setInterval(tick, 3200)
    return () => clearInterval(id)
  }, [])

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const serviceVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div>
      {/* Professional Hero Section with Modern Blue Gradient */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-sky-50 via-indigo-50/60 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-32 left-1/3 w-40 h-40 border border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Floating Brand Color Elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-brand-secondary/25 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
          >
            Our Professional <span className="text-brand-primary-dark">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions designed to transform your business and drive exceptional growth through innovative technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="px-8 md:px-10 py-3.5 md:py-4 bg-gradient-to-r from-brand-primary-dark to-brand-secondary text-white font-bold text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="">Explore Our Services</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* (Removed) Old Mobile App Projects section */}

      {/* Enhanced Services Section */}
      <section
        ref={ref}
        className="py-20 md:py-24 px-4 bg-gradient-to-b from-sky-50 via-indigo-50/60 to-white relative overflow-hidden"
      >
      {/* Brand Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 bg-sky-200/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-32 h-32 bg-blue-300/15 rounded-full blur-lg"
          animate={{
            y: [0, -30, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-sky-400/10 rounded-full blur-lg"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-36 h-36 bg-sky-300/10 rounded-full blur-2xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Header with Brand Colors */}
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
              variants={headerVariants}
            >
              Our Creative <span className="text-brand-primary-dark">Services</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed mb-8 mt-6"
              variants={headerVariants}
            >
              Best software, web design, app development & digital marketing company from India serving{" "}
              <span className="text-brand-primary-dark font-bold">UAE, USA, UK & beyond.</span>Boost your business{" "}
              <span className="text-indigo-500 font-bold">growth today!</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={headerVariants}
            >
              Elevate your business with our comprehensive suite of services designed to create exceptional{" "}
              <span className="text-brand-primary-dark font-semibold">UI/UX experiences</span> and{" "}
              <span className="text-indigo-600 font-semibold">drive growth.</span>
            </motion.p>
          </motion.div> 

          {/* Enhanced CTA Section with Brand Colors */}       
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/Contact">
              <motion.div
                className="inline-flex items-center space-x-4 bg-gradient-to-r from-brand-primary-dark to-brand-secondary text-white px-8 md:px-10 py-4 md:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold text-lg">Ready to Get Started?</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.div>
            </Link>

            <motion.p
              className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Let's discuss your project and bring your <span className="text-brand-primary-dark font-semibold">vision</span> to <span className="text-indigo-600 font-semibold">life</span>
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center items-center gap-8 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center space-x-2">
                {/* <span className="text-2xl">⭐⭐⭐⭐⭐</span> */}
                <span className="font-semibold text-gray-700">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <span className="text-2xl">🚀</span> */}
                <span className="font-semibold text-gray-700">500+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <span className="text-2xl">👥</span> */}
                <span className="font-semibold text-gray-700">250+ Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements with Brand Colors */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-sky-50/40 via-indigo-50/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/25 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-brand-primary-dark">Services?</span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              We deliver exceptional results through innovative solutions, expert team, and proven methodologies.
            </p>
          </motion.div>

          {/* Marquee slider with exactly 6 unique boxes (seamless loop) */}
          <div className="overflow-hidden py-2 -mx-6 sm:-mx-8">
            <motion.div
              ref={marqueeRef}
              className="flex gap-6 sm:gap-8"
              animate={marqueeControls}
              onMouseEnter={() => marqueeControls.stop()}
              onMouseLeave={() => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
                const duration = isMobile ? 20 : 12
                marqueeControls.start({ x: [0, -1200], transition: { duration, ease: "linear", repeat: Infinity } })
              }}
              onTouchStart={() => marqueeControls.stop()}
              onTouchEnd={() => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
                const duration = isMobile ? 20 : 12
                marqueeControls.start({ x: [0, -1200], transition: { duration, ease: "linear", repeat: Infinity } })
              }}
              onTouchCancel={() => {
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
                const duration = isMobile ? 20 : 12
                marqueeControls.start({ x: [0, -1200], transition: { duration, ease: "linear", repeat: Infinity } })
              }}
            >
              {[...featuresData, ...featuresData].map((feature, index) => (
                <div
                  key={`${feature.title}-${index}`}
                  className="group relative w-[290px] md:w-[320px] flex-shrink-0"
                >
                  {/* Media Card with image on top, content below */}
                  <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-sky-100/40 overflow-hidden">
                    {/* Image area (no cropping) */}
                    <div className="relative w-full h-40 sm:h-48 bg-white">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 33vw, 90vw"
                        className="object-contain p-2"
                        onError={(e) => { /* optional: add fallback image */ }}
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-md">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                    </div>
                    {/* Content below image */}
                    <div className="p-5 text-center">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                      {/* TEMP: filename guide for content upload */}
                      {SHOW_FEATURE_IMAGE_LABELS && (
                        <div className="mt-2 text-xs text-gray-400">Image: {feature.image.split('/').pop()}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Successful Web Application Projects - Desktop Showcase (mirrors MobileShowcase animation) */}
      <DesktopShowcase
        images={["/Comp11.png","/Comp12.png","/Comp13.png","/Comp14.png"]}
        intervalMs={3000}
      />
    </div>
  )
}

export default ServicesTimeline

