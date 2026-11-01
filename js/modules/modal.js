/**
 * Modal de detalhes dos projetos.
 *
 * Usa o <dialog> nativo (showModal): o navegador já fornece foco contido,
 * inertização da página, camada superior, fechamento por Esc e devolução do
 * foco ao botão que abriu o modal. Aqui apenas preenchemos o conteúdo e
 * adicionamos o fechamento ao clicar fora (fallback para navegadores sem
 * suporte a `closedby="any"`, como o Safari).
 */

import { projects, STATUS_LABELS } from "../data/projects.js";

const byId = new Map(projects.map((project) => [project.id, project]));

function fillList(container, items, renderItem) {
  container.replaceChildren(...items.map(renderItem));
}

function renderProject(dialog, project) {
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

  const status = slot("status");
  status.textContent = STATUS_LABELS[project.status];
  status.className = `badge badge--${project.status}`;

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
}

/** Fecha ao clicar/tocar fora do <dialog> quando o navegador não suporta `closedby`. */
function enableLightDismissFallback(dialog) {
  if ("closedBy" in HTMLDialogElement.prototype) return;

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
  dialog.addEventListener(
    "pointerdown",
    (event) => {
      pressedOutside = isOutside(event);
    },
    { passive: true },
  );
  dialog.addEventListener("pointerup", (event) => {
    if (pressedOutside && isOutside(event)) dialog.close();
  });
}

export function initModal() {
  const dialog = document.getElementById("project-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;

  enableLightDismissFallback(dialog);

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-project]");
    if (!trigger) return;

    const project = byId.get(trigger.dataset.openProject);
    if (!project) return;

    renderProject(dialog, project);
    dialog.querySelector(".project-dialog__scroll").scrollTop = 0;
    dialog.showModal();
  });
}
