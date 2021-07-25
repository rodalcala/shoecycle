import styled from 'styled-components';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const Container = styled.div`
  width: 75%;
  max-width: 900px;
  margin: 0 auto;

  > h2 {
    font-size: 2.5rem;
    padding-bottom: 1em;
    color: ${(props) => props.theme.colours.secondary};
  }

  > p {
    padding-top: ${(props) => props.main && '3em'};
    width: 80%;
    margin: 0 auto;
    font-size: 1.1rem;
  }
`;

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <h2>about us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </Container>
    </Layout>
  );
};

export default Home;
