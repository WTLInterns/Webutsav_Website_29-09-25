"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Responsive, auto-looping mobile screen showcase slider
// Props:
// - images: string[] of image paths under public/
// - intervalMs: number (default 3000)
// - title: optional heading
// - sublabel: optional small label above title
export default function MobileShowcase({
  images = [
    "/images/hrm.jpg",
    "/images/wtl1.jpg",
    "/mobile3.png",
    "/mobile4.png",
    "/mobile5.png",
  ],
  intervalMs = 3000,
  title = "Our Successful Mobile App Projects",
  sublabel = "QUICK PROJECTS",
}) {
  const validImages = useMemo(() => images.filter(Boolean), [images])
  const [index, setIndex] = useState(0)

  // Auto-advance
  useEffect(() => {
    if (validImages.length === 0) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % validImages.length)
    }, intervalMs)
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
              Our Successful <span className="text-brand-primary-dark">Mobile App</span> Projects
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
            <div className="w-full max-w-5xl">
              <div className="relative h-[360px] sm:h-[400px] md:h-[440px]">
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
                          <div key={`screen-${col}`} className="flex items-center justify-center">
                            {/* Phone frame */}
                            <div className="relative w-[150px] sm:w-[170px] md:w-[190px] h-[300px] sm:h-[340px] md:h-[380px] rounded-[34px] bg-[#111827] shadow-2xl ring-1 ring-gray-300/50">
                              {/* Metal edge */}
                              <div className="absolute inset-0 rounded-[34px] ring-1 ring-gray-300/70" />
                              {/* Side buttons (left) */}
                              <span className="absolute left-0 top-16 w-1.5 h-6 bg-gray-500 rounded-r-md" />
                              <span className="absolute left-0 top-28 w-1.5 h-10 bg-gray-500 rounded-r-md" />
                              {/* Side button (right) */}
                              <span className="absolute right-0 top-24 w-1.5 h-12 bg-gray-500 rounded-l-md" />
                              {/* Notch */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-16 md:w-18 h-4 md:h-5 bg-black/90 rounded-b-2xl z-20" />
                              {/* Screen area */}
                              <div className="absolute inset-[8px] sm:inset-[10px] md:inset-[12px] rounded-[26px] bg-black overflow-hidden">
                                <Image
                                  src={src}
                                  alt={`Mobile screen ${imgIdx + 1}`}
                                  fill
                                  sizes="(min-width: 1024px) 190px, (min-width: 640px) 25vw, 45vw"
                                  className="object-cover"
                                  priority={col === 0}
                                />
                                {/* Home indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/70" />
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
