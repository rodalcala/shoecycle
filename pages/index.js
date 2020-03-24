import Link from 'next/link';

import Layout from './../components/Layout';

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
