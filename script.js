// ✅ Mobile Menu Toggle Function
function toggleMenu() {
  const menu = document.querySelector(".nav-links"); // Target .nav-links
  const icon = document.querySelector(".menu-toggle"); // Target .menu-toggle

  if (menu && icon) { // ✅ Ensure elements exist before applying changes
    const isOpen = menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Update ARIA attributes for accessibility
    menu.setAttribute("aria-expanded", isOpen);
    menu.setAttribute("aria-hidden", !isOpen);
  }
}

// ✅ Close menu if user clicks outside
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".nav-links");
  const icon = document.querySelector(".menu-toggle");

  if (menu.classList.contains("open") && 
      !menu.contains(event.target) && 
      !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");

    // Update ARIA attributes
    menu.setAttribute("aria-expanded", false);
    menu.setAttribute("aria-hidden", true);
  }
});

// ✅ Close menu on Escape key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const menu = document.querySelector(".nav-links");
    const icon = document.querySelector(".menu-toggle");

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");

      // Update ARIA attributes
      menu.setAttribute("aria-expanded", false);
      menu.setAttribute("aria-hidden", true);
    }
  }
});