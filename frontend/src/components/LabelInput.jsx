import React from "react";

const LabelInput = ({ label, errorMessage, ...props }) => {
  return (
    <div className="label-input">
      <label htmlFor={props.id}>
        <p>{label}</p>
      </label>
      <input {...props} className={errorMessage ? "error-input" : ""} />
      {errorMessage && <p className="error-message small">{errorMessage}</p>}
    </div>
  );
};

export default LabelInput;
