import { css } from '@emotion/css';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { UserForm } from '~/components';
import { authenticator, USER_LOGIN } from '~/services/auth.server';
import { getSession } from '~/services/sessions.server';

const sHomeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type LoaderData = {
  error?: {
    formError: string[];
  };
};

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate(USER_LOGIN, request, {
    successRedirect: '/',
    failureRedirect: '/signin',
    throwOnError: true,
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/',
  });
  const session = await getSession(request.headers.get('cookie'));
  const error = session.get(authenticator.sessionErrorKey) as Error[] | Error;
  if (error) {
    return json({
      error: {
        formError: [
          'Unable to login with those credentials, please try again!',
        ],
      },
    });
  } else {
    return {};
  }
};

const SignIn = () => {
  const { error } = useLoaderData<LoaderData>();
  return (
    <div className={sHomeContainer}>
      <h2
        className={css`
          font-size: 1.5rem;
          font-weight: 400;
          margin: 20px 0;
        `}
      >
        Sign In
      </h2>
      <UserForm error={error} />
    </div>
  );
};

export default SignIn;
