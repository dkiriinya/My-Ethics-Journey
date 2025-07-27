"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 py-20 relative overflow-hidden">
      {/* Optimized Animated Background - Using transform3d for hardware acceleration */}
      <div className="absolute inset-0 opacity-20 will-change-transform">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A7C4A0] dark:bg-[#58B368] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#D4C2FC] dark:bg-[#FFEF9F] rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex items-center">
        {/* Desktop Layout - Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center w-full">
          {/* Left Side - Avatar */}
          <div className="flex justify-center">
            <Avatar className="w-80 h-80 ring-6 ring-[#A7C4A0] dark:ring-[#58B368] shadow-2xl">
              <AvatarImage
                src="/profile-image.webp?height=320&width=320"
                alt="Student Portrait"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl bg-[#A7C4A0] dark:bg-[#58B368] text-white">Don G</AvatarFallback>
            </Avatar>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#4B3F72] dark:text-[#FFEF9F] leading-tight">
              My Ethics Journey
            </h1>

            <p className="text-2xl lg:text-3xl text-[#A7C4A0] dark:text-[#58B368] font-medium">
              Student & Aspiring Ethicist
            </p>

            <div>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    Welcome to my personal reflection on 12 weeks of exploring moral philosophy, ethical
                    decision-making, and the profound questions that shape how we live. This journey has challenged my
                    assumptions, deepened my empathy, and transformed how I see the world around me.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden text-center space-y-8 w-full">
          <div className="flex justify-center">
            <Avatar className="w-64 h-64 ring-6 ring-[#A7C4A0] dark:ring-[#58B368] shadow-2xl">
              <AvatarImage
                src="/profile-image.png?height=256&width=256"
                alt="Student Portrait"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl bg-[#A7C4A0] dark:bg-[#58B368] text-white">Don G</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#4B3F72] dark:text-[#FFEF9F] leading-tight">
            My Ethics Journey
          </h1>

          <p className="text-xl sm:text-2xl text-[#A7C4A0] dark:text-[#58B368] font-medium">
            Student & Aspiring Ethicist
          </p>

          <div>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  Welcome to my personal reflection on 12 weeks of exploring moral philosophy, ethical decision-making,
                  and the profound questions that shape how we live. This journey has challenged my assumptions,
                  deepened my empathy, and transformed how I see the world around me.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Optimized Scroll Indicator */}
      <motion.div
        className="relative z-10 flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-[#A7C4A0] dark:text-[#58B368]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
