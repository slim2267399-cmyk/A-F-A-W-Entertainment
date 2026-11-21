document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menuToggle = document.getElementById("menuToggle");

  const profileOverlay = document.getElementById("profileOverlay");
  const authOverlay = document.getElementById("authOverlay");
  const generalOverlay = document.getElementById("generalOverlay");

  const closeProfile = document.getElementById("closeProfile");
  const closeAuth = document.getElementById("closeAuth");
  const closeGeneral = document.getElementById("closeGeneral");

  const signInButton = document.getElementById("signInButton");
  const createAccountButton = document.getElementById("createAccountButton");
  const settingsLink = document.getElementById("settingsLink");

  const authTitle = document.getElementById("authTitle");
  const authForm = document.getElementById("authForm");
  const authMessage = document.getElementById("authMessage");

  const searchInput = document.getElementById("searchInput");
  const notificationButton = document.getElementById("notificationButton");

  const generalTitle = document.getElementById("generalTitle");
  const generalMessage = document.getElementById("generalMessage");

  function openOverlay(overlay) {
    if (overlay) overlay.classList.add("active");
  }

  function closeOverlay(overlay) {
    if (overlay) overlay.classList.remove("active");
  }

  function showMessage(title, message) {
    if (generalTitle) generalTitle.textContent = title;
    if (generalMessage) generalMessage.textContent = message;
    openOverlay(generalOverlay);
  }

  // Mobile menu
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Sidebar navigation
  document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".sidebar a").forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");

      if (sidebar) sidebar.classList.remove("open");
    });
  });

  // Profile panel
  const profileButton = document.getElementById("profileButton");

  if (profileButton) {
    profileButton.addEventListener("click", () => {
      openOverlay(profileOverlay);
    });
  }

  if (closeProfile) {
    closeProfile.addEventListener("click", () => {
      closeOverlay(profileOverlay);
    });
  }

  // Sign in and create account
  function openAuth(mode) {
    closeOverlay(profileOverlay);

    if (authTitle) {
      authTitle.textContent =
        mode === "signup" ? "Create Your Account" : "Welcome Back";
    }

    if (authMessage) authMessage.textContent = "";

    openOverlay(authOverlay);
  }

  if (signInButton) {
    signInButton.addEventListener("click", () => openAuth("login"));
  }

  if (createAccountButton) {
    createAccountButton.addEventListener("click", () => openAuth("signup"));
  }

  if (closeAuth) {
    closeAuth.addEventListener("click", () => {
      closeOverlay(authOverlay);
    });
  }

  // Settings
  if (settingsLink) {
    settingsLink.addEventListener("click", () => {
      closeOverlay(profileOverlay);
      showMessage(
        "Settings",
        "Account settings will be available after secure account integration."
      );
    });
  }

  // Authentication form
  if (authForm) {
    authForm.addEventListener("submit", event => {
      event.preventDefault();

      showMessage(
        "Account Setup Pending",
        "Secure sign-in and account creation will be activated after Supabase integration. Your password has not been saved."
      );

      authForm.reset();
      closeOverlay(authOverlay);
    });
  }

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.trim().toLowerCase();

      document.querySelectorAll(".poster-card").forEach(card => {
        const cardText = card.textContent.toLowerCase();
        card.style.display = cardText.includes(searchTerm) ? "" : "none";
      });

      document.querySelectorAll(".content-section").forEach(section => {
        const visibleCards = section.querySelectorAll(
          ".poster-card:not([style*='display: none'])"
        );

        if (searchTerm && section.querySelector(".poster-card")) {
          section.style.display = visibleCards.length ? "" : "none";
        } else {
          section.style.display = "";
        }
      });
    });
  }

  // Notifications
  if (notificationButton) {
    notificationButton.addEventListener("click", () => {
      showMessage(
        "Notifications",
        "You are all caught up. New AFAW updates will appear here."
      );
    });
  }

  // Premium plan buttons
  document.querySelectorAll(".plan-button").forEach(button => {
    button.addEventListener("click", () => {
      const planCard = button.closest(".plan-card");
      const planName = planCard
        ? planCard.querySelector("h3")?.textContent || "Premium"
        : "Premium";

      showMessage(
        planName + " Selected",
        "To activate this membership, please contact the AFAW Owner. Online payment activation is not available yet."
      );
    });
  });

  // General modal close
  if (closeGeneral) {
    closeGeneral.addEventListener("click", () => {
      closeOverlay(generalOverlay);
    });
  }

  // Close overlays by clicking outside
  [profileOverlay, authOverlay, generalOverlay].forEach(overlay => {
    if (overlay) {
      overlay.addEventListener("click", event => {
        if (event.target === overlay) {
          closeOverlay(overlay);
        }
      });
    }
  });

  // Escape key closes open overlays
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeOverlay(profileOverlay);
      closeOverlay(authOverlay);
      closeOverlay(generalOverlay);

      if (sidebar) sidebar.classList.remove("open");
    }
  });

  // Current year
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
