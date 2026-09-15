// Konfigurasi & State
const ITEMS_PER_PAGE = 9;
let currentPage = 1;
let currentHikmahIndex = 0;
let filteredList = [];

// Elemen Tampilan Utama
const homeView = document.getElementById("homeView");
const detailView = document.getElementById("detailView");
const homeHikmahGrid = document.getElementById("homeHikmahGrid");
const paginationContainer = document.getElementById("paginationContainer");
const brandHomeLink = document.getElementById("brandHomeLink");
const backToHomeBtn = document.getElementById("backToHomeBtn");

// Elemen Modal "Sedang Disusun"
const comingSoonModal = document.getElementById("comingSoonModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalHikmahTitle = document.getElementById("modalHikmahTitle");
const modalHikmahDesc = document.getElementById("modalHikmahDesc");

// Elemen Viewer Detail
const detailNumber = document.getElementById("detailNumber");
const detailTitle = document.getElementById("detailTitle");
const detailCategory = document.getElementById("detailCategory");
const detailArabic = document.getElementById("detailArabic");
const detailTranslation = document.getElementById("detailTranslation");
const detailSyarah = document.getElementById("detailSyarah");

// Elemen Sidebar & Kontrol
const hikmahListContainer = document.getElementById("hikmahListContainer");
const hikmahCountBadge = document.getElementById("hikmahCountBadge");
const searchInput = document.getElementById("searchInput");
const filterChipsContainer = document.getElementById("filterChipsContainer");
const prevBtn = document.getElementById("prevHikmahBtn");
const nextBtn = document.getElementById("nextHikmahBtn");
const copyBtn = document.getElementById("copyBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Inisialisasi Aplikasi
function initApp() {
  const source = window.daftarHikmah || [];
  filteredList = [...source];

  renderHomeCards();
  renderPagination();
  renderSidebarList(filteredList);
  renderFilterChips();
  setupEventListeners();
  checkSavedTheme();
}

// Render Kartu di Beranda
function renderHomeCards() {
  if (!homeHikmahGrid) return;
  homeHikmahGrid.innerHTML = "";

  const source = window.daftarHikmah || [];
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = source.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  pageItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = `home-card ${!item.isReady ? "is-draft" : ""}`;
    card.innerHTML = `
      <div>
        <div class="home-card-header">
          <span class="card-badge">HIKMAH #${item.nomor}</span>
          <span class="status-badge ${item.isReady ? "ready" : "draft"}">
            ${item.isReady ? "Siap Dibaca" : "Segera Hadir"}
          </span>
        </div>
        <h3 style="font-size: 1.1rem; margin-bottom: 0.4rem;">${item.judul}</h3>
        <p class="home-card-arabic" style="font-size: 1.05rem; margin-bottom: 0.5rem;">${item.arab}</p>
        <p class="home-card-desc"><strong>Rangkuman:</strong> ${item.terjemah}</p>
      </div>
      <div class="home-card-footer" style="margin-top: 1rem;">
        <span class="card-category"><i class="fa-solid fa-tag"></i> ${item.kategori}</span>
        <span class="card-read-btn" style="color: ${item.isReady ? "var(--primary)" : "var(--text-muted)"};">
          ${item.isReady ? 'Buka Syarah <i class="fa-solid fa-arrow-right"></i>' : 'Belum Tersedia <i class="fa-solid fa-lock"></i>'}
        </span>
      </div>
    `;

    card.addEventListener("click", () => {
      if (item.isReady) {
        openMateri(item.id);
      } else {
        showComingSoonModal(item);
      }
    });

    homeHikmahGrid.appendChild(card);
  });
}

// Render Tombol Pagination
function renderPagination() {
  if (!paginationContainer) return;
  paginationContainer.innerHTML = "";

  const source = window.daftarHikmah || [];
  const totalPages = Math.ceil(source.length / ITEMS_PER_PAGE);
  if (totalPages <= 1) return;

  // Tombol Prev
  const prevPageBtn = document.createElement("button");
  prevPageBtn.className = "page-btn";
  prevPageBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevPageBtn.disabled = currentPage === 1;
  prevPageBtn.addEventListener("click", () => changePage(currentPage - 1));
  paginationContainer.appendChild(prevPageBtn);

  // Nomor Halaman
  for (let i = 1; i <= totalPages; i++) {
    const numBtn = document.createElement("button");
    numBtn.className = `page-btn ${currentPage === i ? "active" : ""}`;
    numBtn.textContent = i;
    numBtn.addEventListener("click", () => changePage(i));
    paginationContainer.appendChild(numBtn);
  }

  // Tombol Next
  const nextPageBtn = document.createElement("button");
  nextPageBtn.className = "page-btn";
  nextPageBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextPageBtn.disabled = currentPage === totalPages;
  nextPageBtn.addEventListener("click", () => changePage(currentPage + 1));
  paginationContainer.appendChild(nextPageBtn);
}

function changePage(page) {
  currentPage = page;
  renderHomeCards();
  renderPagination();
  const section = document.querySelector(".home-hikmah-section");
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 60,
      behavior: "smooth",
    });
  }
}

// Modal "Sedang Disusun"
function showComingSoonModal(item) {
  if (modalHikmahTitle)
    modalHikmahTitle.textContent = `Hikmah #${item.nomor} Sedang Disusun`;
  if (modalHikmahDesc) {
    modalHikmahDesc.textContent = `Uraian teks Arab, terjemahan, dan syarah mendalam untuk Hikmah #${item.nomor} belum dirilis oleh pengembang. Nantikan pembaruan berikutnya!`;
  }
  if (comingSoonModal) comingSoonModal.classList.add("show");
}

function hideComingSoonModal() {
  if (comingSoonModal) comingSoonModal.classList.remove("show");
}

// Buka Halaman Baca Materi
function openMateri(id) {
  if (homeView) homeView.style.display = "none";
  if (detailView) detailView.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
  displayHikmah(id);
}

// Kembali ke Beranda
function showHomePage() {
  if (detailView) detailView.style.display = "none";
  if (homeView) homeView.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Tampilkan Detail Hikmah (Membaca format syarah dan renderContent)
function displayHikmah(id) {
  const source = window.daftarHikmah || [];
  const index = source.findIndex((h) => String(h.id) === String(id));
  if (index === -1) return;

  currentHikmahIndex = index;
  const hikmah = source[index];

  if (detailNumber) detailNumber.textContent = `HIKMAH #${hikmah.nomor}`;
  if (detailTitle) detailTitle.textContent = hikmah.judul;
  if (detailCategory) detailCategory.textContent = hikmah.kategori;
  if (detailArabic) detailArabic.textContent = hikmah.arab;
  if (detailTranslation) detailTranslation.textContent = hikmah.terjemah;

  // Render Syarah Panjang
  if (detailSyarah) {
    if (typeof hikmah.renderContent === "function") {
      detailSyarah.innerHTML = hikmah.renderContent();
    } else {
      detailSyarah.innerHTML = hikmah.syarah || "<p>Belum ada syarah.</p>";
    }
  }

  // Navigasi Prev/Next
  if (prevBtn && nextBtn) {
    const prevAvailable = source
      .slice(0, currentHikmahIndex)
      .reverse()
      .find((h) => h.isReady);
    const nextAvailable = source
      .slice(currentHikmahIndex + 1)
      .find((h) => h.isReady);

    prevBtn.disabled = !prevAvailable;
    nextBtn.disabled = !nextAvailable;
  }

  // Tandai item aktif di sidebar
  document.querySelectorAll(".hikmah-item").forEach((el) => {
    el.classList.toggle("active", String(el.dataset.id) === String(id));
  });
}

// Render Sidebar
function renderSidebarList(list) {
  if (!hikmahListContainer) return;
  hikmahListContainer.innerHTML = "";
  if (hikmahCountBadge) hikmahCountBadge.textContent = `${list.length} Hikmah`;

  const source = window.daftarHikmah || [];
  const currentId = source[currentHikmahIndex]?.id;

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = `hikmah-item ${String(currentId) === String(item.id) ? "active" : ""}`;
    card.dataset.id = item.id;
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="item-num">Hikmah #${item.nomor}</span>
        <span style="font-size:0.65rem; color:${item.isReady ? "var(--primary)" : "var(--text-muted)"};">
          ${item.isReady ? "Tersedia" : "Terkunci"}
        </span>
      </div>
      <div class="item-title">${item.judul}</div>
    `;

    card.addEventListener("click", () => {
      if (item.isReady) {
        displayHikmah(item.id);
      } else {
        showComingSoonModal(item);
      }
    });

    hikmahListContainer.appendChild(card);
  });
}

// Filter Kategori Chips
function renderFilterChips() {
  if (!filterChipsContainer) return;
  const source = window.daftarHikmah || [];
  const categories = new Set();
  source.forEach((item) => {
    if (item.kategori) categories.add(item.kategori);
  });

  filterChipsContainer.innerHTML = `
    <button class="chip active" data-category="all">Semua</button>
    ${Array.from(categories)
      .map(
        (cat) => `<button class="chip" data-category="${cat}">${cat}</button>`,
      )
      .join("")}
  `;

  filterChipsContainer.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", (e) => {
      filterChipsContainer
        .querySelectorAll(".chip")
        .forEach((c) => c.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const cat = e.currentTarget.getAttribute("data-category");
      applyFilters(cat, searchInput ? searchInput.value : "");
    });
  });
}

function applyFilters(category, query) {
  const source = window.daftarHikmah || [];
  const cleanQuery = (query || "").toLowerCase().trim();

  filteredList = source.filter((item) => {
    const matchCategory =
      !category || category === "all" || item.kategori === category;
    const matchQuery =
      !cleanQuery ||
      item.judul.toLowerCase().includes(cleanQuery) ||
      String(item.nomor).includes(cleanQuery) ||
      item.terjemah.toLowerCase().includes(cleanQuery);
    return matchCategory && matchQuery;
  });

  renderSidebarList(filteredList);
}

// Salin Teks
function copyHikmahText() {
  const source = window.daftarHikmah || [];
  const hikmah = source[currentHikmahIndex];
  if (!hikmah) return;

  const textToCopy = `[Kitab Al-Hikam - Hikmah #${hikmah.nomor}]\n${hikmah.judul}\n\n${hikmah.arab}\n\nArtinya:\n"${hikmah.terjemah}"`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const original = copyBtn.innerHTML;
    copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> <span>Tersalin!</span>`;
    setTimeout(() => {
      copyBtn.innerHTML = original;
    }, 2000);
  });
}

// Tema Gelap/Terang
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("theme-preference", target);
  updateThemeIcon(target);
}

function checkSavedTheme() {
  const saved = localStorage.getItem("theme-preference") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML =
    theme === "dark"
      ? `<i class="fa-solid fa-sun"></i>`
      : `<i class="fa-solid fa-moon"></i>`;
}

// Event Listeners
function setupEventListeners() {
  if (brandHomeLink) brandHomeLink.addEventListener("click", showHomePage);
  if (backToHomeBtn) backToHomeBtn.addEventListener("click", showHomePage);

  if (modalCloseBtn)
    modalCloseBtn.addEventListener("click", hideComingSoonModal);
  if (comingSoonModal) {
    comingSoonModal.addEventListener("click", (e) => {
      if (e.target === comingSoonModal) hideComingSoonModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const source = window.daftarHikmah || [];
      const prevAvailable = source
        .slice(0, currentHikmahIndex)
        .reverse()
        .find((h) => h.isReady);
      if (prevAvailable) displayHikmah(prevAvailable.id);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const source = window.daftarHikmah || [];
      const nextAvailable = source
        .slice(currentHikmahIndex + 1)
        .find((h) => h.isReady);
      if (nextAvailable) displayHikmah(nextAvailable.id);
    });
  }

  if (copyBtn) copyBtn.addEventListener("click", copyHikmahText);
  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeChip = filterChipsContainer
        ? filterChipsContainer.querySelector(".chip.active")
        : null;
      const cat = activeChip ? activeChip.getAttribute("data-category") : "all";
      applyFilters(cat, e.target.value);
    });
  }
}

document.addEventListener("DOMContentLoaded", initApp);
