import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import ShoeList from '../components/ShoeList';
import Container from '../components/styled/Container';
import Button from '../components/styled/Button';

const GET_ALL_SHOES = gql`
  query getAllShoes {
    shoes {
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
  const { data, loading, error } = useQuery(GET_ALL_SHOES);
  const retrieveShoes = () => {
    console.log('Retrieving shoes from MongoDB');
    console.log('data', data);
    console.log('loading', loading);
    console.log('error', error);
  };

  if (loading || error) return null;

  return (
    <Layout>
      <Container>
        <Button primary onClick={retrieveShoes}>
          Receive shoes
        </Button>
        <ShoeList shoesArray={data.shoes} />
      </Container>
    </Layout>
  );
};

export default withApollo(Receiver);
