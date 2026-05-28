import type { QuizQuestion, Recommendation } from "./types"

export const quizQuestions: QuizQuestion[] = [
  // Categoria: Água
  {
    id: "agua-1",
    category: "agua",
    question: "Como você gerencia o uso de água na sua propriedade?",
    options: [
      { label: "Não faço controle", value: 0 },
      { label: "Controle básico visual", value: 1 },
      { label: "Medição parcial do consumo", value: 2 },
      { label: "Sistema completo de monitoramento", value: 3 },
    ],
  },
  {
    id: "agua-2",
    category: "agua",
    question: "Qual é a situação das nascentes e cursos de água na propriedade?",
    options: [
      { label: "Sem proteção ou degradadas", value: 0 },
      { label: "Parcialmente protegidas", value: 1 },
      { label: "Bem protegidas com vegetação", value: 2 },
      { label: "Totalmente preservadas com APP", value: 3 },
    ],
  },
  {
    id: "agua-3",
    category: "agua",
    question: "Você utiliza sistemas de captação de água da chuva?",
    options: [
      { label: "Não utilizo", value: 0 },
      { label: "Captação simples para uso doméstico", value: 1 },
      { label: "Sistema para irrigação parcial", value: 2 },
      { label: "Sistema integrado completo", value: 3 },
    ],
  },

  // Categoria: Solo
  {
    id: "solo-1",
    category: "solo",
    question: "Como está a situação de erosão na sua propriedade?",
    options: [
      { label: "Erosão severa em várias áreas", value: 0 },
      { label: "Erosão moderada em algumas áreas", value: 1 },
      { label: "Erosão leve e controlada", value: 2 },
      { label: "Sem erosão visível", value: 3 },
    ],
  },
  {
    id: "solo-2",
    category: "solo",
    question: "Você pratica rotação de culturas ou pousio?",
    options: [
      { label: "Não pratico", value: 0 },
      { label: "Ocasionalmente", value: 1 },
      { label: "Regularmente", value: 2 },
      { label: "Sistema planejado de rotação", value: 3 },
    ],
  },
  {
    id: "solo-3",
    category: "solo",
    question: "Como você maneja a cobertura do solo?",
    options: [
      { label: "Solo exposto na maior parte", value: 0 },
      { label: "Cobertura parcial", value: 1 },
      { label: "Cobertura vegetal na maioria", value: 2 },
      { label: "Plantio direto ou cobertura permanente", value: 3 },
    ],
  },

  // Categoria: Biodiversidade
  {
    id: "bio-1",
    category: "biodiversidade",
    question: "Qual a situação da Reserva Legal na propriedade?",
    options: [
      { label: "Não tenho ou está degradada", value: 0 },
      { label: "Parcialmente preservada", value: 1 },
      { label: "Preservada mas isolada", value: 2 },
      { label: "Preservada e conectada a outras áreas", value: 3 },
    ],
  },
  {
    id: "bio-2",
    category: "biodiversidade",
    question: "Você mantém corredores ecológicos ou áreas de vegetação nativa?",
    options: [
      { label: "Não mantenho", value: 0 },
      { label: "Algumas áreas isoladas", value: 1 },
      { label: "Corredores parciais", value: 2 },
      { label: "Sistema integrado de corredores", value: 3 },
    ],
  },
  {
    id: "bio-3",
    category: "biodiversidade",
    question: "Como você lida com a fauna silvestre?",
    options: [
      { label: "Considerada como praga", value: 0 },
      { label: "Tolerância passiva", value: 1 },
      { label: "Proteção básica", value: 2 },
      { label: "Manejo integrado e proteção ativa", value: 3 },
    ],
  },

  // Categoria: Energia
  {
    id: "energia-1",
    category: "energia",
    question: "Você utiliza fontes de energia renovável?",
    options: [
      { label: "Não utilizo", value: 0 },
      { label: "Uso parcial (solar para aquecimento)", value: 1 },
      { label: "Geração parcial de energia", value: 2 },
      { label: "Sistema completo de energia renovável", value: 3 },
    ],
  },
  {
    id: "energia-2",
    category: "energia",
    question: "Como é a eficiência energética dos equipamentos?",
    options: [
      { label: "Equipamentos antigos e ineficientes", value: 0 },
      { label: "Alguns equipamentos eficientes", value: 1 },
      { label: "Maioria eficiente", value: 2 },
      { label: "Todos eficientes e monitorados", value: 3 },
    ],
  },
  {
    id: "energia-3",
    category: "energia",
    question: "Você aproveita biomassa ou resíduos para energia?",
    options: [
      { label: "Não aproveito", value: 0 },
      { label: "Queima simples de resíduos", value: 1 },
      { label: "Compostagem ou biodigestor parcial", value: 2 },
      { label: "Sistema integrado de aproveitamento", value: 3 },
    ],
  },

  // Categoria: Práticas Agrícolas
  {
    id: "praticas-1",
    category: "praticas",
    question: "Como você utiliza agrotóxicos na propriedade?",
    options: [
      { label: "Uso intensivo sem controle", value: 0 },
      { label: "Uso com algum controle", value: 1 },
      { label: "Uso mínimo e controlado", value: 2 },
      { label: "Produção orgânica ou sem agrotóxicos", value: 3 },
    ],
  },
  {
    id: "praticas-2",
    category: "praticas",
    question: "Você pratica integração lavoura-pecuária-floresta (ILPF)?",
    options: [
      { label: "Não pratico", value: 0 },
      { label: "Integração parcial (2 componentes)", value: 1 },
      { label: "ILPF em implementação", value: 2 },
      { label: "ILPF consolidado", value: 3 },
    ],
  },
  {
    id: "praticas-3",
    category: "praticas",
    question: "Como você gerencia os resíduos da produção?",
    options: [
      { label: "Descarte sem tratamento", value: 0 },
      { label: "Separação básica", value: 1 },
      { label: "Reciclagem e compostagem parcial", value: 2 },
      { label: "Gestão completa de resíduos", value: 3 },
    ],
  },
]

export const recommendations: Recommendation[] = [
  // Água
  {
    id: "rec-agua-1",
    category: "agua",
    title: "Sistema de Captação de Água da Chuva",
    description: "Instale cisternas e sistemas de captação para reduzir dependência de outras fontes.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 5.000 - R$ 15.000",
    timeframe: "2-4 meses",
    benefits: ["Redução de custos com água", "Independência hídrica", "Reserva para períodos de seca"],
  },
  {
    id: "rec-agua-2",
    category: "agua",
    title: "Recuperação de Nascentes",
    description: "Cerque e replante vegetação nativa ao redor das nascentes da propriedade.",
    impact: "alto",
    difficulty: "facil",
    estimatedCost: "R$ 2.000 - R$ 8.000",
    timeframe: "6-12 meses para estabelecimento",
    benefits: ["Aumento da vazão", "Melhoria da qualidade da água", "Cumprimento da legislação ambiental"],
  },
  {
    id: "rec-agua-3",
    category: "agua",
    title: "Irrigação por Gotejamento",
    description: "Substitua irrigação por aspersão por sistemas de gotejamento para maior eficiência.",
    impact: "medio",
    difficulty: "moderado",
    estimatedCost: "R$ 3.000 - R$ 10.000 por hectare",
    timeframe: "1-3 meses",
    benefits: ["Economia de até 50% de água", "Menor perda por evaporação", "Aplicação precisa de fertilizantes"],
  },

  // Solo
  {
    id: "rec-solo-1",
    category: "solo",
    title: "Curvas de Nível e Terraços",
    description: "Construa curvas de nível para controlar a erosão e reter água no solo.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 500 - R$ 1.500 por hectare",
    timeframe: "1-2 meses",
    benefits: ["Controle de erosão", "Maior retenção de água", "Aumento da produtividade"],
  },
  {
    id: "rec-solo-2",
    category: "solo",
    title: "Plantio Direto",
    description: "Adote o sistema de plantio direto na palha para proteção do solo.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 200 - R$ 800 por hectare (adaptação)",
    timeframe: "1-2 safras para consolidação",
    benefits: ["Aumento de matéria orgânica", "Menor compactação", "Redução de custos com preparo"],
  },
  {
    id: "rec-solo-3",
    category: "solo",
    title: "Adubação Verde",
    description: "Utilize plantas de cobertura para melhorar a fertilidade e estrutura do solo.",
    impact: "medio",
    difficulty: "facil",
    estimatedCost: "R$ 150 - R$ 400 por hectare",
    timeframe: "3-6 meses",
    benefits: ["Fixação de nitrogênio", "Aumento de matéria orgânica", "Controle de plantas daninhas"],
  },

  // Biodiversidade
  {
    id: "rec-bio-1",
    category: "biodiversidade",
    title: "Implantação de Corredores Ecológicos",
    description: "Conecte fragmentos de vegetação nativa para permitir o fluxo de fauna.",
    impact: "alto",
    difficulty: "dificil",
    estimatedCost: "R$ 3.000 - R$ 8.000 por hectare",
    timeframe: "2-5 anos para estabelecimento",
    benefits: ["Conservação da biodiversidade", "Controle biológico de pragas", "Polinização natural"],
  },
  {
    id: "rec-bio-2",
    category: "biodiversidade",
    title: "Recuperação de Áreas Degradadas",
    description: "Inicie o reflorestamento com espécies nativas em áreas de Reserva Legal.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 4.000 - R$ 12.000 por hectare",
    timeframe: "3-10 anos",
    benefits: ["Regularização ambiental", "Sequestro de carbono", "Valorização da propriedade"],
  },
  {
    id: "rec-bio-3",
    category: "biodiversidade",
    title: "Sistemas Agroflorestais (SAFs)",
    description: "Combine produção agrícola com árvores nativas e frutíferas.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 5.000 - R$ 15.000 por hectare",
    timeframe: "2-5 anos para produção",
    benefits: ["Diversificação de renda", "Resiliência climática", "Melhoria do microclima"],
  },

  // Energia
  {
    id: "rec-energia-1",
    category: "energia",
    title: "Sistema Fotovoltaico",
    description: "Instale painéis solares para geração de energia elétrica.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 15.000 - R$ 50.000",
    timeframe: "1-3 meses",
    benefits: ["Redução de até 95% na conta de luz", "Independência energética", "Créditos de energia"],
  },
  {
    id: "rec-energia-2",
    category: "energia",
    title: "Biodigestor",
    description: "Transforme dejetos animais em biogás e biofertilizante.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 10.000 - R$ 40.000",
    timeframe: "2-4 meses",
    benefits: ["Geração de energia", "Fertilizante orgânico", "Tratamento de resíduos"],
  },
  {
    id: "rec-energia-3",
    category: "energia",
    title: "Aquecedor Solar de Água",
    description: "Utilize energia solar para aquecimento de água nas instalações.",
    impact: "medio",
    difficulty: "facil",
    estimatedCost: "R$ 2.000 - R$ 6.000",
    timeframe: "1-2 semanas",
    benefits: ["Economia de energia", "Baixa manutenção", "Retorno rápido do investimento"],
  },

  // Práticas
  {
    id: "rec-praticas-1",
    category: "praticas",
    title: "Manejo Integrado de Pragas (MIP)",
    description: "Adote estratégias de controle biológico e monitoramento de pragas.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 500 - R$ 2.000 (capacitação e insumos)",
    timeframe: "1-2 safras",
    benefits: ["Redução de agrotóxicos", "Menor custo de produção", "Alimentos mais saudáveis"],
  },
  {
    id: "rec-praticas-2",
    category: "praticas",
    title: "Integração Lavoura-Pecuária-Floresta",
    description: "Implemente sistema ILPF para uso eficiente da terra.",
    impact: "alto",
    difficulty: "dificil",
    estimatedCost: "R$ 3.000 - R$ 10.000 por hectare",
    timeframe: "3-5 anos para consolidação",
    benefits: ["Diversificação de renda", "Melhoria do solo", "Resiliência climática"],
  },
  {
    id: "rec-praticas-3",
    category: "praticas",
    title: "Certificação Orgânica",
    description: "Inicie o processo de transição para produção orgânica certificada.",
    impact: "alto",
    difficulty: "dificil",
    estimatedCost: "R$ 2.000 - R$ 5.000 (certificação anual)",
    timeframe: "2-3 anos de transição",
    benefits: ["Preços premium", "Acesso a novos mercados", "Produção mais sustentável"],
  },
]

export const categoryLabels: Record<string, string> = {
  agua: "Gestão da Água",
  solo: "Conservação do Solo",
  biodiversidade: "Biodiversidade",
  energia: "Energia",
  praticas: "Práticas Agrícolas",
}

export const categoryIcons: Record<string, string> = {
  agua: "droplets",
  solo: "mountain",
  biodiversidade: "trees",
  energia: "zap",
  praticas: "sprout",
}
