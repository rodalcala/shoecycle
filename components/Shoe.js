import styled from 'styled-components';

const ShoeBox = styled.div`
  background-image: url(${(props) => props.backgroundImage || '/silhouette.png'});
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 100%;
  position: relative;
  text-align: center;

  > p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;

const Shoe = ({ shoe }) => (
  <ShoeBox>
    <p>ID: {shoe._id}</p>
  </ShoeBox>
);

export default Shoe;
