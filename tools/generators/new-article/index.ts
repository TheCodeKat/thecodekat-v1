import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface NewArticlesSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (tree: Tree, schema: NewArticlesSchemaOptions) {
  generateFiles(tree, joinPathFragments(__dirname, './files'), './_posts', {
    title: schema.title,
    author: schema.author,
    excerpt: schema.excerpt || '',
    normalizedTitle: names(schema.title).fileName,
    creationDate: new Date().toISOString(),
  });

  await formatFiles(tree);
}
