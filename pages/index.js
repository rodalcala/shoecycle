import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { withApollo } from './../lib/apollo';

import Layout from '../components/Layout';
import ShoeList from '../components/ShoeList';
import Navbar from '../components/Navbar';

const GET_ALL_SHOES = gql`
  query getAllShoes {
    shoes {
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

const Receiver = () => {
  const { data, loading, error } = useQuery(GET_ALL_SHOES);

  if (loading || error) return null;

  return (
    <Layout>
      <Navbar />
      <ShoeList shoesArray={data.shoes} />
    </Layout>
  );
};

export default withApollo(Receiver);
