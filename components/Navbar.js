import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  padding: 3em 0;
  margin: 0;
  width: 75%;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.colours.secondary};
  cursor: pointer;
  text-align: left;
`;

const LinkLabel = styled.h3`
  text-align: left;
  font-size: 1.1rem;
  cursor: pointer;

  @media (min-width: 700px) {
    text-align: right;
  }
`;

const Navbar = () => (
  <Header>
    <Link href="/">
      <Title>shoecycle</Title>
    </Link>
    <ul>
      <li>
        <Link href="/">
          <LinkLabel>AVAILABLE SHOES</LinkLabel>
        </Link>
      </li>
      <li>
        <Link href="/giver">
          <LinkLabel>RECYCLE UR SHOES</LinkLabel>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <LinkLabel>ABOUT US</LinkLabel>
        </Link>
      </li>
    </ul>
  </Header>
);

export default Navbar;
