import { useTransition } from '@remix-run/react';
import Button from '../button';
import Input from '../input';

import type { Props } from './types';
import { sForm, sErrorLabel } from './styles';

const UserForm = ({
  error,
  fields,
  method = 'post',
  signUp,
  ...otherProps
}: Props) => {
  const transition = useTransition();
  return (
    <form method={method} className={sForm}>
      {signUp && (
        <Input
          label='Name'
          name='name'
          type='text'
          element='inputField'
          placeholder='Input your name'
          defaultValue={fields?.name}
        >
          {error?.fieldErrors?.name && (
            <p className={sErrorLabel}>{error.fieldErrors.name}</p>
          )}
        </Input>
      )}
      <Input
        label='Email'
        name='email'
        type='email'
        element='inputField'
        placeholder='Input your email'
        defaultValue={fields?.email}
      >
        {error?.fieldErrors?.email && (
          <p className={sErrorLabel}>{error.fieldErrors.email}</p>
        )}
      </Input>
      <Input
        label='Password'
        name='password'
        type='password'
        element='inputField'
        placeholder='Input your password'
        defaultValue={fields?.password}
      >
        {error?.fieldErrors?.password && (
          <p className={sErrorLabel}>{error.fieldErrors.password}</p>
        )}
      </Input>
      {signUp ? (
        <Button
          type='submit'
          variant='primary'
          fullWidth
          disabled={transition.state !== 'idle'}
        >
          {transition.state === 'submitting' || 'loading'
            ? 'Create account'
            : 'Creating account...'}
        </Button>
      ) : (
        <Button
          type='submit'
          variant='primary'
          fullWidth
          disabled={transition.state !== 'idle'}
        >
          {transition.state === 'submitting' || 'loading'
            ? 'Login'
            : 'Login in...'}
        </Button>
      )}
      {error?.formError && <p className={sErrorLabel}>{error.formError}</p>}
    </form>
  );
};

export default UserForm;
