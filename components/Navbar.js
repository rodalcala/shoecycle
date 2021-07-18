import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Header = styled.header`
  padding: 3em 0;
  margin: 0;
  width: 75%;
  max-width: 900px;
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
  color: ${(props) => props.active && props.theme.colours.secondary};

  &:hover {
    text-decoration: ${(props) => !props.active && 'underline'};
  }

  @media (min-width: 700px) {
    text-align: right;
  }
`;

const Navbar = () => {
  const { route } = useRouter();

  /* TO-DO: Implement TypeScript enum */
  const routes = {
    HOME: '/',
    GIVER: '/giver',
    ABOUT: '/about',
  };

  return (
    <Header>
      <Link href={routes.HOME}>
        <Title>shoecycle</Title>
      </Link>
      <ul>
        <li>
          <Link href={routes.HOME}>
            <LinkLabel active={route === routes.HOME}>
              AVAILABLE SHOES
            </LinkLabel>
          </Link>
        </li>
        <li>
          <Link href={routes.GIVER}>
            <LinkLabel active={route === routes.GIVER}>
              RECYCLE UR SHOES
            </LinkLabel>
          </Link>
        </li>
        <li>
          <Link href={routes.ABOUT}>
            <LinkLabel active={route === routes.ABOUT}>ABOUT US</LinkLabel>
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default Navbar;
