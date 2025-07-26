"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote, Palette, Camera } from "lucide-react"

const quotes = [
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    reflection:
      "This quote stuck with me throughout the course. It reminded me that real growth comes from taking time to question my values, choices, and the kind of person I want to be.",
  },
  {
    text: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
    author: "Immanuel Kant",
    reflection:
      "Kant's way of thinking made a big impact on how I view my actions. Now I try to ask myself: 'Would this still feel right if everyone did it?' It's helped me be more honest and responsible in daily life.",
  },
  {
    text: "Awareness is the greatest agent for change.",
    author: "Eckhart Tolle",
    reflection:
      "This quote helped me connect ethics with mindfulness. I've learned that just being more aware — of my actions, thoughts, and how they affect others — is already a powerful step toward living more ethically.",
  },
]


const creativeWorks = [
  {
    title: "The Moral Compass",
    description: "A digital artwork representing the complexity of ethical decision-making",
    type: "Digital Art",
  },
  {
    title: "Trolley Problem Visualization",
    description: "An infographic exploring different perspectives on the famous thought experiment",
    type: "Infographic",
  },
  {
    title: "Ethics in Daily Life",
    description: "A photo series documenting small moral choices we make every day",
    type: "Photography",
  },
]

export function CreativeSection() {
  return (
    <section id="creative" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4B3F72] dark:text-[#FFEF9F]">
            Creative Expressions
          </h2>
          <p className="text-xl text-[#A7C4A0] dark:text-[#58B368] max-w-2xl mx-auto">
            Art, quotes, and media that capture the essence of my ethical journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="quotes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#A7C4A0]/20 dark:bg-[#58B368]/20">
              <TabsTrigger value="quotes" className="flex items-center gap-2">
                <Quote className="w-4 h-4" />
                Quotes
              </TabsTrigger>
              <TabsTrigger value="art" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Art
              </TabsTrigger>
              <TabsTrigger value="media" className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Media
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quotes" className="mt-8">
              <div className="grid gap-6">
                {quotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-r from-[#A7C4A0]/10 to-[#D4C2FC]/10 dark:from-[#58B368]/10 dark:to-[#FFEF9F]/10 border-none">
                      <CardContent className="p-6">
                        <blockquote className="text-xl italic text-[#4B3F72] dark:text-[#FFEF9F] mb-4">
                          "{quote.text}"
                        </blockquote>
                        <p className="text-[#A7C4A0] dark:text-[#58B368] font-semibold mb-3">— {quote.author}</p>
                        <p className="text-gray-700 dark:text-gray-300">{quote.reflection}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="art" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {creativeWorks
                  .filter((work) => work.type === "Digital Art" || work.type === "Infographic")
                  .map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="aspect-video bg-gradient-to-br from-[#A7C4A0] to-[#D4C2FC] dark:from-[#58B368] dark:to-[#FFEF9F] rounded-lg mb-4 flex items-center justify-center">
                            <Palette className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#4B3F72] dark:text-[#FFEF9F] mb-2">
                            {work.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">{work.description}</p>
                          <span className="text-sm text-[#A7C4A0] dark:text-[#58B368] font-medium">{work.type}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="media" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {creativeWorks
                  .filter((work) => work.type === "Photography")
                  .map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none">
                        <CardContent className="p-6">
                          <div className="aspect-square bg-gradient-to-br from-[#FFD7BA] to-[#A7C4A0] dark:from-[#FFEF9F] dark:to-[#58B368] rounded-lg mb-4 flex items-center justify-center">
                            <Camera className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-[#4B3F72] dark:text-[#FFEF9F] mb-2">
                            {work.title}
                          </h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{work.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
