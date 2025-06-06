import axios from "axios";

const BASE_URL = "http://localhost:3000";

const ContactService = {
  getContacts: async () => {
    const contacts = (await axios.get(`${BASE_URL}/contacts`)).data;

    return contacts;
  },
  createContact: async (contactInput) => {
    const contact = (await axios.post(`${BASE_URL}/contacts`, contactInput))
      .data;

    return contact;
  },
  deleteContact: async (id) => {
    await axios.delete(`${BASE_URL}/contacts/${id}`);
  },
};

export default ContactService;
