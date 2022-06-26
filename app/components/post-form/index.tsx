import type { Props } from './types';
import Input from '../input';

import { sErrorLabel, sForm } from './styles';
import Button from '../button';

const PostForm = ({ error, fields, method = 'post', ...props }: Props) => {
  return (
    <form method={method} className={sForm} {...props}>
      <Input
        label='Title'
        name='title'
        placeholder='Title of your post'
        type='inputField'
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
        type='textArea'
        defaultValue={fields?.body}
      >
        {error?.fieldErrors?.body && (
          <p className={sErrorLabel}>{error.fieldErrors.body}</p>
        )}
      </Input>

      {error?.formError && <p className={sErrorLabel}>{error.formError}</p>}
      <Button type='submit' variant='primary' fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default PostForm;
