"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#A7C4A0] dark:bg-[#58B368] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#D4C2FC] dark:bg-[#FFEF9F] rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex items-center">
        {/* Desktop Layout - Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center w-full">
          {/* Left Side - Avatar */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Avatar className="w-80 h-80 ring-6 ring-[#A7C4A0] dark:ring-[#58B368] shadow-2xl">
              <AvatarImage
                src="/profile-image.png?height=320&width=320"
                alt="Student Portrait"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl bg-[#A7C4A0] dark:bg-[#58B368] text-white">Don G</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-[#4B3F72] dark:text-[#FFEF9F] leading-tight"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My Ethics Journey
            </motion.h1>

            <motion.p
              className="text-2xl lg:text-3xl text-[#A7C4A0] dark:text-[#58B368] font-medium"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Student & Aspiring Ethicist
            </motion.p>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    Welcome to my personal reflection on 12 weeks of exploring moral philosophy, ethical
                    decision-making, and the profound questions that shape how we live. This journey has challenged my
                    assumptions, deepened my empathy, and transformed how I see the world around me.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden text-center space-y-8 w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Avatar className="w-64 h-64 ring-6 ring-[#A7C4A0] dark:ring-[#58B368] shadow-2xl">
              <AvatarImage
                src="/profile-image.png?height=256&width=256"
                alt="Student Portrait"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl bg-[#A7C4A0] dark:bg-[#58B368] text-white">Don G</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-[#4B3F72] dark:text-[#FFEF9F] leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My Ethics Journey
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-[#A7C4A0] dark:text-[#58B368] font-medium"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Student & Aspiring Ethicist
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  Welcome to my personal reflection on 12 weeks of exploring moral philosophy, ethical decision-making,
                  and the profound questions that shape how we live. This journey has challenged my assumptions,
                  deepened my empathy, and transformed how I see the world around me.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Always visible at bottom */}
      <motion.div
        className="relative z-10 flex justify-center pb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
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
