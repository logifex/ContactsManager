const contacts = [];
let nextId = 0;

const getContacts = () => {
  return contacts;
};

const createContact = (contactInput) => {
  const contact = { id: nextId++, ...contactInput };
  contacts.push(contact);

  return contact;
};

const deleteContact = (id) => {
  const removeIndex = contacts.findIndex((c) => c.id === id);

  if (removeIndex === -1) {
    return false;
  }

  contacts.splice(removeIndex, 1);

  return true;
};

module.exports = {
  getContacts,
  createContact,
  deleteContact,
};
