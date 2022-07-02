import { css } from '@emotion/css';
import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useActionData } from '@remix-run/react';

import { UserForm } from '~/components';
import { checkUserExists, createUser } from '~/services/users.server';
import { CreateUser } from '~/services/validations';
import { badRequest } from '~/services/helpers.server';

const sHomeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type ActionData = {
  error?: {
    formError?: string[];
    fieldErrors?: {
      email?: string[];
      password?: string[];
      name?: string[];
    };
  };
  fields?: {
    email: string;
    password: string;
    name: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const rawName = form.get('name');
  const rawEmail = form.get('email');
  const rawPassword = form.get('password');

  if (
    typeof rawName !== 'string' ||
    typeof rawEmail !== 'string' ||
    typeof rawPassword !== 'string'
  ) {
    return badRequest<ActionData>({
      error: { formError: [`Form not submitted correctly.`] },
    });
  }

  const fields = { email: rawEmail, password: rawPassword, name: rawName };

  const result = CreateUser.safeParse({
    name: rawName,
    email: rawEmail,
    password: rawPassword,
  });

  if (!result.success) {
    const error = result.error.flatten();

    return badRequest<ActionData>({ fields, error });
  }

  const { email } = result.data;
  const userExists = await checkUserExists(email);

  if (userExists) {
    return badRequest<ActionData>({
      fields,
      error: { formError: [`User with ${rawEmail} already exists`] },
    });
  }

  const user = await createUser(rawName, rawEmail, rawPassword);

  if (user) {
    return redirect('/signin');
  } else {
    return badRequest<ActionData>({
      fields,
      error: { formError: [`Something went wrong, please contact support`] },
    });
  }
};

const SignUpPage = () => {
  const { error, fields } = useActionData<ActionData>() ?? {};
  return (
    <div className={sHomeContainer}>
      <h2
        className={css`
          font-size: 1.5rem;
          font-weight: 400;
          margin: 20px 0;
        `}
      >
        Sign Up
      </h2>
      <UserForm signUp error={error} fields={fields} />
    </div>
  );
};

export default SignUpPage;
