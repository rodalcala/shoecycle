import styled, { keyframes } from 'styled-components';

const fill = (props) => keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 30px ${props.theme.colours.primary};
  }
`;

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const scale = keyframes`
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const CheckmarkContainer = styled.svg`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  stroke: ${(props) => props.theme.colours.secondary};
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px ${(props) => props.theme.colours.primary};
  animation: ${(props) => fill(props)} 0.4s ease-in-out 0.4s forwards,
    ${scale} 0.3s ease-in-out 0.9s both;
`;

const Circle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: ${(props) => props.theme.colours.primary};
  fill: none;
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

const Check = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;

const Checkmark = () => (
  <CheckmarkContainer viewBox="0 0 52 52">
    <Circle cx="26" cy="26" r="25" fill="none" />
    <Check fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
  </CheckmarkContainer>
);

export default Checkmark;
