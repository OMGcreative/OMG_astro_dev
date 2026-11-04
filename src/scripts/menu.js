/**
 * Mobile menu toggle logic
 */
export const initMenu = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const body = document.querySelector("body");

  if (!menuToggle || !nav || !body) return;

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", (!isExpanded).toString());
    nav.classList.toggle("is-open");
    body.classList.toggle("nav-open");
    document.body.style.overflow = isExpanded ? "" : "hidden";
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      body.classList.remove("nav-open");
      document.body.style.overflow = "";
    }
  });

  // Optional: Close menu on nav link click (useful for anchors on same page)
  const navLinks = nav.querySelectorAll(".nav__link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      body.classList.remove("nav-open");
      document.body.style.overflow = "";
    });
  });
};

// Auto-initialize
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
}
