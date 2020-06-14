import Link from 'next/link';
import styled from 'styled-components';

import Layout from './../components/Layout';
import Button from './../components/Button';

const Title = styled.h1`
  font-size: 4rem;
  padding: 1em 0;
`;

const Description = styled.p`
  width: 80%;
  margin: 0 auto;
  font-size: 1.1rem;
  padding-bottom: 2.5em;
`;

const Home = () => {
  return (
    <Layout>
      <Title>shoecycle</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Description>
      <div>
        <ul>
          <li>
            <Link href="/giver">
              <a>Giving</a>
            </Link>
          </li>
          <li>
            <Link href="/receiver">
              <a>Receiving</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
