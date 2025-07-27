"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface WeekCardProps {
  week: number
  title: string
  topic: string
  reflection: string
  application: string
  isLeft?: boolean
}

export function WeekCard({ week, title, topic, reflection, application, isLeft = true }: WeekCardProps) {
  return (
    <div className={`relative ${isLeft ? "ml-12 md:ml-0 md:mr-8" : "ml-12 md:ml-8"}`}>
      {/* Optimized Timeline Node */}
      <div
        className={`absolute -left-8 md:${isLeft ? "-right-4" : "-left-4"} top-6 w-8 h-8 rounded-full bg-[#A7C4A0] dark:bg-[#58B368] border-4 border-white dark:border-gray-800 flex items-center justify-center`}
      >
        <span className="text-white text-sm font-bold">{week}</span>
      </div>

      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-2xl text-[#4B3F72] dark:text-[#FFEF9F] flex items-center gap-3">
            <span className="text-[#A7C4A0] dark:text-[#58B368]">Week {week}:</span>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#4B3F72] dark:text-[#FFEF9F] mb-2">Class Topic</h4>
            <p className="text-gray-700 dark:text-gray-300">{topic}</p>
          </div>

          <Separator className="bg-[#A7C4A0] dark:bg-[#58B368]" />

          <div>
            <h4 className="font-semibold text-[#4B3F72] dark:text-[#FFEF9F] mb-2">Personal Reflection</h4>
            <p className="text-gray-700 dark:text-gray-300 italic">{reflection}</p>
          </div>

          <Separator className="bg-[#D4C2FC] dark:bg-[#FFEF9F]" />

          <div>
            <h4 className="font-semibold text-[#4B3F72] dark:text-[#FFEF9F] mb-2">Real-Life Application</h4>
            <p className="text-gray-700 dark:text-gray-300">{application}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
