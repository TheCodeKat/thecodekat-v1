import { GetStaticProps } from 'next';
import './index.module.css';

export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome, I am { props.name }</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: "Yizuhi"
    }
  }
}

export default About;
