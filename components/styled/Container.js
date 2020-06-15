import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;

  > h1 {
    font-size: 4rem;
    padding-bottom: 1em;
    color: ${(props) => props.theme.colours.secondary};
  }

  > p {
    width: 80%;
    margin: 0 auto;
    font-size: 1.1rem;
  }
`;

export default Container;
