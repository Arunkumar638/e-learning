const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require("multer");
const path = require('path');
// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

// Set up multer upload
const upload = multer({ storage: storage });

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.post("/addcourse", upload.single('image'), adminController.addCourse);
router.post("/addcategory", upload.single('image'), adminController.addCategory);
router.post("/addsubcategory", upload.single('image'), adminController.addSubCategory);
router.post("/addblog", upload.single('image'), adminController.addBlog);

router.put("/updatestatus", adminController.updateStatus);
router.put("/updatecoursestatus", adminController.updateCourseStatus);
router.put("/updatecategory", adminController.updateCategory);
router.put("/updatesubcategory", adminController.updateSubCategory);

router.get("/getcontacts",adminController.getContacts);
router.get("/getwishlist",adminController.getWishlist);
router.get("/getadmin",adminController.getAdmin);
router.get("/getpurchasecourse",adminController.getPurchaseCourse);
router.get("/getcategory",adminController.getCategory);
router.get("/getsubcategory",adminController.getSubCategory);
router.get("/getusers",adminController.getAllUser);

router.delete("/deletecategory",adminController.deleteCategory);
router.delete("/deletesubcategory",adminController.deleteSubCategory);

module.exports = router;