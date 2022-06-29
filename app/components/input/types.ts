import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = {
  label: string;
  name: string;
  placeholder: string;
  element: InputElement;
  children?: ReactNode;
} & ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'textarea'>;

type InputElement = 'inputField' | 'textArea';
