"use client"

import type { QuizResults, QuizCategory } from "@/lib/types"
import { categoryLabels } from "@/lib/quiz-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Mountain, Trees, Zap, Sprout } from "lucide-react"

interface SustainabilityGaugeProps {
  score: number
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
}

export function SustainabilityGauge({ score, size = "md", showLabel = true }: SustainabilityGaugeProps) {
  const sizes = {
    sm: { width: 120, strokeWidth: 8, fontSize: "text-xl" },
    md: { width: 180, strokeWidth: 12, fontSize: "text-3xl" },
    lg: { width: 240, strokeWidth: 16, fontSize: "text-5xl" },
  }

  const { width, strokeWidth, fontSize } = sizes[size]
  const radius = (width - strokeWidth) / 2
  const circumference = radius * Math.PI
  const offset = circumference - (score / 100) * circumference

  const getColor = (score: number) => {
    if (score >= 75) return "text-primary"
    if (score >= 50) return "text-accent"
    if (score >= 25) return "text-chart-4"
    return "text-destructive"
  }

  const getLabel = (score: number) => {
    if (score >= 75) return "Excelente"
    if (score >= 50) return "Bom"
    if (score >= 25) return "Regular"
    return "Crítico"
  }

  const getStrokeColor = (score: number) => {
    if (score >= 75) return "stroke-primary"
    if (score >= 50) return "stroke-accent"
    if (score >= 25) return "stroke-chart-4"
    return "stroke-destructive"
  }

  return (
    <div className="flex flex-col items-center">
      <svg width={width} height={width / 2 + 20} className="overflow-visible">
        {/* Background arc */}
        <path
          d={`M ${strokeWidth / 2} ${width / 2} A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${width / 2}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted"
        />
        {/* Colored arc */}
        <path
          d={`M ${strokeWidth / 2} ${width / 2} A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${width / 2}`}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={getStrokeColor(score)}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
        {/* Score text */}
        <text
          x={width / 2}
          y={width / 2 - 10}
          textAnchor="middle"
          className={`${fontSize} font-bold fill-foreground`}
        >
          {score}
        </text>
        <text
          x={width / 2}
          y={width / 2 + 15}
          textAnchor="middle"
          className="text-sm fill-muted-foreground"
        >
          de 100
        </text>
      </svg>
      {showLabel && (
        <span className={`mt-2 font-semibold ${getColor(score)}`}>{getLabel(score)}</span>
      )}
    </div>
  )
}

interface ResultsDisplayProps {
  results: QuizResults
  propertyName: string
}

const categoryIcons: Record<QuizCategory, React.ReactNode> = {
  agua: <Droplets className="w-5 h-5" />,
  solo: <Mountain className="w-5 h-5" />,
  biodiversidade: <Trees className="w-5 h-5" />,
  energia: <Zap className="w-5 h-5" />,
  praticas: <Sprout className="w-5 h-5" />,
}

export function ResultsDisplay({ results, propertyName }: ResultsDisplayProps) {
  const categories: QuizCategory[] = ["agua", "solo", "biodiversidade", "energia", "praticas"]

  const getCategoryColor = (percentage: number) => {
    if (percentage >= 75) return "bg-primary"
    if (percentage >= 50) return "bg-accent"
    if (percentage >= 25) return "bg-chart-4"
    return "bg-destructive"
  }

  return (
    <div className="space-y-6">
      {/* Main Score */}
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-xl">Indice de Sustentabilidade</CardTitle>
          <p className="text-muted-foreground">{propertyName}</p>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <SustainabilityGauge score={results.percentageScore} size="lg" />
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Detalhamento por Categoria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((category) => {
            const catScore = results.categoryScores[category]
            return (
              <div key={category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-muted text-muted-foreground">
                      {categoryIcons[category]}
                    </div>
                    <span className="font-medium text-foreground">{categoryLabels[category]}</span>
                  </div>
                  <span className="font-semibold text-foreground">{catScore.percentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${getCategoryColor(catScore.percentage)}`}
                    style={{ width: `${catScore.percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
