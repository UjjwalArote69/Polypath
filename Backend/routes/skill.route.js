const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skill.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// All routes are protected
router.use(authMiddleware.authUser);

router.post("/", skillController.createSkill);
router.get("/", skillController.getSkills);
router.put("/:id", skillController.updateSkill);
router.delete("/:id", skillController.deleteSkill);

module.exports = router;
