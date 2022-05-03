import Logo from '../logo/logo';
import './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className='bg-white shadow-md shadow-purple-100 h-12 z-50 flex items-center justify-between p-2'>
      <Logo/>
      <div>
      <a className='h-20 mx-2' href=''>Stories</a>
      <a className='h-20 mx-2' href=''>Essays</a>
      <a className='h-20 mx-2' href='/about'>About me</a>
      </div>
      
    </div>
  );
}

export default Navbar;
