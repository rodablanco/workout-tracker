const router = require("express").Router();
const Cardio = require("../models/Cardio");
const Resistance = require("../models/Resistance")

router.post("/api/transaction", ({ body }, res) => {
    Cardio.create(body)
    .then
})