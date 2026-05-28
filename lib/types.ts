export interface User {
  id: string
  email: string
  name: string
  password: string
  createdAt: string
  quizCompleted: boolean
  quizResults?: QuizResults
}

export interface Property {
  id: string
  userId: string
  name: string
  location: string
  size: number
  sizeUnit: "hectares" | "alqueires"
  mainActivity: string
  createdAt: string
  sustainabilityIndex?: number
  quizAnswers?: Record<string, number>
}

export interface QuizQuestion {
  id: string
  category: QuizCategory
  question: string
  options: QuizOption[]
}

export interface QuizOption {
  label: string
  value: number
  description?: string
}

export type QuizCategory = "agua" | "solo" | "biodiversidade" | "energia" | "praticas"

export interface QuizResults {
  totalScore: number
  maxScore: number
  percentageScore: number
  categoryScores: Record<QuizCategory, { score: number; maxScore: number; percentage: number }>
  completedAt: string
  propertyId: string
}

export interface Recommendation {
  id: string
  category: QuizCategory
  title: string
  description: string
  impact: "baixo" | "medio" | "alto"
  difficulty: "facil" | "moderado" | "dificil"
  estimatedCost: string
  timeframe: string
  benefits: string[]
}

export interface FutureProjection {
  year: number
  currentIndex: number
  projectedIndex: number
  improvements: string[]
  benefits: string[]
}
