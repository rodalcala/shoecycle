import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
