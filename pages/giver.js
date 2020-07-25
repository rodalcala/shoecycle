import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

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
          <h1>shoecycle</h1>
          <h3>RECYCLE SHOES</h3>
        </Container>
      </Header>
      <ShoeForm addShoe={addShoe} />
    </Layout>
  );
};

export default withApollo(Giver);
