document.addEventListener("DOMContentLoaded", function () {

  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector("#nav");

  if (!menu || !nav) {
    return;
  }

  // Open / close mobile menu
  menu.addEventListener("click", function () {

    const isOpen = nav.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menu.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });

  // Close menu when a navigation link is clicked
  nav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      nav.classList.remove("open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

      menu.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {

    if (
      !nav.contains(event.target) &&
      !menu.contains(event.target)
    ) {

      nav.classList.remove("open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

      menu.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    }

  });

  // Close mobile menu when resizing to desktop
  window.addEventListener("resize", function () {

    if (window.innerWidth > 950) {

      nav.classList.remove("open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

});
