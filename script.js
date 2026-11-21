const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");
const modal = document.getElementById("movieModal");

const modalSymbol = document.getElementById("modalSymbol");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");

function openModal(title, type, symbol) {
  modalTitle.textContent = title;
  modalType.textContent = type;
  modalSymbol.textContent = symbol || "🎬";
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Movie card click
movieCards.forEach(card => {
  card.addEventListener("click", () => {
    openModal(
      card.dataset.title,
      card.dataset.type,
      card.dataset.symbol
    );
  });
});

// Search movies
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  movieCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const type = card.dataset.type.toLowerCase();

    card.style.display =
      title.includes(query) || type.includes(query)
        ? ""
        : "none";
  });
});

// More Info
document.getElementById("infoButton").addEventListener("click", () => {
  openModal(
    "AFAW Entertainment",
    "Your Entertainment World",
    "♛"
  );
});

// Watch Now
document.getElementById("watchButton").addEventListener("click", () => {
  openModal(
    "Coming Soon",
    "The secure video player will be connected after backend and authorized video content setup.",
    "▶"
  );
});

// Profile
document.getElementById("profileButton").addEventListener("click", () => {
  openModal(
    "Your Account",
    "Login, profile and subscription features will be connected with the secure account system.",
    "👤"
  );
});

// Close modal
document.getElementById("closeModal").addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

// Sidebar navigation active state
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Close mobile menu after choosing a category
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
});

// Explore button
document.getElementById("exploreButton").addEventListener("click", () => {
  document.getElementById("movies").scrollIntoView({
    behavior: "smooth"
  });
});

// Mobile navigation active style
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".mobile-nav a").forEach(item => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Modal watch button
document.getElementById("modalWatch").addEventListener("click", () => {
  closeModal();
  openModal(
    "Player Setup Pending",
    "Video playback will be enabled after the secure video system is connected.",
    "▶"
  );
});
