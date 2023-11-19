import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConfirmationPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setModalIsOpen(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal-container"
      overlayClassName="overlay"
      contentLabel="Form Submission Confirmation"
    >
      <div className="container mt-5">
        <h2>Form submitted successfully!</h2>
        <p>Thank you for your message.</p>
        <p>Returning to the form in {countdown} seconds...</p>
        <button onClick={closeModal} className="close-button">Close</button>
      </div>
    </Modal>
  );
};

export default ConfirmationPage;
