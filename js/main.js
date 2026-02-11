// ================= NAVIGASI DATA-PAGE =================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-page]").forEach(function (element) {
    element.addEventListener("click", function () {
      const page = this.dataset.page;
      if (page) {
        window.location.href = page;
      }
    });
  });
});

// ================= SIDEBAR =================
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (sidebar) sidebar.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (sidebar) sidebar.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
}
