const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//Teremos duas rotas POST.

//Rota de registro.
router.post("/register", userController.register);
//rota de login.
router.post("/login", userController.login);

module.exports = router;
