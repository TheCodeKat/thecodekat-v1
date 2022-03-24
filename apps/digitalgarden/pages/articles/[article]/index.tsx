import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import './index.module.css';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery{
  article: string;
}

export function Article(props: ArticleProps) {
  return (
    <div>
      <h1>Welcome to {props.article}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    paths: [
      {
        params: {
          article: 'page1'
        }
      },
      {
        params: {
          article: 'page2'
        }
      }
    ],
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
