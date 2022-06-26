import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Post } from '~/services/posts.server';
import { getPosts } from '~/services/posts.server';

import { Post as PostComponent } from '~/components';

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() };
  return json(data);
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Welcome to Remix</h1>
      {posts.map((post) => (
        <PostComponent key={post.id} header={post.title} body={post.body} />
      ))}
    </div>
  );
}
