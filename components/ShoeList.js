import Shoe from './Shoe';

const ShoeList = ({ shoesArray }) => shoesArray.map((shoe) => <Shoe key={shoe._id} shoe={shoe} />);

export default ShoeList;
