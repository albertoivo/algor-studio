# ALGOR STUDIO — Guia de Desenvolvimento & Arquitetura

> **Documento Oficial de Diretrizes, Arquitetura e Engenharia**  
> *Versão:* 1.0.0  
> *Data:* Outubro de 2026  
> *Projeto:* Landing Page Institucional da ALGOR STUDIO  

---

## 1. Visão Geral da Empresa

A **ALGOR STUDIO** é uma empresa independente de tecnologia e estúdio de desenvolvimento de software geral (sem restrição a um único nicho). O foco é conceber, arquitetar e construir produtos digitais elegantes, escaláveis e de alta performance — desde soluções educativas e gamificadas até sistemas de finanças avançados e inteligência artificial aplicada.

### Pilares Institucionais
* **Excelência Técnica:** Código limpo, robusto e arquiteturas preparadas para escala.
* **Design de Alto Padrão:** Interfaces modernas, limpas, funcionais e com micro-interações que encantam o usuário.
* **Foco em Resultados Reais:** Software concebido para resolver problemas práticos e gerar valor tangível.
* **Inovação Contínua:** Exploração ativa de novas tecnologias (WebAssembly, IA Generativa, Web Standards modernos).

---

## 2. Decisões Técnicas de Arquitetura

A landing page foi concebida para atingir a **pontuação máxima no Google Lighthouse (100/100 em Performance, Acessibilidade, Melhores Práticas e SEO)** com tempo de carregamento praticamente instantâneo (< 500ms).

### Stack Tecnológica
* **Estrutura:** HTML5 Semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`).
* **Estilo:** CSS Puro Moderno (Vanilla CSS) com:
  * Variáveis de Design (CSS Custom Properties).
  * Layout com CSS Grid e Flexbox.
  * Tipografia fluida com `clamp()`.
  * Sombras multicamadas suaves e bordas translúcidas (estilo Stripe / Linear).
  * Animações leves e micro-interações via transições CSS aceleradas por GPU (`transform`, `opacity`).
* **Comportamento:** Vanilla JavaScript (ES6+ modular, sem frameworks pesados nem dependências de terceiros no bundle principal).
* **Modais Nativos:** Uso do elemento nativo `<dialog>` do HTML5 para modais de detalhes de projetos, garantindo acessibilidade nativa, foco correto e fechamento via tecla `Escape`.

---

## 3. Direção Estética e Visual: *Clean Modern / Light Tech*

Inspirada nas referências mundiais de design contemporâneo (Stripe, Linear, Apple, Vercel Light):

* **Fundo:** Off-white sofisticado (`#F8FAFC` a `#FFFFFF`), transmitindo claridade, organização e profissionalismo.
* **Superfícies & Cards:** Branco puro (`#FFFFFF`) com bordas sutis (`rgba(15, 23, 42, 0.08)`), efeito suave de elevação (`box-shadow` difusa) e cantos arredondados modernos (`12px` a `16px`).
* **Tipografia:**
  * Fonte Primária: `Plus Jakarta Sans` ou `Inter` (Google Fonts, com fallback limpo para `system-ui`).
  * Hierarquia tipográfica rígida: `h1` expressivo com peso 700/800, subtítulos equilibrados e corpo de texto com excelente legibilidade (linha 1.6).
* **Paleta de Cores e Acentos:**
  * **Brand Primary:** Azul Real Profundo (`#2563EB` / `#1D4ED8`) — transmite confiança, tecnologia e precisão.
  * **Brand Accent:** Toques sutis de Índigo/Violeta (`#4F46E5` / `#6366F1`) para gradientes discretos em destaques e botões de conversão.
  * **Textos:** Títulos em `#0F172A` (Slate 900), corpo em `#334155` (Slate 700), legendas e metadados em `#64748B` (Slate 500).
  * **Status Badges:** Cores semânticas suaves (Verde Esmeralda para "Produção/Ativo", Azul Índigo para "Em Desenvolvimento", Âmbar para "Conceito/P&D").

---

## 4. Estado da Arte em SEO, Performance e Acessibilidade

Para garantir autoridade máxima nos motores de busca e indexação impecável:

### 4.1. Metatags e Open Graph
* Tags de título ricas com padrão: `ALGOR STUDIO | Estúdio de Engenharia de Software e Produtos Digitais`.
* Meta description descritiva, atrativa e contendo termos-chave naturais.
* Open Graph completo (`og:title`, `og:description`, `og:image`, `og:url`, `og:type="website"`).
* Twitter Card (`summary_large_image`).
* Favicons modernos em múltiplos formatos (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`).

### 4.2. Dados Estruturados Schema.org (JSON-LD)
* **Organization:**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ALGOR STUDIO",
    "url": "https://algorstudio.com.br",
    "logo": "https://algorstudio.com.br/assets/images/logo.png",
    "description": "Estúdio independente de engenharia de software e desenvolvimento de soluções digitais inovadoras.",
    "sameAs": [
      "https://github.com/albertoivo"
    ]
  }
  ```
* **SoftwareApplication:** Marcação estruturada individual para os projetos (PyExplorer, LogicKids, Family-Finance), facilitando ricos resultados no Google (Rich Snippets).

### 4.3. Performance & Core Web Vitals
* Pré-conexão de fontes com `preconnect` e `font-display: swap`.
* Imagens otimizadas (formato WebP/AVIF com dimensões explícitas `width` e `height` para evitar CLS).
* Ícones vetoriais em SVG inline otimizado.
* Zero bloqueio de renderização no carregamento inicial.

### 4.4. Acessibilidade (WCAG 2.1 AA)
* Contraste de cores rigorosamente superior a 4.5:1 em todos os elementos de texto.
* Estrutura de cabeçalhos semântica (`<h1>` único, seguido de `<h2>` e `<h3>`).
* Atributos `aria-label`, `aria-expanded` e suporte integral à navegação por teclado (`Tab`, `Shift+Tab`, `Esc`, `Enter`).

---

## 5. Portfólio de Projetos da ALGOR STUDIO

A vitrine de projetos da landing page é o coração da ALGOR STUDIO, dividida entre **Projetos Atuais** e o **Pipeline de Inovação (Futuros)**:

### 5.1. Projetos Atuais em Destaque

#### 1. PyExplorer
* **Categoria:** EduTech / Gamificação / WebAssembly
* **Status:** `Ativo / Em Produção`
* **URL:** [pyexplorer.com.br](https://pyexplorer.com.br)
* **Resumo:** Jogo educativo inovador para ensinar programação Python de forma gamificada e envolvente para crianças e adolescentes (8 a 15 anos).
* **Diferenciais Técnicos:** Execução de código Python real diretamente no navegador via WebAssembly (Pyodide), desafios visuais com Turtle Graphics, 4 Sagas Épicas com 18 Mundos, desafios interativos de código, boss battles, emissão de certificados e funcionamento offline como PWA.
* **Stack:** React 19, TypeScript, Pyodide (WASM), Monaco Editor, Firebase, Tailwind CSS.

#### 2. LogicKids
* **Categoria:** EduTech / Escolas (B2B) / Raciocínio Lógico
* **Status:** `Em Desenvolvimento Avançado`
* **Resumo:** Plataforma gamificada de ensino de programação em blocos e pensamento computacional voltada para escolas, professores e turmas escolares.
* **Diferenciais Técnicos:** Ambientes personalizados para alunos e professores, integração com Google Blockly para blocos visuais, arquitetura monorepo robusta com microsserviços.
* **Stack:** Next.js 16 (React 19), FastAPI (Python 3.11), PostgreSQL, SQLAlchemy, Docker, Blockly, Tailwind CSS.

#### 3. Family-Finance
* **Categoria:** FinTech / Inteligência Artificial / Gestão Patrimonial
* **Status:** `Em Desenvolvimento`
* **Resumo:** Sistema avançado de gestão financeira e patrimonial familiar que transforma dados em decisões estratégicas por meio de IA consultiva.
* **Diferenciais Técnicos:** "Conselho de Família IA" (Virtual Family Board) com conselheiros virtuais especializados (O Estrategista de Risco, O Otimizador de Dividendos, O Caçador de Oportunidades via Gemini AI), dashboards interativos, controle de patrimônio global e planejamento financeiro multi-usuário.
* **Stack:** React 19, TypeScript, Vite, Google Gemini API (@google/genai), Firebase, Recharts, Framer Motion, Tailwind CSS.

### 5.2. Projetos Futuros e Pesquisa & Desenvolvimento (P&D)
* **Algor Labs / Incubadora:** Espaço dedicado a expor novas ideias e frentes de exploração da empresa (ferramentas para desenvolvedores, automação inteligente, IA aplicada).
* **Card Interativo de Futuro:** Espaço "O que estamos construindo a seguir" com tags de conceito e canal para early-access ou sugestões de novos produtos.

---

## 6. Estrutura de Seções da Landing Page (Single-Page)

1. **Header & Navegação Fixa:**
   * Logo da ALGOR STUDIO com tipografia marcante.
   * Links de âncora: `#sobre`, `#projetos`, `#metodologia`, `#contato`.
   * Botão de Ação Rápida (CTA): "Explorar Projetos" ou "Fale Conosco".
2. **Hero Section:**
   * Tag institucional: `Engenharia de Software & Produtos Digitais`.
   * Título de Alto Impacto: Apresentando o estúdio como criador de produtos tecnológicos robustos e modernos.
   * Subtítulo claro reforçando o propósito geral de criar softwares sem restrição de nicho.
   * CTAs duplos: Primário ("Ver Projetos") e Secundário ("Entrar em Contato").
   * Indicador visual / mockup conceitual minimalista.
3. **Manifesto / Sobre a ALGOR STUDIO:**
   * Declaração de visão e valores da empresa.
   * 3 a 4 pilares em cartões limpos: Engenharia Sólida, Design Intuitivo, Foco no Usuário, Soluções de Ponta a Ponta.
4. **Showcase de Projetos (Vitrine Central):**
   * Filtros dinâmicos rápidos por tag: `Todos`, `Educação`, `Finanças & IA`, `Em Produção`, `Em Desenvolvimento`.
   * Cards modernos com:
     * Badge de status (`Ativo`, `Em Desenvolvimento`, `Conceito`).
     * Título do projeto e categoria.
     * Descrição concisa e direta.
     * Badges com tecnologias utilizadas.
     * Botão interativo "Ver Detalhes" (dispara modal acessível com métricas, galeria/visual e link direto).
5. **Radar de Futuro & P&D (Pipeline):**
   * Apresentação das iniciativas e novas teses de software que a ALGOR STUDIO está explorando.
6. **Canais de Contato & Conversão:**
   * Cards de conexão direta e ágil:
     * WhatsApp Comercial / Institucional.
     * E-mail Profissional.
     * GitHub da organização / fundador.
     * LinkedIn.
7. **Footer:**
   * Copyright, declaração de independência, links rápidos e termos de privacidade institucionais.

---

## 7. Estrutura de Diretórios Recomendada

```text
algor-studio/
├── index.html               # Página única completa com semântica rica e SEO
├── robots.txt               # Configurações de indexação para buscadores
├── sitemap.xml              # Mapa do site para motores de busca
├── GEMINI.md                # Diretrizes oficiais do projeto (este arquivo)
├── AGENTS.md                # Instruções e regras para agentes e assistentes de código
├── css/
│   ├── variables.css        # Cores (Light mode), espaçamentos, sombras, fontes
│   ├── base.css             # Reset moderno, estilos globais, tipografia base
│   ├── components.css       # Botões, badges, cards, modais dialog, navbar
│   └── sections.css         # Estilização de cada seção (hero, sobre, projetos, contato)
├── js/
│   ├── main.js              # Ponto de entrada, orquestração e inicialização
│   ├── data/
│   │   └── projects.js      # Catálogo estruturado em JSON/JS dos projetos (atuais e futuros)
│   └── modules/
│       ├── navigation.js    # Header com scroll observer, menu mobile, scroll suave
│       ├── projects.js      # Renderização dinâmica dos cards e filtros
│       └── modal.js         # Controle acessível do modal de detalhes com <dialog>
└── assets/
    ├── icons/               # SVGs inline ou arquivos individuais (GitHub, WhatsApp, etc.)
    └── images/              # Imagens dos projetos, logo, og-image para redes sociais
```

---

## 8. Convenções de Código e Boas Práticas

1. **HTML:**
   * Nunca use `div` quando existir uma tag semântica apropriada (`<section>`, `<article>`, `<header>`, `<footer>`, `<figure>`, `<figcaption>`).
   * Todos os links externos com `target="_blank"` devem conter `rel="noopener noreferrer"`.
   * Imagens devem sempre especificar `alt`, `width`, `height` e `loading="lazy"`.
2. **CSS:**
   * Nenhuma regra `!important` a menos que seja estritamente indispensável em utilitários de acessibilidade.
   * Utilize `rem` para tipografia e espaçamentos, garantindo respeito às preferências de zoom do usuário.
   * Organize seletores com nomenclatura descritiva (padrão semântico legível).
3. **JavaScript:**
   * Utilize JavaScript moderno padrão ES Modules (`<script type="module" src="...">`).
   * Mantenha o DOM desacoplado dos dados: os projetos ficam centralizados em `data/projects.js` para facilitar a adição de novos projetos futuros com zero esforço.
