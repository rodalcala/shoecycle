import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import ShoeForm from './../components/ShoeForm';
import Container from '../components/styled/Container';
import Header from '../components/styled/Header';

const ADD_SHOE = gql`
  mutation addShoe($shoe: ShoeInput) {
    addShoe(shoe: $shoe) {
      success
      message
      error
      shoe {
        _id
      }
    }
  }
`;

const Giver = () => {
  const [addShoe, mutationData] = useMutation(ADD_SHOE);

  return (
    <Layout>
      <Header>
        <Container>
          <Link href="/">
            <h1>shoecycle</h1>
          </Link>
          <h3>RECYCLE UR SHOES</h3>
        </Container>
      </Header>
      <ShoeForm addShoe={addShoe} mutationData={mutationData} />
    </Layout>
  );
};

export default withApollo(Giver);
