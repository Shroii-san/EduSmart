function go(page) {
  window.location.href = page;
}

document.querySelectorAll(".menu-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("sidebarOverlay").classList.remove("active");
}

const navbar = document.getElementById("landingNavbar");
const mobileMenu = document.getElementById("landingMobileMenu");

function toggleLandingMenu() {
  mobileMenu.classList.toggle("active");
}

/* Navbar transparency on scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("solid");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid");
  }
});
