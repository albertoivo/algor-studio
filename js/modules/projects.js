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
