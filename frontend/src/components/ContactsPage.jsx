import React, { useEffect, useState } from "react";
import ContactTable from "./contact/ContactTable";
import ContactService from "../services/ContactService";
import Modal from "./Modal";
import ContactForm from "./contact/ContactForm";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchContacts = async () => {
    try {
      const fetchedContacts = await ContactService.getContacts();
      setContacts(fetchedContacts);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
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
      {error && <p className="error-message">Error loading table.</p>}
      {loading && <p>Loading table...</p>}
      {!error && !loading && contacts.length === 0 && <p>No contacts found.</p>}
      {contacts.length > 0 && (
        <ContactTable contacts={contacts} onDelete={handleDeleteContact} />
      )}
    </main>
  );
};

export default ContactsPage;
