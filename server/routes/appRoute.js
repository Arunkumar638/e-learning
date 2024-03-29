const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.post("/contact", appController.contactDetails);
router.post("/wishlist", appController.addWishlist);
router.post("/cart", appController.addCart);
router.post("/subscribe", appController.Subscribe)
router.post("/comment",appController.Comment);
router.post("/saveaddress",appController.saveAddress);
router.post("/purchasecourse",appController.purchaseCourse);
router.post("/addpurchasecourse",appController.addPurchaseCourse);
router.post("/getcoursepurchased",appController.getCoursePurchased);
router.post("/getcoursebyId",appController.getCourseById);
router.post("/getpurchasecourses", appController.getPurchaseCourses);

router.get("/getcourses", appController.getAllCourses);
router.get("/getblogs", appController.getAllBlogs);
router.get("/getcart", appController.getCartDetails);
router.get("/getcategories",appController.getAllCategories);
router.get("/getsubcategories",appController.getAllSubCategories);
router.get("/getaddress", appController.getAddress);
router.get("/getpurchaseId",appController.getPurchaseId);


router.delete("/deletecartdata", appController.deleteCartDetails);
router.delete("/deletecart", appController.deleteCart);

module.exports = router;
