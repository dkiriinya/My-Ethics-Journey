"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, Cloud, Sparkles } from "lucide-react"

const reflections = [
  {
    title: "What I've Learned",
    content:
      "Ethics isn't about having the perfect answer — it's about learning how to ask better questions. I've realized that being ethical means thinking things through, being open-minded, and staying aware of how my actions affect others. It's not a one-time thing, but something we practice in small ways every day.",
    icon: Lightbulb,
    color: "from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800", // Neutralized color
    glowColor: "shadow-gray-200/50 dark:shadow-gray-700/30", // Neutralized glow
  },
  {
    title: "How I've Changed",
    content:
      "Before this course, I often looked for clear right-or-wrong answers. Now, I understand that ethics can be complex and context matters. I've learned to slow down, consider different viewpoints, and think more about the bigger picture. I'm also more mindful about how my choices impact others, even in small ways.",
    icon: Cloud,
    color: "from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800", // Neutralized color
    glowColor: "shadow-gray-200/50 dark:shadow-gray-700/30", // Neutralized glow
  },
  {
    title: "What I'd Do Differently",
    content:
      "Looking back, I wish I had spent more time on the readings earlier on. Some ideas that felt confusing at first made a lot more sense once we discussed them in class or applied them to real-life situations. I also would've spoken up more during discussions — hearing others' experiences made a big difference. Going forward, I plan to keep reflecting on ethics even outside of class.",
    icon: Sparkles,
    color: "from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800", // Neutralized color
    glowColor: "shadow-gray-200/50 dark:shadow-gray-700/30", // Neutralized glow
  },
]

export function ReflectionSection() {
  return (
    <section
      id="reflection"
      className="py-20 px-4 relative overflow-hidden"
      role="main"
      aria-labelledby="reflection-heading"
      style={{
        background: `
        radial-gradient(circle at 20% 30%, rgba(167, 196, 160, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(212, 194, 252, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(255, 215, 186, 0.04) 0%, transparent 70%)
      `,
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <Lightbulb className="w-12 h-12 text-[#FFD7BA] dark:text-[#FFEF9F]" />
              <div className="absolute inset-0 w-12 h-12 rounded-full bg-[#FFD7BA]/20 dark:bg-[#FFEF9F]/20" />
            </div>
            <h2 id="reflection-heading" className="text-4xl md:text-5xl font-bold text-[#4B3F72] dark:text-[#FFEF9F]">
              Moments of Reflection
            </h2>
          </div>
          <p className="text-xl text-[#A7C4A0] dark:text-[#58B368] max-w-2xl mx-auto">
            Thoughts emerging from the depths of philosophical exploration
          </p>
        </div>

        <div className="grid gap-12 md:gap-16" role="list" aria-label="Personal reflections">
          {reflections.map((reflection, index) => (
            <div key={reflection.title} role="listitem" className="relative">
              {/* Optimized Thought Cloud Container */}
              <div className="relative">
                {/* Simplified Main Cloud Shape */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${reflection.color} rounded-full opacity-15 blur-xl ${reflection.glowColor} shadow-xl`}
                />

                {/* Simplified smaller cloud bubbles */}
                <div className="absolute -top-4 -left-4">
                  <div className={`w-6 h-6 bg-gradient-to-br ${reflection.color} rounded-full opacity-30 blur-sm`} />
                </div>

                {/* Main Card */}
                <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-none shadow-xl hover:shadow-2xl transition-shadow duration-200 relative overflow-hidden">
                  {/* Subtle Inner Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reflection.color} opacity-3`} />

                  <CardHeader className="relative">
                    <CardTitle className="text-2xl text-[#4B3F72] dark:text-[#FFEF9F] flex items-center gap-4">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${reflection.color} ${reflection.glowColor} shadow-lg`}
                      >
                        <reflection.icon className="w-6 h-6 text-white" />
                      </div>
                      <span>{reflection.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <Textarea
                      value={reflection.content}
                      readOnly
                      className="min-h-[140px] text-base leading-relaxed border-none bg-transparent resize-none focus:ring-0 p-0 text-gray-700 dark:text-gray-300"
                      aria-label={`${reflection.title} reflection content`}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
