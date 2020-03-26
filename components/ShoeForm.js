import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_SHOE = gql`
  mutation addShoe($shoe: ShoeInput) {
    addShoe(shoe: $shoe) {
      success,
      message,
      shoe {
        _id
      }
    }
  }
`;

const ShoeForm = () => {
  const [addShoe] = useMutation(ADD_SHOE)

  return (
    <button onClick={() => {
      addShoe({
        variables: {
          shoe: {
            email: 'tuvieja@entanga.com',
            verifiedEmail: true,
            brand: 'Nike',
            model: 'Pegasus 35',
            isMaleShoe: true,
            isTrailShoe: false,
            size: 8.5,
            kilometers: 230,
            country: 'Spain',
            city: 'Barcelona',
            ships: true,
            intShipping: true,
            paidShipping: false,
          }
        }
      })
    }}>Giving</button>
  );
}

export default ShoeForm;
