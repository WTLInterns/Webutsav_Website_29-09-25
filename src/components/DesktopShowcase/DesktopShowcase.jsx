"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Desktop monitor-style showcase replicating MobileShowcase animation
// - Same slide-in/out timing and 4-up grid
// - Dynamic screen placeholders with subtle perspective and reflection
// - Pass your images via props; defaults provided
export default function DesktopShowcase({
  images = [
    "/Comp11.png",
    "/Comp12.png",
    "/Comp13.png",
    "/Comp14.png",
  ],
  intervalMs = 3000,
  title = "Our Successful Web Application Projects",
  sublabel = "QUICK PROJECTS",
}) {
  const validImages = useMemo(() => images.filter(Boolean), [images])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (validImages.length === 0) return
    const id = setInterval(() => setIndex((i) => (i + 1) % validImages.length), intervalMs)
    return () => clearInterval(id)
  }, [validImages.length, intervalMs])

  const goTo = (i) => setIndex(((i % validImages.length) + validImages.length) % validImages.length)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary-dark tracking-wide">{sublabel}</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Our Successful <span className="text-brand-primary-dark">Web Application</span> Projects
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={prev} aria-label="Previous"
              className="w-10 h-10 rounded-full bg-brand-primary-dark text-white hover:bg-brand-secondary-dark shadow flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next"
              className="w-10 h-10 rounded-full bg-brand-primary-dark text-white hover:bg-brand-secondary-dark shadow flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        {/* Slider viewport */}
        <div className="relative overflow-hidden">
          <div className="flex items-stretch justify-center">
            <div className="w-full max-w-6xl">
              <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={index}
                    initial={{ x: 120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -120, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="grid grid-cols-4 gap-8 sm:gap-12">
                      {Array.from({ length: 4 }).map((_, col) => {
                        const imgIdx = (index + col) % validImages.length
                        const src = validImages[imgIdx]
                        return (
                          <div key={`desk-${col}`} className="flex items-center justify-center">
                            {/* Monitor frame */}
                            <div className="relative w-[240px] sm:w-[260px] md:w-[280px] h-[170px] sm:h-[185px] md:h-[200px] bg-[#0f172a] rounded-lg shadow-2xl">
                              {/* Bezel border */}
                              <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
                              {/* Stand */}
                              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0f172a] rounded-b-xl shadow-md" />
                              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-44 h-3 bg-gray-300 rounded-lg" />
                              {/* Screen area with perspective and reflection */}
                              <div className="absolute inset-2 rounded-md overflow-hidden bg-black">
                                <div className="absolute inset-0 [transform-style:preserve-3d] [perspective:800px]">
                                  <div className="absolute inset-0" style={{ transform: "rotateX(2deg) rotateY(-3deg)" }}>
                                    <Image
                                      src={src}
                                      alt={`Web project ${imgIdx + 1}`}
                                      fill
                                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 25vw, 45vw"
                                      className="object-cover"
                                      priority={col === 0}
                                    />
                                    {/* Reflection */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent mix-blend-screen" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {validImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? 'bg-brand-primary-dark' : 'bg-sky-200 hover:bg-sky-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
