import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-test/build/blog',
    component: ComponentCreator('/docusaurus-test/build/blog', '7bb'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/archive',
    component: ComponentCreator('/docusaurus-test/build/blog/archive', '439'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-test/build/blog/first-blog-post', 'be1'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-test/build/blog/long-blog-post', '3f0'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-test/build/blog/mdx-blog-post', 'cb8'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/tags',
    component: ComponentCreator('/docusaurus-test/build/blog/tags', '3a5'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-test/build/blog/tags/docusaurus', '751'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-test/build/blog/tags/facebook', '9e6'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/tags/hello',
    component: ComponentCreator('/docusaurus-test/build/blog/tags/hello', '90a'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/tags/hola',
    component: ComponentCreator('/docusaurus-test/build/blog/tags/hola', '1f8'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/blog/welcome',
    component: ComponentCreator('/docusaurus-test/build/blog/welcome', '366'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/markdown-page',
    component: ComponentCreator('/docusaurus-test/build/markdown-page', '58c'),
    exact: true
  },
  {
    path: '/docusaurus-test/build/docs',
    component: ComponentCreator('/docusaurus-test/build/docs', '48a'),
    routes: [
      {
        path: '/docusaurus-test/build/docs/category/tutorial---basics',
        component: ComponentCreator('/docusaurus-test/build/docs/category/tutorial---basics', '9e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/category/tutorial---extras',
        component: ComponentCreator('/docusaurus-test/build/docs/category/tutorial---extras', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/intro',
        component: ComponentCreator('/docusaurus-test/build/docs/intro', '23b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-basics/congratulations', 'b8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-basics/create-a-blog-post', '640'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-basics/create-a-document', '83a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-basics/create-a-page', 'abc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-basics/deploy-your-site', '8d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-basics/markdown-features', '384'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-extras/manage-docs-versions', '8c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-test/build/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docusaurus-test/build/docs/tutorial-extras/translate-your-site', 'e99'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docusaurus-test/build/',
    component: ComponentCreator('/docusaurus-test/build/', '7f2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
