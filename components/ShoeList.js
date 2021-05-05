import Shoe from './Shoe';
import Container from './styled/Container';

const ShoeList = ({ shoesArray }) => (
  <Container flex>
    {shoesArray
      .filter((shoe) => shoe.available)
      .map((shoe) => (
        <Shoe key={shoe._id} shoe={shoe} />
      ))}
  </Container>
);

export default ShoeList;
