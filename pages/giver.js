import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from './../lib/apollo';

import ShoeForm from './../components/ShoeForm';

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

const Giver = () => {
  const [addShoe] = useMutation(ADD_SHOE);

  return <ShoeForm addShoe={addShoe} />;
};

export default withApollo(Giver);
