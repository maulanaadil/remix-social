import type { ComponentPropsWithoutRef } from 'react';

export type Props = ComponentPropsWithoutRef<'form'> & {
  error?: {
    formError?: string[];
    fieldErrors?: {
      email?: string[];
      password?: string[];
      name?: string[];
    };
  };
  fields?: {
    email?: string;
    password?: string;
    name?: string;
  };
  signUp?: boolean;
};
