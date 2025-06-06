import React, { useEffect, useState } from "react";
import ContactTable from "./ContactTable";
import ContactService from "../services/ContactService";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const fetchContacts = async () => {
    const fetchedContacts = await ContactService.getContacts();
    setContacts(fetchedContacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddClick = () => {
    setShowCreateModal(true);
  };

  const handleCreateContact = async (contactInput) => {
    await ContactService.createContact(contactInput);
    await fetchContacts();
  };

  const handleDeleteContact = async (id) => {
    await ContactService.deleteContact(id);
    await fetchContacts();
  };

  return (
    <main className="main">
      <div className="add-section">
        <button type="button" onClick={handleAddClick}>
          Add Contact
        </button>
      </div>
      {showCreateModal && (
        <Modal>
          <ContactForm
            onSubmit={handleCreateContact}
            onClose={() => setShowCreateModal(false)}
          />
        </Modal>
      )}
      {contacts.length > 0 ? (
        <ContactTable contacts={contacts} onDelete={handleDeleteContact} />
      ) : (
        <div>
          <p>
            No contacts found.
            <br />
            You can add one.
          </p>
        </div>
      )}
    </main>
  );
};

export default ContactsPage;
