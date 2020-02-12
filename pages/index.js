import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { withApollo } from './../lib/apollo';
import Layout from './../components/Layout';

const TITLE_QUERY = gql`
  query TitleQuery {
    title
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(TITLE_QUERY);

  if (loading) return <div />;

  return (
    <Layout>
      <div>
        <h1 className="title">{data.title}</h1>
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

export default withApollo(Home);
