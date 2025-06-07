const { Router } = require("express");
const ContactController = require("./ContactController");
const bodyParser = require("body-parser");
const validateContact = require("../middleware/validateContact");

const contactRouter = Router();

contactRouter
  .route("/contacts")
  .get(ContactController.getContacts)
  .post(
    bodyParser.json(),
    validateContact,
    ContactController.postContact
  );

contactRouter.delete("/contacts/:id", ContactController.deleteContact);

module.exports = contactRouter;
