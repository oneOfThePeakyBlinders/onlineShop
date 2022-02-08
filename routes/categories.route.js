const { Router } = require("express");

const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.post("/admin/category", categoriesController.addCategory);
router.delete("/admin/category/:id", categoriesController.deleteCategory);
router.patch("/admin/category/:id", categoriesController.editCategory);
router.get("/category", categoriesController.allCategories);

module.exports = router;
