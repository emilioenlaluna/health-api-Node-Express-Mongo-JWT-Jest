const { encontrarPorUsername } = require("../services/usuario");

async function sameUser(req, res, next) {
  const user = await encontrarPorUsername(req.params.username);
  console.log(user, req.user);
  if (req.user.id !== user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

module.exports = sameUser;
