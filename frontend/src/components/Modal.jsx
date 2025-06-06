import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal");

  return createPortal(
    <div className="backdrop">
      <div className="modal">{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
