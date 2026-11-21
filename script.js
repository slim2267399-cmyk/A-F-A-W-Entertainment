
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const searchPanel = document.getElementById("searchPanel");
const searchToggle = document.getElementById("searchToggle");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

if (searchToggle && searchPanel) {
  searchToggle.addEventListener("click", () => {
    searchPanel.classList.add("show");
    searchInput?.focus();
  });
}

if (closeSearch && searchPanel) {
  closeSearch.addEventListener("click", () => {
    searchPanel.classList.remove("show");
  });
}

const toast = document.getElementById("toast");

function notify(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

document.getElementById("watchBtn")?.addEventListener("click", () => {
  notify("Your licensed video content will appear here.");
});

document.getElementById("infoBtn")?.addEventListener("click", () => {
  notify("Welcome to A-F-A-W Entertainment!");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
  });
});

searchInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = searchInput.value.trim();

    notify(query ? `Searching: ${query}` : "Enter a title to search.");
    searchPanel?.classList.remove("show");
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch((error) => console.error("PWA setup:", error));
  });
}
