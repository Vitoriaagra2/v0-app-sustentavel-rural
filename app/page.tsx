"use client"

import { useEffect } from 'react'

export default function EcoRuralApp() {
  useEffect(() => {
    // ===== DADOS DO QUIZ =====
    const perguntas = [
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
    ]

    const recomendacoes = [
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
    ]

    const nomesCategorias: Record<string, string> = {
      agua: "Gestao da Agua",
      solo: "Conservacao do Solo",
      biodiversidade: "Biodiversidade",
      energia: "Energia",
      praticas: "Praticas Agricolas"
    }

    // Estado global
    const estado: {
      usuarioAtual: any | null
      propriedadeSelecionada: string | null
      quizPerguntaAtual: number
      quizRespostas: Record<string, number>
      quizPropriedadeId: string | null
    } = {
      usuarioAtual: null,
      propriedadeSelecionada: null,
      quizPerguntaAtual: 0,
      quizRespostas: {},
      quizPropriedadeId: null
    }

    // Storage functions
    function getUsuarios() {
      const dados = localStorage.getItem("ecorural_usuarios")
      return dados ? JSON.parse(dados) : []
    }

    function salvarUsuario(usuario: any) {
      const usuarios = getUsuarios()
      const index = usuarios.findIndex((u: any) => u.id === usuario.id)
      if (index >= 0) {
        usuarios[index] = usuario
      } else {
        usuarios.push(usuario)
      }
      localStorage.setItem("ecorural_usuarios", JSON.stringify(usuarios))
    }

    function buscarUsuarioPorEmail(email: string) {
      const usuarios = getUsuarios()
      return usuarios.find((u: any) => u.email.toLowerCase() === email.toLowerCase()) || null
    }

    function getUsuarioAtual() {
      const dados = localStorage.getItem("ecorural_usuario_atual")
      return dados ? JSON.parse(dados) : null
    }

    function setUsuarioAtual(usuario: any | null) {
      if (usuario) {
        localStorage.setItem("ecorural_usuario_atual", JSON.stringify(usuario))
      } else {
        localStorage.removeItem("ecorural_usuario_atual")
      }
    }

    function getPropriedades(userId?: string) {
      const dados = localStorage.getItem("ecorural_propriedades")
      const propriedades = dados ? JSON.parse(dados) : []
      if (userId) {
        return propriedades.filter((p: any) => p.userId === userId)
      }
      return propriedades
    }

    function salvarPropriedade(propriedade: any) {
      const propriedades = getPropriedades()
      const index = propriedades.findIndex((p: any) => p.id === propriedade.id)
      if (index >= 0) {
        propriedades[index] = propriedade
      } else {
        propriedades.push(propriedade)
      }
      localStorage.setItem("ecorural_propriedades", JSON.stringify(propriedades))
    }

    function excluirPropriedade(id: string) {
      const propriedades = getPropriedades().filter((p: any) => p.id !== id)
      localStorage.setItem("ecorural_propriedades", JSON.stringify(propriedades))
    }

    function getPropriedadePorId(id: string) {
      return getPropriedades().find((p: any) => p.id === id) || null
    }

    function gerarId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2)
    }

    // Navegacao
    function mostrarTela(nomeTela: string) {
      document.querySelectorAll(".tela").forEach(t => t.classList.add("oculto"))
      document.getElementById("tela-" + nomeTela)?.classList.remove("oculto")
    }

    // Auth
    function fazerLogin() {
      const email = (document.getElementById("login-email") as HTMLInputElement).value.trim()
      const senha = (document.getElementById("login-senha") as HTMLInputElement).value
      const erro = document.getElementById("login-erro")!
      erro.textContent = ""

      if (!email || !senha) {
        erro.textContent = "Preencha todos os campos."
        return
      }

      const usuario = buscarUsuarioPorEmail(email)
      if (!usuario) {
        erro.textContent = "Usuario nao encontrado."
        return
      }

      if (usuario.senha !== senha) {
        erro.textContent = "Senha incorreta."
        return
      }

      setUsuarioAtual(usuario)
      estado.usuarioAtual = usuario
      aposLogin()
    }

    function fazerCadastro() {
      const nome = (document.getElementById("cadastro-nome") as HTMLInputElement).value.trim()
      const email = (document.getElementById("cadastro-email") as HTMLInputElement).value.trim()
      const senha = (document.getElementById("cadastro-senha") as HTMLInputElement).value
      const confirmar = (document.getElementById("cadastro-confirmar") as HTMLInputElement).value
      const erro = document.getElementById("cadastro-erro")!
      erro.textContent = ""

      if (!nome || !email || !senha || !confirmar) {
        erro.textContent = "Preencha todos os campos."
        return
      }

      if (senha.length < 6) {
        erro.textContent = "A senha deve ter pelo menos 6 caracteres."
        return
      }

      if (senha !== confirmar) {
        erro.textContent = "As senhas nao conferem."
        return
      }

      if (buscarUsuarioPorEmail(email)) {
        erro.textContent = "Este e-mail ja esta cadastrado."
        return
      }

      const novoUsuario = {
        id: gerarId(),
        email,
        nome,
        senha,
        quizCompleto: false
      }

      salvarUsuario(novoUsuario)
      setUsuarioAtual(novoUsuario)
      estado.usuarioAtual = novoUsuario
      aposLogin()
    }

    function aposLogin() {
      const usuario = estado.usuarioAtual
      const propriedades = getPropriedades(usuario.id)

      if (propriedades.length === 0) {
        mostrarTela("propriedade")
      } else {
        const semIndice = propriedades.find((p: any) => !p.indice)
        if (!usuario.quizCompleto && semIndice) {
          iniciarQuiz(semIndice.id)
        } else {
          mostrarDashboard()
        }
      }
    }

    function fazerLogout() {
      setUsuarioAtual(null)
      estado.usuarioAtual = null
      estado.propriedadeSelecionada = null
      ;(document.getElementById("login-email") as HTMLInputElement).value = ""
      ;(document.getElementById("login-senha") as HTMLInputElement).value = ""
      mostrarTela("auth")
    }

    // Propriedade
    function cadastrarPropriedade() {
      const nome = (document.getElementById("prop-nome") as HTMLInputElement).value.trim()
      const local = (document.getElementById("prop-local") as HTMLInputElement).value.trim()
      const tamanho = (document.getElementById("prop-tamanho") as HTMLInputElement).value
      const unidade = (document.getElementById("prop-unidade") as HTMLSelectElement).value
      const atividade = (document.getElementById("prop-atividade") as HTMLSelectElement).value
      const erro = document.getElementById("prop-erro")!
      erro.textContent = ""

      if (!nome || !local || !tamanho || !atividade) {
        erro.textContent = "Preencha todos os campos."
        return
      }

      const novaPropriedade = {
        id: gerarId(),
        userId: estado.usuarioAtual.id,
        nome,
        localizacao: local,
        tamanho: parseInt(tamanho),
        unidade,
        atividade,
        indice: null,
        pontuacaoCategorias: null,
        respostasQuiz: null
      }

      salvarPropriedade(novaPropriedade)
      limparFormPropriedade()
      iniciarQuiz(novaPropriedade.id)
    }

    function limparFormPropriedade() {
      ;(document.getElementById("prop-nome") as HTMLInputElement).value = ""
      ;(document.getElementById("prop-local") as HTMLInputElement).value = ""
      ;(document.getElementById("prop-tamanho") as HTMLInputElement).value = ""
      ;(document.getElementById("prop-atividade") as HTMLSelectElement).value = ""
      document.getElementById("prop-erro")!.textContent = ""
    }

    // Quiz
    function iniciarQuiz(propriedadeId: string) {
      estado.quizPropriedadeId = propriedadeId
      estado.quizPerguntaAtual = 0
      estado.quizRespostas = {}
      mostrarTela("quiz")
      renderizarQuiz()
    }

    function renderizarQuiz() {
      const pergunta = perguntas[estado.quizPerguntaAtual]
      const total = perguntas.length
      const atual = estado.quizPerguntaAtual + 1

      const porcentagem = (atual / total) * 100
      document.getElementById("progresso-preenchido")!.style.width = porcentagem + "%"
      document.getElementById("progresso-texto")!.textContent = "Pergunta " + atual + " de " + total

      document.getElementById("quiz-categoria")!.textContent = nomesCategorias[pergunta.categoria]
      document.getElementById("quiz-pergunta")!.textContent = pergunta.pergunta

      const container = document.getElementById("quiz-opcoes")!
      container.innerHTML = ""
      pergunta.opcoes.forEach(opcao => {
        const btn = document.createElement("button")
        btn.type = "button"
        btn.className = "opcao"
        btn.textContent = opcao.texto
        btn.setAttribute("data-valor", String(opcao.valor))
        if (estado.quizRespostas[pergunta.id] === opcao.valor) {
          btn.classList.add("selecionada")
        }
        btn.addEventListener("click", () => selecionarOpcao(btn))
        container.appendChild(btn)
      })

      ;(document.getElementById("quiz-anterior") as HTMLButtonElement).disabled = estado.quizPerguntaAtual === 0
      const btnProximo = document.getElementById("quiz-proximo") as HTMLButtonElement
      btnProximo.disabled = estado.quizRespostas[pergunta.id] === undefined
      btnProximo.textContent = estado.quizPerguntaAtual === total - 1 ? "Finalizar" : "Proxima"
    }

    function selecionarOpcao(btn: HTMLButtonElement) {
      const pergunta = perguntas[estado.quizPerguntaAtual]
      const valor = parseInt(btn.getAttribute("data-valor")!)
      estado.quizRespostas[pergunta.id] = valor

      document.querySelectorAll("#quiz-opcoes .opcao").forEach(o => o.classList.remove("selecionada"))
      btn.classList.add("selecionada")

      ;(document.getElementById("quiz-proximo") as HTMLButtonElement).disabled = false
    }

    function finalizarQuiz() {
      const propriedade = getPropriedadePorId(estado.quizPropriedadeId!)
      if (!propriedade) return

      const categorias: Record<string, number[]> = { agua: [], solo: [], biodiversidade: [], energia: [], praticas: [] }
      perguntas.forEach(p => {
        if (estado.quizRespostas[p.id] !== undefined) {
          categorias[p.categoria].push(estado.quizRespostas[p.id])
        }
      })

      const pontuacaoCategorias: Record<string, number> = {}
      let totalPontos = 0
      let totalMax = 0

      Object.entries(categorias).forEach(([cat, respostas]) => {
        const soma = respostas.reduce((a, b) => a + b, 0)
        const max = respostas.length * 3
        pontuacaoCategorias[cat] = max > 0 ? Math.round((soma / max) * 100) : 0
        totalPontos += soma
        totalMax += max
      })

      const indice = totalMax > 0 ? Math.round((totalPontos / totalMax) * 100) : 0

      propriedade.indice = indice
      propriedade.pontuacaoCategorias = pontuacaoCategorias
      propriedade.respostasQuiz = estado.quizRespostas
      salvarPropriedade(propriedade)

      const usuario = estado.usuarioAtual
      usuario.quizCompleto = true
      salvarUsuario(usuario)
      setUsuarioAtual(usuario)
      estado.usuarioAtual = usuario

      mostrarDashboard()
    }

    // Dashboard
    function mostrarDashboard() {
      mostrarTela("dashboard")
      document.getElementById("nome-usuario")!.textContent = estado.usuarioAtual.nome
      renderizarListaPropriedades()
      document.getElementById("secao-lista")!.classList.remove("oculto")
      document.getElementById("secao-detalhes")!.classList.add("oculto")
    }

    function renderizarListaPropriedades() {
      const container = document.getElementById("lista-propriedades")!
      const propriedades = getPropriedades(estado.usuarioAtual.id)
      
      if (propriedades.length === 0) {
        container.innerHTML = '<p class="sem-propriedades">Nenhuma propriedade cadastrada.</p>'
        return
      }

      container.innerHTML = propriedades.map((p: any) => `
        <article class="card-propriedade" data-id="${p.id}">
          <h3>${p.nome}</h3>
          <p class="prop-local">${p.localizacao}</p>
          <p class="prop-tamanho">${p.tamanho} ${p.unidade}</p>
          ${p.indice !== null ? `
            <div class="prop-indice">
              <span class="indice-valor ${getClasseIndice(p.indice)}">${p.indice}</span>
              <span class="indice-label">pontos</span>
            </div>
          ` : '<p class="prop-pendente">Quiz pendente</p>'}
        </article>
      `).join("")

      container.querySelectorAll(".card-propriedade").forEach(card => {
        card.addEventListener("click", () => {
          const id = card.getAttribute("data-id")!
          mostrarDetalhes(id)
        })
      })
    }

    function getClasseIndice(indice: number) {
      if (indice >= 70) return "indice-bom"
      if (indice >= 40) return "indice-medio"
      return "indice-ruim"
    }

    function mostrarDetalhes(propriedadeId: string) {
      estado.propriedadeSelecionada = propriedadeId
      const propriedade = getPropriedadePorId(propriedadeId)
      if (!propriedade) return

      document.getElementById("secao-lista")!.classList.add("oculto")
      document.getElementById("secao-detalhes")!.classList.remove("oculto")

      document.getElementById("nome-propriedade")!.textContent = propriedade.nome

      if (propriedade.indice !== null) {
        atualizarGauge(propriedade.indice)
        renderizarCategorias(propriedade.pontuacaoCategorias)
        renderizarRecomendacoes(propriedade.pontuacaoCategorias)
        renderizarSimulacao(propriedade.indice)
      }
    }

    function atualizarGauge(valor: number) {
      const path = document.getElementById("gauge-valor")!
      const texto = document.getElementById("gauge-numero")!
      const status = document.getElementById("status-sustentabilidade")!

      const circunferencia = 251
      const offset = circunferencia - (valor / 100) * circunferencia
      path.style.strokeDashoffset = String(offset)
      texto.textContent = String(valor)

      if (valor >= 70) {
        status.textContent = "Excelente! Sua propriedade tem otimas praticas sustentaveis."
        status.className = "status-texto status-bom"
      } else if (valor >= 40) {
        status.textContent = "Bom progresso, mas ha espaco para melhorias."
        status.className = "status-texto status-medio"
      } else {
        status.textContent = "Atencao! Varias areas precisam de melhorias urgentes."
        status.className = "status-texto status-ruim"
      }
    }

    function renderizarCategorias(pontuacoes: Record<string, number>) {
      const container = document.getElementById("lista-categorias")!
      container.innerHTML = Object.entries(pontuacoes).map(([cat, valor]) => `
        <div class="categoria-item">
          <div class="categoria-info">
            <span class="categoria-nome">${nomesCategorias[cat]}</span>
            <span class="categoria-valor">${valor}%</span>
          </div>
          <div class="categoria-barra">
            <div class="categoria-preenchido ${getClasseIndice(valor)}" style="width: ${valor}%"></div>
          </div>
        </div>
      `).join("")
    }

    function renderizarRecomendacoes(pontuacoes: Record<string, number>) {
      const container = document.getElementById("lista-recomendacoes")!
      const categoriasFracas = Object.entries(pontuacoes)
        .filter(([, v]) => v < 70)
        .sort((a, b) => a[1] - b[1])
        .map(([c]) => c)

      const recsFiltered = recomendacoes.filter(r => categoriasFracas.includes(r.categoria))
      
      if (recsFiltered.length === 0) {
        container.innerHTML = '<p class="sem-recomendacoes">Parabens! Sua propriedade esta indo muito bem em todas as areas.</p>'
        return
      }

      container.innerHTML = recsFiltered.map(r => `
        <article class="card-recomendacao">
          <div class="rec-header">
            <span class="rec-categoria">${nomesCategorias[r.categoria]}</span>
            <span class="rec-impacto impacto-${r.impacto}">Impacto ${r.impacto}</span>
          </div>
          <h4>${r.titulo}</h4>
          <p>${r.descricao}</p>
          <div class="rec-detalhes">
            <span>Custo: ${r.custo}</span>
            <span>Prazo: ${r.prazo}</span>
          </div>
        </article>
      `).join("")
    }

    function renderizarSimulacao(indiceAtual: number) {
      const container = document.getElementById("cards-simulacao")!
      const projecoes = [
        { anos: 1, melhoria: 10, descricao: "Implementando praticas basicas" },
        { anos: 3, melhoria: 25, descricao: "Consolidando melhorias" },
        { anos: 5, melhoria: 40, descricao: "Propriedade sustentavel" }
      ]

      container.innerHTML = projecoes.map(p => {
        const novoIndice = Math.min(100, indiceAtual + p.melhoria)
        return `
          <article class="card-simulacao">
            <h4>Em ${p.anos} ${p.anos === 1 ? 'ano' : 'anos'}</h4>
            <div class="sim-indice ${getClasseIndice(novoIndice)}">${novoIndice}</div>
            <p>${p.descricao}</p>
            <span class="sim-aumento">+${p.melhoria} pontos</span>
          </article>
        `
      }).join("")
    }

    // Inicializacao
    function init() {
      // Auth
      document.getElementById("mostrar-cadastro")?.addEventListener("click", (e) => {
        e.preventDefault()
        document.getElementById("form-login")?.classList.add("oculto")
        document.getElementById("form-cadastro")?.classList.remove("oculto")
      })

      document.getElementById("mostrar-login")?.addEventListener("click", (e) => {
        e.preventDefault()
        document.getElementById("form-cadastro")?.classList.add("oculto")
        document.getElementById("form-login")?.classList.remove("oculto")
      })

      document.getElementById("form-login")?.addEventListener("submit", (e) => {
        e.preventDefault()
        fazerLogin()
      })

      document.getElementById("form-cadastro")?.addEventListener("submit", (e) => {
        e.preventDefault()
        fazerCadastro()
      })

      // Propriedade
      document.getElementById("form-propriedade")?.addEventListener("submit", (e) => {
        e.preventDefault()
        cadastrarPropriedade()
      })

      // Quiz
      document.getElementById("quiz-anterior")?.addEventListener("click", () => {
        if (estado.quizPerguntaAtual > 0) {
          estado.quizPerguntaAtual--
          renderizarQuiz()
        }
      })

      document.getElementById("quiz-proximo")?.addEventListener("click", () => {
        if (estado.quizPerguntaAtual < perguntas.length - 1) {
          estado.quizPerguntaAtual++
          renderizarQuiz()
        } else {
          finalizarQuiz()
        }
      })

      // Dashboard
      document.getElementById("btn-sair")?.addEventListener("click", fazerLogout)
      document.getElementById("btn-nova-prop")?.addEventListener("click", () => mostrarTela("propriedade"))
      document.getElementById("btn-voltar")?.addEventListener("click", () => {
        estado.propriedadeSelecionada = null
        document.getElementById("secao-detalhes")?.classList.add("oculto")
        document.getElementById("secao-lista")?.classList.remove("oculto")
      })

      document.getElementById("btn-refazer-quiz")?.addEventListener("click", () => {
        if (estado.propriedadeSelecionada) {
          iniciarQuiz(estado.propriedadeSelecionada)
        }
      })

      document.getElementById("btn-excluir")?.addEventListener("click", () => {
        if (estado.propriedadeSelecionada && confirm("Deseja realmente excluir esta propriedade?")) {
          excluirPropriedade(estado.propriedadeSelecionada)
          estado.propriedadeSelecionada = null
          mostrarDashboard()
        }
      })

      // Abas
      document.querySelectorAll(".aba-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const aba = btn.getAttribute("data-aba")!
          document.querySelectorAll(".aba-btn").forEach(b => b.classList.remove("ativa"))
          document.querySelectorAll(".aba-conteudo").forEach(c => c.classList.remove("ativa"))
          btn.classList.add("ativa")
          document.getElementById("aba-" + aba)?.classList.add("ativa")
        })
      })

      // Verificar usuario logado
      const usuarioSalvo = getUsuarioAtual()
      if (usuarioSalvo) {
        estado.usuarioAtual = usuarioSalvo
        aposLogin()
      } else {
        mostrarTela("auth")
      }
    }

    init()
  }, [])

  return (
    <div id="app">
      {/* Tela de Login */}
      <section id="tela-auth" className="tela">
        <div className="auth-container">
          <header className="auth-header">
            <div className="logo">
              <svg className="logo-img" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" fill="#2d6a2d"/>
                <path d="M24 10c-2 4-6 8-6 14a6 6 0 0012 0c0-6-4-10-6-14z" fill="#4ade80"/>
                <path d="M20 28c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="#166534" strokeWidth="2"/>
              </svg>
              <h1>EcoRural</h1>
            </div>
            <p>Sustentabilidade para o campo brasileiro</p>
          </header>

          {/* Login */}
          <form id="form-login" className="form-card">
            <h2>Entrar</h2>
            <div className="campo">
              <label htmlFor="login-email">E-mail</label>
              <input type="email" id="login-email" placeholder="seu@email.com" required />
            </div>
            <div className="campo">
              <label htmlFor="login-senha">Senha</label>
              <input type="password" id="login-senha" placeholder="Sua senha" required />
            </div>
            <p id="login-erro" className="erro"></p>
            <button type="submit" className="btn btn-principal">Entrar</button>
            <p className="link-troca">Nao tem conta? <a href="#" id="mostrar-cadastro">Cadastre-se</a></p>
          </form>

          {/* Cadastro */}
          <form id="form-cadastro" className="form-card oculto">
            <h2>Criar Conta</h2>
            <div className="campo">
              <label htmlFor="cadastro-nome">Nome completo</label>
              <input type="text" id="cadastro-nome" placeholder="Seu nome" required />
            </div>
            <div className="campo">
              <label htmlFor="cadastro-email">E-mail</label>
              <input type="email" id="cadastro-email" placeholder="seu@email.com" required />
            </div>
            <div className="campo">
              <label htmlFor="cadastro-senha">Senha</label>
              <input type="password" id="cadastro-senha" placeholder="Minimo 6 caracteres" required />
            </div>
            <div className="campo">
              <label htmlFor="cadastro-confirmar">Confirmar senha</label>
              <input type="password" id="cadastro-confirmar" placeholder="Repita a senha" required />
            </div>
            <p id="cadastro-erro" className="erro"></p>
            <button type="submit" className="btn btn-principal">Criar conta</button>
            <p className="link-troca">Ja tem conta? <a href="#" id="mostrar-login">Entrar</a></p>
          </form>
        </div>
      </section>

      {/* Tela Nova Propriedade */}
      <section id="tela-propriedade" className="tela oculto">
        <div className="container-central">
          <header>
            <h1>Nova Propriedade</h1>
            <p>Cadastre sua propriedade rural para avaliar a sustentabilidade</p>
          </header>
          <form id="form-propriedade" className="form-card">
            <div className="campo">
              <label htmlFor="prop-nome">Nome da propriedade</label>
              <input type="text" id="prop-nome" placeholder="Ex: Fazenda Esperanca" required />
            </div>
            <div className="campo">
              <label htmlFor="prop-local">Localizacao</label>
              <input type="text" id="prop-local" placeholder="Ex: Interior de Sao Paulo" required />
            </div>
            <div className="campo-duplo">
              <div className="campo">
                <label htmlFor="prop-tamanho">Tamanho</label>
                <input type="number" id="prop-tamanho" placeholder="50" min={1} required />
              </div>
              <div className="campo">
                <label htmlFor="prop-unidade">Unidade</label>
                <select id="prop-unidade">
                  <option value="hectares">Hectares</option>
                  <option value="alqueires">Alqueires</option>
                </select>
              </div>
            </div>
            <div className="campo">
              <label htmlFor="prop-atividade">Atividade principal</label>
              <select id="prop-atividade" required>
                <option value="">Selecione...</option>
                <option value="agricultura">Agricultura</option>
                <option value="pecuaria">Pecuaria</option>
                <option value="mista">Mista</option>
                <option value="fruticultura">Fruticultura</option>
                <option value="hortifruti">Hortifruti</option>
              </select>
            </div>
            <p id="prop-erro" className="erro"></p>
            <button type="submit" className="btn btn-principal">Cadastrar e Iniciar Quiz</button>
          </form>
        </div>
      </section>

      {/* Tela do Quiz */}
      <section id="tela-quiz" className="tela oculto">
        <div className="quiz-container">
          <header className="quiz-header">
            <div className="progresso">
              <div className="barra-progresso">
                <div id="progresso-preenchido" className="barra-preenchida"></div>
              </div>
              <span id="progresso-texto">Pergunta 1 de 15</span>
            </div>
            <span id="quiz-categoria" className="tag-categoria">Gestao da Agua</span>
          </header>
          <main className="quiz-conteudo">
            <h2 id="quiz-pergunta">Pergunta do quiz</h2>
            <div id="quiz-opcoes" className="opcoes-lista"></div>
          </main>
          <footer className="quiz-footer">
            <button id="quiz-anterior" className="btn btn-secundario" disabled>Anterior</button>
            <button id="quiz-proximo" className="btn btn-principal" disabled>Proxima</button>
          </footer>
        </div>
      </section>

      {/* Tela Dashboard */}
      <section id="tela-dashboard" className="tela oculto">
        <header className="dashboard-header">
          <div className="logo-pequeno">
            <svg className="logo-img-pequena" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" fill="#2d6a2d"/>
              <path d="M24 10c-2 4-6 8-6 14a6 6 0 0012 0c0-6-4-10-6-14z" fill="#4ade80"/>
            </svg>
            <span>EcoRural</span>
          </div>
          <div className="header-direita">
            <span id="nome-usuario">Usuario</span>
            <button id="btn-sair" className="btn btn-outline btn-pequeno">Sair</button>
          </div>
        </header>

        <main className="dashboard-main">
          {/* Lista de Propriedades */}
          <section id="secao-lista" className="secao-propriedades">
            <div className="secao-header">
              <h2>Minhas Propriedades</h2>
              <button id="btn-nova-prop" className="btn btn-principal btn-pequeno">+ Nova Propriedade</button>
            </div>
            <div id="lista-propriedades" className="grid-propriedades"></div>
          </section>

          {/* Detalhes da Propriedade */}
          <section id="secao-detalhes" className="detalhes-propriedade oculto">
            <div className="detalhes-header">
              <button id="btn-voltar" className="btn btn-outline btn-pequeno">Voltar</button>
              <h2 id="nome-propriedade">Nome da Propriedade</h2>
            </div>

            {/* Indice de Sustentabilidade */}
            <article className="card-indice">
              <h3>Indice de Sustentabilidade</h3>
              <div className="gauge-container">
                <svg id="gauge" className="gauge" viewBox="0 0 200 120">
                  <defs>
                    <linearGradient id="gradiente-gauge" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'#ef4444'}}/>
                      <stop offset="50%" style={{stopColor:'#eab308'}}/>
                      <stop offset="100%" style={{stopColor:'#22c55e'}}/>
                    </linearGradient>
                  </defs>
                  <path className="gauge-fundo" d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#e5e7eb" strokeWidth={12} strokeLinecap="round"/>
                  <path id="gauge-valor" d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#gradiente-gauge)" strokeWidth={12} strokeLinecap="round" strokeDasharray={251} strokeDashoffset={251}/>
                  <text id="gauge-numero" x="100" y="85" textAnchor="middle" className="gauge-texto">0</text>
                  <text x="100" y="105" textAnchor="middle" className="gauge-label">pontos</text>
                </svg>
              </div>
              <p id="status-sustentabilidade" className="status-texto">Calculando...</p>
            </article>

            {/* Pontuacao por Categoria */}
            <article className="card-categorias">
              <h3>Pontuacao por Categoria</h3>
              <div id="lista-categorias" className="categorias-lista"></div>
            </article>

            {/* Abas */}
            <div className="abas-container">
              <nav className="abas-nav">
                <button className="aba-btn ativa" data-aba="recomendacoes">Recomendacoes</button>
                <button className="aba-btn" data-aba="simulacao">Simulacao de Futuro</button>
              </nav>
              <div id="aba-recomendacoes" className="aba-conteudo ativa">
                <div id="lista-recomendacoes" className="recomendacoes-lista"></div>
              </div>
              <div id="aba-simulacao" className="aba-conteudo">
                <p className="simulacao-intro">Veja como sua propriedade pode evoluir implementando as recomendacoes:</p>
                <div id="cards-simulacao" className="simulacao-grid"></div>
              </div>
            </div>

            {/* Acoes */}
            <div className="acoes-detalhes">
              <button id="btn-refazer-quiz" className="btn btn-secundario">Refazer Quiz</button>
              <button id="btn-excluir" className="btn btn-perigo">Excluir Propriedade</button>
            </div>
          </section>
        </main>
      </section>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: #f8faf8;
          color: #1a2e1a;
          line-height: 1.5;
        }

        .oculto { display: none !important; }

        .tela {
          min-height: 100vh;
          padding: 1rem;
        }

        /* Auth */
        .auth-container {
          max-width: 400px;
          margin: 0 auto;
          padding-top: 3rem;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .logo h1 {
          font-size: 2rem;
          color: #2d6a2d;
        }

        .logo-img, .logo-img-pequena {
          width: 48px;
          height: 48px;
        }

        .logo-img-pequena {
          width: 32px;
          height: 32px;
        }

        .auth-header p {
          color: #5a6b5a;
        }

        .form-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }

        .form-card h2 {
          margin-bottom: 1.5rem;
          color: #2d6a2d;
        }

        .campo {
          margin-bottom: 1rem;
        }

        .campo label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #1a2e1a;
        }

        .campo input, .campo select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #c8d8c8;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .campo input:focus, .campo select:focus {
          outline: none;
          border-color: #2d6a2d;
        }

        .campo-duplo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .erro {
          color: #dc2626;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          min-height: 1.25rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-principal {
          background: #2d6a2d;
          color: white;
          width: 100%;
        }

        .btn-principal:hover {
          background: #245024;
        }

        .btn-principal:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .btn-secundario {
          background: #e8efe8;
          color: #2d6a2d;
        }

        .btn-secundario:hover {
          background: #d4e4d4;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid #c8d8c8;
          color: #2d6a2d;
        }

        .btn-outline:hover {
          background: #f0f5f0;
        }

        .btn-perigo {
          background: #fee2e2;
          color: #dc2626;
        }

        .btn-perigo:hover {
          background: #fecaca;
        }

        .btn-pequeno {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .link-troca {
          text-align: center;
          margin-top: 1rem;
          color: #5a6b5a;
        }

        .link-troca a {
          color: #2d6a2d;
          text-decoration: none;
          font-weight: 500;
        }

        .link-troca a:hover {
          text-decoration: underline;
        }

        /* Container Central */
        .container-central {
          max-width: 500px;
          margin: 0 auto;
          padding-top: 2rem;
        }

        .container-central header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .container-central h1 {
          color: #2d6a2d;
          margin-bottom: 0.5rem;
        }

        .container-central header p {
          color: #5a6b5a;
        }

        /* Quiz */
        .quiz-container {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 2rem);
        }

        .quiz-header {
          margin-bottom: 2rem;
        }

        .progresso {
          margin-bottom: 1rem;
        }

        .barra-progresso {
          height: 8px;
          background: #e8efe8;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .barra-preenchida {
          height: 100%;
          background: #2d6a2d;
          transition: width 0.3s;
        }

        #progresso-texto {
          font-size: 0.875rem;
          color: #5a6b5a;
        }

        .tag-categoria {
          display: inline-block;
          background: #d4a853;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .quiz-conteudo {
          flex: 1;
        }

        #quiz-pergunta {
          font-size: 1.25rem;
          color: #1a2e1a;
          margin-bottom: 1.5rem;
        }

        .opcoes-lista {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .opcao {
          width: 100%;
          padding: 1rem;
          background: white;
          border: 2px solid #c8d8c8;
          border-radius: 0.75rem;
          text-align: left;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .opcao:hover {
          border-color: #2d6a2d;
          background: #f0f5f0;
        }

        .opcao.selecionada {
          border-color: #2d6a2d;
          background: #2d6a2d;
          color: white;
        }

        .quiz-footer {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 2rem;
        }

        .quiz-footer .btn {
          flex: 1;
        }

        /* Dashboard */
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: white;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .logo-pequeno {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #2d6a2d;
        }

        .header-direita {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        #nome-usuario {
          color: #5a6b5a;
        }

        .dashboard-main {
          max-width: 800px;
          margin: 0 auto;
        }

        .secao-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .secao-header h2 {
          color: #2d6a2d;
        }

        .grid-propriedades {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }

        .card-propriedade {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .card-propriedade:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .card-propriedade h3 {
          color: #2d6a2d;
          margin-bottom: 0.5rem;
        }

        .prop-local, .prop-tamanho {
          color: #5a6b5a;
          font-size: 0.875rem;
        }

        .prop-indice {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          margin-top: 1rem;
        }

        .indice-valor {
          font-size: 2rem;
          font-weight: 700;
        }

        .indice-label {
          color: #5a6b5a;
          font-size: 0.875rem;
        }

        .indice-bom { color: #22c55e; }
        .indice-medio { color: #eab308; }
        .indice-ruim { color: #ef4444; }

        .prop-pendente {
          color: #d4a853;
          font-style: italic;
          margin-top: 1rem;
        }

        .sem-propriedades {
          text-align: center;
          color: #5a6b5a;
          padding: 3rem;
          background: white;
          border-radius: 1rem;
        }

        /* Detalhes */
        .detalhes-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .detalhes-header h2 {
          color: #2d6a2d;
        }

        .card-indice, .card-categorias {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .card-indice h3, .card-categorias h3 {
          color: #2d6a2d;
          margin-bottom: 1rem;
        }

        .gauge-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .gauge {
          width: 200px;
          height: 120px;
        }

        .gauge-texto {
          font-size: 36px;
          font-weight: 700;
          fill: #1a2e1a;
        }

        .gauge-label {
          font-size: 12px;
          fill: #5a6b5a;
        }

        .status-texto {
          text-align: center;
          font-weight: 500;
        }

        .status-bom { color: #22c55e; }
        .status-medio { color: #eab308; }
        .status-ruim { color: #ef4444; }

        .categorias-lista {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .categoria-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .categoria-info {
          display: flex;
          justify-content: space-between;
        }

        .categoria-nome {
          font-weight: 500;
        }

        .categoria-valor {
          font-weight: 600;
        }

        .categoria-barra {
          height: 8px;
          background: #e8efe8;
          border-radius: 4px;
          overflow: hidden;
        }

        .categoria-preenchido {
          height: 100%;
          transition: width 0.3s;
        }

        .categoria-preenchido.indice-bom { background: #22c55e; }
        .categoria-preenchido.indice-medio { background: #eab308; }
        .categoria-preenchido.indice-ruim { background: #ef4444; }

        /* Abas */
        .abas-container {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .abas-nav {
          display: flex;
          border-bottom: 2px solid #e8efe8;
        }

        .aba-btn {
          flex: 1;
          padding: 1rem;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: #5a6b5a;
          cursor: pointer;
          transition: all 0.2s;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
        }

        .aba-btn:hover {
          color: #2d6a2d;
        }

        .aba-btn.ativa {
          color: #2d6a2d;
          border-bottom-color: #2d6a2d;
        }

        .aba-conteudo {
          display: none;
          padding: 1.5rem;
        }

        .aba-conteudo.ativa {
          display: block;
        }

        .recomendacoes-lista {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-recomendacao {
          padding: 1rem;
          background: #f8faf8;
          border-radius: 0.75rem;
          border: 1px solid #e8efe8;
        }

        .rec-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .rec-categoria {
          font-size: 0.75rem;
          color: #5a6b5a;
          text-transform: uppercase;
        }

        .rec-impacto {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }

        .impacto-alto {
          background: #dcfce7;
          color: #166534;
        }

        .card-recomendacao h4 {
          color: #2d6a2d;
          margin-bottom: 0.5rem;
        }

        .card-recomendacao p {
          color: #5a6b5a;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .rec-detalhes {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #5a6b5a;
        }

        .sem-recomendacoes {
          text-align: center;
          color: #22c55e;
          padding: 2rem;
        }

        .simulacao-intro {
          color: #5a6b5a;
          margin-bottom: 1rem;
        }

        .simulacao-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .card-simulacao {
          background: #f8faf8;
          padding: 1rem;
          border-radius: 0.75rem;
          text-align: center;
          border: 1px solid #e8efe8;
        }

        .card-simulacao h4 {
          color: #5a6b5a;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .sim-indice {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .card-simulacao p {
          font-size: 0.75rem;
          color: #5a6b5a;
          margin-bottom: 0.5rem;
        }

        .sim-aumento {
          font-size: 0.75rem;
          color: #22c55e;
          font-weight: 500;
        }

        .acoes-detalhes {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .simulacao-grid {
            grid-template-columns: 1fr;
          }

          .acoes-detalhes {
            flex-direction: column;
          }

          .header-direita {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
