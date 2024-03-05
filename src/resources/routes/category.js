const express = require('express');
const router = express.Router();

const categorysController = require('../controllers/CategoryController');

router.get('/:id', categorysController.getCategoryDetail);
router.get('/', categorysController.getAllCategorys);
router.post('/create', categorysController.createCategory);
router.put('/:id', categorysController.updateCategory);
router.delete('/:id', categorysController.deleleCategory);

module.exports = router;