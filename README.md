# EcoRural - Sustentabilidade Rural

## Sobre o Projeto

O **EcoRural** e uma aplicacao web que ajuda produtores rurais a avaliar e melhorar a sustentabilidade de suas propriedades. Atraves de um quiz interativo, o sistema calcula um indice de sustentabilidade e fornece recomendacoes personalizadas para cada propriedade.

## Objetivo

Permitir que produtores rurais brasileiros:
- Avaliem o nivel de sustentabilidade de suas propriedades
- Identifiquem areas que precisam de melhorias
- Recebam recomendacoes praticas e personalizadas
- Visualizem projecoes de melhoria ao longo do tempo

## Funcionalidades

- **Sistema de Cadastro e Login**: Autenticacao local com armazenamento seguro no navegador
- **Cadastro de Multiplas Propriedades**: Gerencie varias propriedades rurais em uma unica conta
- **Quiz de Sustentabilidade**: 15 perguntas em 5 categorias (agua, solo, biodiversidade, energia, praticas agricolas)
- **Indice de Sustentabilidade**: Pontuacao de 0 a 100 com visualizacao em gauge colorido
- **Recomendacoes Personalizadas**: Sugestoes baseadas nas areas mais fracas
- **Simulacao de Futuro**: Projecoes de 1, 3 e 5 anos ao implementar melhorias

## Tecnologias Utilizadas

- **HTML5**: Estrutura semantica da aplicacao
- **CSS3**: Estilizacao responsiva e moderna
- **JavaScript (Vanilla)**: Logica da aplicacao, sem frameworks ou bibliotecas externas

## Estrutura do Projeto

```
/
├── index.html    # Estrutura HTML da aplicacao
├── style.css     # Estilos CSS
├── script.js     # Logica JavaScript
└── README.md     # Documentacao
```

## Como Executar

1. Baixe ou clone os arquivos do projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Pronto! Nao e necessario servidor, instalacao ou configuracao adicional

### Hospedagem

O projeto e compativel com hospedagem estatica:
- **GitHub Pages**: Faca upload dos arquivos para um repositorio e ative o GitHub Pages
- **Vercel**: Arraste e solte a pasta do projeto no Vercel
- **Netlify**: Similar ao Vercel, suporta deploy por arrastar e soltar
- **Qualquer servidor HTTP**: Basta servir os arquivos estaticos

## Compatibilidade

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Armazenamento de Dados

Todos os dados sao armazenados localmente no navegador do usuario atraves do `localStorage`. Nenhum dado e enviado para servidores externos, garantindo privacidade total.

## Licenca

Projeto desenvolvido para fins educacionais.
