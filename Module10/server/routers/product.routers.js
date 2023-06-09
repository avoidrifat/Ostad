const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/jwt.middleware");
const {
  taskTwo,
  taskThere,
  taskFour,
} = require("../controllers/task.controller");

// task: #2
router.get("/products", taskTwo);

// task: #3
router.get("/jwt", taskThere);

// task: #4
router.get("/verifie", authenticate, taskFour);

module.exports = router;
