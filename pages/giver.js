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

  const handleSubmit = (values, { setFieldError }) => {
    /* NOTE: Clear fields dependent on shipping if it got unchecked */
    if (!values.ships) {
      values.intShipping = false;
      values.paidShipping = false;
    }

    addShoe({
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
          setFieldError('form', error);
        } else if (addShoe.success) {
          openModal();
        }
      })
      .catch((err) => setFieldError('form', err));
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
      <Header>
        <Container>
          <Link href="/">
            <h1>shoecycle</h1>
          </Link>
          <h3>RECYCLE UR SHOES</h3>
        </Container>
      </Header>
      <ShoeForm handleSubmit={handleSubmit} mutationData={mutationData} />
    </Layout>
  );
};

export default withApollo(Giver);
