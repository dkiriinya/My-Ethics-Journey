"use client"

import { Home, Sprout, MessageCircle, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: Sprout, label: "Journey", href: "#journey" },
  { icon: MessageCircle, label: "Reflection", href: "#reflection" },
  { icon: Palette, label: "Creative", href: "#creative" },
]

export function BottomNav() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-[#A7C4A0] dark:border-[#58B368] md:hidden z-40">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            onClick={() => handleNavClick(item.href)}
            className="flex flex-col items-center gap-1 h-auto py-2 px-3 text-[#4B3F72] dark:text-[#E0E0E0] hover:text-[#A7C4A0] dark:hover:text-[#58B368] hover:bg-[#A7C4A0]/10 dark:hover:bg-[#58B368]/10"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  )
}
