import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from '../../lib/apollo';

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Button from '../../components/styled/Button';

const RequestModalWithoutSSR = dynamic(
  () => import('../../components/RequestModal'),
  { ssr: false }
);

const SuccessModalWithoutSSR = dynamic(
  () => import('../../components/SuccessModal'),
  { ssr: false }
);

const SpecificationContainer = styled.div`
  position: relative;
  margin: 0.4rem;
  overflow: hidden;
  font-size: ${(props) => `${props.size}em` || '1em'};

  > h3 {
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 75%;
  max-width: 900px;
  margin: 0 auto;
`;

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

const SEND_SHOE_REQUEST = gql`
  mutation sendShoeRequest($id: ID, $request: RequestInput) {
    sendShoeRequest(id: $id, request: $request) {
      success
      message
      error
    }
  }
`;

const ShoeDetailedView = () => {
  const router = useRouter();
  const { uid } = router.query;

  const { data, loading, error } = useQuery(GET_SHOE_BY_ID, {
    variables: { id: uid },
  });

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [sendShoeRequest] = useMutation(SEND_SHOE_REQUEST);

  if (loading || error) return null;

  const {
    _id,
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

  const openRequestModal = () => setIsRequestModalOpen(true);
  const closeRequestModal = () => setIsRequestModalOpen(false);
  const openSuccessModal = () => setIsSuccessModalOpen(true);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const handleSubmit = (values, { setFieldError }) => {
    return sendShoeRequest({
      variables: {
        id: _id,
        request: values,
      },
    })
      .then(({ data: { sendShoeRequest } }) => {
        if (sendShoeRequest.error) {
          setFieldError('form', sendShoeRequest.error);
        } else if (sendShoeRequest.success) {
          closeRequestModal();
          openSuccessModal();
        }
      })
      .catch((error) => setFieldError('form', String(error)));
  };

  const _renderRequestModal = () => (
    <RequestModalWithoutSSR
      shoe={data.shoeById}
      handleSubmit={handleSubmit}
      handleClose={closeRequestModal}
    />
  );

  const _renderSuccessModal = () => (
    <SuccessModalWithoutSSR handleClose={closeSuccessModal} />
  );

  return (
    <Layout>
      {isSuccessModalOpen ? _renderSuccessModal() : null}
      {isRequestModalOpen ? _renderRequestModal() : null}
      <Navbar />
      <Container flex>
        <SpecificationContainer size={2}>
          <h4>brand</h4>
          <h3>{brand}</h3>
        </SpecificationContainer>
        <SpecificationContainer>
          <h4>model</h4>
          <h3>{model}</h3>
        </SpecificationContainer>
        <div>
          <SpecificationContainer>
            <h4>gender</h4>
            <h3>{isFemaleShoe ? 'female' : 'male'}</h3>
          </SpecificationContainer>
          <SpecificationContainer>
            <h4>surface</h4>
            <h3>{isTrailShoe ? 'trail' : 'road'}</h3>
          </SpecificationContainer>
        </div>
        <Button primary square margin={'.2em'} onClick={openRequestModal}>
          <a>I WANT IT</a>
        </Button>
        <SpecificationContainer size={2.5}>
          <h4>size</h4>
          <h3>{size}</h3>
        </SpecificationContainer>
        <SpecificationContainer size={2}>
          <h4>kms</h4>
          <h3>{kilometers}</h3>
        </SpecificationContainer>
        <div>
          <SpecificationContainer>
            <h4>country</h4>
            <h3>{country}</h3>
          </SpecificationContainer>
          <SpecificationContainer>
            <h4>city</h4>
            <h3>{city}</h3>
          </SpecificationContainer>
        </div>
        <SpecificationContainer size={2}>
          <h4>ships</h4>
          <h3>{ships ? 'YES' : 'NO'}</h3>
        </SpecificationContainer>
        <div>
          <SpecificationContainer>
            <h4>int nat</h4>
            <h3>{intShipping ? 'YES' : 'NO'}</h3>
          </SpecificationContainer>
          <SpecificationContainer>
            <h4>paid</h4>
            <h3>{paidShipping ? 'YES' : 'NO'}</h3>
          </SpecificationContainer>
        </div>
      </Container>
    </Layout>
  );
};

export default withApollo(ShoeDetailedView);
