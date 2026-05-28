"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { recommendations, categoryLabels } from "@/lib/quiz-data"
import type { QuizCategory, QuizResults, Recommendation } from "@/lib/types"
import { Droplets, Mountain, Trees, Zap, Sprout, TrendingUp, Clock, DollarSign, ChevronDown, ChevronUp, Lightbulb } from "lucide-react"

interface RecommendationsListProps {
  results: QuizResults
}

const categoryIcons: Record<QuizCategory, React.ReactNode> = {
  agua: <Droplets className="w-5 h-5" />,
  solo: <Mountain className="w-5 h-5" />,
  biodiversidade: <Trees className="w-5 h-5" />,
  energia: <Zap className="w-5 h-5" />,
  praticas: <Sprout className="w-5 h-5" />,
}

const impactColors = {
  baixo: "bg-chart-3 text-chart-3",
  medio: "bg-accent text-accent",
  alto: "bg-primary text-primary",
}

const difficultyLabels = {
  facil: "Facil",
  moderado: "Moderado",
  dificil: "Dificil",
}

export function RecommendationsList({ results }: RecommendationsListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Get recommendations based on low scores
  const getRelevantRecommendations = (): Recommendation[] => {
    const categories: QuizCategory[] = ["agua", "solo", "biodiversidade", "energia", "praticas"]
    const relevant: Recommendation[] = []

    categories.forEach((category) => {
      const catScore = results.categoryScores[category]
      // If category score is below 75%, show recommendations
      if (catScore.percentage < 75) {
        const catRecommendations = recommendations.filter((r) => r.category === category)
        // Prioritize by impact when score is very low
        if (catScore.percentage < 50) {
          relevant.push(...catRecommendations.filter((r) => r.impact === "alto"))
        } else {
          relevant.push(...catRecommendations.slice(0, 2))
        }
      }
    })

    // Remove duplicates and limit
    const unique = Array.from(new Map(relevant.map((r) => [r.id, r])).values())
    return unique.slice(0, 8)
  }

  const relevantRecs = getRelevantRecommendations()

  if (relevantRecs.length === 0) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            Recomendacoes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Parabens!</h3>
            <p className="text-muted-foreground">
              Sua propriedade ja apresenta excelentes praticas de sustentabilidade em todas as categorias.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-primary" />
          Recomendacoes Personalizadas
        </CardTitle>
        <CardDescription>
          Acoes sugeridas para melhorar a sustentabilidade da sua propriedade
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {relevantRecs.map((rec) => {
          const isExpanded = expandedId === rec.id
          return (
            <div
              key={rec.id}
              className="border rounded-lg overflow-hidden transition-all hover:border-primary/50"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : rec.id)}
                className="w-full p-4 text-left flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-muted text-muted-foreground shrink-0">
                  {categoryIcons[rec.category]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-foreground">{rec.title}</h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        impactColors[rec.impact].split(" ")[0]
                      }/10 ${impactColors[rec.impact].split(" ")[1]}`}
                    >
                      Impacto {rec.impact}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{rec.description}</p>
                </div>
                <div className="shrink-0 text-muted-foreground">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-0 border-t bg-muted/30">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Custo estimado</p>
                        <p className="text-sm font-medium text-foreground">{rec.estimatedCost}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Prazo</p>
                        <p className="text-sm font-medium text-foreground">{rec.timeframe}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Dificuldade</p>
                        <p className="text-sm font-medium text-foreground">{difficultyLabels[rec.difficulty]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-muted-foreground mb-2">Beneficios</p>
                    <ul className="space-y-1">
                      {rec.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
