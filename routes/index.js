const express = require('express')
const router = express.Router();
const adminRoute =  require('../controller/admin/AuthController')
const apiRoute = require('../controller/api/UserController');

router.use('/', adminRoute);
router.use('/api',apiRoute);

module.exports = router;