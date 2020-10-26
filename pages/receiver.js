import Link from 'next/link';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import ShoeList from '../components/ShoeList';
import Container from '../components/styled/Container';
import Header from '../components/styled/Header';

const GET_ALL_SHOES = gql`
  query getAllShoes {
    shoes {
      _id
      ownerName
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

  if (loading || error) return null;

  return (
    <Layout>
      <Header>
        <Container>
          <Link href="/">
            <h1>shoecycle</h1>
          </Link>
          <h3>AVAILABLE SHOES</h3>
        </Container>
      </Header>
      <ShoeList shoesArray={data.shoes} />
    </Layout>
  );
};

export default withApollo(Receiver);
