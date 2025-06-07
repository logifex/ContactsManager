const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }

  res.status(400).send({ errors: result.array(), message: "Validation error" });
};

module.exports = validateRequest;
