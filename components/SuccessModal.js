import { useRef, useEffect } from 'react';
import styled from 'styled-components';

import usePortal from '../lib/usePortal';

import Checkmark from './styled/Checkmark';

const ModalBackground = styled.div`
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

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colours.disabled};
  height: 40vw;
  max-height: 200px;
  width: 40vw;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.1em;
  position: relative;
`;

const SuccessModal = ({ handleClose }) => {
  const ModalPortal = usePortal();
  const modalBackground = useRef(null);

  /* NOTE: Handle modal's close whenever the user clicks on the modal's background */
  const handleOutsideClick = (event) => {
    if (modalBackground.current === event.target) {
      handleClose();
    }
  };

  /* NOTE: Handle modal's close automatically after 3 seconds */
  useEffect(() => {
    const timeoutRef = setTimeout(handleClose, 3000);
    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <ModalPortal>
      <ModalBackground onClick={handleOutsideClick} ref={modalBackground}>
        <ModalContainer>
          <Checkmark />
        </ModalContainer>
      </ModalBackground>
    </ModalPortal>
  );
};

export default SuccessModal;
