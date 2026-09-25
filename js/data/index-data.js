/**
 * PUSAT DATA & INVENTARIS HIKMAH (Aman & Kebal Error)
 */

// Kumpulkan hikmah yang sudah ada secara aman
const hikmahTersedia = [];

if (typeof hikmah01 !== "undefined") {
  hikmah01.isReady = true;
  hikmahTersedia.push(hikmah01);
}

if (typeof hikmah02 !== "undefined") {
  hikmah02.isReady = true;
  hikmahTersedia.push(hikmah02);
}

if (typeof hikmah03 !== "undefined") {
  hikmah03.isReady = true;
  hikmahTersedia.push(hikmah03);
}

if (typeof hikmah04 !== "undefined") {
  hikmah04.isReady = true;
  hikmahTersedia.push(hikmah04);
}

if (typeof hikmah05 !== "undefined") {
  hikmah05.isReady = true;
  hikmahTersedia.push(hikmah05);
}

if (typeof hikmah06 !== "undefined") {
  hikmah06.isReady = true;
  hikmahTersedia.push(hikmah06);
}

if (typeof hikmah07 !== "undefined") {
  hikmah07.isReady = true;
  hikmahTersedia.push(hikmah07);
}

if (typeof hikmah08 !== "undefined") {
  hikmah08.isReady = true;
  hikmahTersedia.push(hikmah08);
}

// Buat sisa placeholder otomatis (dari nomor setelah hikmah terakhir sampai 26)
const nomorMulai = hikmahTersedia.length + 1;
const jumlahSisa = Math.max(0, 26 - hikmahTersedia.length);

const placeholderHikmah = Array.from({ length: jumlahSisa }, (_, index) => {
  const nomorUrut = nomorMulai + index;
  const padNomor = nomorUrut < 10 ? `0${nomorUrut}` : `${nomorUrut}`;

  return {
    id: nomorUrut,
    nomor: padNomor,
    judul: `Untaian Hikmah #${padNomor}`,
    kategori: "Kearifan Tasawuf",
    arab: "جَارٍ تَحْقِيقُ النَّصِّ وَالمَتْنِ الشَّرِيفِ...",
    terjemah: `Kajian syarah dan tadabbur mutiara spiritual untuk untaian Hikmah ke-${nomorUrut} dalam Kitab Al-Hikam.`,
    syarah:
      "<p>Kajian syarah untuk hikmah ini sedang dalam proses penyusunan.</p>",
    isReady: false,
  };
});

// Gabungkan ke daftar utama
window.daftarHikmah = [...hikmahTersedia, ...placeholderHikmah];
