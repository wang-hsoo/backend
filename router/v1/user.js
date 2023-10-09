// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../controller/v1/userController');
const authMiddleware = require('../../middleware/authMiddleware');

// 모든 사용자 가져오기
router.get('/', userController.getAllUsers);

// 특정 사용자 가져오기
router.get('/:id', authMiddleware.authenticate, userController.getUserById);

router.post('/:id', userController.postUserByID);

module.exports = router;