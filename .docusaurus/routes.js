import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b9e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '337'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'c2b'),
            routes: [
              {
                path: '/category/tutorial---basics',
                component: ComponentCreator('/category/tutorial---basics', 'd94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tutorial---extras',
                component: ComponentCreator('/category/tutorial---extras', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/congratulations',
                component: ComponentCreator('/tutorial-basics/congratulations', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/tutorial-basics/create-a-blog-post', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-document',
                component: ComponentCreator('/tutorial-basics/create-a-document', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/create-a-page',
                component: ComponentCreator('/tutorial-basics/create-a-page', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/tutorial-basics/deploy-your-site', '4db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/markdown-features',
                component: ComponentCreator('/tutorial-basics/markdown-features', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/tutorial-extras/manage-docs-versions', '383'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/translate-your-site',
                component: ComponentCreator('/tutorial-extras/translate-your-site', '307'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
