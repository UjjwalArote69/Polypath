const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");



router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
// 🛡️ Protected route to test JWT token
router.get("/protected", authMiddleware.authUser, (req, res) => {
  res.status(200).json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});

module.exports = router;
