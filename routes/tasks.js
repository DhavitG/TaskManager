const { Router } = require("express");
const router = Router();

const { getAllTasks } = require("../controllers/tasks");

router.route("/").get(getAllTasks);

module.exports = router;
