
document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTS
  const searchInput = document.getElementById("searchInput");
  const movieCards = document.querySelectorAll(".movie-card");
  const modal = document.getElementById("movieModal");

  const modalSymbol = document.getElementById("modalSymbol");
  const modalTitle = document.getElementById("modalTitle");
  const modalType = document.getElementById("modalType");

  const mainNav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");

  // MODAL SYSTEM
  function openModal(title, description, symbol = "🎬") {
    if (!modal) return;

    modalTitle.textContent = title;
    modalType.textContent = description;
    modalSymbol.textContent = symbol;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  // MOVIE CARD CLICK
  movieCards.forEach(card => {
    card.addEventListener("click", () => {

      const title = card.dataset.title || "Entertainment";
      const type = card.dataset.type || "Collection";
      const symbol = card.dataset.symbol || "🎬";

      openModal(
        title,
        type + " – More information and authorized playback will be available here.",
        symbol
      );

    });
  });

  // SEARCH SYSTEM
  if (searchInput) {
    searchInput.addEventListener("input", () => {

      const query = searchInput.value.toLowerCase().trim();

      movieCards.forEach(card => {

        const title = (card.dataset.title || "").toLowerCase();
        const type = (card.dataset.type || "").toLowerCase();
        const text = card.textContent.toLowerCase();

        const match =
          title.includes(query) ||
          type.includes(query) ||
          text.includes(query);

        card.style.display = match ? "" : "none";

      });

    });
  }

  // WATCH NOW BUTTON
  const watchButton = document.getElementById("watchButton");

  if (watchButton) {
    watchButton.addEventListener("click", () => {

      openModal(
        "Premium Entertainment",
        "The secure video player will be connected after backend setup and authorized video content integration.",
        "▶"
      );

    });
  }

  // MORE INFO BUTTON
  const infoButton = document.getElementById("infoButton");

  if (infoButton) {
    infoButton.addEventListener("click", () => {

      openModal(
        "A-F-A-W Entertainment",
        "Your Entertainment World. A premium destination for Movies, Series, Live TV, Anime, Kids and more.",
        "♛"
      );

    });
  }

  // PROFILE BUTTON
  const profileButton = document.getElementById("profileButton");

  if (profileButton) {
    profileButton.addEventListener("click", () => {

      openModal(
        "Your Account",
        "Login, registration, profile and subscription features will be connected with the secure account system.",
        "👤"
      );

    });
  }

  // LIVE TV BUTTON
  const liveButton = document.getElementById("liveButton");

  if (liveButton) {
    liveButton.addEventListener("click", () => {

      openModal(
        "Live TV",
        "Live channels will appear here after authorized channel integration.",
        "🔴"
      );

    });
  }

  // MY LIST BUTTON
  const myListButton = document.getElementById("myListButton");

  if (myListButton) {
    myListButton.addEventListener("click", () => {

      openModal(
        "My List",
        "Your personal favorite movies and series collection will be available after account integration.",
        "♡"
      );

    });
  }

  // MODAL CLOSE BUTTON
  const closeButton = document.getElementById("closeModal");

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // CLOSE MODAL ON BACKGROUND CLICK
  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  // ESCAPE KEY
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // MOBILE MENU
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.textContent = isOpen ? "✕" : "☰";

    });
  }

  // NAVIGATION ACTIVE STATE
  document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

      document.querySelectorAll(".nav-link").forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");

      if (mainNav) {
        mainNav.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      }

    });

  });

  // MOBILE NAVIGATION ACTIVE STATE
  document.querySelectorAll(".mobile-nav a").forEach(link => {

    link.addEventListener("click", () => {

      document.querySelectorAll(".mobile-nav a").forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");

    });

  });

  // CATEGORY NAVIGATION
  document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

      const target = card.getAttribute("href");

      if (target && target.startsWith("#")) {

        const section = document.querySelector(target);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }

    });

  });

  // HERO DOT INTERACTION
  document.querySelectorAll(".hero-dots i").forEach((dot, index) => {

    dot.addEventListener("click", () => {

      document.querySelectorAll(".hero-dots i").forEach(item => {
        item.classList.remove("active");
      });

      dot.classList.add("active");

      // Visual slider indicator only.
      // Additional hero slides can be connected later.

    });

  });

});
