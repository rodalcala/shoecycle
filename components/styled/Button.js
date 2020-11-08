import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: ${(props) => (props.primary ? '2em' : '1.2em')};
  margin: ${(props) => props.margin || 0};
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${(props) =>
    props.primary ? props.theme.colours.white : props.theme.colours.primary};
  border: 2px solid;
  box-shadow: 0px 10px 10px -15px #111;
  cursor: pointer;

  ${(props) =>
    props.square &&
    css`
      padding: 0;
      width: 40%;
      height: 0;
      padding-bottom: 40%;
      position: relative;

      > a {
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%)
      }
    `}

  &:hover {
    transform: translateY(1px);
    filter: saturate(150%);
  }
  &:active {
    background-color: rgb(230, 230, 230, 0.25);
  }
  &:focus {
    outline: none;
    outline-offset: none;
    -moz-box-shadow: inset 0 0 0.3em
      ${(props) =>
        props.primary
          ? props.theme.colours.white
          : props.theme.colours.primary};
    -webkit-box-shadow: inset 0 0 0.3em
      ${(props) =>
        props.primary
          ? props.theme.colours.white
          : props.theme.colours.primary};
    box-shadow: inset 0 0 0.3em
      ${(props) =>
        props.primary
          ? props.theme.colours.white
          : props.theme.colours.primary};
  }
`;

export default Button;
