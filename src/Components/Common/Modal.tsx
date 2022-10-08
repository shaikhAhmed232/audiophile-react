import React from "react";

type ModalProps = {
  children: JSX.Element;
  isOpen: boolean;
  closeModal: () => void;
};

function Modal({ children, isOpen, closeModal }: ModalProps) {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-dimWhite fixed top-0 bottom-0 right-0 left-0 z-[2] items-center justify-center`}
      onClick={closeModal}
    >
      {children}
    </div>
  );
}

export default Modal;
