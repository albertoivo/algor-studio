/**
 * Navegação: estado do header ao rolar, menu mobile e link ativo por seção.
 */

export function initNavigation() {
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("primary-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !nav || !toggle) return;

  // Header ganha fundo/blur quando a página sai do topo (sentinela + IntersectionObserver)
  const sentinel = document.getElementById("top-sentinel");
  if (sentinel && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      header.dataset.scrolled = String(!entry.isIntersecting);
    }).observe(sentinel);
  }

  // Menu mobile
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

  // Fecha ao clicar/tocar fora do menu mobile
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

  // Reseta o menu mobile ao expandir para viewport desktop
  const desktopMedia = window.matchMedia("(min-width: 60.0625rem)");
  const handleViewportChange = (event) => {
    if (event.matches && isOpen()) setMenu(false);
  };
  if (typeof desktopMedia.addEventListener === "function") {
    desktopMedia.addEventListener("change", handleViewportChange);
  }

  // Link ativo conforme a seção visível
  if (!("IntersectionObserver" in window)) return;

  const links = [...nav.querySelectorAll('.nav__link[href^="#"]')];
  const hero = document.getElementById("inicio");
  const sections = [
    ...(hero ? [hero] : []),
    ...links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean),
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
