"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, Cloud, Sparkles } from "lucide-react"

const reflections = [
  {
    title: "What I've Learned",
    content:
      "Ethics isn't about having the perfect answer — it's about learning how to ask better questions. I've realized that being ethical means thinking things through, being open-minded, and staying aware of how my actions affect others. It's not a one-time thing, but something we practice in small ways every day.",
    icon: Lightbulb,
    color: "from-yellow-200 to-amber-300 dark:from-yellow-400 dark:to-amber-500",
    glowColor: "shadow-yellow-200/50 dark:shadow-yellow-400/30",
  },
  {
    title: "How I've Changed",
    content:
      "Before this course, I often looked for clear right-or-wrong answers. Now, I understand that ethics can be complex and context matters. I've learned to slow down, consider different viewpoints, and think more about the bigger picture. I'm also more mindful about how my choices impact others, even in small ways.",
    icon: Cloud,
    color: "from-blue-200 to-cyan-300 dark:from-blue-400 dark:to-cyan-500",
    glowColor: "shadow-blue-200/50 dark:shadow-blue-400/30",
  },
  {
    title: "What I'd Do Differently",
    content:
      "Looking back, I wish I had spent more time on the readings earlier on. Some ideas that felt confusing at first made a lot more sense once we discussed them in class or applied them to real-life situations. I also would've spoken up more during discussions — hearing others' experiences made a big difference. Going forward, I plan to keep reflecting on ethics even outside of class.",
    icon: Sparkles,
    color: "from-purple-200 to-pink-300 dark:from-purple-400 dark:to-pink-500",
    glowColor: "shadow-purple-200/50 dark:shadow-purple-400/30",
  },
]


const FloatingThought = ({
  children,
  delay = 0,
  direction = "up",
}: { children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" }) => {
  const directionVariants = {
    up: { y: [-10, 10, -10] },
    down: { y: [10, -10, 10] },
    left: { x: [-10, 10, -10] },
    right: { x: [10, -10, 10] },
  }

  return (
    <motion.div
      animate={directionVariants[direction]}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

const ThoughtBubble = ({ size = "w-4 h-4", delay = 0 }: { size?: string; delay?: number }) => (
  <FloatingThought delay={delay}>
    <div className={`${size} rounded-full bg-white/30 dark:bg-gray-300/20 backdrop-blur-sm`} />
  </FloatingThought>
)

export function ReflectionSection() {
  return (
    <section
      id="reflection"
      className="py-20 px-4 relative overflow-hidden"
      role="main"
      aria-labelledby="reflection-heading"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(167, 196, 160, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(212, 194, 252, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 215, 186, 0.05) 0%, transparent 70%)
        `,
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Thought Bubbles */}
        <div className="absolute top-20 left-10">
          <ThoughtBubble size="w-3 h-3" delay={0} />
        </div>
        <div className="absolute top-40 right-20">
          <ThoughtBubble size="w-2 h-2" delay={1} />
        </div>
        <div className="absolute bottom-60 left-1/4">
          <ThoughtBubble size="w-4 h-4" delay={2} />
        </div>
        <div className="absolute top-1/3 right-1/3">
          <ThoughtBubble size="w-3 h-3" delay={1.5} />
        </div>
        <div className="absolute bottom-40 right-10">
          <ThoughtBubble size="w-2 h-2" delay={0.5} />
        </div>

        {/* Floating Cloud Shapes */}
        <FloatingThought delay={0} direction="right">
          <div className="absolute top-32 left-1/2 w-20 h-12 bg-white/10 dark:bg-gray-300/5 rounded-full blur-sm" />
        </FloatingThought>
        <FloatingThought delay={2} direction="left">
          <div className="absolute bottom-32 right-1/4 w-16 h-8 bg-white/10 dark:bg-gray-300/5 rounded-full blur-sm" />
        </FloatingThought>

        {/* Sparkle Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#A7C4A0] dark:bg-[#58B368] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <Lightbulb className="w-12 h-12 text-[#FFD7BA] dark:text-[#FFEF9F]" />
              <motion.div
                className="absolute inset-0 w-12 h-12 rounded-full bg-[#FFD7BA]/20 dark:bg-[#FFEF9F]/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
            <h2 id="reflection-heading" className="text-4xl md:text-5xl font-bold text-[#4B3F72] dark:text-[#FFEF9F]">
              Moments of Reflection
            </h2>
          </motion.div>
          <p className="text-xl text-[#A7C4A0] dark:text-[#58B368] max-w-2xl mx-auto">
            Thoughts emerging from the depths of philosophical exploration
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-16" role="list" aria-label="Personal reflections">
          {reflections.map((reflection, index) => (
            <motion.div
              key={reflection.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              role="listitem"
              className="relative"
            >
              {/* Thought Cloud Container */}
              <div className="relative">
                {/* Main Cloud Shape */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-br ${reflection.color} rounded-full opacity-20 blur-xl ${reflection.glowColor} shadow-2xl`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />

                {/* Smaller Cloud Bubbles */}
                <div className="absolute -top-6 -left-6">
                  <motion.div
                    className={`w-8 h-8 bg-gradient-to-br ${reflection.color} rounded-full opacity-40 blur-sm`}
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                </div>
                <div className="absolute -top-4 -left-12">
                  <motion.div
                    className={`w-4 h-4 bg-gradient-to-br ${reflection.color} rounded-full opacity-30 blur-sm`}
                    animate={{
                      y: [-3, 7, -3],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  />
                </div>

                {/* Main Card */}
                <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-none shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Subtle Inner Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reflection.color} opacity-5`} />

                  <CardHeader className="relative">
                    <CardTitle className="text-2xl text-[#4B3F72] dark:text-[#FFEF9F] flex items-center gap-4">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-br ${reflection.color} ${reflection.glowColor} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <reflection.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <span>{reflection.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Textarea
                        value={reflection.content}
                        readOnly
                        className="min-h-[140px] text-base leading-relaxed border-none bg-transparent resize-none focus:ring-0 p-0 text-gray-700 dark:text-gray-300"
                        aria-label={`${reflection.title} reflection content`}
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </div>

              {/* Connecting Thought Lines */}
              {index < reflections.length - 1 && (
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 0.3, pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg width="2" height="32" className="text-[#A7C4A0] dark:text-[#58B368]">
                    <motion.line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      animate={{
                        strokeDashoffset: [0, -8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
