const {Router} = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.post("/registro",authController.postRegistrar);
router.post("/iniciar-sesion",authController.postIniciarSesion);
router.post("/cerrar-sesion",authController.postCerrarSesion);

router.get("/get-citas",authController.getCitas);
router.get("/get-cita/:id",authController.getCita);


module.exports = router;