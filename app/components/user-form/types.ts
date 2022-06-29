import type { ComponentPropsWithoutRef } from 'react';

export type Props = ComponentPropsWithoutRef<'form'> & {
  error?: {
    formError?: string[];
    fieldsError?: {
      email?: string[];
      password?: string[];
    };
  };
  fields?: {
    email?: string[];
    password?: string[];
  };
};
