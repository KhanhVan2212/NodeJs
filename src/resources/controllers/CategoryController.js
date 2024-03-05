const Category = require('../models/CategoryModel');
const categoryValidator = require('../validate/category');

class CategorysController {
  // [GET] /categorys
  async getAllCategorys(req, res) {
    try {
      // const categorys = await Category.find()
      const categorys = await Category.find({ student: res.locals.id })
      res.json(categorys);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [GET] /categorys/:id
  async getCategoryDetail(req, res) {
    try {
      const category = await Category.findOne({ _id: req.params.id, student: res.locals.id })
      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [POST] /category
  async createCategory(req, res) {
    try {
      // Bước 1: Validate email, password
      const { error } = categoryValidator.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        const errors = error.details.map((err) => err.message);
        res.status(400).json({ errors });
      }
      // Valadiate rep.body
      const category = new Category({ ...req.body, student: res.locals.id });

      const saveCategory = await category.save();
      res.json({ message: 'Add Category Successful', data: saveCategory });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [PUT] /categorys/:id
  async updateCategory(req, res) {
    try {
      const category = await Category.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({ message: 'Update Category Successful', data: category });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // [DELETE] /categorys/:id
  async deleleCategory(req, res) {
    try {
      await Category.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Delete Category Successful' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CategorysController();