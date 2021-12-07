const {Router} = require("express");
const apiController = require("../controllers/apiController");

const router = Router();

router.post("/post-citas",apiController.funcCitas);

router.delete("/eliminar-citas/:id",apiController.eliminarCitas);

module.exports = router;