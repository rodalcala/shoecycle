import styled from 'styled-components';

const Button = styled.button`
  font-size: ${(props) => (props.primary ? '2em' : '1.2em')};
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) =>
    props.primary ? props.theme.colours.white : props.theme.colours.primary};
  border: 2px solid ${(props) => props.theme.main};
  box-shadow: 0px 10px 10px -15px #111;
  cursor: pointer;
  &:hover {
    background-color: rgb(230, 230, 230, 0.25);
  }
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

export default Button;
