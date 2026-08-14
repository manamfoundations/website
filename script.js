document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector("#nav");

  if (!menu || !nav) return;

  menu.addEventListener("click", function (event) {
    event.stopPropagation();

    const open = nav.classList.toggle("open");

    menu.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open menu");
    });
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !menu.contains(event.target)) {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open menu");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 950) {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open menu");
    }
  });
});
