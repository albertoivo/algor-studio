/**
 * Filtros da vitrine de projetos.
 * Os cards já existem no HTML estático; aqui apenas alternamos a visibilidade
 * (atributo `hidden`) com base em `data-tags` e anunciamos o resultado
 * para leitores de tela.
 */

export function initProjectFilters() {
  const toolbar = document.querySelector("[data-filters]");
  const cards = [...document.querySelectorAll("[data-project]")];
  if (!toolbar || cards.length === 0) return;

  const buttons = [...toolbar.querySelectorAll("[data-filter]")];
  const status = document.getElementById("projects-status");
  const empty = document.getElementById("projects-empty");

  // ⚡ Bolt: Cache parsed tags and DOM references to avoid string splitting
  // and object creation on every filter interaction.
  const cachedCards = cards.map(card => ({
    el: card,
    tags: card.dataset.tags.split(" ")
  }));

  const applyFilter = (filter) => {
    let visible = 0;

    for (const card of cachedCards) {
      const show = filter === "todos" || card.tags.includes(filter);

      // ⚡ Bolt: DOM write guard - only update the DOM if the state changed
      // to prevent unnecessary layout thrashing.
      const hide = !show;
      if (card.el.hidden !== hide) {
          card.el.hidden = hide;
      }

      if (show) visible += 1;
    }

    for (const button of buttons) {
      const isPressed = button.dataset.filter === filter;
      if (button.getAttribute("aria-pressed") !== String(isPressed)) {
          button.setAttribute("aria-pressed", String(isPressed));
      }
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
