import { initNavigation } from "./modules/navigation.js";
import { initProjectFilters } from "./modules/projects.js";

if (!window.__ALGOR_BOOTED__) {
  window.__ALGOR_BOOTED__ = true;
  initNavigation();
  initProjectFilters();

  let modalModulePromise = null;
  const loadModal = () => {
    if (!modalModulePromise) {
      modalModulePromise = import("./modules/modal.js").then((m) => {
        m.initModal();
        return m;
      });
    }
    return modalModulePromise;
  };

  // Carrega o modal em segundo plano quando a CPU estiver ociosa (após LCP/FCP)
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadModal);
  } else {
    setTimeout(loadModal, 1500);
  }

  // Preload antecipado no hover de qualquer botão de abrir projeto
  document.addEventListener(
    "pointerover",
    (event) => {
      if (event.target.closest("[data-open-project]")) {
        loadModal();
      }
    },
    { passive: true, once: true }
  );

  // Abertura do modal sob demanda
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-project]");
    if (trigger) {
      loadModal().then((m) => {
        if (typeof m.openProject === "function") {
          m.openProject(trigger.dataset.openProject);
        }
      });
    }
  });
}
