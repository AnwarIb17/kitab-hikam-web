# 📖 Al-Hikam Visual — Kajian Digital Kitab Al-Hikam

Aplikasi web interaktif dan kontemplatif untuk menyelami kedalaman mahakarya tasawuf **Kitab Al-Hikam** karya *Al-Imam Tajuddin Abu al-Fadhl Ahmad bin Muhammad bin Atha'illah as-Sakandari* (w. 709 H), dengan rujukan syarah mendalam dari *Al-'Allamah Ibn 'Abbad ar-Rundi* dan *Kitab At-Tanwir*.

---

## ✨ Fitur Utama
* **Desain Estetik & Hening**: Mengusung konsep visual *Deep Navy* & *Sand Gold* yang tenang, kontemplatif, dan ramah dibaca dalam waktu lama.
* **Mode Gelap & Terang (Dark/Light Mode)**: Fleksibel menyesuaikan kenyamanan mata pembaca dengan penyimpanan preferensi otomatis.
* **Kajian Visual Panjang & Mendalam**: Dilengkapi teks Arab berharakat penuh, terjemahan, rincian syarah berseri (Definisi, Dua Golongan, Dialog Perenungan, Diagram Muhasabah, hingga Doa Munajat).
* **Indeks Katalog Dinamis & Pencarian Cepat**: Navigasi sidebar, sistem filter kategori (*chip*), serta pagination untuk memudahkan pencarian untaian hikmah.
* **Sepenuhnya Client-Side (SPA)**: Dibangun murni menggunakan teknologi web modern tanpa memerlukan instalasi database tambahan.

---

## 📚 Daftar Materi Kajian yang Tersedia
1. **Hikmah #01** — *Tanda Bersandar pada Amal* (Fokus: Tawakal vs Asbab, 4 Fase Hati, Kisah Yusuf bin Husain ar-Razi).
2. **Hikmah #02** — *Tentang Asbab dan Tajrid* (Bagian 1 & 2: Syahwat Samar, Kemerosotan Himmah, Tanda Iqomah, dan Tipu Daya At-Tanwir).
3. **Hikmah #03** — *Kekuatan Himmah dan Benteng Takdir* (Kajian Sawaabiqul Himam, Karomah vs Istidraj, Tauhid Af'al, dan Rahasia Bab Tadbir).
4. **Hikmah #04 s.d. #26** — *Segera Hadir / Dalam Penyusunan*.

---

## 🛠️ Teknologi yang Digunakan
* **HTML5** (Struktur Semantic)
* **CSS3** (Custom Properties / CSS Variables, Flexbox, Grid, Responsive Design)
* **JavaScript (Vanilla ES6+)** (Single Page Application State & Dynamic DOM Rendering)
* **Font Google**: *Amiri* & *Scheherazade New* (Arab), serta *Plus Jakarta Sans* (Latin)
* **Icon**: *Font Awesome 6.5.1*

---

## 📂 Struktur Direktori Proyek
```text
kitab-hikam-web/
├── css/
│   └── style.css
├── js/
│   ├── data/
│   │   ├── index-data.js
│   │   ├── hikmah-01.js
│   │   ├── hikmah-02.js
│   │   └── hikmah-03.js
│   └── app.js
└── index.html