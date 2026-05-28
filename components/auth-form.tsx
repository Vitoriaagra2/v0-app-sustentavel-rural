"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { findUserByEmail, saveUser, setCurrentUser, generateId } from "@/lib/storage"
import type { User } from "@/lib/types"
import { Leaf, Eye, EyeOff } from "lucide-react"

interface AuthFormProps {
  onSuccess: (user: User) => void
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (isLogin) {
      // Login
      const user = findUserByEmail(email)
      if (!user) {
        setError("E-mail não encontrado. Crie uma conta.")
        setIsLoading(false)
        return
      }
      if (user.password !== password) {
        setError("Senha incorreta.")
        setIsLoading(false)
        return
      }
      setCurrentUser(user)
      onSuccess(user)
    } else {
      // Register
      if (!name.trim()) {
        setError("Por favor, insira seu nome.")
        setIsLoading(false)
        return
      }
      if (password.length < 6) {
        setError("A senha deve ter pelo menos 6 caracteres.")
        setIsLoading(false)
        return
      }
      if (password !== confirmPassword) {
        setError("As senhas não coincidem.")
        setIsLoading(false)
        return
      }
      if (findUserByEmail(email)) {
        setError("Este e-mail já está cadastrado.")
        setIsLoading(false)
        return
      }

      const newUser: User = {
        id: generateId(),
        email: email.toLowerCase(),
        name: name.trim(),
        password,
        createdAt: new Date().toISOString(),
        quizCompleted: false,
      }

      saveUser(newUser)
      setCurrentUser(newUser)
      onSuccess(newUser)
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <Card className="w-full max-w-md relative z-10 shadow-xl border-border/50">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {isLogin ? "Bem-vindo de volta" : "Criar conta"}
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              {isLogin
                ? "Entre para acessar seu painel de sustentabilidade"
                : "Comece sua jornada sustentável hoje"}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                  className="bg-background"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={!isLogin}
                  className="bg-background"
                />
              </div>
            )}

            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Processando...
                </span>
              ) : isLogin ? (
                "Entrar"
              ) : (
                "Criar conta"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError("")
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isLogin ? (
                <>
                  Ainda não tem conta?{" "}
                  <span className="text-primary font-medium">Cadastre-se</span>
                </>
              ) : (
                <>
                  Já tem uma conta?{" "}
                  <span className="text-primary font-medium">Entrar</span>
                </>
              )}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
