import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import process from 'process';
import { ParsedUrlQuery } from 'querystring';
import './index.module.css';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery{
  article: string;
}

const POSTS_PATH = join(process.cwd(), '_articles');

export function Article(props: ArticleProps) {
  return (
    <div>
      <h1>Welcome to {props.article}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POSTS_PATH).map(path => path.replace(/\.mdx?$/, ''))
  .map(article => ({params: { article }}));
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }: {params: ArticleProps}) => {
  return {
    props: {
      article: params.article
    }
  }
}


export default Article;
