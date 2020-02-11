import Layout from './../components/Layout';
import { withApollo } from './../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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
    </Layout>
  );
};

export default withApollo(Home);
