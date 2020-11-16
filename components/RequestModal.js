import usePortal from '../lib/usePortal';
import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RequestModal = () => {
  const ModalPortal = usePortal();

  return (
    <ModalPortal>
      <ModalContainer>
        <h2>TUVIEJA</h2>
      </ModalContainer>
    </ModalPortal>
  );
};

export default RequestModal;
