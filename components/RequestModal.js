import usePortal from '../lib/usePortal';

const RequestModal = () => {
  const ModalPortal = usePortal();

  return (
    <ModalPortal>
      <div className="overlay">
        <div className="content">
          <h2>This header is inside modal</h2>
        </div>
      </div>
    </ModalPortal>
  );
};

export default RequestModal;
