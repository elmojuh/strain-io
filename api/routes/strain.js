const express = require("express");
const router = express.Router();
const strainModel = require('../models/strainModel');
const strainController = require("../controllers/strainController");

router.get("/", strainController.findAllStrains );

router.post("/", strainController.addStrain );

module.exports = router;