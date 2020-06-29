import styled from 'styled-components';

import Shoe from './Shoe';

const Main = styled.main`
  background-color: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.white};
  text-align: center;
`;

const ShoeList = ({ shoesArray }) => shoesArray.map((shoe) => <Shoe key={shoe._id} shoe={shoe} />);

export default ShoeList;
