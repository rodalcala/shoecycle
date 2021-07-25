import Link from 'next/link';
import styled from 'styled-components';

const ShoeBox = styled.div`
  background-image: url(${(props) =>
    props.backgroundImage || '/silhouette.png'});
  background-repeat: no-repeat;
  background-size: cover;
  width: 79vw;
  min-width: 250px;
  max-width: 285px;
  height: 80vw;
  min-height: 250px;
  max-height: 285px;
  position: relative;
  font-size: 12px;

  @media (min-width: 368px) {
    font-size: 14px;
  }
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
    font-size: 3em;
  }

  > h2 {
    font-size: 4em;
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
      font-size: 1.6em;
      padding: 0.2em;
    }
  }
  > h3 {
    font-size: 1.6em;
    padding: 0.2em;
  }
`;

const Shoe = ({ shoe }) => {
  const _renderUsage = () => {
    if (shoe.kilometers === 0) {
      return 'NEW ✅';
    } else if (shoe.kilometers < 50) {
      return 'PRETTY NEW 🟢';
    } else if (shoe.kilometers < 120) {
      return 'KINDA USED 🟡';
    } else {
      return 'QUITE USED 🔴';
    }
  };

  return (
    <Link href={`/shoe/${shoe._id}`}>
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
          <h3>{_renderUsage()}</h3>
        </SecondaryData>
      </ShoeBox>
    </Link>
  );
};
export default Shoe;
