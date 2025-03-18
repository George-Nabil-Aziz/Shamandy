// Core
import { AppButton } from "/src";

// Flowbite
import { Modal } from "flowbite-react";

export const ConfirmDialog = ({ isConfirmDialogVisible, onClose }) => {
  return (
    <Modal
      show={isConfirmDialogVisible}
      onClose={onClose}
      dismissible
      popup
      size="md"
      position="center"
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">{isConfirmDialogVisible?.label}</div>
      </Modal.Body>
      <Modal.Footer>
        <AppButton onClick={isConfirmDialogVisible?.onSucess}>
          {isConfirmDialogVisible?.onConfrimLabel || "I accept"}
        </AppButton>
        <AppButton onClick={onClose} outline>
          {isConfirmDialogVisible?.onCancelLabel || "Decline"}
        </AppButton>
      </Modal.Footer>
    </Modal>
  );
};
