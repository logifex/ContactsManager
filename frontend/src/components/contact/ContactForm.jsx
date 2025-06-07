import React from "react";
import LabelInput from "../LabelInput";
import { useState } from "react";

const ContactForm = ({ onSubmit, onClose }) => {
  const [contactInput, setContactInput] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;
    setContactInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await onSubmit(contactInput);
      onClose();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const apiErrors = error?.response?.data?.errors;
  const nameError = apiErrors?.find((e) => e.path === "name");
  const emailError = apiErrors?.find((e) => e.path === "email");
  const phoneError = apiErrors?.find((e) => e.path === "phone");

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && !apiErrors && (
        <p className="error-message">Error creating contact</p>
      )}
      <LabelInput
        id="name"
        label="Name"
        type="name"
        name="name"
        maxLength={50}
        required
        value={contactInput.name}
        onChange={onChange}
        errorMessage={nameError?.msg}
      />
      <LabelInput
        id="email"
        label="Email Address"
        type="email"
        name="email"
        required
        value={contactInput.email}
        onChange={onChange}
        errorMessage={emailError?.msg}
      />
      <LabelInput
        id="phone"
        label="Phone Number"
        type="tel"
        name="phone"
        required
        value={contactInput.phone}
        onChange={onChange}
        errorMessage={phoneError?.msg}
      />
      <div className="modal-buttons">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" disabled={loading}>
          Create
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
