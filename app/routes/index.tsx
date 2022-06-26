import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData, useLoaderData } from '@remix-run/react';
import { css } from '@emotion/css';

import type { Post } from '~/services/posts.server';
import { getPosts, createPost } from '~/services/posts.server';

import { Post as PostComponent } from '~/components';
import { PostForm } from '~/components';
import { CreatePost } from '~/services/validations';

const sHomeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type LoaderData = {
  posts: Post[];
};

type ActionData = {
  error: {
    formError?: string[];
    fieldErrors?: {
      title?: string[];
      body?: string;
    };
  };
  fields: {
    title: string;
    body: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const rawTitle = form.get('title');
  const rawBody = form.get('body');
  const result = CreatePost.safeParse({ title: rawTitle, body: rawBody });

  if (!result.success) {
    return json(
      {
        error: result.error.flatten(),
        fields: {
          title: rawTitle,
          body: rawBody,
        },
      },
      {
        status: 400,
      }
    );
  }

  await createPost({
    title: result.data.title,
    body: result.data.body,
  });

  return redirect('/');
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() };
  return json(data);
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  const formData = useActionData<ActionData>();
  return (
    <div className={sHomeContainer}>
      <PostForm
        action='/?index'
        error={formData?.error}
        fields={formData?.fields}
      />
      {posts.map((post) => (
        <PostComponent key={post.id} header={post.title} body={post.body} />
      ))}
    </div>
  );
}
