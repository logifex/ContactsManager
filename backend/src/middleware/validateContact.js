const { body } = require("express-validator");
const validateRequest = require("./validateRequest");

const validateContact = [
  body("name")
    .notEmpty()
    .isLength({ max: 50 })
    .withMessage("Name is required and must be up to 50 characters"),
  body("email")
    .isEmail()
    .withMessage("Email must be a valid email address"),
  body("phone")
    .isMobilePhone()
    .withMessage(
      "Phone number must be a valid phone number"
    ),
  validateRequest,
];

module.exports = validateContact;
