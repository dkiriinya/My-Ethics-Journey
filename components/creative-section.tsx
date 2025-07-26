"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote, BookOpen,Star } from "lucide-react"

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


const books = [
 {
  title: "The Power of Now",
  author: "Eckhart Tolle",
  description:
    "A spiritual and philosophical guide to being present, with strong ethical undertones about consciousness and suffering.",
  keyInsight: "Real freedom begins when you stop identifying with the voice in your head and become present in the now.",
  personalImpact:
    "This book shifted my understanding of suffering, responsibility, and how awareness shapes ethical living.",
  color: "from-green-400 to-emerald-500",
  rating: 5,
},
{
  title: "Prima Facie Duties",
  author: "1000-Word Philosophy",
  description:
    "An accessible overview of W.D. Ross’s pluralistic theory of moral obligations, balancing competing duties.",
  keyInsight: "We have multiple, conditional moral duties — like fidelity, beneficence, and justice — which must be weighed in context.",
  personalImpact:
    "This helped me move beyond black-and-white ethics and appreciate the nuance in real-world moral dilemmas.",
  color: "from-teal-400 to-cyan-500",
  rating: 4,
},
// {
//   title: "The Moral Landscape",
//   author: "Sam Harris",
//   description:
//     "A science-based approach to ethics arguing that well-being can be objectively measured, challenging moral relativism.",
//   keyInsight: "Moral questions are questions about the flourishing of conscious creatures — and some answers are better than others.",
//   personalImpact:
//     "Harris showed me that ethics can be grounded in reason and evidence, not just tradition or culture.",
//   color: "from-sky-400 to-blue-500",
//   rating: 4,
// },
// {
//   title: "Justice: What's the Right Thing to Do?",
//   author: "Michael Sandel",
//   description:
//     "A powerful introduction to political and moral philosophy through real-life cases, dilemmas, and public reasoning.",
//   keyInsight: "Understanding justice requires not just logic, but empathy, humility, and public dialogue.",
//   personalImpact:
//     "Sandel’s way of engaging ethical questions reminded me that real learning happens through open, respectful dialogue.",
//   color: "from-yellow-400 to-amber-500",
//   rating: 5,
// }
]

export function CreativeSection() {
  return (
    <section id="creative" className="py-20 px-4" role="main" aria-labelledby="creative-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="creative-heading" className="text-4xl md:text-5xl font-bold mb-6 text-[#4B3F72] dark:text-[#FFEF9F]">
            Creative Expressions
          </h2>
          <p className="text-xl text-[#A7C4A0] dark:text-[#58B368] max-w-2xl mx-auto">
            Quotes, books & text that capture the essence of my ethical journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="quotes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#A7C4A0]/20 dark:bg-[#58B368]/20" role="tablist">
              <TabsTrigger value="quotes" className="flex items-center gap-2" role="tab" aria-controls="quotes-panel">
                <Quote className="w-4 h-4" aria-hidden="true" />
                Quotes
              </TabsTrigger>
              <TabsTrigger value="books" className="flex items-center gap-2" role="tab" aria-controls="books-panel">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Books & Text
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quotes" className="mt-8" role="tabpanel" id="quotes-panel">
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

            <TabsContent value="books" className="mt-8" role="tabpanel" id="books-panel">
              <div className="grid md:grid-cols-2 gap-6">
                {books.map((book, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Book Header */}
                        <div className="mb-4">
                          <div
                            className={`w-full h-32 bg-gradient-to-br ${book.color} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                          >
                            <BookOpen className="w-12 h-12 text-white opacity-80" />
                            <div className="absolute top-2 right-2 flex">
                              {[...Array(book.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                              ))}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-[#4B3F72] dark:text-[#FFEF9F] mb-1">{book.title}</h3>
                          <p className="text-[#A7C4A0] dark:text-[#58B368] font-medium mb-3">by {book.author}</p>
                        </div>

                        {/* Book Content */}
                        <div className="flex-1 space-y-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{book.description}</p>

                          {/* Key Insight */}
                          <div className="bg-gradient-to-r from-[#A7C4A0]/10 to-[#D4C2FC]/10 dark:from-[#58B368]/10 dark:to-[#FFEF9F]/10 rounded-lg p-3">
                            <h4 className="font-semibold text-[#4B3F72] dark:text-[#FFEF9F] mb-2 text-sm">
                              Key Insight
                            </h4>
                            <p className="text-sm italic text-gray-700 dark:text-gray-300">"{book.keyInsight}"</p>
                          </div>

                          {/* Personal Impact */}
                          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
                            <h4 className="font-semibold text-[#4B3F72] dark:text-[#FFEF9F] mb-2 text-sm">
                              Personal Impact
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{book.personalImpact}</p>
                          </div>
                        </div>
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
