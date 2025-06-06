import React from "react";

const LabelInput = ({ label, ...props }) => {
  return (
    <div className="label-input">
      <label htmlFor={props.id}>
        <p>{label}</p>
      </label>
      <input {...props} />
    </div>
  );
};

export default LabelInput;
