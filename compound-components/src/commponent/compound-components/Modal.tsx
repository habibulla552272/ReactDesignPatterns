import React, { ReactNode } from 'react';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setisOpen: (value: boolean) => void;
}

interface SectionProps {
  children: ReactNode;
}

/* ---------------------------------- */
/* Modal Root */
/* ---------------------------------- */

const Modal = ({ children, isOpen, setisOpen }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        {/* Close button */}
        <button
          onClick={() => setisOpen(false)}
          className="absolute right-4 top-4 text-2xl font-bold cursor-pointer"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};

/* ---------------------------------- */
/* Sub Components */
/* ---------------------------------- */

const ModalHeader = ({ children }: SectionProps) => (
  <div className="mb-4 text-lg font-semibold">
    {children}
  </div>
);

const ModalBody = ({ children }: SectionProps) => (
  <div className="text-sm text-gray-600">
    {children}
  </div>
);

const ModalFooter = ({ children }: SectionProps) => (
  <div className="mt-6 flex justify-end gap-3">
    {children}
  </div>
);

/* ---------------------------------- */
/* Attach Sub Components */
/* ---------------------------------- */

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
