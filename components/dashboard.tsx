"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SustainabilityGauge, ResultsDisplay } from "./sustainability-gauge"
import { RecommendationsList } from "./recommendations-list"
import { FutureSimulation } from "./future-simulation"
import { deleteProperty, getProperties } from "@/lib/storage"
import type { Property, User, QuizResults } from "@/lib/types"
import { 
  Plus, 
  MapPin, 
  Ruler, 
  Wheat, 
  LogOut, 
  ChevronRight, 
  Trash2, 
  Edit2, 
  BarChart3,
  Leaf,
  RefreshCw
} from "lucide-react"

interface DashboardProps {
  user: User
  onLogout: () => void
  onAddProperty: () => void
  onEditProperty: (property: Property) => void
  onTakeQuiz: (property: Property) => void
}

export function Dashboard({ user, onLogout, onAddProperty, onEditProperty, onTakeQuiz }: DashboardProps) {
  const [properties, setProperties] = useState<Property[]>(() => getProperties(user.id))
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null)

  const handleDeleteProperty = (propertyId: string) => {
    deleteProperty(propertyId)
    setProperties(getProperties(user.id))
    setShowDeleteConfirm(null)
    if (selectedProperty?.id === propertyId) {
      setSelectedProperty(null)
    }
  }

  const refreshProperties = () => {
    setProperties(getProperties(user.id))
  }

  // Get mock results for a property
  const getPropertyResults = (property: Property): QuizResults | null => {
    if (property.sustainabilityIndex === undefined) return null
    
    // Reconstruct results from saved data
    const categories = ["agua", "solo", "biodiversidade", "energia", "praticas"] as const
    const categoryScores = {} as QuizResults["categoryScores"]
    
    categories.forEach((cat) => {
      const percentage = property.quizAnswers?.[cat] as unknown as { percentage: number } | undefined
      categoryScores[cat] = {
        score: Math.round((percentage?.percentage || property.sustainabilityIndex || 0) * 0.09),
        maxScore: 9,
        percentage: percentage?.percentage || property.sustainabilityIndex || 0,
      }
    })

    return {
      totalScore: Math.round(property.sustainabilityIndex * 0.45),
      maxScore: 45,
      percentageScore: property.sustainabilityIndex,
      categoryScores,
      completedAt: property.createdAt,
      propertyId: property.id,
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">EcoRural</h1>
              <p className="text-sm text-muted-foreground">Sustentabilidade Rural</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Ola, <span className="font-medium text-foreground">{user.name}</span>
            </span>
            <Button variant="outline" size="sm" onClick={onLogout} className="gap-2">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Properties List */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Suas Propriedades</h2>
              <Button onClick={onAddProperty} size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Nova
              </Button>
            </div>

            {properties.length === 0 ? (
              <Card className="shadow-lg">
                <CardContent className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Nenhuma propriedade</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Cadastre sua primeira propriedade para comecar
                  </p>
                  <Button onClick={onAddProperty} className="gap-2">
                    <Plus className="w-4 h-4" />
                    Adicionar propriedade
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {properties.map((property) => (
                  <Card
                    key={property.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedProperty?.id === property.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedProperty(property)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate">{property.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="truncate">{property.location}</span>
                          </div>
                          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Ruler className="w-3 h-3" />
                              {property.size} {property.sizeUnit}
                            </span>
                            <span className="flex items-center gap-1">
                              <Wheat className="w-3 h-3" />
                              {property.mainActivity}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {property.sustainabilityIndex !== undefined ? (
                            <div className="text-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-bold text-primary">
                                  {property.sustainabilityIndex}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                              Sem avaliacao
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                        {property.sustainabilityIndex === undefined ? (
                          <Button
                            size="sm"
                            className="flex-1 gap-2"
                            onClick={(e) => {
                              e.stopPropagation()
                              onTakeQuiz(property)
                            }}
                          >
                            <BarChart3 className="w-4 h-4" />
                            Fazer Quiz
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 gap-2"
                            onClick={(e) => {
                              e.stopPropagation()
                              onTakeQuiz(property)
                            }}
                          >
                            <RefreshCw className="w-4 h-4" />
                            Refazer Quiz
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation()
                            onEditProperty(property)
                          }}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation()
                            setShowDeleteConfirm(property.id)
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Delete confirmation */}
                      {showDeleteConfirm === property.id && (
                        <div className="mt-3 pt-3 border-t bg-destructive/5 -mx-4 -mb-4 px-4 pb-4 rounded-b-lg">
                          <p className="text-sm text-destructive mb-2">Excluir esta propriedade?</p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="destructive"
                              className="flex-1"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteProperty(property.id)
                              }}
                            >
                              Excluir
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={(e) => {
                                e.stopPropagation()
                                setShowDeleteConfirm(null)
                              }}
                            >
                              Cancelar
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="lg:col-span-2">
            {selectedProperty ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{selectedProperty.name}</h2>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedProperty.location}
                    </p>
                  </div>
                </div>

                {selectedProperty.sustainabilityIndex !== undefined ? (
                  <>
                    <ResultsDisplay
                      results={getPropertyResults(selectedProperty)!}
                      propertyName={selectedProperty.name}
                    />
                    <RecommendationsList results={getPropertyResults(selectedProperty)!} />
                    <FutureSimulation
                      results={getPropertyResults(selectedProperty)!}
                      propertyName={selectedProperty.name}
                    />
                  </>
                ) : (
                  <Card className="shadow-lg">
                    <CardContent className="py-16 text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <BarChart3 className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Avalie sua propriedade
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-6">
                        Responda ao quiz de sustentabilidade para descobrir o indice ambiental da sua propriedade e receber recomendacoes personalizadas.
                      </p>
                      <Button onClick={() => onTakeQuiz(selectedProperty)} size="lg" className="gap-2">
                        <BarChart3 className="w-5 h-5" />
                        Iniciar Quiz
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              <Card className="shadow-lg h-full min-h-[400px] flex items-center justify-center">
                <CardContent className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Selecione uma propriedade
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Escolha uma propriedade na lista ao lado para ver seu indice de sustentabilidade, recomendacoes e simulacoes de futuro.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
