
/* ==========================================
   AFAW ENTERTAINMENT
   Premium Streaming Website
   JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTS
    const menuToggle = document.getElementById("menuToggle");
    const topNav = document.getElementById("topNav");
    const sidebar = document.getElementById("sidebar");

    const searchToggle = document.getElementById("searchToggle");
    const searchPanel = document.getElementById("searchPanel");
    const searchInput = document.getElementById("searchInput");
    const closeSearch = document.getElementById("closeSearch");
    const searchResults = document.getElementById("searchResults");

    const toast = document.getElementById("toast");

    // MOVIE DATA
    const movies = [
        {
            id: 1,
            title: "House of the Dragon",
            category: "Fantasy Series",
            year: "2024",
            rating: "9.0",
            image: "https://image.tmdb.org/t/p/w500/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",
            section: "trending"
        },
        {
            id: 2,
            title: "Dune: Part Two",
            category: "Sci-Fi",
            year: "2024",
            rating: "8.5",
            image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
            section: "trending"
        },
        {
            id: 3,
            title: "The Batman",
            category: "Action",
            year: "2022",
            rating: "7.8",
            image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
            section: "trending"
        },
        {
            id: 4,
            title: "Oppenheimer",
            category: "Drama",
            year: "2023",
            rating: "8.3",
            image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
            section: "trending"
        },
        {
            id: 5,
            title: "Interstellar",
            category: "Sci-Fi",
            year: "2014",
            rating: "8.7",
            image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            section: "recommended"
        },
        {
            id: 6,
            title: "John Wick: Chapter 4",
            category: "Action",
            year: "2023",
            rating: "7.7",
            image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            section: "recommended"
        },
        {
            id: 7,
            title: "Avatar: The Way of Water",
            category: "Adventure",
            year: "2022",
            rating: "7.6",
            image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            section: "recommended"
        },
        {
            id: 8,
            title: "The Dark Knight",
            category: "Crime",
            year: "2008",
            rating: "9.0",
            image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            section: "recommended"
        },
        {
            id: 9,
            title: "Wednesday",
            category: "Mystery Series",
            year: "2022",
            rating: "8.0",
            image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            section: "series"
        },
        {
            id: 10,
            title: "The Witcher",
            category: "Fantasy Series",
            year: "2023",
            rating: "8.0",
            image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
            section: "series"
        },
        {
            id: 11,
            title: "Breaking Bad",
            category: "Crime Series",
            year: "2013",
            rating: "9.5",
            image: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
            section: "series"
        },
        {
            id: 12,
            title: "Peaky Blinders",
            category: "Crime Series",
            year: "2022",
            rating: "8.8",
            image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
            section: "series"
        }
    ];

    // CONTINUE WATCHING DATA
    const continueWatching = [
        movies[0],
        movies[4],
        movies[8],
        movies[9]
    ];

    // CREATE MOVIE CARD
    function createMovieCard(movie) {
        return `
            <div class="movie-card">
                <div class="movie-poster">
                    <img
                        src="${movie.image}"
                        alt="${movie.title}"
                        loading="lazy"
                        onerror="this.style.display='none'"
                    >

                    <div class="poster-overlay">
                        <button class="play-btn" data-play="${movie.id}" aria-label="Play ${movie.title}">
                            ▶
                        </button>
                    </div>

                    <span class="movie-rating">★ ${movie.rating}</span>
                </div>

                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.year} • ${movie.category}</p>
                    <button class="add-list-btn" data-list="${movie.id}">
                        + My List
                    </button>
                </div>
            </div>
        `;
    }

    // DISPLAY MOVIES
    function displayMovies(elementId, movieList) {
        const container = document.getElementById(elementId);

        if (!container) return;

        container.innerHTML = movieList.map(createMovieCard).join("");
    }

    // LOAD ALL SECTIONS
    displayMovies(
        "trendingRow",
        movies.filter(movie => movie.section === "trending")
    );

    displayMovies(
        "recommendedRow",
        movies.filter(movie => movie.section === "recommended")
    );

    displayMovies(
        "seriesRow",
        movies.filter(movie => movie.section === "series")
    );

    displayMovies("continueRow", continueWatching);

    // TOAST MESSAGE
    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        clearTimeout(window.afawToastTimer);

        window.afawToastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }

    // MOBILE MENU
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            if (sidebar) sidebar.classList.toggle("active");
            if (topNav) topNav.classList.toggle("active");
        });
    }

    // SEARCH PANEL
    if (searchToggle && searchPanel) {
        searchToggle.addEventListener("click", () => {
            searchPanel.classList.toggle("active");

            if (searchPanel.classList.contains("active") && searchInput) {
                searchInput.focus();
            }
        });
    }

    if (closeSearch && searchPanel) {
        closeSearch.addEventListener("click", () => {
            searchPanel.classList.remove("active");

            if (searchInput) {
                searchInput.value = "";
            }

            if (searchResults) {
                searchResults.innerHTML = "";
            }
        });
    }

    // LIVE SEARCH
    if (searchInput && searchResults) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();

            if (!query) {
                searchResults.innerHTML = "";
                return;
            }

            const results = movies.filter(movie =>
                movie.title.toLowerCase().includes(query) ||
                movie.category.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                searchResults.innerHTML = `
                    <p class="no-results">No movies found.</p>
                `;
                return;
            }

            searchResults.innerHTML = results
                .map(createMovieCard)
                .join("");
        });
    }

    // MY LIST - SAVE MOVIES
    function getMyList() {
        try {
            return JSON.parse(localStorage.getItem("afawMyList")) || [];
        } catch (error) {
            return [];
        }
    }

    function saveMyList(list) {
        localStorage.setItem("afawMyList", JSON.stringify(list));
    }

    // HANDLE BUTTON CLICKS
    document.addEventListener("click", event => {

        // PLAY BUTTON
        const playButton = event.target.closest("[data-play]");

        if (playButton) {
            const movieId = Number(playButton.dataset.play);
            const movie = movies.find(item => item.id === movieId);

            if (movie) {
                showToast("Player for " + movie.title + " will be available soon.");
            }

            return;
        }

        // ADD TO MY LIST
        const listButton = event.target.closest("[data-list]");

        if (listButton) {
            const movieId = Number(listButton.dataset.list);
            const myList = getMyList();

            if (myList.includes(movieId)) {
                showToast("Already in your My List!");
            } else {
                myList.push(movieId);
                saveMyList(myList);
                showToast("Added to My List successfully!");
            }
        }
    });

    // SIDEBAR LINKS
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", () => {
            document.querySelectorAll(".sidebar a").forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

            if (sidebar) sidebar.classList.remove("active");
            if (topNav) topNav.classList.remove("active");
        });
    });

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    console.log("AFAW Entertainment JavaScript Loaded Successfully!");

});
