/**
 * Bundle de fallback automático para quando `index.html` é aberto diretamente
 * via protocolo `file://` (onde `<script type="module">` é bloqueado por CORS).
 * Em servidores HTTP/HTTPS, `js/main.js` define `window.__ALGOR_BOOTED__ = true`
 * e este arquivo não executa nada em duplicidade.
 */
(function () {
  if (window.__ALGOR_BOOTED__) return;
  window.__ALGOR_BOOTED__ = true;

  const STATUS_LABELS = {
    live: "Em produção",
    dev: "Em desenvolvimento",
    concept: "Conceito",
  };

  const projects = [
    {
      id: "pyexplorer",
      name: "PyExplorer",
      category: "EduTech · Gamificação · WebAssembly",
      status: "live",
      tagline: "Aprenda Python jogando",
      url: "https://pyexplorer.com.br",
      urlLabel: "Acessar pyexplorer.com.br",
      cover: "assets/images/pyexplorer-cover.webp",
      coverAlt:
        "Arte de divulgação do PyExplorer com a mascote cobra exploradora e o texto Aprenda Python Jogando",
      icon: "assets/icons/pyexplorer.svg",
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
      cover: "assets/images/logickids-cover.webp",
      coverAlt: "Arte de divulgação do LogicKids com a mascote coruja de óculos e fones de ouvido",
      icon: "assets/images/logickids-icon.webp",
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
      cover: "assets/images/family-finance-cover.webp",
      coverAlt:
        "Ilustração de painéis financeiros com gráficos e três conselheiros virtuais de inteligência artificial",
      icon: "assets/icons/family-finance.svg",
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

  // 1. Navegação
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("primary-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (header && nav && toggle) {
    const sentinel = document.getElementById("top-sentinel");
    if (sentinel && "IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        header.dataset.scrolled = String(!entry.isIntersecting);
      }).observe(sentinel);
    }

    const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
    const setMenu = (open) => {
      const next = Boolean(open);
      nav.dataset.open = String(next);
      header.dataset.menuOpen = String(next);
      toggle.setAttribute("aria-expanded", String(next));
      toggle.setAttribute("aria-label", next ? "Fechar menu" : "Abrir menu");
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setMenu(!isOpen());
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("pointerdown", (event) => {
      if (!isOpen()) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });

    const desktopMedia = window.matchMedia("(min-width: 60.0625rem)");
    if (typeof desktopMedia.addEventListener === "function") {
      desktopMedia.addEventListener("change", (event) => {
        if (event.matches && isOpen()) setMenu(false);
      });
    }

    if ("IntersectionObserver" in window) {
      const links = [...nav.querySelectorAll('.nav__link[href^="#"]')];
      const hero = document.getElementById("inicio");
      const sections = [
        ...(hero ? [hero] : []),
        ...links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean),
      ];
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            for (const link of links) {
              const active = link.getAttribute("href") === `#${entry.target.id}`;
              if (active) link.setAttribute("aria-current", "true");
              else link.removeAttribute("aria-current");
            }
          }
        },
        { rootMargin: "-35% 0px -55% 0px" },
      );
      sections.forEach((section) => observer.observe(section));
    }
  }

  // 2. Filtros de projetos
  const toolbar = document.querySelector("[data-filters]");
  const cards = [...document.querySelectorAll("[data-project]")];
  if (toolbar && cards.length > 0) {
    const buttons = [...toolbar.querySelectorAll("[data-filter]")];
    const status = document.getElementById("projects-status");
    const empty = document.getElementById("projects-empty");

    const applyFilter = (filter) => {
      let visible = 0;
      for (const card of cards) {
        const tags = card.dataset.tags.split(" ");
        const show = filter === "todos" || tags.includes(filter);
        card.hidden = !show;
        if (show) visible += 1;
      }
      for (const button of buttons) {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
      }
      if (empty) empty.hidden = visible > 0;
      if (status) {
        status.textContent =
          visible === 0
            ? "Nenhum projeto nesta categoria no momento."
            : `${visible} ${visible === 1 ? "projeto exibido" : "projetos exibidos"}`;
      }
    };

    toolbar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) applyFilter(button.dataset.filter);
    });
  }

  // 3. Modal de projetos
  const dialog = document.getElementById("project-dialog");
  if (dialog && typeof dialog.showModal === "function") {
    const byId = new Map(projects.map((p) => [p.id, p]));
    const fillList = (container, items, renderItem) => {
      container.replaceChildren(...items.map(renderItem));
    };

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const isOutside = (event) => {
        const rect = dialog.getBoundingClientRect();
        return (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        );
      };
      let pressedOutside = false;
      dialog.addEventListener("pointerdown", (event) => {
        pressedOutside = isOutside(event);
      });
      dialog.addEventListener("pointerup", (event) => {
        if (pressedOutside && isOutside(event)) dialog.close();
      });
    }

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-open-project]");
      if (!trigger) return;
      const project = byId.get(trigger.dataset.openProject);
      if (!project) return;

      const slot = (name) => dialog.querySelector(`[data-slot="${name}"]`);
      const cover = slot("cover");
      cover.src = project.cover;
      cover.alt = project.coverAlt;
      const icon = slot("icon");
      icon.src = project.icon;
      icon.alt = `Logomarca do ${project.name}`;

      slot("name").textContent = project.name;
      slot("tagline").textContent = `${project.category} — ${project.tagline}`;
      slot("description").textContent = project.description;

      const statusEl = slot("status");
      statusEl.textContent = STATUS_LABELS[project.status];
      statusEl.className = `badge badge--${project.status}`;

      fillList(slot("metrics"), project.metrics, ({ value, label }) => {
        const item = document.createElement("li");
        item.className = "metric";
        const strong = document.createElement("strong");
        strong.className = "metric__value";
        strong.textContent = value;
        const span = document.createElement("span");
        span.className = "metric__label";
        span.textContent = label;
        item.append(strong, span);
        return item;
      });

      const checkTemplate = document.getElementById("tpl-check");
      fillList(slot("highlights"), project.highlights, (text) => {
        const item = document.createElement("li");
        item.append(checkTemplate.content.cloneNode(true), document.createTextNode(text));
        return item;
      });

      fillList(slot("stack"), project.stack, (tech) => {
        const item = document.createElement("li");
        item.className = "chip";
        item.textContent = tech;
        return item;
      });

      const link = slot("link");
      const note = slot("note");
      if (project.url) {
        link.href = project.url;
        link.querySelector("span").textContent = project.urlLabel;
        link.hidden = false;
        note.hidden = true;
      } else {
        link.hidden = true;
        note.hidden = false;
      }

      dialog.querySelector(".project-dialog__scroll").scrollTop = 0;
      dialog.showModal();
    });
  }
})();

