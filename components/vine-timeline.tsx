"use client"

import { WeekCard } from "@/components/week-card"

const weekData = [
  {
    week: 1,
    title: "Introduction to Ethics",
    topic: "In this week, we explored the basics of ethics and what morality really means in our day-to-day lives.",
    reflection:
      "Ethics is not just academic; it's a lived experience rooted in every decision, action, and relationship. Understanding its foundations helps us navigate life with integrity, responsibility, and awareness of our impact on others.",
    application:
      "I started paying more attention to how I treat people in everyday situations — like being more respectful to service workers or speaking up when something feels unfair.",
  },
  {
    week: 3,
    title: "Utilitarianism and Ethical Theories",
    topic:
      "This week, we looked at different ethical theories. I found utilitarianism especially interesting — the idea of choosing actions that do the most good for the most people.",
    reflection:
      "We discussed a dilemma about whether it would be right to kill baby Hitler if we knew what he would become. It made me think deeply about how outcomes can influence what we see as moral. It's not always black and white.",
    application:
      "When working in groups, I started thinking more about how my choices affect everyone, not just what's easiest or best for me.",
  },
  {
    week: 5,
    title: "Deontological Ethics",
    topic: "We focused on Kant's ideas about duty and doing the right thing based on principles, not just outcomes.",
    reflection:
      "Kant's idea of treating people as ends, not just as a means to an end, really stood out to me. It made me think more about how I approach my relationships and commitments.",
    application:
      "Before I make promises now, I ask myself: 'Would it be okay if everyone acted this way?' It's helped me become more thoughtful and honest with others.",
  },
  {
    week: 7,
    title: "Feminist Ethics",
    topic:
      "We explored feminist ethics, which puts more focus on relationships, empathy, and the context around moral decisions.",
    reflection:
      "This approach felt very real to me. It made me see that caring and being emotionally aware are strengths in ethics, not weaknesses. It shifted how I view moral responsibility.",
    application:
      "I've been making more effort to check in on friends and family. I've also started thinking about how my actions impact the people closest to me.",
  },
  {
    week: 9,
    title: "Organizational Culture and Ethics",
    topic:
      "This week was about how ethics shows up in organizations, and how culture isn't just habits — it's shared values and ways of doing things.",
    reflection:
      "It helped me see that an organization's culture plays a big role in how people make decisions. Ethics isn't just about individuals — it's also about the systems they're in.",
    application:
      "I've started paying attention to the kind of values that guide group work and leadership, and how those values affect the choices people make.",
  },
  {
    week: 11,
    title: "Ethics in the Real World - Guest Speakers",
    topic: "We had guest speakers from different industries who shared how ethics plays out in real workplaces.",
    reflection:
      "This was one of the most interesting sessions. We had John from Global Impact, George from Absa, and Sally from the telecommunications industry. I got to ask Sally a question about Safaricom's market dominance in Kenya and how they handle ethical concerns around monopolization. Her response gave me a better understanding of the challenges big companies face.",
    application:
      "It made me realize the importance of asking the right questions and being aware of the ethical side of business, especially when companies have a lot of power.",
  },
]

export function VineTimeline() {
  return (
    <section id="journey" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4B3F72] dark:text-[#FFEF9F]">The Journey</h2>
          <p className="text-xl text-[#A7C4A0] dark:text-[#58B368] max-w-2xl mx-auto">
            Six pivotal weeks that shaped my understanding of ethics and moral reasoning
          </p>
        </div>

        <div className="relative">
          {/* Optimized Vine/Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A7C4A0] via-[#D4C2FC] to-[#FFD7BA] dark:from-[#58B368] dark:via-[#FFEF9F] dark:to-[#FFD7BA] transform md:-translate-x-1/2" />

          {/* Week Cards with optimized animations */}
          <div className="space-y-12">
            {weekData.map((week, index) => (
              <div key={week.week} className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}>
                <WeekCard {...week} isLeft={index % 2 === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
