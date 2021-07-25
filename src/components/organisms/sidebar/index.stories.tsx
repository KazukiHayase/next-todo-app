import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Sidebar } from './index';
import { FetchCategoriesDocument } from 'src/graphql/types'

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar
} as Meta;

const Template: Story = (args) => (
  <Sidebar {...args} />
)

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  apolloClient: {
    // do not put MockedProvider here.
    // You can, but its preferred to do it in preview.js
    mocks: [
      {
        request: {
          query: FetchCategoriesDocument, // queryのApollo.DocumentNodeを指定
        },
        result: {
          data: {
            "categories": [
              {
                "id": 1,
                "name": "カテゴリ１"
              },
              {
                "id": 2,
                "name": "カテゴリ２"
              },
              {
                "id": 3,
                "name": "カテゴリ３"
              }
            ]
          },
        },
      },
    ],
  },
  nextRouter: {
    path: "/",
    asPath: "/",
    query: {
      categoryId: "1",
    },
  },
};
