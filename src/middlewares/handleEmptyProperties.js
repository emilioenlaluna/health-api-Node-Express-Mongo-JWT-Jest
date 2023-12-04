function handleEmptyProperties(req, res, next) {
  if (req.method === "POST") {
    for (const [key, value] of Object.entries(req.body)) {
      if (typeof value === "string") req.body[key] = value.trim();
      if (req.body[key] === "") delete req.body[key];
    }
  }
  next();
}

module.exports = handleEmptyProperties;
