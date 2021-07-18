import Layout from '../components/Layout';
import Container from '../components/styled/Container';
import Navbar from '../components/Navbar';

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
