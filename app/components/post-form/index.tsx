import type { ComponentPropsWithoutRef } from 'react';
import type { Props } from './types';
import Input from '../input';

import { sForm } from './styles';
import Button from '../button';

const PostForm = ({
  method = 'post',
  ...props
}: ComponentPropsWithoutRef<'form'>) => {
  return (
    <form method={method} className={sForm} {...props}>
      <Input
        label='Title'
        name='title'
        placeholder='Title of your post'
        type='inputField'
      />

      <Input
        label='Body'
        name='body'
        placeholder='Write something amazing'
        type='textArea'
      />

      <Button type='submit' variant='primary' fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default PostForm;
