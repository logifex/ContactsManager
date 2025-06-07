import { useState } from "react";

const ContactRow = ({ contact, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(contact.id);
    } catch (err) {
      setDeleteError(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <tr key={contact.id}>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        {deleteError && <p className="error-message">Error deleting contact</p>}
        <button type="button" onClick={handleDelete} disabled={isDeleting}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;
