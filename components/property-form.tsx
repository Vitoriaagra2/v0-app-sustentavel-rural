"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { saveProperty, generateId, getCurrentUser } from "@/lib/storage"
import type { Property } from "@/lib/types"
import { MapPin, Ruler, Wheat, ArrowLeft, Plus } from "lucide-react"

interface PropertyFormProps {
  property?: Property
  onSave: (property: Property) => void
  onCancel: () => void
}

const mainActivities = [
  "Agricultura familiar",
  "Pecuária de corte",
  "Pecuária leiteira",
  "Grãos (soja, milho, etc)",
  "Horticultura",
  "Fruticultura",
  "Café",
  "Cana-de-açúcar",
  "Silvicultura",
  "Aquicultura",
  "Avicultura",
  "Suinocultura",
  "Produção mista",
  "Outro",
]

export function PropertyForm({ property, onSave, onCancel }: PropertyFormProps) {
  const [name, setName] = useState(property?.name || "")
  const [location, setLocation] = useState(property?.location || "")
  const [size, setSize] = useState(property?.size?.toString() || "")
  const [sizeUnit, setSizeUnit] = useState<"hectares" | "alqueires">(property?.sizeUnit || "hectares")
  const [mainActivity, setMainActivity] = useState(property?.mainActivity || "")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("Por favor, insira o nome da propriedade.")
      return
    }
    if (!location.trim()) {
      setError("Por favor, insira a localização.")
      return
    }
    if (!size || parseFloat(size) <= 0) {
      setError("Por favor, insira um tamanho válido.")
      return
    }
    if (!mainActivity) {
      setError("Por favor, selecione a atividade principal.")
      return
    }

    const currentUser = getCurrentUser()
    if (!currentUser) {
      setError("Usuário não autenticado.")
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 300))

    const newProperty: Property = {
      id: property?.id || generateId(),
      userId: currentUser.id,
      name: name.trim(),
      location: location.trim(),
      size: parseFloat(size),
      sizeUnit,
      mainActivity,
      createdAt: property?.createdAt || new Date().toISOString(),
      sustainabilityIndex: property?.sustainabilityIndex,
      quizAnswers: property?.quizAnswers,
    }

    saveProperty(newProperty)
    onSave(newProperty)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-lg mx-auto">
        <Button
          variant="ghost"
          onClick={onCancel}
          className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              {property ? (
                <>Editar Propriedade</>
              ) : (
                <>
                  <Plus className="w-6 h-6" />
                  Nova Propriedade
                </>
              )}
            </CardTitle>
            <CardDescription>
              {property
                ? "Atualize as informações da sua propriedade"
                : "Cadastre uma nova propriedade para avaliar sua sustentabilidade"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da propriedade</Label>
                <Input
                  id="name"
                  placeholder="Ex: Fazenda São João"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  Localização
                </Label>
                <Input
                  id="location"
                  placeholder="Ex: Ribeirão Preto - SP"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="size" className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-muted-foreground" />
                    Tamanho
                  </Label>
                  <Input
                    id="size"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="100"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sizeUnit">Unidade</Label>
                  <Select value={sizeUnit} onValueChange={(v) => setSizeUnit(v as "hectares" | "alqueires")}>
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hectares">Hectares</SelectItem>
                      <SelectItem value="alqueires">Alqueires</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mainActivity" className="flex items-center gap-2">
                  <Wheat className="w-4 h-4 text-muted-foreground" />
                  Atividade principal
                </Label>
                <Select value={mainActivity} onValueChange={setMainActivity}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecione a atividade" />
                  </SelectTrigger>
                  <SelectContent>
                    {mainActivities.map((activity) => (
                      <SelectItem key={activity} value={activity}>
                        {activity}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? "Salvando..." : property ? "Salvar alterações" : "Cadastrar"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
