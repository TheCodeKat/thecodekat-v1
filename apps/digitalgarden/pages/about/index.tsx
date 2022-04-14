import { GetStaticProps } from 'next';
import './index.module.css';
import Image from 'next/image'
import mypic from '../about/yizuhi-about-me.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex p-6 w-100 max-w-120 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className='w-20 p-4'>
        <Image className="rounded-full" src={mypic} alt="Cute drawing of a cat to represent me :)"/>
        </div>
        
        <div className='w-70 flex-1 p-4'>
          <span className='text-4xl font-black'>Hi there, I am <span className= 'text-pink-400'> Yizuhi</span>!</span>
          <p>I'm a Christian girl living in Mexico who loves to do quite a few things :)</p>
          <br />
          <div>
            <ul className='list-disc'>
              <li>🖋️ <span>Writing</span> all sorts of things, from coding abstracts to fantasy stories</li>
              <li>👩‍💻 <Tippy content="Go to my GitHub!"><a href='https://github.com/TheCodeKat'>Developing</a></Tippy>  full-stack applications (mainly front-end, but I've learned back-end stuff by natural necessity)</li>
              <li>🎨 <Tippy content="Check out some of my art!"><a href='https://artfol.me/yizuhi'>Drawing</a></Tippy> to bring my mind's stories and ideas to life</li>
            </ul>

            <br />

            <p>When I'm not doing any of those things I like listening to Wande, dancing and spending time with my family.</p>
            <p>Overall, I really enjoy the experience of learning new things.</p>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Yizuhi',
    },
  };
};

export default About;
