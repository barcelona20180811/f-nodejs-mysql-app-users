/* const express = require("express");
const router = express.Router();

const pool = require("../database");
const { isNotLoggedIn } = require("../lib/auth");

router.get("/", isNotLoggedIn, async (req, res) => {
  const users = await pool.query("SELECT * FROM users ORDER BY ?", [
    req.user.name,
  ]);
  res.render("users/list", { users });
});

module.exports = router;
 */
