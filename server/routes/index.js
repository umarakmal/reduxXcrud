const express = require("express");
const { create, getAll, getOneById, updateById, deleteById } = require("../controllers");
const router = express.Router();

router.post("/create", create);
router.post("/getall", getAll);
router.post("/find-by-id", getOneById);
router.put("/update-by-id/:id", updateById);
router.delete("/delete-by-id/:id", deleteById);

module.exports = router;