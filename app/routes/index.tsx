import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { css } from '@emotion/css';

import type { Post } from '~/services/posts.server';
import { getPosts } from '~/services/posts.server';

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() };
  return json(data);
};

const sWelcomeContainer = css`
  font-family: 'system-ui, sans-serif';
  line-height: '1.4';
`;

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div className={sWelcomeContainer}>
      <h1>Welcome to Remix</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
