import { Outlet } from '@remix-run/react';
import { Navbar } from '~/components';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
