import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Container from '../components/styled/Container';
import Button from '../components/styled/Button';

const Section = styled.section`
  padding: 3em 0;
  background-color: ${(props) =>
    props.secondary ? props.theme.colours.secondary : null};
`;

const Home = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <h1>shoecycle</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </Container>
      </Section>
      <Section secondary>
        <Container>
          <Link href="/giver">
            <Button primary>Giving</Button>
          </Link>
          <Link href="/receiver">
            <Button>Receiving</Button>
          </Link>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>about us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </Container>
      </Section>
    </Layout>
  );
};

export default Home;
