// MODEL: pemegang data sepatu (tanpa database, disimpan di memori)
// Data di bawah hanya contoh. Ganti dengan datamu sendiri.
const koleksi = [
  { kode: "SB-01", nama: "Kobe 6 Protro", merek: "Nike", kategori: "low", harga: 2300000, ukuran: 42 },
  { kode: "SB-02", nama: "LeBron 21", merek: "Nike", kategori: "mid", harga: 2400000, ukuran: 43 },
  { kode: "SB-03", nama: "Giannis Immortality 4", merek: "Nike", kategori: "low", harga: 1100000, ukuran: 42 },
  { kode: "SB-04", nama: "Harden Vol. 8", merek: "Adidas", kategori: "low", harga: 1700000, ukuran: 44 },
  { kode: "SB-05", nama: "Dame 9", merek: "Adidas", kategori: "mid", harga: 1500000, ukuran: 41 },
  { kode: "SB-06", nama: "Adizero Select 2.0", merek: "Adidas", kategori: "high", harga: 1300000, ukuran: 43 },
  { kode: "SB-07", nama: "MB.03", merek: "Puma", kategori: "mid", harga: 2000000, ukuran: 42 },
  { kode: "SB-08", nama: "Curry 11", merek: "Under Armour", kategori: "low", harga: 2200000, ukuran: 44 },
  { kode: "SB-09", nama: "Luka 3", merek: "Jordan", kategori: "mid", harga: 2300000, ukuran: 43 },
  { kode: "SB-10", nama: "Way of Wade 10", merek: "Li-Ning", kategori: "high", harga: 1800000, ukuran: 42 }
];

exports.semua = () => koleksi;

// Tiga sepatu pertama untuk sorotan di beranda
exports.sorotan = () => koleksi.slice(0, 3);

exports.jumlah = () => koleksi.length;
