const { Router } = require("express");

const { productsController } = require("../controllers/products.controller");

const router = Router();

router.post("/admin/product", productsController.addProduct);
router.delete("/admin/product/:id", productsController.deleteProduct);
router.patch("/admin/product/:id", productsController.editProducts);
router.get("/products/category", productsController.getProductsByCategory);
router.get("/products", productsController.allProducts);
router.get("/products/brand", productsController.getProductsByBrand);

module.exports = router;
