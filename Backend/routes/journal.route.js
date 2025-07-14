const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journal.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// All journal routes require login
router.use(authMiddleware.authUser);

router.post("/", journalController.createJournal);
router.get("/", journalController.getJournals);
router.get("/:id", journalController.getJournalById);
router.put("/:id", journalController.updateJournal);
router.delete("/:id", journalController.deleteJournal);

module.exports = router;
