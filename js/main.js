import { initNavigation } from "./modules/navigation.js";
import { initProjectFilters } from "./modules/projects.js";
import { initModal } from "./modules/modal.js";

if (!window.__ALGOR_BOOTED__) {
  window.__ALGOR_BOOTED__ = true;
  initNavigation();
  initProjectFilters();
  initModal();
}
