const Sepatu = require('../models/sepatu.model');

exports.daftar = (req, res) => {
  res.render('pages/daftar', {
    judul: 'Koleksi Sepatu',
    koleksi: Sepatu.semua()
  });
};

exports.formBaru = (req, res) => {
  res.render('pages/form', { judul: 'Tambah Sepatu' });
};

// Form dikirim lewat POST: cetak isinya, lalu redirect (PRG)
exports.simpan = (req, res) => {
  console.log('\n[BACK-END] Data form diterima:');
  console.log(req.body);
  res.redirect('/sepatu');
};
