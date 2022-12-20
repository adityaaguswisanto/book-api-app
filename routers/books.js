const router = require('express').Router();
const { create, update, get, find, destroy } = require('../controllers/books');

router.post("/", create);
router.put("/:id", update);
router.get("/", get);
router.get("/:id", find);
router.delete("/:id", destroy);

module.exports = router;