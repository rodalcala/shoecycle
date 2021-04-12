import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid transparent;
  border-left: 4px solid;
  animation: ${load} 1s infinite linear;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
`;

export default Loader;
