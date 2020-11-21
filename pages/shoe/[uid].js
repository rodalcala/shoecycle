import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import Button from '../../components/styled/Button';
import Container from '../../components/styled/Container';
import Header from '../../components/styled/Header';

const RequestModalWithoutSSR = dynamic(
  () => import('../../components/RequestModal'),
  { ssr: false }
);

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

const SpecificationContainer = styled.div`
  position: relative;
  margin: 0.4rem;
  overflow: hidden;
  font-size: ${(props) => `${props.size}em` || '1em'};

  > h1 {
    margin-left: 0.2em; /* Needs to be a bit bigger than h4's font-size */
    font-size: 3em;
    text-align: left;
  }

  > h4 {
    position: absolute;
    left: 0;
    font-size: 0.5em;
    color: lightgrey;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    writing-mode: vertical-rl;
    height: 100%;
    text-align: center;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ShoeDetailedView = () => {
  const router = useRouter();
  const { uid } = router.query;

  const { data, loading, error } = useQuery(GET_SHOE_BY_ID, {
    variables: { id: uid },
  });

  if (loading || error) return null;

  const {
    ownerName,
    brand,
    model,
    isFemaleShoe,
    isTrailShoe,
    size,
    kilometers,
    country,
    city,
    ships,
    intShipping,
    paidShipping,
  } = data.shoeById;

  return (
    <Layout>
      <RequestModalWithoutSSR ownerName={ownerName} />
      <Header>
        <Container>
          <Link href="/">
            <h1>shoecycle</h1>
          </Link>
          <h3>AVAILABLE SHOE</h3>
        </Container>
      </Header>
      <Container>
        <FlexContainer>
          <SpecificationContainer size={2}>
            <h4>brand</h4>
            <h1>{brand}</h1>
          </SpecificationContainer>
          <SpecificationContainer>
            <h4>model</h4>
            <h1>{model}</h1>
          </SpecificationContainer>
          <div>
            <SpecificationContainer>
              <h4>gender</h4>
              <h1>{isFemaleShoe ? 'female' : 'male'}</h1>
            </SpecificationContainer>
            <SpecificationContainer>
              <h4>surface</h4>
              <h1>{isTrailShoe ? 'trail' : 'road'}</h1>
            </SpecificationContainer>
          </div>
          <Button primary square margin={'.2em'}>
            <a>I WANT IT</a>
          </Button>
          <SpecificationContainer size={2.5}>
            <h4>size</h4>
            <h1>{size}</h1>
          </SpecificationContainer>
          <SpecificationContainer size={2}>
            <h4>kms</h4>
            <h1>{kilometers}</h1>
          </SpecificationContainer>
          <div>
            <SpecificationContainer>
              <h4>country</h4>
              <h1>{country}</h1>
            </SpecificationContainer>
            <SpecificationContainer>
              <h4>city</h4>
              <h1>{city}</h1>
            </SpecificationContainer>
          </div>
          <SpecificationContainer size={2}>
            <h4>ships</h4>
            <h1>{ships ? 'YES' : 'NO'}</h1>
          </SpecificationContainer>
          <div>
            <SpecificationContainer>
              <h4>int nat</h4>
              <h1>{intShipping ? 'YES' : 'NO'}</h1>
            </SpecificationContainer>
            <SpecificationContainer>
              <h4>paid</h4>
              <h1>{paidShipping ? 'YES' : 'NO'}</h1>
            </SpecificationContainer>
          </div>
        </FlexContainer>
      </Container>
    </Layout>
  );
};

export default withApollo(ShoeDetailedView);
