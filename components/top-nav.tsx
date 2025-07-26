"use client"

import { Button } from "@/components/ui/button"
import { Home, Sprout, MessageCircle, Palette } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Sprout, label: "Journey", href: "#journey" },
  { icon: MessageCircle, label: "Reflection", href: "#reflection" },
  { icon: Palette, label: "Creative", href: "#creative" },
]

export function TopNav() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-[#A7C4A0] dark:border-[#58B368] z-40">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              onClick={() => handleNavClick(item.href)}
              className="flex items-center gap-2 text-[#4B3F72] dark:text-[#E0E0E0] hover:text-[#A7C4A0] dark:hover:text-[#58B368] hover:bg-[#A7C4A0]/10 dark:hover:bg-[#58B368]/10"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
