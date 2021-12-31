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
    <ReactModal isOpen={isModalOpen} onRequestClose={closeModal}>
      {children}
      <button onClick={closeModal}>X</button>
    </ReactModal>
  );
};
