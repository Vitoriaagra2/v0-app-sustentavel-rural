"use client"

import { useState, useEffect } from "react"
import { AuthForm } from "@/components/auth-form"
import { Dashboard } from "@/components/dashboard"
import { PropertyForm } from "@/components/property-form"
import { SustainabilityQuiz } from "@/components/sustainability-quiz"
import { getCurrentUser, setCurrentUser, saveProperty, updateCurrentUser, getProperties } from "@/lib/storage"
import type { User, Property, QuizResults } from "@/lib/types"

type AppView = "loading" | "auth" | "dashboard" | "add-property" | "edit-property" | "quiz"

export default function Home() {
  const [view, setView] = useState<AppView>("loading")
  const [user, setUser] = useState<User | null>(null)
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)
  const [quizProperty, setQuizProperty] = useState<Property | null>(null)

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
      
      const properties = getProperties(currentUser.id)
      if (!currentUser.quizCompleted && properties.length === 0) {
        setView("add-property")
      } else {
        setView("dashboard")
      }
    } else {
      setView("auth")
    }
  }, [])

  const handleAuthSuccess = (authenticatedUser: User) => {
    setUser(authenticatedUser)
    const properties = getProperties(authenticatedUser.id)
    
    if (!authenticatedUser.quizCompleted && properties.length === 0) {
      setView("add-property")
    } else {
      setView("dashboard")
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setUser(null)
    setView("auth")
  }

  const handleAddProperty = () => {
    setEditingProperty(null)
    setView("add-property")
  }

  const handleEditProperty = (property: Property) => {
    setEditingProperty(property)
    setView("edit-property")
  }

  const handlePropertySaved = (property: Property) => {
    if (!user?.quizCompleted) {
      setQuizProperty(property)
      setView("quiz")
    } else {
      setView("dashboard")
    }
  }

  const handleTakeQuiz = (property: Property) => {
    setQuizProperty(property)
    setView("quiz")
  }

  const handleQuizComplete = (results: QuizResults) => {
    if (quizProperty) {
      const updatedProperty: Property = {
        ...quizProperty,
        sustainabilityIndex: results.percentageScore,
        quizAnswers: results.categoryScores as unknown as Record<string, number>,
      }
      saveProperty(updatedProperty)

      if (user && !user.quizCompleted) {
        const updatedUser = updateCurrentUser({ quizCompleted: true, quizResults: results })
        if (updatedUser) {
          setUser(updatedUser)
        }
      }
    }

    setQuizProperty(null)
    setView("dashboard")
  }

  const handleQuizCancel = () => {
    if (user?.quizCompleted) {
      setQuizProperty(null)
      setView("dashboard")
    }
  }

  if (view === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    )
  }

  if (view === "auth") {
    return <AuthForm onSuccess={handleAuthSuccess} />
  }

  if (view === "add-property" || view === "edit-property") {
    return (
      <PropertyForm
        property={view === "edit-property" ? editingProperty || undefined : undefined}
        onSave={handlePropertySaved}
        onCancel={() => {
          const properties = getProperties(user?.id || "")
          if (properties.length === 0 && !user?.quizCompleted) {
            return
          }
          setView("dashboard")
        }}
      />
    )
  }

  if (view === "quiz" && quizProperty) {
    return (
      <SustainabilityQuiz
        property={quizProperty}
        onComplete={handleQuizComplete}
        onCancel={user?.quizCompleted ? handleQuizCancel : undefined}
      />
    )
  }

  if (view === "dashboard" && user) {
    return (
      <Dashboard
        user={user}
        onLogout={handleLogout}
        onAddProperty={handleAddProperty}
        onEditProperty={handleEditProperty}
        onTakeQuiz={handleTakeQuiz}
      />
    )
  }

  return null
}
