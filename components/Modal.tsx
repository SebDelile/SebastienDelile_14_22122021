import ReactModal from 'react-modal';

/**
 * A needed method to anchor the modal to the root tag
 */
ReactModal.setAppElement('#__next');

/**
 * The prop types of Modal component
 */
type Props = {
  children: React.ReactElement | React.ReactElement[];
  isModalOpen: boolean;
  closeModal: () => void;
};

/**
 * The modal component, from react-modal. Contains children and a close button on top right position.
 * open state and methods to open and close the modal have to be passed as props.
 */
export const Modal = ({
  children,
  isModalOpen,
  closeModal,
}: Props): React.ReactElement => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border bg-white rounded-lg p-8 outline-none"
      overlayClassName="fixed inset-0 bg-neutral-500 bg-opacity-50"
    >
      {children}
      <button
        onClick={closeModal}
        className="button absolute right-0 top-0 translate-x-4 -translate-y-1/2"
      >
        Close
      </button>
    </ReactModal>
  );
};
