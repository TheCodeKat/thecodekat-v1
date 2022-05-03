import './logo.module.css';
import Image from 'next/image'
import logo from './logo-v2.jpg'

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div className='block w-64'>
      <Image
      src={logo}
      width={1233}
      height={208}
      layout='responsive'
      quality={100}
      />
    </div>
  );
}

export default Logo;
