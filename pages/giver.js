import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import dynamic from 'next/dynamic';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import ShoeForm from './../components/ShoeForm';
import Container from '../components/styled/Container';

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
  const [addShoe] = useMutation(ADD_SHOE);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (values, { setFieldError }) => {
    /* NOTE: Clear fields dependent on shipping if it got unchecked */
    if (!values.ships) {
      values.intShipping = false;
      values.paidShipping = false;
    }

    return addShoe({
      variables: {
        shoe: {
          ...values,
          size: parseFloat(values.size),
          kilometers: parseFloat(values.kilometers),
        },
      },
    })
      .then(({ data: { addShoe } }) => {
        if (addShoe.error) {
          setFieldError('form', addShoe.error);
        } else if (addShoe.success) {
          openModal();
        }
      })
      .catch((error) => {
        setFieldError('form', String(error));
      });
  };

  const handleModalClose = () => {
    closeModal();
    router.push('/');
  };

  const _renderModal = () => (
    <SuccessModalWithoutSSR handleClose={handleModalClose} />
  );

  return (
    <Layout>
      {isModalOpen ? _renderModal() : null}
      <Navbar />
      <Container>
        <ShoeForm handleSubmit={handleSubmit} />
      </Container>
    </Layout>
  );
};

export default withApollo(Giver);
