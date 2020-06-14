import Link from 'next/link';
import styled from 'styled-components';

import Layout from './../components/Layout';
import Button from './../components/Button';

const Title = styled.h1`
  
`

const Home = () => {
  return (
    <Layout>
      <div>
        shoecycle
      </div>
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
