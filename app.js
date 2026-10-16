const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Dua router terpisah: halaman umum dan fitur sepatu
app.use('/', require('./routes/index.routes'));
app.use('/sepatu', require('./routes/sepatu.routes'));

app.use((req, res) => {
  res.status(404).render('pages/404', { judul: 'Tidak Ditemukan' });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Etalase Sepatu Basket jalan di http://localhost:${PORT}`);
});
