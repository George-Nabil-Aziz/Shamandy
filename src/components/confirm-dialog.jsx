// Core
import { AppButton } from "/src";

// Flowbite
import { Modal } from "flowbite-react";

// React icons
import { HiOutlineExclamationCircle } from "react-icons/hi";

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
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 size-14 text-gray-400 dark:text-gray-200" />
          <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
            {isConfirmDialogVisible?.label || "Are you sure?"}
          </h3>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-center gap-2">
          <AppButton
            onClick={() => {
              isConfirmDialogVisible?.onSucess();
              onClose();
            }}
            danger
          >
            {isConfirmDialogVisible?.onConfrimLabel || "Yes, I'm sure"}
          </AppButton>
          <AppButton onClick={onClose} outline>
            {isConfirmDialogVisible?.onCancelLabel || "No, cancel"}
          </AppButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
