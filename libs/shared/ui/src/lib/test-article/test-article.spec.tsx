import { render } from '@testing-library/react';

import TestArticle from './test-article';

describe('TestArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestArticle />);
    expect(baseElement).toBeTruthy();
  });
});
