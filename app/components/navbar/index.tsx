import { Link } from '@remix-run/react';
import Button from '../button';

import { sContainerNav, sListNavLinks, sLogo, sUserEmail } from './styles';
import type { Props } from './types';

const Navbar = ({ user }: Props) => {
  return (
    <nav className={sContainerNav}>
      <Link to='/'>
        <h1 className={sLogo}>Remix Social</h1>
      </Link>
      <ul className={sListNavLinks}>
        {user ? (
          <>
            <li>
              <p className={sUserEmail}>{user.email}</p>
            </li>
            <li>
              <form action='/logout' method='post'>
                <Button type='submit' variant='primary' size='m'>
                  Logout
                </Button>
              </form>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
            <li>
              <Button type='button' as={Link} variant='primary' size='m'>
                <Link to='/signup'>Create an account</Link>
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
