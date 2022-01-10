import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

type Props = {
  children: React.ReactElement | React.ReactElement[];
  isModalOpen: boolean;
  closeModal: () => void;
};

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
