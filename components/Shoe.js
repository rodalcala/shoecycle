import styled from 'styled-components';

const ShoeBox = styled.div`
  background-image: url(${(props) => props.backgroundImage || '/silhouette.png'});
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 1.5em;
`;

const MainData = styled.div`
  position: absolute;
  top: 0%;
  color: black;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em;

  > h1 {
    font-size: 3.5rem;
  }

  > h2 {
    font-size: 5rem;
  }
`;

const SecondaryData = styled.div`
  position: absolute;
  top: 100%;
  color: black;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em;

  > div {
    display: flex;
    > h3 {
      font-size: 1.8rem;
      padding: 0.2rem;
    }
  }
  > h3 {
    font-size: 1.8rem;
    padding: 0.2rem;
  }
`;

const Shoe = ({ shoe }) => (
  <ShoeBox>
    <MainData>
      <h1>{shoe.brand}</h1>
      <h2>{shoe.size}</h2>
    </MainData>
    <SecondaryData>
      <div>
        <h3>{shoe.isFemaleShoe ? '🚺' : '🚹'}</h3>
        <h3>{shoe.isTrailShoe ? '⛰' : '🛣'}</h3>
      </div>
      {/* HARD-CODED: Green value. Should check kms and render some visualisation of them. */}
      <h3>🟢</h3>
    </SecondaryData>
  </ShoeBox>
);

export default Shoe;
