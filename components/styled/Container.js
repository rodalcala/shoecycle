import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;

  ${(props) =>
    /* NOTE: Set as flexbox if the flex prop is passed */
    props.flex &&
    css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-bottom: 2rem;
    `}

  > h1 {
    font-size: 4rem;
    text-align: ${(props) => !props.main && 'left'};
    color: ${(props) => props.theme.colours.secondary};
    cursor: pointer;
  }

  > h2 {
    font-size: 2.5rem;
    padding-bottom: 1em;
    color: ${(props) => props.theme.colours.secondary};
  }

  > h3 {
    text-align: ${(props) => !props.main && 'left'};
    font-size: 1.1rem;
  }

  > p {
    padding-top: ${(props) => props.main && '3em'};
    width: 80%;
    margin: 0 auto;
    font-size: 1.1rem;
  }
`;

export default Container;
