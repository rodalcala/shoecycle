import styled from 'styled-components';

const Main = styled.main`
  background-color: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.white};
  text-align: center;
`;

const Shoe = ({ shoe }) => <p>brand: {shoe.brand}</p>;

export default Shoe;
