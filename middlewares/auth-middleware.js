const authMiddleware = (req, res, next) => {
  //check re.body.key --> X
  const apiKey = req.headers["x-api-key"];
  console.log(apiKey, "In the auth Middleware");
  if (apiKey && apiKey === "m1e") {
    next();
  } else res.status(401).send("unauthorized");
};
module.exports = authMiddleware;
