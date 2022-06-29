import { useTransition } from '@remix-run/react';
import Button from '../button';
import Input from '../input';

import type { Props } from './types';
import { sForm, sErrorLabel } from './styles';

const UserForm = ({ error, fields, method = 'post', ...otherProps }: Props) => {
  const transition = useTransition();
  return (
    <form method={method} className={sForm}>
      <Input
        label='Email'
        name='email'
        type='email'
        element='inputField'
        placeholder='Input your email'
        defaultValue={fields?.email}
      >
        {error?.fieldsError?.email && (
          <p className={sErrorLabel}>{error.fieldsError.email}</p>
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
        {error?.fieldsError?.password && (
          <p className={sErrorLabel}>{error.fieldsError.password}</p>
        )}
      </Input>
      <Button type='submit' variant='primary' fullWidth>
        {transition.state === 'submitting' ? 'Loggin in...' : 'Login'}
      </Button>
      {error?.formError && <p className={sErrorLabel}>{error.formError}</p>}
    </form>
  );
};

export default UserForm;
