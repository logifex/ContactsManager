const ContactService = require("../services/ContactService");

const getContacts = (req, res) => {
  const contacts = ContactService.getContacts();

  res.status(200).json(contacts);
};

const postContact = (req, res) => {
  const contactInput = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };

  const contact = ContactService.createContact(contactInput);

  res.status(201).json(contact);
};

const deleteContact = (req, res) => {
  const { id: stringId } = req.params;
  const id = parseInt(stringId, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  const result = ContactService.deleteContact(id);

  if (!result) {
    return res.status(404).json({ message: "Contact not found" });
  }

  res.status(204).send();
};

module.exports = {
  getContacts,
  postContact,
  deleteContact,
};
