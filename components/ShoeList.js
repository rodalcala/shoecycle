import styled from 'styled-components';

import Shoe from './Shoe';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  max-width: 900px;
  margin: 0 auto;
  gap: 1vw;
`;

const ShoeList = ({ shoesArray }) => (
  <Container>
    {shoesArray
      .filter((shoe) => shoe.available)
      .map((shoe) => (
        <Shoe key={shoe._id} shoe={shoe} />
      ))}
  </Container>
);

export default ShoeList;
