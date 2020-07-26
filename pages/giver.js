import Link from 'next/link';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import ShoeForm from './../components/ShoeForm';
import Container from '../components/styled/Container';

const ADD_SHOE = gql`
  mutation addShoe($shoe: ShoeInput) {
    addShoe(shoe: $shoe) {
      success
      message
      shoe {
        _id
      }
    }
  }
`;

const Header = styled.header`
  padding: 3em 0;
  margin: 0;
`;

const Giver = () => {
  const [addShoe] = useMutation(ADD_SHOE);

  return (
    <Layout>
      <Header>
        <Container>
          <Link href="/">
            <h1>shoecycle</h1>
          </Link>
          <h3>RECYCLE UR SHOES</h3>
        </Container>
      </Header>
      <ShoeForm addShoe={addShoe} />
    </Layout>
  );
};

export default withApollo(Giver);
