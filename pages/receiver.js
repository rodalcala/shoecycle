import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import Container from '../components/styled/Container';
import Button from '../components/styled/Button';

const GET_SHOES = gql`
  query {
    getAllShoes {
      _id
      email
      verifiedEmail
      brand
      model
      isFemaleShoe
      isTrailShoe
      size
      kilometers
      country
      city
      images
      available
      ships
      intShipping
      paidShipping
    }
  }
`;

const Receiver = () => {
  const { data, loading, error } = useQuery(GET_SHOES);
  const retrieveShoes = () => {
    console.log('Retrieving shoes from MongoDB');
    console.log('data', data);
    console.log('loading', loading);
    console.log('error', error);
  };

  return (
    <Layout>
      <Container>
        <Button primary onClick={retrieveShoes}>
          Receive shoes
        </Button>
      </Container>
    </Layout>
  );
};

export default withApollo(Receiver);
