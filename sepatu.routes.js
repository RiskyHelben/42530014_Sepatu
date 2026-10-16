const router = require('express').Router();
const sepatu = require('../controllers/sepatu.controller');

router.get('/', sepatu.daftar);
router.get('/baru', sepatu.formBaru);
router.post('/baru', sepatu.simpan);

module.exports = router;
