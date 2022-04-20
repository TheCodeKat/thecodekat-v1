import Logo from '../logo/logo';
import './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className='bg-white shadow-md shadow-purple-100 h-12 z-50 flex items-center p-2'>
      <Logo/>
    </div>
  );
}

export default Navbar;
