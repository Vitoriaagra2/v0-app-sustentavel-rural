"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { QuizResults } from "@/lib/types"
import { SustainabilityGauge } from "./sustainability-gauge"
import { TrendingUp, Calendar, Leaf, CheckCircle2 } from "lucide-react"

interface FutureSimulationProps {
  results: QuizResults
  propertyName: string
}

interface ProjectionData {
  year: number
  currentIndex: number
  projectedIndex: number
  improvements: string[]
  benefits: string[]
}

export function FutureSimulation({ results, propertyName }: FutureSimulationProps) {
  const [selectedYear, setSelectedYear] = useState<"1" | "3" | "5">("1")

  const generateProjections = (): Record<string, ProjectionData> => {
    const baseScore = results.percentageScore
    const categories = results.categoryScores

    // Calculate potential improvement based on weakest areas
    const weakAreas = Object.entries(categories)
      .filter(([_, data]) => data.percentage < 75)
      .sort((a, b) => a[1].percentage - b[1].percentage)

    const projections: Record<string, ProjectionData> = {
      "1": {
        year: 1,
        currentIndex: baseScore,
        projectedIndex: Math.min(100, baseScore + Math.round(baseScore * 0.15)),
        improvements: [],
        benefits: [],
      },
      "3": {
        year: 3,
        currentIndex: baseScore,
        projectedIndex: Math.min(100, baseScore + Math.round(baseScore * 0.35)),
        improvements: [],
        benefits: [],
      },
      "5": {
        year: 5,
        currentIndex: baseScore,
        projectedIndex: Math.min(100, baseScore + Math.round(baseScore * 0.55)),
        improvements: [],
        benefits: [],
      },
    }

    // Add specific improvements based on weak areas
    const improvementsByCategory: Record<string, { improvements: string[]; benefits: string[] }> = {
      agua: {
        improvements: [
          "Implementar sistema de captacao de agua da chuva",
          "Recuperar nascentes e matas ciliares",
          "Instalar irrigacao por gotejamento",
        ],
        benefits: [
          "Reducao de 30% no consumo de agua",
          "Maior resiliencia em periodos de seca",
          "Melhoria na qualidade da agua",
        ],
      },
      solo: {
        improvements: [
          "Adotar plantio direto na palha",
          "Implementar curvas de nivel",
          "Praticar rotacao de culturas",
        ],
        benefits: [
          "Aumento de 25% na materia organica",
          "Reducao da erosao em 60%",
          "Maior produtividade agricola",
        ],
      },
      biodiversidade: {
        improvements: [
          "Criar corredores ecologicos",
          "Recuperar areas de Reserva Legal",
          "Implantar sistemas agroflorestais",
        ],
        benefits: [
          "Aumento de polinizadores naturais",
          "Controle biologico de pragas",
          "Regularizacao ambiental",
        ],
      },
      energia: {
        improvements: [
          "Instalar sistema fotovoltaico",
          "Implementar biodigestor",
          "Trocar equipamentos por mais eficientes",
        ],
        benefits: [
          "Reducao de 80% nos custos de energia",
          "Geracao de biofertilizante",
          "Independencia energetica",
        ],
      },
      praticas: {
        improvements: [
          "Adotar Manejo Integrado de Pragas",
          "Iniciar transicao para producao organica",
          "Implementar ILPF",
        ],
        benefits: [
          "Reducao de 50% em agrotoxico",
          "Acesso a mercados premium",
          "Diversificacao de renda",
        ],
      },
    }

    // Distribute improvements across years
    weakAreas.forEach(([category], index) => {
      const catImprovements = improvementsByCategory[category]
      if (catImprovements) {
        if (index < 2) {
          projections["1"].improvements.push(catImprovements.improvements[0])
          projections["1"].benefits.push(catImprovements.benefits[0])
        }
        if (index < 4) {
          projections["3"].improvements.push(...catImprovements.improvements.slice(0, 2))
          projections["3"].benefits.push(...catImprovements.benefits.slice(0, 2))
        }
        projections["5"].improvements.push(...catImprovements.improvements)
        projections["5"].benefits.push(...catImprovements.benefits)
      }
    })

    // Remove duplicates
    Object.keys(projections).forEach((key) => {
      projections[key].improvements = [...new Set(projections[key].improvements)].slice(0, 5)
      projections[key].benefits = [...new Set(projections[key].benefits)].slice(0, 5)
    })

    return projections
  }

  const projections = generateProjections()
  const currentProjection = projections[selectedYear]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Simulacao de Futuro
        </CardTitle>
        <CardDescription>
          Veja como sua propriedade pode evoluir implementando as recomendacoes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedYear} onValueChange={(v) => setSelectedYear(v as "1" | "3" | "5")}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="1" className="gap-2">
              <Calendar className="w-4 h-4" />
              1 Ano
            </TabsTrigger>
            <TabsTrigger value="3" className="gap-2">
              <Calendar className="w-4 h-4" />
              3 Anos
            </TabsTrigger>
            <TabsTrigger value="5" className="gap-2">
              <Calendar className="w-4 h-4" />
              5 Anos
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedYear} className="space-y-6">
            {/* Score Comparison */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Indice Atual</p>
                <SustainabilityGauge score={currentProjection.currentIndex} size="sm" showLabel={false} />
                <p className="mt-2 font-semibold text-foreground">{currentProjection.currentIndex} pontos</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Projecao em {currentProjection.year} ano(s)</p>
                <SustainabilityGauge score={currentProjection.projectedIndex} size="sm" showLabel={false} />
                <p className="mt-2 font-semibold text-primary">{currentProjection.projectedIndex} pontos</p>
              </div>
            </div>

            {/* Improvement */}
            <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">Melhoria projetada</p>
              <p className="text-3xl font-bold text-primary">
                +{currentProjection.projectedIndex - currentProjection.currentIndex} pontos
              </p>
              <p className="text-sm text-muted-foreground">
                ({Math.round(((currentProjection.projectedIndex - currentProjection.currentIndex) / currentProjection.currentIndex) * 100)}% de aumento)
              </p>
            </div>

            {/* Actions needed */}
            {currentProjection.improvements.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Leaf className="w-4 h-4 text-primary" />
                    Acoes recomendadas
                  </h4>
                  <ul className="space-y-2">
                    {currentProjection.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-medium">
                          {i + 1}
                        </span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Beneficios esperados
                  </h4>
                  <ul className="space-y-2">
                    {currentProjection.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
