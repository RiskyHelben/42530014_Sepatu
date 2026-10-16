const router = require('express').Router();
const umum = require('../controllers/umum.controller');

router.get('/', umum.beranda);
router.get('/tentang', umum.tentang);

module.exports = router;
