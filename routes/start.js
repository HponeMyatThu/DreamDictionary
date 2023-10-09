const express = require('express');

const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.getStartPage);
router.post("/content", controller.postContentPage);


module.exports = router;

