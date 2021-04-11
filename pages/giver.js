import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import dynamic from 'next/dynamic';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import ShoeForm from './../components/ShoeForm';
import Container from '../components/styled/Container';
import Header from '../components/styled/Header';

const SuccessModalWithoutSSR = dynamic(
  () => import('../components/SuccessModal'),
  { ssr: false }
);

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
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmittionSuccess = ({ loading, called, error }) => {
    if (!loading && !error && called) {
      openModal();
    }
  };

  const handleModalClose = () => {
    closeModal();
    router.push('/');
  };

  useEffect(() => {
    handleSubmittionSuccess(mutationData);
  }, [mutationData, handleSubmittionSuccess]);

  const _renderModal = () => (
    <SuccessModalWithoutSSR handleClose={handleModalClose} />
  );

  return (
    <Layout>
      {isModalOpen ? _renderModal() : null}
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
