import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData, useLoaderData } from '@remix-run/react';
import { css } from '@emotion/css';

import { getPosts, createPost } from '~/services/posts.server';

import { Post as PostComponent } from '~/components';
import { PostForm } from '~/components';
import { CreatePost } from '~/services/validations';
import color from '~/styles/color';
import { authenticator } from '~/services/auth.server';

const sHomeContainer = css`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

const sNoPostText = css`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${color.black};
  text-align: center;
`;

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

type ActionData = {
  error: {
    formError?: string[];
    fieldErrors?: {
      title?: string[];
      body?: string[];
    };
  };
  fields: {
    title: string;
    body: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: 'signin',
  });
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
    authorId: user.id,
  });

  return redirect('/');
};

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: 'signin' });
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
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 80px;
        `}
      >
        {posts.length ? (
          posts.map((post) => (
            <PostComponent
              key={post.id}
              header={post.title}
              body={post.body}
              authorName={post?.author?.email}
            />
          ))
        ) : (
          <h3 className={sNoPostText}>There's no post 😔.</h3>
        )}
      </div>
    </div>
  );
}
