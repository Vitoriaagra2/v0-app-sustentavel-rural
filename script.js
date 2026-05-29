// ===== DADOS DO QUIZ =====
const quizQuestions = [
  // Categoria: Agua
  {
    id: "agua-1",
    category: "agua",
    question: "Como voce gerencia o uso de agua na sua propriedade?",
    options: [
      { label: "Nao faco controle", value: 0 },
      { label: "Controle basico visual", value: 1 },
      { label: "Medicao parcial do consumo", value: 2 },
      { label: "Sistema completo de monitoramento", value: 3 },
    ],
  },
  {
    id: "agua-2",
    category: "agua",
    question: "Qual e a situacao das nascentes e cursos de agua na propriedade?",
    options: [
      { label: "Sem protecao ou degradadas", value: 0 },
      { label: "Parcialmente protegidas", value: 1 },
      { label: "Bem protegidas com vegetacao", value: 2 },
      { label: "Totalmente preservadas com APP", value: 3 },
    ],
  },
  {
    id: "agua-3",
    category: "agua",
    question: "Voce utiliza sistemas de captacao de agua da chuva?",
    options: [
      { label: "Nao utilizo", value: 0 },
      { label: "Captacao simples para uso domestico", value: 1 },
      { label: "Sistema para irrigacao parcial", value: 2 },
      { label: "Sistema integrado completo", value: 3 },
    ],
  },
  // Categoria: Solo
  {
    id: "solo-1",
    category: "solo",
    question: "Como esta a situacao de erosao na sua propriedade?",
    options: [
      { label: "Erosao severa em varias areas", value: 0 },
      { label: "Erosao moderada em algumas areas", value: 1 },
      { label: "Erosao leve e controlada", value: 2 },
      { label: "Sem erosao visivel", value: 3 },
    ],
  },
  {
    id: "solo-2",
    category: "solo",
    question: "Voce pratica rotacao de culturas ou pousio?",
    options: [
      { label: "Nao pratico", value: 0 },
      { label: "Ocasionalmente", value: 1 },
      { label: "Regularmente", value: 2 },
      { label: "Sistema planejado de rotacao", value: 3 },
    ],
  },
  {
    id: "solo-3",
    category: "solo",
    question: "Como voce maneja a cobertura do solo?",
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
    question: "Qual a situacao da Reserva Legal na propriedade?",
    options: [
      { label: "Nao tenho ou esta degradada", value: 0 },
      { label: "Parcialmente preservada", value: 1 },
      { label: "Preservada mas isolada", value: 2 },
      { label: "Preservada e conectada a outras areas", value: 3 },
    ],
  },
  {
    id: "bio-2",
    category: "biodiversidade",
    question: "Voce mantem corredores ecologicos ou areas de vegetacao nativa?",
    options: [
      { label: "Nao mantenho", value: 0 },
      { label: "Algumas areas isoladas", value: 1 },
      { label: "Corredores parciais", value: 2 },
      { label: "Sistema integrado de corredores", value: 3 },
    ],
  },
  {
    id: "bio-3",
    category: "biodiversidade",
    question: "Como voce lida com a fauna silvestre?",
    options: [
      { label: "Considerada como praga", value: 0 },
      { label: "Tolerancia passiva", value: 1 },
      { label: "Protecao basica", value: 2 },
      { label: "Manejo integrado e protecao ativa", value: 3 },
    ],
  },
  // Categoria: Energia
  {
    id: "energia-1",
    category: "energia",
    question: "Voce utiliza fontes de energia renovavel?",
    options: [
      { label: "Nao utilizo", value: 0 },
      { label: "Uso parcial (solar para aquecimento)", value: 1 },
      { label: "Geracao parcial de energia", value: 2 },
      { label: "Sistema completo de energia renovavel", value: 3 },
    ],
  },
  {
    id: "energia-2",
    category: "energia",
    question: "Como e a eficiencia energetica dos equipamentos?",
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
    question: "Voce aproveita biomassa ou residuos para energia?",
    options: [
      { label: "Nao aproveito", value: 0 },
      { label: "Queima simples de residuos", value: 1 },
      { label: "Compostagem ou biodigestor parcial", value: 2 },
      { label: "Sistema integrado de aproveitamento", value: 3 },
    ],
  },
  // Categoria: Praticas Agricolas
  {
    id: "praticas-1",
    category: "praticas",
    question: "Como voce utiliza agrotoxicos na propriedade?",
    options: [
      { label: "Uso intensivo sem controle", value: 0 },
      { label: "Uso com algum controle", value: 1 },
      { label: "Uso minimo e controlado", value: 2 },
      { label: "Producao organica ou sem agrotoxicos", value: 3 },
    ],
  },
  {
    id: "praticas-2",
    category: "praticas",
    question: "Voce pratica integracao lavoura-pecuaria-floresta (ILPF)?",
    options: [
      { label: "Nao pratico", value: 0 },
      { label: "Integracao parcial (2 componentes)", value: 1 },
      { label: "ILPF em implementacao", value: 2 },
      { label: "ILPF consolidado", value: 3 },
    ],
  },
  {
    id: "praticas-3",
    category: "praticas",
    question: "Como voce gerencia os residuos da producao?",
    options: [
      { label: "Descarte sem tratamento", value: 0 },
      { label: "Separacao basica", value: 1 },
      { label: "Reciclagem e compostagem parcial", value: 2 },
      { label: "Gestao completa de residuos", value: 3 },
    ],
  },
];

const recommendations = [
  // Agua
  {
    id: "rec-agua-1",
    category: "agua",
    title: "Sistema de Captacao de Agua da Chuva",
    description: "Instale cisternas e sistemas de captacao para reduzir dependencia de outras fontes.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 5.000 - R$ 15.000",
    timeframe: "2-4 meses",
    benefits: ["Reducao de custos com agua", "Independencia hidrica", "Reserva para periodos de seca"],
  },
  {
    id: "rec-agua-2",
    category: "agua",
    title: "Recuperacao de Nascentes",
    description: "Cerque e replante vegetacao nativa ao redor das nascentes da propriedade.",
    impact: "alto",
    difficulty: "facil",
    estimatedCost: "R$ 2.000 - R$ 8.000",
    timeframe: "6-12 meses para estabelecimento",
    benefits: ["Aumento da vazao", "Melhoria da qualidade da agua", "Cumprimento da legislacao ambiental"],
  },
  {
    id: "rec-agua-3",
    category: "agua",
    title: "Irrigacao por Gotejamento",
    description: "Substitua irrigacao por aspersao por sistemas de gotejamento para maior eficiencia.",
    impact: "medio",
    difficulty: "moderado",
    estimatedCost: "R$ 3.000 - R$ 10.000 por hectare",
    timeframe: "1-3 meses",
    benefits: ["Economia de ate 50% de agua", "Menor perda por evaporacao", "Aplicacao precisa de fertilizantes"],
  },
  // Solo
  {
    id: "rec-solo-1",
    category: "solo",
    title: "Curvas de Nivel e Terracos",
    description: "Construa curvas de nivel para controlar a erosao e reter agua no solo.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 500 - R$ 1.500 por hectare",
    timeframe: "1-2 meses",
    benefits: ["Controle de erosao", "Maior retencao de agua", "Aumento da produtividade"],
  },
  {
    id: "rec-solo-2",
    category: "solo",
    title: "Plantio Direto",
    description: "Adote o sistema de plantio direto na palha para protecao do solo.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 200 - R$ 800 por hectare (adaptacao)",
    timeframe: "1-2 safras para consolidacao",
    benefits: ["Aumento de materia organica", "Menor compactacao", "Reducao de custos com preparo"],
  },
  {
    id: "rec-solo-3",
    category: "solo",
    title: "Adubacao Verde",
    description: "Utilize plantas de cobertura para melhorar a fertilidade e estrutura do solo.",
    impact: "medio",
    difficulty: "facil",
    estimatedCost: "R$ 150 - R$ 400 por hectare",
    timeframe: "3-6 meses",
    benefits: ["Fixacao de nitrogenio", "Aumento de materia organica", "Controle de plantas daninhas"],
  },
  // Biodiversidade
  {
    id: "rec-bio-1",
    category: "biodiversidade",
    title: "Implantacao de Corredores Ecologicos",
    description: "Conecte fragmentos de vegetacao nativa para permitir o fluxo de fauna.",
    impact: "alto",
    difficulty: "dificil",
    estimatedCost: "R$ 3.000 - R$ 8.000 por hectare",
    timeframe: "2-5 anos para estabelecimento",
    benefits: ["Conservacao da biodiversidade", "Controle biologico de pragas", "Polinizacao natural"],
  },
  {
    id: "rec-bio-2",
    category: "biodiversidade",
    title: "Recuperacao de Areas Degradadas",
    description: "Inicie o reflorestamento com especies nativas em areas de Reserva Legal.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 4.000 - R$ 12.000 por hectare",
    timeframe: "3-10 anos",
    benefits: ["Regularizacao ambiental", "Sequestro de carbono", "Valorizacao da propriedade"],
  },
  {
    id: "rec-bio-3",
    category: "biodiversidade",
    title: "Sistemas Agroflorestais (SAFs)",
    description: "Combine producao agricola com arvores nativas e frutiferas.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 5.000 - R$ 15.000 por hectare",
    timeframe: "2-5 anos para producao",
    benefits: ["Diversificacao de renda", "Resiliencia climatica", "Melhoria do microclima"],
  },
  // Energia
  {
    id: "rec-energia-1",
    category: "energia",
    title: "Sistema Fotovoltaico",
    description: "Instale paineis solares para geracao de energia eletrica.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 15.000 - R$ 50.000",
    timeframe: "1-3 meses",
    benefits: ["Reducao de ate 95% na conta de luz", "Independencia energetica", "Creditos de energia"],
  },
  {
    id: "rec-energia-2",
    category: "energia",
    title: "Biodigestor",
    description: "Transforme dejetos animais em biogas e biofertilizante.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 10.000 - R$ 40.000",
    timeframe: "2-4 meses",
    benefits: ["Geracao de energia", "Fertilizante organico", "Tratamento de residuos"],
  },
  {
    id: "rec-energia-3",
    category: "energia",
    title: "Aquecedor Solar de Agua",
    description: "Utilize energia solar para aquecimento de agua nas instalacoes.",
    impact: "medio",
    difficulty: "facil",
    estimatedCost: "R$ 2.000 - R$ 6.000",
    timeframe: "1-2 semanas",
    benefits: ["Economia de energia", "Baixa manutencao", "Retorno rapido do investimento"],
  },
  // Praticas
  {
    id: "rec-praticas-1",
    category: "praticas",
    title: "Manejo Integrado de Pragas (MIP)",
    description: "Adote estrategias de controle biologico e monitoramento de pragas.",
    impact: "alto",
    difficulty: "moderado",
    estimatedCost: "R$ 500 - R$ 2.000 (capacitacao e insumos)",
    timeframe: "1-2 safras",
    benefits: ["Reducao de agrotoxicos", "Menor custo de producao", "Alimentos mais saudaveis"],
  },
  {
    id: "rec-praticas-2",
    category: "praticas",
    title: "Integracao Lavoura-Pecuaria-Floresta",
    description: "Implemente sistema ILPF para uso eficiente da terra.",
    impact: "alto",
    difficulty: "dificil",
    estimatedCost: "R$ 3.000 - R$ 10.000 por hectare",
    timeframe: "3-5 anos para consolidacao",
    benefits: ["Diversificacao de renda", "Melhoria do solo", "Resiliencia climatica"],
  },
  {
    id: "rec-praticas-3",
    category: "praticas",
    title: "Certificacao Organica",
    description: "Inicie o processo de transicao para producao organica certificada.",
    impact: "alto",
    difficulty: "dificil",
    estimatedCost: "R$ 2.000 - R$ 5.000 (certificacao anual)",
    timeframe: "2-3 anos de transicao",
    benefits: ["Precos premium", "Acesso a novos mercados", "Producao mais sustentavel"],
  },
];

const categoryLabels = {
  agua: "Gestao da Agua",
  solo: "Conservacao do Solo",
  biodiversidade: "Biodiversidade",
  energia: "Energia",
  praticas: "Praticas Agricolas",
};

const categoryIcons = {
  agua: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  solo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
  biodiversidade: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M16 14v.2A3 3 0 0 1 14.9 20v0H11v0h0a3 3 0 0 1-1-5.8V14a3 3 0 0 1 6 0z"/><path d="M19 10v.2A3 3 0 0 1 17.9 16v0H14v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0z"/><path d="M16 16v6"/></svg>',
  energia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  praticas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>',
};

// ===== STORAGE =====
const STORAGE_KEYS = {
  USERS: "sustentabilidade_users",
  CURRENT_USER: "sustentabilidade_current_user",
  PROPERTIES: "sustentabilidade_properties",
};

function getUsers() {
  const data = localStorage.getItem(STORAGE_KEYS.USERS);
  return data ? JSON.parse(data) : [];
}

function saveUser(user) {
  const users = getUsers();
  const existingIndex = users.findIndex((u) => u.id === user.id);
  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

function findUserByEmail(email) {
  const users = getUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

function getCurrentUser() {
  const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
}

function updateCurrentUser(updates) {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;
  const updatedUser = { ...currentUser, ...updates };
  saveUser(updatedUser);
  setCurrentUser(updatedUser);
  return updatedUser;
}

function getProperties(userId) {
  const data = localStorage.getItem(STORAGE_KEYS.PROPERTIES);
  const properties = data ? JSON.parse(data) : [];
  if (userId) {
    return properties.filter((p) => p.userId === userId);
  }
  return properties;
}

function saveProperty(property) {
  const properties = getProperties();
  const existingIndex = properties.findIndex((p) => p.id === property.id);
  if (existingIndex >= 0) {
    properties[existingIndex] = property;
  } else {
    properties.push(property);
  }
  localStorage.setItem(STORAGE_KEYS.PROPERTIES, JSON.stringify(properties));
}

function deletePropertyById(propertyId) {
  const properties = getProperties();
  const filtered = properties.filter((p) => p.id !== propertyId);
  localStorage.setItem(STORAGE_KEYS.PROPERTIES, JSON.stringify(filtered));
}

function getPropertyById(propertyId) {
  const properties = getProperties();
  return properties.find((p) => p.id === propertyId);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ===== ESTADO DA APLICACAO =====
let appState = {
  currentScreen: "auth",
  currentUser: null,
  selectedPropertyId: null,
  quizCurrentQuestion: 0,
  quizAnswers: {},
  quizPropertyId: null,
};

// ===== ELEMENTOS DO DOM =====
const screens = {
  auth: document.getElementById("auth-screen"),
  property: document.getElementById("property-screen"),
  quiz: document.getElementById("quiz-screen"),
  dashboard: document.getElementById("dashboard-screen"),
};

// ===== NAVEGACAO =====
function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.add("hidden"));
  screens[screenName].classList.remove("hidden");
  appState.currentScreen = screenName;
}

// ===== AUTENTICACAO =====
function initAuth() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const showRegisterLink = document.getElementById("show-register");
  const showLoginLink = document.getElementById("show-login");
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");

  showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  loginBtn.addEventListener("click", handleLogin);
  registerBtn.addEventListener("click", handleRegister);

  // Enter key support
  document.getElementById("login-password").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleLogin();
  });
  document.getElementById("register-confirm").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleRegister();
  });
}

function handleLogin() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const errorEl = document.getElementById("login-error");

  errorEl.textContent = "";

  if (!email || !password) {
    errorEl.textContent = "Preencha todos os campos.";
    return;
  }

  const user = findUserByEmail(email);
  if (!user) {
    errorEl.textContent = "Usuario nao encontrado.";
    return;
  }

  if (user.password !== password) {
    errorEl.textContent = "Senha incorreta.";
    return;
  }

  setCurrentUser(user);
  appState.currentUser = user;
  afterLogin();
}

function handleRegister() {
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;
  const confirm = document.getElementById("register-confirm").value;
  const errorEl = document.getElementById("register-error");

  errorEl.textContent = "";

  if (!name || !email || !password || !confirm) {
    errorEl.textContent = "Preencha todos os campos.";
    return;
  }

  if (password.length < 6) {
    errorEl.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  if (password !== confirm) {
    errorEl.textContent = "As senhas nao conferem.";
    return;
  }

  if (findUserByEmail(email)) {
    errorEl.textContent = "Este e-mail ja esta cadastrado.";
    return;
  }

  const newUser = {
    id: generateId(),
    email: email,
    name: name,
    password: password,
    createdAt: new Date().toISOString(),
    quizCompleted: false,
  };

  saveUser(newUser);
  setCurrentUser(newUser);
  appState.currentUser = newUser;
  afterLogin();
}

function afterLogin() {
  const user = appState.currentUser;
  const properties = getProperties(user.id);

  if (properties.length === 0) {
    showScreen("property");
  } else if (!user.quizCompleted && properties.some((p) => !p.sustainabilityIndex)) {
    const incompleteProperty = properties.find((p) => !p.sustainabilityIndex);
    startQuiz(incompleteProperty.id);
  } else {
    showDashboard();
  }
}

function handleLogout() {
  setCurrentUser(null);
  appState.currentUser = null;
  appState.selectedPropertyId = null;
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("login-error").textContent = "";
  showScreen("auth");
}

// ===== PROPRIEDADE =====
function initProperty() {
  const form = document.getElementById("property-form");
  form.addEventListener("submit", handlePropertySubmit);
}

function handlePropertySubmit(e) {
  e.preventDefault();
  const errorEl = document.getElementById("property-error");
  errorEl.textContent = "";

  const name = document.getElementById("property-name").value.trim();
  const location = document.getElementById("property-location").value.trim();
  const size = parseFloat(document.getElementById("property-size").value);
  const unit = document.getElementById("property-unit").value;
  const activity = document.getElementById("property-activity").value;

  if (!name || !location || !size || !activity) {
    errorEl.textContent = "Preencha todos os campos.";
    return;
  }

  const newProperty = {
    id: generateId(),
    userId: appState.currentUser.id,
    name: name,
    location: location,
    size: size,
    sizeUnit: unit,
    mainActivity: activity,
    createdAt: new Date().toISOString(),
  };

  saveProperty(newProperty);
  clearPropertyForm();
  startQuiz(newProperty.id);
}

function clearPropertyForm() {
  document.getElementById("property-name").value = "";
  document.getElementById("property-location").value = "";
  document.getElementById("property-size").value = "";
  document.getElementById("property-activity").value = "";
  document.getElementById("property-error").textContent = "";
}

// ===== QUIZ =====
function initQuiz() {
  document.getElementById("quiz-prev").addEventListener("click", quizPrev);
  document.getElementById("quiz-next").addEventListener("click", quizNext);
}

function startQuiz(propertyId) {
  appState.quizPropertyId = propertyId;
  appState.quizCurrentQuestion = 0;
  appState.quizAnswers = {};
  showScreen("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = quizQuestions[appState.quizCurrentQuestion];
  const total = quizQuestions.length;
  const current = appState.quizCurrentQuestion + 1;

  // Progress
  document.getElementById("progress-fill").style.width = `${(current / total) * 100}%`;
  document.getElementById("progress-text").textContent = `Pergunta ${current} de ${total}`;

  // Category
  document.getElementById("quiz-category").textContent = categoryLabels[question.category];

  // Question
  document.getElementById("quiz-question").textContent = question.question;

  // Options
  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionEl = document.createElement("div");
    optionEl.className = "quiz-option";
    if (appState.quizAnswers[question.id] === option.value) {
      optionEl.classList.add("selected");
    }
    optionEl.innerHTML = `<span class="option-label">${option.label}</span>`;
    optionEl.addEventListener("click", () => selectOption(question.id, option.value));
    optionsContainer.appendChild(optionEl);
  });

  // Buttons
  document.getElementById("quiz-prev").disabled = appState.quizCurrentQuestion === 0;
  const nextBtn = document.getElementById("quiz-next");
  nextBtn.disabled = appState.quizAnswers[question.id] === undefined;
  nextBtn.textContent = appState.quizCurrentQuestion === total - 1 ? "Finalizar" : "Proxima";
}

function selectOption(questionId, value) {
  appState.quizAnswers[questionId] = value;
  renderQuizQuestion();
}

function quizPrev() {
  if (appState.quizCurrentQuestion > 0) {
    appState.quizCurrentQuestion--;
    renderQuizQuestion();
  }
}

function quizNext() {
  const total = quizQuestions.length;
  if (appState.quizCurrentQuestion < total - 1) {
    appState.quizCurrentQuestion++;
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const results = calculateQuizResults();

  // Save to property
  const property = getPropertyById(appState.quizPropertyId);
  if (property) {
    property.sustainabilityIndex = results.percentageScore;
    property.quizAnswers = results.categoryScores;
    saveProperty(property);
  }

  // Mark user as quiz completed
  updateCurrentUser({ quizCompleted: true });
  appState.currentUser.quizCompleted = true;

  showDashboard();
}

function calculateQuizResults() {
  const categoryScores = {};
  const categories = ["agua", "solo", "biodiversidade", "energia", "praticas"];

  categories.forEach((cat) => {
    const questions = quizQuestions.filter((q) => q.category === cat);
    let score = 0;
    let maxScore = 0;

    questions.forEach((q) => {
      const answer = appState.quizAnswers[q.id];
      if (answer !== undefined) {
        score += answer;
      }
      maxScore += 3; // Max value per question
    });

    categoryScores[cat] = {
      score: score,
      maxScore: maxScore,
      percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
    };
  });

  let totalScore = 0;
  let totalMaxScore = 0;
  Object.values(categoryScores).forEach((cat) => {
    totalScore += cat.score;
    totalMaxScore += cat.maxScore;
  });

  return {
    totalScore: totalScore,
    maxScore: totalMaxScore,
    percentageScore: Math.round((totalScore / totalMaxScore) * 100),
    categoryScores: categoryScores,
  };
}

// ===== DASHBOARD =====
function initDashboard() {
  document.getElementById("logout-btn").addEventListener("click", handleLogout);
  document.getElementById("add-property-btn").addEventListener("click", () => {
    clearPropertyForm();
    showScreen("property");
  });
  document.getElementById("back-to-list").addEventListener("click", showPropertiesList);
  document.getElementById("redo-quiz-btn").addEventListener("click", () => {
    if (appState.selectedPropertyId) {
      startQuiz(appState.selectedPropertyId);
    }
  });
  document.getElementById("delete-property-btn").addEventListener("click", handleDeleteProperty);

  // Tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });
}

function showDashboard() {
  showScreen("dashboard");
  document.getElementById("user-name").textContent = appState.currentUser.name;
  renderPropertiesList();
  showPropertiesList();
}

function showPropertiesList() {
  document.getElementById("properties-list").parentElement.classList.remove("hidden");
  document.getElementById("property-details").classList.add("hidden");
  appState.selectedPropertyId = null;
}

function renderPropertiesList() {
  const container = document.getElementById("properties-list");
  const properties = getProperties(appState.currentUser.id);

  if (properties.length === 0) {
    container.innerHTML = '<p class="empty-message">Nenhuma propriedade cadastrada ainda.</p>';
    return;
  }

  container.innerHTML = properties
    .map((prop) => {
      const indexClass = getIndexClass(prop.sustainabilityIndex);
      const indexLabel = prop.sustainabilityIndex !== undefined ? `${prop.sustainabilityIndex} pontos` : "Quiz pendente";

      return `
      <div class="property-card" data-id="${prop.id}">
        <h3>${prop.name}</h3>
        <p class="property-info">${prop.location} - ${prop.size} ${prop.sizeUnit}</p>
        <div class="property-index">
          <span class="index-badge ${indexClass}">${indexLabel}</span>
        </div>
      </div>
    `;
    })
    .join("");

  // Add click listeners
  container.querySelectorAll(".property-card").forEach((card) => {
    card.addEventListener("click", () => showPropertyDetails(card.dataset.id));
  });
}

function getIndexClass(index) {
  if (index === undefined) return "pending";
  if (index >= 75) return "excellent";
  if (index >= 50) return "good";
  if (index >= 25) return "regular";
  return "poor";
}

function getIndexStatus(index) {
  if (index >= 75) return "Excelente! Sua propriedade e um exemplo de sustentabilidade.";
  if (index >= 50) return "Bom! Ha espaco para melhorias.";
  if (index >= 25) return "Regular. Recomendamos atencao as praticas sustentaveis.";
  return "Critico. Acoes urgentes sao necessarias.";
}

function showPropertyDetails(propertyId) {
  const property = getPropertyById(propertyId);
  if (!property) return;

  appState.selectedPropertyId = propertyId;

  document.getElementById("properties-list").parentElement.classList.add("hidden");
  document.getElementById("property-details").classList.remove("hidden");

  document.getElementById("detail-property-name").textContent = property.name;

  if (property.sustainabilityIndex !== undefined) {
    renderGauge(property.sustainabilityIndex);
    document.getElementById("sustainability-status").textContent = getIndexStatus(property.sustainabilityIndex);
    renderCategories(property.quizAnswers);
    renderRecommendations(property.quizAnswers);
    renderSimulation(property.sustainabilityIndex);
  } else {
    document.getElementById("gauge-text").textContent = "?";
    document.getElementById("sustainability-status").textContent = "Complete o quiz para ver seu indice.";
    document.getElementById("categories-list").innerHTML = '<p>Complete o quiz para ver as categorias.</p>';
    document.getElementById("recommendations-list").innerHTML = '<p>Complete o quiz para ver as recomendacoes.</p>';
    document.getElementById("simulation-cards").innerHTML = '<p>Complete o quiz para ver a simulacao.</p>';
  }
}

function renderGauge(value) {
  const gaugeText = document.getElementById("gauge-text");
  const gaugeFill = document.getElementById("gauge-fill");

  gaugeText.textContent = value;

  // Calculate stroke-dashoffset (251 is full arc length)
  const offset = 251 - (value / 100) * 251;
  gaugeFill.style.strokeDashoffset = offset;
}

function renderCategories(categoryScores) {
  const container = document.getElementById("categories-list");

  if (!categoryScores) {
    container.innerHTML = '<p>Dados nao disponiveis.</p>';
    return;
  }

  const categories = ["agua", "solo", "biodiversidade", "energia", "praticas"];

  container.innerHTML = categories
    .map((cat) => {
      const data = categoryScores[cat] || { percentage: 0 };
      const percentage = data.percentage || 0;
      const barClass = getIndexClass(percentage);

      return `
      <div class="category-item">
        <div class="category-icon">${categoryIcons[cat]}</div>
        <div class="category-info">
          <div class="category-name">${categoryLabels[cat]}</div>
          <div class="category-bar">
            <div class="category-bar-fill ${barClass}" style="width: ${percentage}%"></div>
          </div>
        </div>
        <span class="category-score">${percentage}%</span>
      </div>
    `;
    })
    .join("");
}

function renderRecommendations(categoryScores) {
  const container = document.getElementById("recommendations-list");

  if (!categoryScores) {
    container.innerHTML = '<p>Complete o quiz para ver recomendacoes personalizadas.</p>';
    return;
  }

  // Find weakest categories
  const categories = Object.entries(categoryScores)
    .map(([cat, data]) => ({ category: cat, percentage: data.percentage || 0 }))
    .sort((a, b) => a.percentage - b.percentage);

  const weakCategories = categories.slice(0, 3).map((c) => c.category);

  // Get recommendations for weak categories
  const relevantRecs = recommendations.filter((r) => weakCategories.includes(r.category)).slice(0, 6);

  if (relevantRecs.length === 0) {
    container.innerHTML = '<p>Parabens! Sua propriedade esta bem em todas as categorias.</p>';
    return;
  }

  container.innerHTML = relevantRecs
    .map(
      (rec) => `
    <div class="recommendation-card">
      <div class="recommendation-header">
        <h4>${rec.title}</h4>
        <span class="impact-badge ${rec.impact}">${rec.impact}</span>
      </div>
      <p>${rec.description}</p>
      <div class="recommendation-meta">
        <span>Custo: ${rec.estimatedCost}</span>
        <span>Prazo: ${rec.timeframe}</span>
      </div>
      <div class="recommendation-benefits">
        <h5>Beneficios:</h5>
        <ul>
          ${rec.benefits.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");
}

function renderSimulation(currentIndex) {
  const container = document.getElementById("simulation-cards");

  const projections = [
    {
      year: 1,
      projected: Math.min(100, currentIndex + 10),
      improvements: ["Captacao de agua da chuva", "Adubacao verde implementada"],
      benefits: ["Reducao de 15% nos custos de agua", "Melhoria na qualidade do solo"],
    },
    {
      year: 3,
      projected: Math.min(100, currentIndex + 25),
      improvements: ["Sistema fotovoltaico instalado", "Corredores ecologicos estabelecidos", "Plantio direto consolidado"],
      benefits: ["Independencia energetica parcial", "Aumento de 20% na produtividade", "Certificacao ambiental possivel"],
    },
    {
      year: 5,
      projected: Math.min(100, currentIndex + 40),
      improvements: ["ILPF consolidado", "Certificacao organica obtida", "Biodigestor operacional"],
      benefits: ["Precos premium nos produtos", "Propriedade modelo na regiao", "Sequestro significativo de carbono"],
    },
  ];

  container.innerHTML = projections
    .map(
      (proj) => `
    <div class="simulation-card">
      <h4>Em ${proj.year} ano${proj.year > 1 ? "s" : ""}</h4>
      <div class="simulation-indices">
        <div class="index-current">
          <span>Atual</span>
          <strong>${currentIndex}</strong>
        </div>
        <div class="simulation-arrow">→</div>
        <div class="index-projected">
          <span>Projetado</span>
          <strong>${proj.projected}</strong>
        </div>
      </div>
      <div class="simulation-improvements">
        <h5>Melhorias implementadas:</h5>
        <ul>
          ${proj.improvements.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </div>
      <div class="simulation-benefits">
        <h5>Resultados esperados:</h5>
        <ul>
          ${proj.benefits.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");
}

function switchTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.toggle("active", content.id === `tab-${tabName}`);
    content.classList.toggle("hidden", content.id !== `tab-${tabName}`);
  });
}

function handleDeleteProperty() {
  if (!appState.selectedPropertyId) return;

  const confirmed = confirm("Tem certeza que deseja excluir esta propriedade? Esta acao nao pode ser desfeita.");
  if (!confirmed) return;

  deletePropertyById(appState.selectedPropertyId);
  appState.selectedPropertyId = null;

  const properties = getProperties(appState.currentUser.id);
  if (properties.length === 0) {
    showScreen("property");
  } else {
    renderPropertiesList();
    showPropertiesList();
  }
}

// ===== INICIALIZACAO =====
function init() {
  initAuth();
  initProperty();
  initQuiz();
  initDashboard();

  // Check for existing session
  const savedUser = getCurrentUser();
  if (savedUser) {
    appState.currentUser = savedUser;
    afterLogin();
  } else {
    showScreen("auth");
  }
}

// Start app when DOM is ready
document.addEventListener("DOMContentLoaded", init);
