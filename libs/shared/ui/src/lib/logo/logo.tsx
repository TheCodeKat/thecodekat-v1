import './logo.module.css';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div>
      <span className='font-extrabold'>THE CODE KAT</span>
    </div>
  );
}

export default Logo;
