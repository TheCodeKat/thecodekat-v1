import { Story, Meta } from '@storybook/react';
import { TestArticle, TestArticleProps } from './test-article';

export default {
  component: TestArticle,
  title: 'TestArticle',
} as Meta;

const Template: Story<TestArticleProps> = (args) => <TestArticle {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
