import React from "react";
import LabelInput from "./LabelInput";

const ContactForm = ({ onSubmit, onClose }) => {
  const [contactInput, setContactInput] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setContactInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(contactInput);
    onClose();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <LabelInput
        id="name"
        label="Name"
        type="name"
        name="name"
        required
        value={contactInput.name}
        onChange={onChange}
      />
      <LabelInput
        id="email"
        label="Email Address"
        type="email"
        name="email"
        required
        value={contactInput.email}
        onChange={onChange}
      />
      <LabelInput
        id="phone"
        label="Phone Number"
        type="tel"
        name="phone"
        required
        value={contactInput.phone}
        onChange={onChange}
      />
      <div className="modal-buttons">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default ContactForm;
