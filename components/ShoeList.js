import Shoe from './Shoe';
import Container from './styled/Container';

const ShoeList = ({ shoesArray }) => (
  <Container>
    {shoesArray.map((shoe) => (
      <Shoe key={shoe._id} shoe={shoe} />
    ))}
  </Container>
);

export default ShoeList;
