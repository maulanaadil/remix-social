import type { Props } from './types';
import Input from '../input';

import { sErrorLabel, sForm, sTitleForm } from './styles';
import Button from '../button';
import { useTransition } from '@remix-run/react';

const PostForm = ({ error, fields, method = 'post', ...props }: Props) => {
  const transition = useTransition();
  return (
    <form method={method} className={sForm} {...props}>
      <h2 className={sTitleForm}>Remix Social</h2>
      <Input
        label='Title'
        name='title'
        placeholder='Title of your post'
        element='inputField'
        defaultValue={fields?.title}
      >
        {error?.fieldErrors?.title && (
          <p className={sErrorLabel}>{error.fieldErrors.title}</p>
        )}
      </Input>
      <Input
        label='Body'
        name='body'
        placeholder='Write something amazing'
        element='textArea'
        style={{ width: 400, height: 150 }}
        defaultValue={fields?.body}
      >
        {error?.fieldErrors?.body && (
          <p className={sErrorLabel}>{error.fieldErrors.body}</p>
        )}
      </Input>

      {error?.formError && <p className={sErrorLabel}>{error.formError}</p>}
      <Button type='submit' variant='primary' fullWidth>
        {transition.state === 'loading' ? 'Posting..' : 'Submit'}
      </Button>
    </form>
  );
};

export default PostForm;
