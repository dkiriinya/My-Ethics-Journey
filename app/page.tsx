"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { VineTimeline } from "@/components/vine-timeline"
import { ReflectionSection } from "@/components/reflection-section"
import { CreativeSection } from "@/components/creative-section"
import { BottomNav } from "@/components/bottom-nav"
import { TopNav } from "@/components/top-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function EthicsJourneyPage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAF6] dark:bg-[#121212] text-[#333333] dark:text-[#E0E0E0] transition-colors duration-300">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Top Navigation - Desktop */}
      <TopNav />

      {/* Main Content */}
      <main className="relative">
        <div>
          <HeroSection />
          <VineTimeline />
          <ReflectionSection />
          <CreativeSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#A7C4A0] dark:bg-[#58B368] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm opacity-90">
            This portfolio represents my personal journey through Ethics 101 - Fall 2024
          </p>
          <p className="text-xs mt-2 opacity-75">
            Submitted as part of final course requirements. All reflections are original work.
          </p>
        </div>
      </footer>

      {/* Bottom Navigation - Mobile */}
      <BottomNav />
    </div>
  )
}
