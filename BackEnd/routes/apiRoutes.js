const {Router} = require("express");
const apiController = require("../controllers/apiController");

const router = Router();

router.get("/test",apiController.getTest);

module.exports = router;