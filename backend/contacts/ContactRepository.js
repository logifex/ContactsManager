const { promises: fs } = require("fs");

const readContactsData = async () => {
  const file = await fs.readFile("data/contacts.json");
  const contactData = JSON.parse(file.toString());

  return contactData;
};

const writeContactsData = async (contacts) => {
  await fs.writeFile("data/contacts.json", JSON.stringify(contacts));
};

module.exports = { readContactsData, writeContactsData };
