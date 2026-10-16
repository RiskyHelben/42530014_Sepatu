const Sepatu = require('../models/sepatu.model');

exports.beranda = (req, res) => {
  res.render('pages/beranda', {
    judul: 'Beranda',
    slogan: 'Perlengkapan lapangan untuk setiap gaya main.',
    total: Sepatu.jumlah(),
    pilihan: Sepatu.sorotan()
  });
};

exports.tentang = (req, res) => {
  res.render('pages/tentang', { judul: 'Tentang Kami' });
};
