import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = ComponentPropsWithoutRef<'button'> & {
  type: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonType = 'submit' | 'reset' | 'button';

export type ButtonSize = 'xs' | 's' | 'm' | 'l';
