import './test-article.module.css';

/* eslint-disable-next-line */
export interface TestArticleProps {}

export function TestArticle(props: TestArticleProps) {
  return (
    <div className='bg-gray-100 p-8'>
      <h1>Welcome to TestArticle!</h1>
    </div>
  );
}

export default TestArticle;
