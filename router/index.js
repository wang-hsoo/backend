const express = require('express');
const router = express.Router();
// 라우터 설정
const userRoutes = require('./v1/user');


router.use('/users', userRoutes);

module.exports = router; 