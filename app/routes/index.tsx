import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { css } from '@emotion/css';

import type { Post } from '~/services/posts.server';
import { getPosts, createPost } from '~/services/posts.server';

import { Post as PostComponent } from '~/components';
import { PostForm } from '~/components';

const sHomeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type LoaderData = {
  posts: Post[];
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const rawTitle = form.get('title');
  const rawBody = form.get('body');

  await createPost({ title: rawTitle, body: rawBody });

  return redirect('/');
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() };
  return json(data);
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div className={sHomeContainer}>
      <PostForm action='/?index' />
      {posts.map((post) => (
        <PostComponent key={post.id} header={post.title} body={post.body} />
      ))}
    </div>
  );
}
