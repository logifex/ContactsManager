const ContactRepository = require("./ContactRepository");

const getContacts = async () => {
  const { contacts } = await ContactRepository.readContactsData();
  return contacts;
};

const createContact = async (contactInput) => {
  const { contacts, nextId } = await ContactRepository.readContactsData();
  const contact = { id: nextId, ...contactInput };
  const newContacts = contacts.concat(contact);
  await ContactRepository.writeContactsData({
    contacts: newContacts,
    nextId: nextId + 1,
  });

  return contact;
};

const deleteContact = async (id) => {
  const { contacts, nextId } = await ContactRepository.readContactsData();
  const contactExists = contacts.some((c) => c.id === id);

  if (!contactExists) {
    return false;
  }

  const newContacts = contacts.filter((c) => c.id !== id);
  await ContactRepository.writeContactsData({ contacts: newContacts, nextId });

  return true;
};

module.exports = {
  getContacts,
  createContact,
  deleteContact,
};
