import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = {
  label: string;
  name: string;
  placeholder: string;
  type: InputType;
  children?: ReactNode;
} & ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'textarea'>;

type InputType = 'inputField' | 'textArea';
