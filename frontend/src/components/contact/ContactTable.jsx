import React from "react";
import ContactRow from "./ContactRow";

const ContactTable = ({ contacts, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow contact={contact} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
