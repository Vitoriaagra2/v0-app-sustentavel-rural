import type { User, Property, QuizResults } from "./types"

const STORAGE_KEYS = {
  USERS: "sustentabilidade_users",
  CURRENT_USER: "sustentabilidade_current_user",
  PROPERTIES: "sustentabilidade_properties",
}

// User functions
export function getUsers(): User[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(STORAGE_KEYS.USERS)
  return data ? JSON.parse(data) : []
}

export function saveUser(user: User): void {
  const users = getUsers()
  const existingIndex = users.findIndex((u) => u.id === user.id)
  if (existingIndex >= 0) {
    users[existingIndex] = user
  } else {
    users.push(user)
  }
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users))
}

export function findUserByEmail(email: string): User | undefined {
  const users = getUsers()
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase())
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER)
  return data ? JSON.parse(data) : null
}

export function setCurrentUser(user: User | null): void {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user))
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER)
  }
}

export function updateCurrentUser(updates: Partial<User>): User | null {
  const currentUser = getCurrentUser()
  if (!currentUser) return null
  
  const updatedUser = { ...currentUser, ...updates }
  saveUser(updatedUser)
  setCurrentUser(updatedUser)
  return updatedUser
}

// Property functions
export function getProperties(userId?: string): Property[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(STORAGE_KEYS.PROPERTIES)
  const properties: Property[] = data ? JSON.parse(data) : []
  if (userId) {
    return properties.filter((p) => p.userId === userId)
  }
  return properties
}

export function saveProperty(property: Property): void {
  const properties = getProperties()
  const existingIndex = properties.findIndex((p) => p.id === property.id)
  if (existingIndex >= 0) {
    properties[existingIndex] = property
  } else {
    properties.push(property)
  }
  localStorage.setItem(STORAGE_KEYS.PROPERTIES, JSON.stringify(properties))
}

export function deleteProperty(propertyId: string): void {
  const properties = getProperties()
  const filtered = properties.filter((p) => p.id !== propertyId)
  localStorage.setItem(STORAGE_KEYS.PROPERTIES, JSON.stringify(filtered))
}

export function getPropertyById(propertyId: string): Property | undefined {
  const properties = getProperties()
  return properties.find((p) => p.id === propertyId)
}

// Quiz results
export function saveQuizResults(propertyId: string, results: QuizResults): void {
  const property = getPropertyById(propertyId)
  if (property) {
    property.sustainabilityIndex = results.percentageScore
    property.quizAnswers = results.categoryScores as unknown as Record<string, number>
    saveProperty(property)
  }
}

// Generate unique ID
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Clear all data (for testing)
export function clearAllData(): void {
  localStorage.removeItem(STORAGE_KEYS.USERS)
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER)
  localStorage.removeItem(STORAGE_KEYS.PROPERTIES)
}
