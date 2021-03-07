import Shoe from './Shoe';
import Container from './styled/Container';

const ShoeList = ({ shoesArray }) => (
  <Container flex>
    {shoesArray.map((shoe) => (
      <Shoe key={shoe._id} shoe={shoe} />
    ))}
  </Container>
);

export default ShoeList;
