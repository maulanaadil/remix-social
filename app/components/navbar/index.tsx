import { Link } from '@remix-run/react';
import Button from '../button';

import { sContainerNav, sListNavLinks, sLogo } from './styles';

const Navbar = () => {
  return (
    <nav className={sContainerNav}>
      <Link to='/'>
        <h1 className={sLogo}>Remix Social</h1>
      </Link>
      <ul className={sListNavLinks}>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
        <li>
          <Button type='button' as={Link} variant='primary' size='m'>
            <Link to='/signup'>Create an account</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
