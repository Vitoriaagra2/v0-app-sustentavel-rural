"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { quizQuestions, categoryLabels } from "@/lib/quiz-data"
import type { QuizCategory, QuizResults, Property } from "@/lib/types"
import { Droplets, Mountain, Trees, Zap, Sprout, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

interface SustainabilityQuizProps {
  property: Property
  onComplete: (results: QuizResults) => void
  onCancel?: () => void
}

const categoryIcons: Record<QuizCategory, React.ReactNode> = {
  agua: <Droplets className="w-5 h-5" />,
  solo: <Mountain className="w-5 h-5" />,
  biodiversidade: <Trees className="w-5 h-5" />,
  energia: <Zap className="w-5 h-5" />,
  praticas: <Sprout className="w-5 h-5" />,
}

export function SustainabilityQuiz({ property, onComplete, onCancel }: SustainabilityQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const currentQuestion = quizQuestions[currentIndex]
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  }

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      calculateResults()
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const calculateResults = () => {
    const categories: QuizCategory[] = ["agua", "solo", "biodiversidade", "energia", "praticas"]
    const categoryScores: Record<QuizCategory, { score: number; maxScore: number; percentage: number }> = {} as Record<QuizCategory, { score: number; maxScore: number; percentage: number }>

    let totalScore = 0
    let maxScore = 0

    categories.forEach((category) => {
      const categoryQuestions = quizQuestions.filter((q) => q.category === category)
      const categoryMaxScore = categoryQuestions.length * 3
      const categoryScore = categoryQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0)

      categoryScores[category] = {
        score: categoryScore,
        maxScore: categoryMaxScore,
        percentage: Math.round((categoryScore / categoryMaxScore) * 100),
      }

      totalScore += categoryScore
      maxScore += categoryMaxScore
    })

    const results: QuizResults = {
      totalScore,
      maxScore,
      percentageScore: Math.round((totalScore / maxScore) * 100),
      categoryScores,
      completedAt: new Date().toISOString(),
      propertyId: property.id,
    }

    onComplete(results)
  }

  const isAnswered = answers[currentQuestion?.id] !== undefined

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Quiz de Sustentabilidade</h1>
              <p className="text-muted-foreground">Propriedade: {property.name}</p>
            </div>
            {onCancel && (
              <Button variant="outline" onClick={onCancel}>
                Cancelar
              </Button>
            )}
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Pergunta {currentIndex + 1} de {quizQuestions.length}
              </span>
              <span className="font-medium text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-6 shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {categoryIcons[currentQuestion.category]}
              </div>
              <span className="text-sm font-medium text-primary">
                {categoryLabels[currentQuestion.category]}
              </span>
            </div>
            <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
            <CardDescription>Selecione a opção que melhor descreve sua situação atual</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = answers[currentQuestion.id] === option.value
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                    </div>
                    <span className={`font-medium ${isSelected ? "text-primary" : "text-foreground"}`}>
                      {option.label}
                    </span>
                  </div>
                  {option.description && (
                    <p className="mt-2 ml-8 text-sm text-muted-foreground">{option.description}</p>
                  )}
                </button>
              )
            })}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </Button>

          <Button onClick={handleNext} disabled={!isAnswered} className="gap-2">
            {currentIndex === quizQuestions.length - 1 ? (
              <>
                Finalizar
                <CheckCircle2 className="w-4 h-4" />
              </>
            ) : (
              <>
                Próxima
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* Category Progress */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50">
          <h3 className="text-sm font-medium text-foreground mb-3">Progresso por categoria</h3>
          <div className="grid grid-cols-5 gap-2">
            {(["agua", "solo", "biodiversidade", "energia", "praticas"] as QuizCategory[]).map((cat) => {
              const categoryQuestions = quizQuestions.filter((q) => q.category === cat)
              const answeredCount = categoryQuestions.filter((q) => answers[q.id] !== undefined).length
              const isComplete = answeredCount === categoryQuestions.length
              const isCurrent = currentQuestion.category === cat

              return (
                <div
                  key={cat}
                  className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                    isCurrent ? "bg-primary/10" : isComplete ? "bg-accent/10" : ""
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-full ${
                      isCurrent
                        ? "text-primary"
                        : isComplete
                        ? "text-accent"
                        : "text-muted-foreground"
                    }`}
                  >
                    {categoryIcons[cat]}
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    {answeredCount}/{categoryQuestions.length}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
