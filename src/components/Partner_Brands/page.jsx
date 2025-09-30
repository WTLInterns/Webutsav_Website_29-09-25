"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function PartnerBrands() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  const logos = [
    {
      id: 1,
      src: "/client/Aimcab.jpeg",
      alt: "Aimcab",
    },
    {
      id: 2,
      src: "/client/ajcabs.png",
      alt: "ajcabs",
    },
    {
      id: 3,
      src: "/client/shivgarjana_cabs.png",
      alt: "shivgarjana",
    },
    {
      id: 4,
      src: "/client/parmeshwarcab.png",
      alt: "Haps Interior",
    },
    {
      id: 5,
      src: "/client/wtl.jpeg",
      alt: "Haps Interior",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-sky-50 via-indigo-50/60 to-white" ref={containerRef}>
      {/* Orange Circle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-32 h-32 bg-sky-200/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-200/25 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-sky-100/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Partners and <span className="text-brand-primary-dark">Global Brands</span>
        </motion.h2>

        {/* Enhanced Marquee Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-sky-100/60 p-6 shadow-xl">
          {/* Side fade masks for nicer edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/80 to-transparent" />

          {/* Subtle blue glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50/40 via-transparent to-sky-50/40 rounded-2xl" />

          {/* Marquee */}
          <div className="relative flex gap-8 animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                className="relative flex-shrink-0 w-48 h-24 rounded-2xl bg-white shadow-lg ring-1 ring-white/40 border border-sky-100/60 p-4 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(150px 80px at 80% 0%, rgba(255,255,255,0.45), transparent)" }} />
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  sizes="(min-width: 1024px) 160px, 25vw"
                  loading="lazy"
                  className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

