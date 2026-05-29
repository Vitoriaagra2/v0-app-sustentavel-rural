// ===== DADOS DO QUIZ =====
var perguntas = [
  { id: "agua-1", categoria: "agua", pergunta: "Como voce gerencia o uso de agua na propriedade?", opcoes: [
    { texto: "Nao faco controle", valor: 0 },
    { texto: "Controle basico visual", valor: 1 },
    { texto: "Medicao parcial do consumo", valor: 2 },
    { texto: "Sistema completo de monitoramento", valor: 3 }
  ]},
  { id: "agua-2", categoria: "agua", pergunta: "Qual a situacao das nascentes e cursos de agua?", opcoes: [
    { texto: "Sem protecao ou degradadas", valor: 0 },
    { texto: "Parcialmente protegidas", valor: 1 },
    { texto: "Bem protegidas com vegetacao", valor: 2 },
    { texto: "Totalmente preservadas com APP", valor: 3 }
  ]},
  { id: "agua-3", categoria: "agua", pergunta: "Voce utiliza captacao de agua da chuva?", opcoes: [
    { texto: "Nao utilizo", valor: 0 },
    { texto: "Captacao simples domestica", valor: 1 },
    { texto: "Sistema para irrigacao parcial", valor: 2 },
    { texto: "Sistema integrado completo", valor: 3 }
  ]},
  { id: "solo-1", categoria: "solo", pergunta: "Como esta a situacao de erosao na propriedade?", opcoes: [
    { texto: "Erosao severa em varias areas", valor: 0 },
    { texto: "Erosao moderada em algumas areas", valor: 1 },
    { texto: "Erosao leve e controlada", valor: 2 },
    { texto: "Sem erosao visivel", valor: 3 }
  ]},
  { id: "solo-2", categoria: "solo", pergunta: "Voce pratica rotacao de culturas?", opcoes: [
    { texto: "Nao pratico", valor: 0 },
    { texto: "Ocasionalmente", valor: 1 },
    { texto: "Regularmente", valor: 2 },
    { texto: "Sistema planejado de rotacao", valor: 3 }
  ]},
  { id: "solo-3", categoria: "solo", pergunta: "Como voce maneja a cobertura do solo?", opcoes: [
    { texto: "Solo exposto na maior parte", valor: 0 },
    { texto: "Cobertura parcial", valor: 1 },
    { texto: "Cobertura vegetal na maioria", valor: 2 },
    { texto: "Plantio direto ou cobertura permanente", valor: 3 }
  ]},
  { id: "bio-1", categoria: "biodiversidade", pergunta: "Qual a situacao da Reserva Legal?", opcoes: [
    { texto: "Nao tenho ou esta degradada", valor: 0 },
    { texto: "Parcialmente preservada", valor: 1 },
    { texto: "Preservada mas isolada", valor: 2 },
    { texto: "Preservada e conectada", valor: 3 }
  ]},
  { id: "bio-2", categoria: "biodiversidade", pergunta: "Voce mantem corredores ecologicos?", opcoes: [
    { texto: "Nao mantenho", valor: 0 },
    { texto: "Algumas areas isoladas", valor: 1 },
    { texto: "Corredores parciais", valor: 2 },
    { texto: "Sistema integrado de corredores", valor: 3 }
  ]},
  { id: "bio-3", categoria: "biodiversidade", pergunta: "Como voce lida com a fauna silvestre?", opcoes: [
    { texto: "Considerada como praga", valor: 0 },
    { texto: "Tolerancia passiva", valor: 1 },
    { texto: "Protecao basica", valor: 2 },
    { texto: "Manejo integrado e protecao ativa", valor: 3 }
  ]},
  { id: "energia-1", categoria: "energia", pergunta: "Voce utiliza fontes de energia renovavel?", opcoes: [
    { texto: "Nao utilizo", valor: 0 },
    { texto: "Uso parcial (solar aquecimento)", valor: 1 },
    { texto: "Geracao parcial de energia", valor: 2 },
    { texto: "Sistema completo renovavel", valor: 3 }
  ]},
  { id: "energia-2", categoria: "energia", pergunta: "Como e a eficiencia dos equipamentos?", opcoes: [
    { texto: "Equipamentos antigos e ineficientes", valor: 0 },
    { texto: "Alguns equipamentos eficientes", valor: 1 },
    { texto: "Maioria eficiente", valor: 2 },
    { texto: "Todos eficientes e monitorados", valor: 3 }
  ]},
  { id: "energia-3", categoria: "energia", pergunta: "Voce aproveita biomassa para energia?", opcoes: [
    { texto: "Nao aproveito", valor: 0 },
    { texto: "Queima simples de residuos", valor: 1 },
    { texto: "Compostagem ou biodigestor parcial", valor: 2 },
    { texto: "Sistema integrado de aproveitamento", valor: 3 }
  ]},
  { id: "praticas-1", categoria: "praticas", pergunta: "Como voce utiliza agrotoxicos?", opcoes: [
    { texto: "Uso intensivo sem controle", valor: 0 },
    { texto: "Uso com algum controle", valor: 1 },
    { texto: "Uso minimo e controlado", valor: 2 },
    { texto: "Producao organica ou sem agrotoxicos", valor: 3 }
  ]},
  { id: "praticas-2", categoria: "praticas", pergunta: "Voce pratica integracao lavoura-pecuaria-floresta?", opcoes: [
    { texto: "Nao pratico", valor: 0 },
    { texto: "Integracao parcial", valor: 1 },
    { texto: "ILPF em implementacao", valor: 2 },
    { texto: "ILPF consolidado", valor: 3 }
  ]},
  { id: "praticas-3", categoria: "praticas", pergunta: "Como voce gerencia os residuos da producao?", opcoes: [
    { texto: "Descarte sem tratamento", valor: 0 },
    { texto: "Separacao basica", valor: 1 },
    { texto: "Reciclagem e compostagem parcial", valor: 2 },
    { texto: "Gestao completa de residuos", valor: 3 }
  ]}
];

var recomendacoes = [
  { id: "r1", categoria: "agua", titulo: "Sistema de Captacao de Agua da Chuva", descricao: "Instale cisternas para reduzir dependencia de outras fontes.", impacto: "alto", custo: "R$ 5.000 - R$ 15.000", prazo: "2-4 meses" },
  { id: "r2", categoria: "agua", titulo: "Recuperacao de Nascentes", descricao: "Cerque e replante vegetacao nativa ao redor das nascentes.", impacto: "alto", custo: "R$ 2.000 - R$ 8.000", prazo: "6-12 meses" },
  { id: "r3", categoria: "solo", titulo: "Curvas de Nivel e Terracos", descricao: "Construa curvas de nivel para controlar erosao.", impacto: "alto", custo: "R$ 500 - R$ 1.500/ha", prazo: "1-2 meses" },
  { id: "r4", categoria: "solo", titulo: "Plantio Direto", descricao: "Adote o sistema de plantio direto na palha.", impacto: "alto", custo: "R$ 200 - R$ 800/ha", prazo: "1-2 safras" },
  { id: "r5", categoria: "biodiversidade", titulo: "Corredores Ecologicos", descricao: "Conecte fragmentos de vegetacao nativa.", impacto: "alto", custo: "R$ 3.000 - R$ 8.000/ha", prazo: "2-5 anos" },
  { id: "r6", categoria: "biodiversidade", titulo: "Sistemas Agroflorestais", descricao: "Combine producao agricola com arvores nativas.", impacto: "alto", custo: "R$ 5.000 - R$ 15.000/ha", prazo: "2-5 anos" },
  { id: "r7", categoria: "energia", titulo: "Sistema Fotovoltaico", descricao: "Instale paineis solares para geracao de energia.", impacto: "alto", custo: "R$ 15.000 - R$ 50.000", prazo: "1-3 meses" },
  { id: "r8", categoria: "energia", titulo: "Biodigestor", descricao: "Transforme dejetos animais em biogas.", impacto: "alto", custo: "R$ 10.000 - R$ 40.000", prazo: "2-4 meses" },
  { id: "r9", categoria: "praticas", titulo: "Manejo Integrado de Pragas", descricao: "Adote estrategias de controle biologico.", impacto: "alto", custo: "R$ 500 - R$ 2.000", prazo: "1-2 safras" },
  { id: "r10", categoria: "praticas", titulo: "Certificacao Organica", descricao: "Inicie a transicao para producao organica.", impacto: "alto", custo: "R$ 2.000 - R$ 5.000/ano", prazo: "2-3 anos" }
];

var nomesCategorias = {
  agua: "Gestao da Agua",
  solo: "Conservacao do Solo",
  biodiversidade: "Biodiversidade",
  energia: "Energia",
  praticas: "Praticas Agricolas"
};

var iconesCategorias = {
  agua: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  solo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
  biodiversidade: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0 0 20 7 7 0 0 0 0-20z"/></svg>',
  energia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  praticas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/></svg>'
};

// ===== ESTADO =====
var estado = {
  usuarioAtual: null,
  propriedadeSelecionada: null,
  quizPerguntaAtual: 0,
  quizRespostas: {},
  quizPropriedadeId: null
};

// ===== STORAGE =====
function getUsuarios() {
  var dados = localStorage.getItem("ecorural_usuarios");
  return dados ? JSON.parse(dados) : [];
}

function salvarUsuario(usuario) {
  var usuarios = getUsuarios();
  var index = -1;
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === usuario.id) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    usuarios[index] = usuario;
  } else {
    usuarios.push(usuario);
  }
  localStorage.setItem("ecorural_usuarios", JSON.stringify(usuarios));
}

function buscarUsuarioPorEmail(email) {
  var usuarios = getUsuarios();
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email.toLowerCase() === email.toLowerCase()) {
      return usuarios[i];
    }
  }
  return null;
}

function getUsuarioAtual() {
  var dados = localStorage.getItem("ecorural_usuario_atual");
  return dados ? JSON.parse(dados) : null;
}

function setUsuarioAtual(usuario) {
  if (usuario) {
    localStorage.setItem("ecorural_usuario_atual", JSON.stringify(usuario));
  } else {
    localStorage.removeItem("ecorural_usuario_atual");
  }
}

function getPropriedades(userId) {
  var dados = localStorage.getItem("ecorural_propriedades");
  var propriedades = dados ? JSON.parse(dados) : [];
  if (userId) {
    var filtradas = [];
    for (var i = 0; i < propriedades.length; i++) {
      if (propriedades[i].userId === userId) {
        filtradas.push(propriedades[i]);
      }
    }
    return filtradas;
  }
  return propriedades;
}

function salvarPropriedade(propriedade) {
  var propriedades = getPropriedades();
  var index = -1;
  for (var i = 0; i < propriedades.length; i++) {
    if (propriedades[i].id === propriedade.id) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    propriedades[index] = propriedade;
  } else {
    propriedades.push(propriedade);
  }
  localStorage.setItem("ecorural_propriedades", JSON.stringify(propriedades));
}

function excluirPropriedade(id) {
  var propriedades = getPropriedades();
  var filtradas = [];
  for (var i = 0; i < propriedades.length; i++) {
    if (propriedades[i].id !== id) {
      filtradas.push(propriedades[i]);
    }
  }
  localStorage.setItem("ecorural_propriedades", JSON.stringify(filtradas));
}

function getPropriedadePorId(id) {
  var propriedades = getPropriedades();
  for (var i = 0; i < propriedades.length; i++) {
    if (propriedades[i].id === id) {
      return propriedades[i];
    }
  }
  return null;
}

function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ===== NAVEGACAO =====
function mostrarTela(nomeTela) {
  var telas = document.querySelectorAll(".tela");
  for (var i = 0; i < telas.length; i++) {
    telas[i].classList.add("oculto");
  }
  document.getElementById("tela-" + nomeTela).classList.remove("oculto");
}

// ===== AUTENTICACAO =====
function inicializarAuth() {
  var formLogin = document.getElementById("form-login");
  var formCadastro = document.getElementById("form-cadastro");
  var mostrarCadastro = document.getElementById("mostrar-cadastro");
  var mostrarLogin = document.getElementById("mostrar-login");

  mostrarCadastro.addEventListener("click", function(e) {
    e.preventDefault();
    formLogin.classList.add("oculto");
    formCadastro.classList.remove("oculto");
  });

  mostrarLogin.addEventListener("click", function(e) {
    e.preventDefault();
    formCadastro.classList.add("oculto");
    formLogin.classList.remove("oculto");
  });

  formLogin.addEventListener("submit", function(e) {
    e.preventDefault();
    fazerLogin();
  });

  formCadastro.addEventListener("submit", function(e) {
    e.preventDefault();
    fazerCadastro();
  });
}

function fazerLogin() {
  var email = document.getElementById("login-email").value.trim();
  var senha = document.getElementById("login-senha").value;
  var erro = document.getElementById("login-erro");
  erro.textContent = "";

  if (!email || !senha) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  var usuario = buscarUsuarioPorEmail(email);
  if (!usuario) {
    erro.textContent = "Usuario nao encontrado.";
    return;
  }

  if (usuario.senha !== senha) {
    erro.textContent = "Senha incorreta.";
    return;
  }

  setUsuarioAtual(usuario);
  estado.usuarioAtual = usuario;
  aposLogin();
}

function fazerCadastro() {
  var nome = document.getElementById("cadastro-nome").value.trim();
  var email = document.getElementById("cadastro-email").value.trim();
  var senha = document.getElementById("cadastro-senha").value;
  var confirmar = document.getElementById("cadastro-confirmar").value;
  var erro = document.getElementById("cadastro-erro");
  erro.textContent = "";

  if (!nome || !email || !senha || !confirmar) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  if (senha.length < 6) {
    erro.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  if (senha !== confirmar) {
    erro.textContent = "As senhas nao conferem.";
    return;
  }

  if (buscarUsuarioPorEmail(email)) {
    erro.textContent = "Este e-mail ja esta cadastrado.";
    return;
  }

  var novoUsuario = {
    id: gerarId(),
    email: email,
    nome: nome,
    senha: senha,
    quizCompleto: false
  };

  salvarUsuario(novoUsuario);
  setUsuarioAtual(novoUsuario);
  estado.usuarioAtual = novoUsuario;
  aposLogin();
}

function aposLogin() {
  var usuario = estado.usuarioAtual;
  var propriedades = getPropriedades(usuario.id);

  if (propriedades.length === 0) {
    mostrarTela("propriedade");
  } else {
    var semIndice = null;
    for (var i = 0; i < propriedades.length; i++) {
      if (!propriedades[i].indice) {
        semIndice = propriedades[i];
        break;
      }
    }
    if (!usuario.quizCompleto && semIndice) {
      iniciarQuiz(semIndice.id);
    } else {
      mostrarDashboard();
    }
  }
}

function fazerLogout() {
  setUsuarioAtual(null);
  estado.usuarioAtual = null;
  estado.propriedadeSelecionada = null;
  document.getElementById("login-email").value = "";
  document.getElementById("login-senha").value = "";
  mostrarTela("auth");
}

// ===== PROPRIEDADE =====
function inicializarPropriedade() {
  var form = document.getElementById("form-propriedade");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    cadastrarPropriedade();
  });
}

function cadastrarPropriedade() {
  var nome = document.getElementById("prop-nome").value.trim();
  var local = document.getElementById("prop-local").value.trim();
  var tamanho = document.getElementById("prop-tamanho").value;
  var unidade = document.getElementById("prop-unidade").value;
  var atividade = document.getElementById("prop-atividade").value;
  var erro = document.getElementById("prop-erro");
  erro.textContent = "";

  if (!nome || !local || !tamanho || !atividade) {
    erro.textContent = "Preencha todos os campos.";
    return;
  }

  var novaPropriedade = {
    id: gerarId(),
    userId: estado.usuarioAtual.id,
    nome: nome,
    localizacao: local,
    tamanho: parseInt(tamanho),
    unidade: unidade,
    atividade: atividade,
    indice: null,
    pontuacaoCategorias: null,
    respostasQuiz: null
  };

  salvarPropriedade(novaPropriedade);
  limparFormPropriedade();
  iniciarQuiz(novaPropriedade.id);
}

function limparFormPropriedade() {
  document.getElementById("prop-nome").value = "";
  document.getElementById("prop-local").value = "";
  document.getElementById("prop-tamanho").value = "";
  document.getElementById("prop-atividade").value = "";
  document.getElementById("prop-erro").textContent = "";
}

// ===== QUIZ =====
function inicializarQuiz() {
  document.getElementById("quiz-anterior").addEventListener("click", function() {
    if (estado.quizPerguntaAtual > 0) {
      estado.quizPerguntaAtual--;
      renderizarQuiz();
    }
  });

  document.getElementById("quiz-proximo").addEventListener("click", function() {
    if (estado.quizPerguntaAtual < perguntas.length - 1) {
      estado.quizPerguntaAtual++;
      renderizarQuiz();
    } else {
      finalizarQuiz();
    }
  });
}

function iniciarQuiz(propriedadeId) {
  estado.quizPropriedadeId = propriedadeId;
  estado.quizPerguntaAtual = 0;
  estado.quizRespostas = {};
  mostrarTela("quiz");
  renderizarQuiz();
}

function renderizarQuiz() {
  var pergunta = perguntas[estado.quizPerguntaAtual];
  var total = perguntas.length;
  var atual = estado.quizPerguntaAtual + 1;

  // Progresso
  var porcentagem = (atual / total) * 100;
  document.getElementById("progresso-preenchido").style.width = porcentagem + "%";
  document.getElementById("progresso-texto").textContent = "Pergunta " + atual + " de " + total;

  // Categoria
  document.getElementById("quiz-categoria").textContent = nomesCategorias[pergunta.categoria];

  // Pergunta
  document.getElementById("quiz-pergunta").textContent = pergunta.pergunta;

  // Opcoes
  var container = document.getElementById("quiz-opcoes");
  container.innerHTML = "";
  for (var i = 0; i < pergunta.opcoes.length; i++) {
    var opcao = pergunta.opcoes[i];
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opcao";
    btn.textContent = opcao.texto;
    btn.setAttribute("data-valor", opcao.valor);
    if (estado.quizRespostas[pergunta.id] === opcao.valor) {
      btn.classList.add("selecionada");
    }
    btn.addEventListener("click", function() {
      selecionarOpcao(this);
    });
    container.appendChild(btn);
  }

  // Botoes
  document.getElementById("quiz-anterior").disabled = estado.quizPerguntaAtual === 0;
  var btnProximo = document.getElementById("quiz-proximo");
  btnProximo.disabled = estado.quizRespostas[pergunta.id] === undefined;
  btnProximo.textContent = estado.quizPerguntaAtual === total - 1 ? "Finalizar" : "Proxima";
}

function selecionarOpcao(btn) {
  var pergunta = perguntas[estado.quizPerguntaAtual];
  var valor = parseInt(btn.getAttribute("data-valor"));
  estado.quizRespostas[pergunta.id] = valor;

  var opcoes = document.querySelectorAll("#quiz-opcoes .opcao");
  for (var i = 0; i < opcoes.length; i++) {
    opcoes[i].classList.remove("selecionada");
  }
  btn.classList.add("selecionada");

  document.getElementById("quiz-proximo").disabled = false;
}

function finalizarQuiz() {
  var propriedade = getPropriedadePorId(estado.quizPropriedadeId);
  if (!propriedade) return;

  // Calcular pontuacao por categoria
  var categorias = { agua: [], solo: [], biodiversidade: [], energia: [], praticas: [] };
  for (var i = 0; i < perguntas.length; i++) {
    var p = perguntas[i];
    if (estado.quizRespostas[p.id] !== undefined) {
      categorias[p.categoria].push(estado.quizRespostas[p.id]);
    }
  }

  var pontuacaoCategorias = {};
  var totalPontos = 0;
  var totalMax = 0;

  for (var cat in categorias) {
    var respostas = categorias[cat];
    var soma = 0;
    for (var j = 0; j < respostas.length; j++) {
      soma += respostas[j];
    }
    var max = respostas.length * 3;
    var porcentagem = max > 0 ? Math.round((soma / max) * 100) : 0;
    pontuacaoCategorias[cat] = porcentagem;
    totalPontos += soma;
    totalMax += max;
  }

  var indice = totalMax > 0 ? Math.round((totalPontos / totalMax) * 100) : 0;

  propriedade.indice = indice;
  propriedade.pontuacaoCategorias = pontuacaoCategorias;
  propriedade.respostasQuiz = estado.quizRespostas;
  salvarPropriedade(propriedade);

  // Marcar quiz completo
  var usuario = estado.usuarioAtual;
  usuario.quizCompleto = true;
  salvarUsuario(usuario);
  setUsuarioAtual(usuario);
  estado.usuarioAtual = usuario;

  mostrarDashboard();
}

// ===== DASHBOARD =====
function inicializarDashboard() {
  document.getElementById("btn-sair").addEventListener("click", fazerLogout);
  document.getElementById("btn-nova-prop").addEventListener("click", function() {
    mostrarTela("propriedade");
  });
  document.getElementById("btn-voltar").addEventListener("click", function() {
    document.getElementById("secao-lista").classList.remove("oculto");
    document.getElementById("secao-detalhes").classList.add("oculto");
    estado.propriedadeSelecionada = null;
  });
  document.getElementById("btn-refazer-quiz").addEventListener("click", function() {
    if (estado.propriedadeSelecionada) {
      iniciarQuiz(estado.propriedadeSelecionada);
    }
  });
  document.getElementById("btn-excluir").addEventListener("click", function() {
    if (estado.propriedadeSelecionada && confirm("Tem certeza que deseja excluir esta propriedade?")) {
      excluirPropriedade(estado.propriedadeSelecionada);
      estado.propriedadeSelecionada = null;
      mostrarDashboard();
    }
  });

  // Abas
  var abaBtns = document.querySelectorAll(".aba-btn");
  for (var i = 0; i < abaBtns.length; i++) {
    abaBtns[i].addEventListener("click", function() {
      var aba = this.getAttribute("data-aba");
      trocarAba(aba);
    });
  }
}

function trocarAba(aba) {
  var btns = document.querySelectorAll(".aba-btn");
  var conteudos = document.querySelectorAll(".aba-conteudo");
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("ativa");
    conteudos[i].classList.remove("ativa");
  }
  document.querySelector('.aba-btn[data-aba="' + aba + '"]').classList.add("ativa");
  document.getElementById("aba-" + aba).classList.add("ativa");
}

function mostrarDashboard() {
  mostrarTela("dashboard");
  document.getElementById("nome-usuario").textContent = estado.usuarioAtual.nome;

  var propriedades = getPropriedades(estado.usuarioAtual.id);
  renderizarListaPropriedades(propriedades);

  document.getElementById("secao-lista").classList.remove("oculto");
  document.getElementById("secao-detalhes").classList.add("oculto");
}

function renderizarListaPropriedades(propriedades) {
  var container = document.getElementById("lista-propriedades");
  container.innerHTML = "";

  if (propriedades.length === 0) {
    container.innerHTML = '<p style="color: var(--texto-claro);">Nenhuma propriedade cadastrada ainda.</p>';
    return;
  }

  for (var i = 0; i < propriedades.length; i++) {
    var prop = propriedades[i];
    var card = document.createElement("div");
    card.className = "card-propriedade";
    card.setAttribute("data-id", prop.id);

    var badgeClass = "badge-pendente";
    var badgeText = "Pendente";
    if (prop.indice !== null) {
      if (prop.indice >= 75) { badgeClass = "badge-otimo"; badgeText = "Otimo - " + prop.indice + " pts"; }
      else if (prop.indice >= 50) { badgeClass = "badge-bom"; badgeText = "Bom - " + prop.indice + " pts"; }
      else if (prop.indice >= 25) { badgeClass = "badge-regular"; badgeText = "Regular - " + prop.indice + " pts"; }
      else { badgeClass = "badge-ruim"; badgeText = "Ruim - " + prop.indice + " pts"; }
    }

    card.innerHTML = '<h3>' + prop.nome + '</h3>' +
      '<p class="info">' + prop.localizacao + ' - ' + prop.tamanho + ' ' + prop.unidade + '</p>' +
      '<span class="badge ' + badgeClass + '">' + badgeText + '</span>';

    card.addEventListener("click", function() {
      var id = this.getAttribute("data-id");
      mostrarDetalhes(id);
    });

    container.appendChild(card);
  }
}

function mostrarDetalhes(id) {
  var prop = getPropriedadePorId(id);
  if (!prop) return;

  estado.propriedadeSelecionada = id;
  document.getElementById("nome-propriedade").textContent = prop.nome;

  document.getElementById("secao-lista").classList.add("oculto");
  document.getElementById("secao-detalhes").classList.remove("oculto");

  if (prop.indice !== null) {
    renderizarGauge(prop.indice);
    renderizarCategorias(prop.pontuacaoCategorias);
    renderizarRecomendacoes(prop.pontuacaoCategorias);
    renderizarSimulacao(prop.indice, prop.pontuacaoCategorias);
  } else {
    document.getElementById("gauge-numero").textContent = "?";
    document.getElementById("status-sustentabilidade").textContent = "Quiz nao realizado";
  }
}

function renderizarGauge(indice) {
  var offset = 251 - (indice / 100) * 251;
  document.getElementById("gauge-valor").setAttribute("stroke-dashoffset", offset);
  document.getElementById("gauge-numero").textContent = indice;

  var status = "Calculando...";
  if (indice >= 75) status = "Excelente! Propriedade sustentavel.";
  else if (indice >= 50) status = "Bom! Ha espaco para melhorias.";
  else if (indice >= 25) status = "Regular. Precisa de atencao.";
  else status = "Critico. Acoes urgentes necessarias.";

  document.getElementById("status-sustentabilidade").textContent = status;
}

function renderizarCategorias(pontuacoes) {
  var container = document.getElementById("lista-categorias");
  container.innerHTML = "";

  for (var cat in pontuacoes) {
    var pontos = pontuacoes[cat];
    var classe = "ruim";
    if (pontos >= 75) classe = "otimo";
    else if (pontos >= 50) classe = "bom";
    else if (pontos >= 25) classe = "regular";

    var item = document.createElement("div");
    item.className = "item-categoria";
    item.innerHTML = '<div class="icone-categoria">' + iconesCategorias[cat] + '</div>' +
      '<div class="info-categoria">' +
      '<div class="nome">' + nomesCategorias[cat] + '</div>' +
      '<div class="barra-categoria"><div class="barra-valor ' + classe + '" style="width:' + pontos + '%"></div></div>' +
      '</div>' +
      '<span class="pontuacao">' + pontos + '%</span>';

    container.appendChild(item);
  }
}

function renderizarRecomendacoes(pontuacoes) {
  var container = document.getElementById("lista-recomendacoes");
  container.innerHTML = "";

  // Encontrar categorias mais fracas
  var catsFracas = [];
  for (var cat in pontuacoes) {
    if (pontuacoes[cat] < 75) {
      catsFracas.push(cat);
    }
  }

  if (catsFracas.length === 0) {
    container.innerHTML = '<p style="color: var(--texto-claro);">Parabens! Sua propriedade esta em otimo nivel de sustentabilidade.</p>';
    return;
  }

  var recsExibidas = [];
  for (var i = 0; i < recomendacoes.length; i++) {
    var rec = recomendacoes[i];
    if (catsFracas.indexOf(rec.categoria) >= 0 && recsExibidas.length < 5) {
      recsExibidas.push(rec);
    }
  }

  for (var j = 0; j < recsExibidas.length; j++) {
    var r = recsExibidas[j];
    var card = document.createElement("div");
    card.className = "card-recomendacao";
    card.innerHTML = '<h4>' + r.titulo + ' <span class="impacto impacto-' + r.impacto + '">' + r.impacto + '</span></h4>' +
      '<p>' + r.descricao + '</p>' +
      '<div class="meta-recomendacao">' +
      '<span>Custo: ' + r.custo + '</span>' +
      '<span>Prazo: ' + r.prazo + '</span>' +
      '</div>';
    container.appendChild(card);
  }
}

function renderizarSimulacao(indiceAtual, pontuacoes) {
  var container = document.getElementById("cards-simulacao");
  container.innerHTML = "";

  var periodos = [
    { nome: "1 Ano", melhoria: 10, beneficios: ["Reducao de custos operacionais", "Melhoria na qualidade da agua"] },
    { nome: "3 Anos", melhoria: 25, beneficios: ["Aumento da biodiversidade", "Solo mais fertil", "Economia de energia"] },
    { nome: "5 Anos", melhoria: 40, beneficios: ["Propriedade modelo", "Certificacoes sustentaveis", "Valorizacao do imovel"] }
  ];

  for (var i = 0; i < periodos.length; i++) {
    var p = periodos[i];
    var projetado = Math.min(100, indiceAtual + p.melhoria);

    var card = document.createElement("div");
    card.className = "card-simulacao";
    card.innerHTML = '<h4>Em ' + p.nome + '</h4>' +
      '<div class="indices-simulacao">' +
      '<div class="indice-atual"><span>Atual</span><strong>' + indiceAtual + '</strong></div>' +
      '<div class="seta">→</div>' +
      '<div class="indice-projetado"><span>Projetado</span><strong>' + projetado + '</strong></div>' +
      '</div>' +
      '<div class="beneficios-simulacao">' +
      '<h5>Beneficios esperados:</h5>' +
      '<ul>' + p.beneficios.map(function(b) { return '<li>' + b + '</li>'; }).join('') + '</ul>' +
      '</div>';

    container.appendChild(card);
  }
}

// ===== INICIALIZACAO =====
document.addEventListener("DOMContentLoaded", function() {
  inicializarAuth();
  inicializarPropriedade();
  inicializarQuiz();
  inicializarDashboard();

  // Verificar usuario logado
  var usuario = getUsuarioAtual();
  if (usuario) {
    estado.usuarioAtual = usuario;
    aposLogin();
  } else {
    mostrarTela("auth");
  }
});
