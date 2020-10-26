import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import Container from '../../components/styled/Container';
import Header from '../../components/styled/Header';

const GET_SHOE_BY_ID = gql`
  query getShoeById($id: ID) {
    shoeById(id: $id) {
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

const DetailsContainer = styled.div`
  > img {
    max-width: 85%;
    object-fit: scale-down;
    overflow: hidden;
  }
`;

const ShoeDetailedView = () => {
  const router = useRouter();
  const { uid } = router.query;

  const { data, loading, error } = useQuery(GET_SHOE_BY_ID, {
    variables: { id: uid },
  });

  if (loading || error) return null;

  const { ownerName, brand, model, kilometers } = data.shoeById;

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
      <h3>{ownerName}</h3>
    </Layout>
  );
};

export default withApollo(ShoeDetailedView);
