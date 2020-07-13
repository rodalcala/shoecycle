import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import ShoeList from '../components/ShoeList';
import Container from '../components/styled/Container';

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

const Header = styled.header`
  padding: 3em 0;
  margin: 0;
`;

const Receiver = () => {
  const { data, loading, error } = useQuery(GET_ALL_SHOES);

  if (loading || error) return null;

  return (
    <Layout>
      <Header>
        <Container>
          <h1>shoecycle</h1>
          <h3>AVAILABLE SHOES</h3>
        </Container>
      </Header>
      <ShoeList shoesArray={data.shoes} />
    </Layout>
  );
};

export default withApollo(Receiver);
