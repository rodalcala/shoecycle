import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;

  > h1 {
    font-size: 4rem;
    padding-bottom: ${(props) => props.main && '1em'};
    text-align: ${(props) => !props.main && 'left'};
    color: ${(props) => props.theme.colours.secondary};
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
    width: 80%;
    margin: 0 auto;
    font-size: 1.1rem;
  }
`;

export default Container;
