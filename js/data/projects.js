/**
 * Catálogo oficial de projetos da ALGOR STUDIO.
 *
 * Fonte única de verdade para os detalhes exibidos no modal.
 * Os cards da vitrine são renderizados de forma estática em `index.html`
 * (SEO) e ligados a estes dados pelo campo `id` (`data-project="<id>"`).
 *
 * Ao adicionar um projeto: 1) inclua-o aqui, 2) crie o card em `index.html`,
 * 3) atualize o JSON-LD (`SoftwareApplication`) e o `sitemap.xml`.
 *
 * status: "live" | "dev" | "concept"
 */

export const STATUS_LABELS = {
  live: "Em produção",
  dev: "Em desenvolvimento",
  concept: "Conceito",
};

export const projects = [
  {
    id: "pyexplorer",
    name: "PyExplorer",
    category: "EduTech · Gamificação · WebAssembly",
    status: "live",
    tagline: "Aprenda Python jogando",
    url: "https://pyexplorer.com.br",
    urlLabel: "Acessar pyexplorer.com.br",
    cover: "./assets/images/pyexplorer-cover.webp",
    coverAlt: "Arte de divulgação do PyExplorer com a mascote cobra exploradora e o texto Aprenda Python Jogando",
    icon: "./assets/icons/pyexplorer.svg",
    description:
      "Jogo educativo que ensina programação Python de forma gamificada para crianças e adolescentes de 8 a 15 anos. O código roda de verdade no navegador, sem instalação, e a jornada é organizada em sagas e mundos temáticos.",
    metrics: [
      { value: "4", label: "Sagas épicas" },
      { value: "18", label: "Mundos" },
      { value: "8", label: "Tipos de desafio" },
    ],
    highlights: [
      "Python real executando no navegador via WebAssembly (Pyodide), sem servidor e sem instalação.",
      "Desafios visuais com Turtle Graphics para aprender lógica desenhando com código.",
      "Gamificação completa: estrelas, moedas, conquistas, streak diário, missões e loja de itens.",
      "Boss battles, problemas de Parsons (arrastar e soltar) e completamento de código.",
      "Certificado em PDF ao concluir a jornada e funcionamento offline como PWA.",
      "Modo convidado com progresso local ou conta na nuvem com ranking e sincronização.",
    ],
    stack: ["React 19", "TypeScript", "Pyodide (WASM)", "Monaco Editor", "Firebase", "PWA"],
  },
  {
    id: "logickids",
    name: "LogicKids",
    category: "EduTech · Escolas (B2B) · Raciocínio Lógico",
    status: "dev",
    tagline: "Programação divertida para crianças",
    url: "https://logickids.com.br",
    urlLabel: "Visitar logickids.com.br",
    cover: "./assets/images/logickids-cover.webp",
    coverAlt: "Arte de divulgação do LogicKids com a mascote coruja de óculos e fones de ouvido",
    icon: "./assets/images/logickids-icon.webp",
    description:
      "Plataforma gamificada de programação em blocos e pensamento computacional pensada para escolas, professores e turmas. Une uma experiência lúdica para os alunos a ferramentas de gestão para a instituição.",
    metrics: [
      { value: "3", label: "Perfis de acesso" },
      { value: "B2B", label: "Foco em escolas" },
      { value: "API", label: "Backend dedicado" },
    ],
    highlights: [
      "Ambientes distintos para alunos, professores e gestores da escola.",
      "Programação visual em blocos com Google Blockly, evoluindo para código Python no navegador.",
      "Arquitetura monorepo com API FastAPI, banco PostgreSQL e migrações versionadas.",
      "Interface moderna e responsiva com Next.js e autenticação segura via Firebase.",
      "Ambiente de desenvolvimento reproduzível com Docker Compose.",
    ],
    stack: ["Next.js 16", "React 19", "FastAPI", "PostgreSQL", "Blockly", "Docker"],
  },
  {
    id: "family-finance",
    name: "Family Finance",
    category: "FinTech · Inteligência Artificial · Gestão Patrimonial",
    status: "dev",
    tagline: "Seu patrimônio, com um conselho de família movido a IA",
    url: null,
    urlLabel: null,
    cover: "./assets/images/family-finance-cover.webp",
    coverAlt: "Ilustração de painéis financeiros com gráficos e três conselheiros virtuais de inteligência artificial",
    icon: "./assets/icons/family-finance.svg",
    description:
      "Sistema de gestão financeira e patrimonial familiar que transforma dados em decisões estratégicas. O diferencial é o Conselho de Família IA: conselheiros virtuais com visões complementares analisam o patrimônio e emitem pareceres acionáveis.",
    metrics: [
      { value: "3", label: "Conselheiros de IA" },
      { value: "Gemini", label: "Motor de IA" },
      { value: "Multi", label: "Usuários na família" },
    ],
    highlights: [
      "O Estrategista de Risco: diversificação, liquidez e adequação do perfil de risco.",
      "O Otimizador de Dividendos: fluxo de caixa, yield projetado e saúde da carteira de renda.",
      "O Caçador de Oportunidades: crescimento de longo prazo, tendências e impacto macroeconômico.",
      "Dashboards interativos de patrimônio, passivos, economia e cofres (vaults).",
      "Planejamento financeiro colaborativo com convite de membros da família.",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Gemini API", "Firebase", "Recharts"],
  },
];
