import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import process from 'process';
import { ParsedUrlQuery } from 'querystring';
import './index.module.css';
import { getParsedFileContentBySlug, renderMarkdown } from '@thecodekat/markdown';
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'


/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery{
  frontMatter: any
  html: any
}

const mdxElements = {
  Youtube: dynamic(async () => {
    return await import('@thecodekat/shared/mdx-elements/youtube/youtube')
  })
}

const POSTS_PATH = join(process.cwd(), process.env.articleMarkdownPath);

export function Article({ frontMatter, html }) {
  return (
    <div className='m-6'>
      <article className="prose prose-lg">
        <h1>{frontMatter.title}</h1>
        <div>by {frontMatter.author.name} </div>
        <hr/>
        <MDXRemote {...html} components={mdxElements}/>
      </article>
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
  const articleMarkdownContent = getParsedFileContentBySlug(params.article, POSTS_PATH);

  const renderHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderHTML
    }
  }
}


export default Article;
